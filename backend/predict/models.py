from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class StockInfo(models.Model):
    country = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20)
    open = models.FloatField()
    close = models.FloatField()
    prevpredict = models.FloatField(blank=True)
    predict = models.FloatField(blank=True)

    @property
    def rate(self):
        return round(((self.close - self.open)/self.open) * 100, 2)

    @property
    def predictpoint(self):
        if self.prevpredict < self.predict:
            return 1
        else:
            return 0

    @property
    def index(self):
        KOSPI = [
            '삼성전자', 'SK하이닉스', '삼성바이오로직스', 'NAVER', '셀트리온', 'LG화학', '현대자동차', 'LG생활건강', '삼성SDI', '삼성물산',
            '현대모비스', 'SK텔레콤', '엔씨소프트', '포스코', '카카오', '신한지주', 'KB금융', '한국전력공사', '삼성에스디에스', '기아자동차',
            'SK', '케이티앤지', 'LG', '아모레퍼시픽', 'SK이노베이션', 'LG전자', '삼성생명', '삼성화재해상보험', '넷마블', 'S-Oil'
        ]  # KOSPI

        KOSDAQ = ["셀트리온헬스케어", "에이치엘비", "펄어비스", "셀트리온제약", "케이엠더블유", "CJ ENM", "씨젠", "스튜디오드래곤", "휴젤", "SK머티리얼즈", "제넥신", "에코프로비엠", "헬릭스미스", "파라다이스", "메지온",
                  "알테오젠", "원익IPS", "컴투스", "코미팜", "아이티엠반도체", "솔브레인", "리노공업", "에스에프에이", "고영", "NICE평가정보", "RFHIC", "SKC코오롱PI", "에이치엘비생명과학", "신라젠", "젬백스"]

        NASDAQ = [
            'Microsoft', 'Apple', 'Amazon.com', 'Alphabet', 'Facebook', 'Intel', 'PepsiCo', 'Cisco Systems', 'Comcast', 'NVIDIA',
            'Netflix,', 'Adobe', 'Costco Wholesale', 'Amgen', 'PayPal', 'ASML', 'Charter Communications', 'T-Mobile', 'Broadcom', 'Texas Instruments',
            'Tesla', 'Gilead Sciences', 'Starbucks', 'QUALCOMM', 'Mondelez International', 'Fiserv', 'Vertex Pharmaceuticals', 'Intuit', 'JD.com', 'Intuitive Surgical'
        ]  # NASDAQ
        if self.name in KOSPI:
            return "KOSPI"
        elif self.name in KOSDAQ:
            return "KOSDAQ"
        elif self.name in NASDAQ:
            return "NASDAQ"

    def __str__(self):
        return self.name
