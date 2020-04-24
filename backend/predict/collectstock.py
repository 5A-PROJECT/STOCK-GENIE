import pandas as pd
import investpy
from .models import StockInfo
from .dateutils import DateUtil
import os
import numpy as np
from sklearn.preprocessing import MinMaxScaler


def prediction(stock, indices, df):
    import tensorflow as tf
    print(df.columns)
    print(stock + "======================predict=========================")
    scaler = MinMaxScaler()
    scaler.fit(df)
    data_ = scaler.transform(df)
    data = np.array([data_])
    model_path = f"predict/checkpoint/{indices}/{stock}_model.h5"
    model = tf.keras.models.load_model(model_path)
    # x, scaler = preprocessing_data(df)
    print(data.shape)
    np.nan_to_num(data, copy=False)
    y = model.predict(data)
    close = np.asarray(df.iloc[:, 3:4])
    close_scaler = MinMaxScaler()
    close_scaler.fit(close)
    y = close_scaler.inverse_transform(y)
    print(y)
    return y


def get_stocks_list(path):
    if path == "kospi":
        companies = [
            '삼성전자', 'SK하이닉스', '삼성바이오로직스', 'NAVER', '셀트리온', 'LG화학', '현대자동차', 'LG생활건강', '삼성SDI', '삼성물산',
            '현대모비스', 'SK텔레콤', '엔씨소프트', '포스코', '카카오', '신한지주', 'KB금융', '한국전력공사', '삼성에스디에스', '기아자동차',
            'SK', '케이티앤지', 'LG', '아모레퍼시픽', 'SK이노베이션', 'LG전자', '삼성생명', '삼성화재해상보험', '넷마블', 'S-Oil'
        ]  # KOSPI
    elif path == "kosdaq":
        companies = ["셀트리온헬스케어", "에이치엘비", "펄어비스", "셀트리온제약", "케이엠더블유", "CJ ENM", "씨젠", "스튜디오드래곤", "휴젤", "SK머티리얼즈", "제넥신", "에코프로비엠", "헬릭스미스", "파라다이스", "메지온",
                     "알테오젠", "원익IPS", "컴투스", "코미팜", "아이티엠반도체", "솔브레인", "리노공업", "에스에프에이", "고영", "NICE평가정보", "RFHIC", "SKC코오롱PI", "에이치엘비생명과학", "신라젠", "젬백스"]
    elif path == "nasdaq":
        companies = [
            'MSFT', 'AAPL', 'AMZN', 'GOOGL', 'FB', 'INTC', 'PEP', 'CSCO', 'CMCSA', 'NVDA',
            'NFLX,', 'ADBE', 'COST', 'AMGN', 'PYPL', 'ASML', 'CHTR', 'TMUS', 'AVGO', 'TXN',
            'TSLA', 'GILD', 'SBUX', 'QCOM', 'MDLZ', 'FISV', 'VRTX', 'INTU', 'JD', 'ISRG'
        ]  # NASDAQ
        name = [
            'Microsoft', 'Apple', 'Amazon.com', 'Alphabet', 'Facebook', 'Intel', 'PepsiCo', 'Cisco Systems', 'Comcast', 'NVIDIA',
            'Netflix,', 'Adobe', 'Costco Wholesale', 'Amgen', 'PayPal', 'ASML', 'Charter Communications', 'T-Mobile', 'Broadcom', 'Texas Instruments',
            'Tesla', 'Gilead Sciences', 'Starbucks', 'QUALCOMM', 'Mondelez International', 'Fiserv', 'Vertex Pharmaceuticals', 'Intuit', 'JD.com', 'Intuitive Surgical'
        ]  # NASDAQ
        return list(zip(companies, name))
    df = pd.read_csv(f"predict/dataset/{path}_list.csv", encoding="CP949")
    condition = df["기업명"].isin(companies)
    temp = list(df["종목코드"][condition])
    name = list(df["기업명"][condition])
    result = list(zip(temp, name))

    return result


def get_commodities(from_date, to_date):
    commodities = ["Gold", "Brent Oil", "Copper"]
    df = investpy.commodities.get_commodity_historical_data(
        commodities[0],  from_date=from_date, to_date=to_date)
    df.rename(columns={"Close": f"{commodities[0]}_Close"}, inplace=True)
    df.drop(["Open", "High", "Low", "Volume",
             "Currency"], axis=1, inplace=True)
    for commod in commodities[1:]:
        temp = investpy.commodities.get_commodity_historical_data(
            commod,  from_date=from_date, to_date=to_date)
        column = f"{commod}_Close"
        df[column] = temp["Close"]
    df["date"] = df.index.map(lambda x: str(x).split(" ")[0])
    return df


def get_stock_data(path, country, indices):
    stocks = get_stocks_list(path)
    date = DateUtil(-40)
    from_date = date.from_date
    to_date = date.to_date
    commodities_df = get_commodities(from_date, to_date)
    for stock, name in stocks:
        if path != "nasdaq":
            stock = str(stock)
            stock = "0" * (6-len(stock)) + stock
        print(stock + "======================start=========================")
        try:
            data = investpy.stocks.get_stock_information(
                stock=stock, country=country, as_json=True)
            stock_df = investpy.stocks.get_stock_historical_data(
                stock, country, from_date, to_date)
        except:
            print("error : " + stock)
            continue
        stock_df["date"] = stock_df.index.map(lambda x: str(x).split(" ")[0])
        testData = pd.merge(stock_df, commodities_df, on="date")[-28:]
        testData = testData.drop(['Currency', 'date'], axis=1)
        predict = prediction(stock, indices, testData)
        testData_2 = pd.merge(stock_df, commodities_df, on="date")[-29:-1]
        testData_2 = testData_2.drop(['Currency', 'date'], axis=1)
        prevpredict = prediction(stock, indices, testData_2)
        prev = data["Prev. Close"]
        open_price = data["Open"]
        symbol = data["Stock Symbol"]
        stockinfo = StockInfo()
        stockinfo.country = country
        stockinfo.name = name
        stockinfo.code = stock
        stockinfo.close = prev
        stockinfo.prevpredict = prevpredict
        stockinfo.open = open_price
        stockinfo.predict = predict
        stockinfo.save()
