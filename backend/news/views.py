from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from datetime import datetime
from decouple import config
import numpy as np
import requests
import re
import os

naver_url = 'https://openapi.naver.com/v1/search/news.json'
naver_headers = {
    'X-Naver-Client-Id': config('NAVER_ID'),
    'X-Naver-Client-Secret': config('NAVER_SC')
}


def check_lang(titles):
    from tensorflow.keras.preprocessing.text import Tokenizer

    tokenizer = Tokenizer(
        num_words=5000, oov_token='<unk>',
        filters='~!@#$^&*()-+_=`{};:\'",.<>/?※ㆍ\\‘’“”…·↓↑[]|'
    )
    tokenizer.fit_on_texts(titles)

    ko, en = 0, 0
    for key in tokenizer.word_index:
        for char in key:
            if ord('가') <= ord(char) <= ord('힣'):
                ko += 1
            elif ord('a') <= ord(char) <= ord('z'):
                en += 1
            elif ord('A') <= ord(char) <= ord('Z'):
                en += 1
    return 'ko' if ko >= en else 'en'


@api_view(['GET'])
@permission_classes([AllowAny, ])
def evaluate(request):
    query = request.query_params.get('query')
    if query == None:
        return HttpResponse(status=400)
    display = request.query_params.get('display', 100)

    naver_newses = requests.get(
        naver_url, headers=naver_headers,
        params={'query': '"' + query + '"', 'display': display, 'sort': 'sim'}
    ).json()
    articles = naver_newses.get('items')
    if len(articles) == 0:
        return HttpResponse(status=400)

    titles, links, descriptions = [], [], []
    for article in articles:
        titles.append(article.get(
            'title'
        ).replace('<b>', '').replace('</b>', '').replace('&quot', ''))
        links.append(article.get('originallink') or article.get('link'))
        descriptions.append(article.get(
            'description'
        ).replace('<b>', '').replace('</b>', ''))

    lang = check_lang(titles)
    from tensorflow.keras.models import load_model

    if lang == 'ko':
        from konlpy.tag import Okt
        import nltk

        tokenizer = Okt()

        for i in range(len(titles)):
            titles[i] = re.sub(
                '[~!@#$^&*()-+_=`{};:\'",.<>/?※ㆍ\\‘’“”…·↓↑\[\]|]', '', titles[i]
            )

        words = []
        for title in titles:
            words += tokenizer.morphs(title, norm=True, stem=True)

        text = nltk.Text(words, name='Tokenizer')
        word_index = {}
        for char, _ in text.vocab().most_common(5000):
            word_index[char] = len(word_index) + 1

        X = []
        for title in titles:
            tokens = tokenizer.morphs(title, norm=True, stem=True)
            idx = []
            for token in tokens:
                idx.append(word_index[token] if token in word_index else 0)
            idx = idx[:50] if len(idx) > 50 else idx + [0] * (50 - len(idx))
            X.append(idx)

        model = load_model('./news/models/best_model_ko.h5')
        X = np.array(X)
        words = word_index
    else:
        from tensorflow.keras.preprocessing.sequence import pad_sequences
        from tensorflow.keras.preprocessing.text import Tokenizer

        tokenizer = Tokenizer(num_words=5000, oov_token='<unk>')
        tokenizer.fit_on_texts(titles)

        X = tokenizer.texts_to_sequences(titles)
        X = pad_sequences(X, maxlen=50, padding='post')

        model = load_model('./news/models/best_model_us.h5')
        words = tokenizer.word_index

    predicts = model.predict(X)
    y = []
    for pred in predicts:
        res = 1 if pred[1] >= pred[0] else 0
        y.append(res)

    return JsonResponse({
        'news': titles, 'links': links,
        'descriptions': descriptions,
        'results': y, 'words': words,
        'good': int(y.count(1) * 100 / len(y)),
        'bad': int(y.count(0) * 100 / len(y))
    })
