import investpy
import json

KOREA = 'south korea'
US = 'united states'
KRW = "KRW"
USD = "USD"


FAIL = json.dumps({"result": "FAIL"})
SUCCESS = json.dumps({"result": "SUCCESS"})


def get_commodities(name, from_date, to_date):
    if name not in investpy.commodities.get_commodities_list():
        return FAIL
    data = investpy.commodities.get_commodity_historical_data(
        name, from_date=from_date, to_date=to_date)
    data = data.drop(['Open', 'High', 'Low', 'Volume', 'Currency'], axis=1)
    data.rename(columns={'Close': 'value'}, inplace=True)
    data['time'] = data.index.map(lambda x: str(x).split(" ")[0])
    result = {}
    result['data'] = data.to_dict('records')
    result = json.dumps(result)
    # result = {"data": []}
    # for i in range(len(data)):
    #     time = str(data.index[i]).split(" ")[0]
    #     value = data["Close"][i]
    #     result["data"].append({"time": time, "value": value})
    # result = json.dumps(result)
    return result


def get_indices(name, country, from_date, to_date):
    if name not in investpy.indices.get_indices_list(country):
        return FAIL
    data = investpy.indices.get_index_historical_data(
        name, from_date=from_date, to_date=to_date, country=country)
    data = data.drop(['Open', 'High', 'Low', 'Volume', 'Currency'], axis=1)
    data.rename(columns={'Close': 'value'}, inplace=True)
    data['time'] = data.index.map(lambda x: str(x).split(" ")[0])
    result = {}
    result['data'] = data.to_dict('records')
    result = json.dumps(result)
    return result


def get_currency_cross(currency_cross, from_date, to_date):
    data = investpy.get_currency_cross_historical_data(
        currency_cross=currency_cross, from_date=from_date, to_date=to_date)
    data = data.drop(['Open', 'High', 'Low', 'Currency'], axis=1)
    data.rename(columns={'Close': 'value'}, inplace=True)
    data['time'] = data.index.map(lambda x: str(x).split(" ")[0])
    result = {}
    result['data'] = data.to_dict('records')
    result = json.dumps(result)
    return result


def get_stock_detail(stock, country):
    data = investpy.stocks.get_stock_information(
        stock=stock, country=country, as_json=True)
    return data
