import pandas as pd
import investpy
from .models import StockInfo
import tensorflow as tf
from .dateutils import DateUtil
import os
import numpy as np
from sklearn.preprocessing import MinMaxScaler


def prediction(stock, indices, df):
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
    df = pd.read_csv(f"predict/dataset/{path}_list.csv", encoding="CP949")
    temp = list(df["종목코드"])
    name = list(df["기업명"])
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
