import pandas as pd
import investpy
from .models import StockInfo
import tensorflow as tf


def prediction(stock, index):
    model_path = f"checkpoint/{index}/{stock}_model.h5"
    model = keras.models.load_model(model_path)


def get_stocks_list(path):
    df = pd.read_csv(f"dataset/{path}.csv", encoding="CP949")
    temp = list(df["종목코드"])
    name = list(df["기업명"])
    result = list(zip(temp, name))
    return result


def get_stock_data(path, country):
    stocks = get_stocks_list(path)
    for stock, name in stocks:
        stocks = str(stock)
        stock = "0" * (6-len(stock)) + stock
        try:
            data = investpy.stocks.get_stock_information(
                stock=stock, country=country, as_json=)
        except:
            print("error : " + stock)
            continue
        prev = data["Prev. Close"]
        open_price = data["Open"]
        symbol = data["Stock Symbol"]
        stockinfo = StockInfo()
        stockinfo.name = name
        stockinfo.code = stock
        stockinfo.close = prev
        stockinfo.open = open_price
