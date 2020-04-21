import investpy
import json

KOREA = 'south korea'
US = 'united states'

FAIL = json.dumps({"result": "FAIL"})
SUCCESS = json.dumps({"result": "SUCCESS"})


def get_commodities(name, from_date, to_date):
    if name not in investpy.commodities.get_commodities_list():
        return FAIL
    data = investpy.commodities.get_commodity_historical_data(
        name, from_date=from_date, to_date=to_date, as_json=True)
    return data


def get_indices(name, country, from_date, to_date):
    if name not in investpy.indices.get_indices_list(country):
        return FAIL
    data = investpy.indices.get_index_historical_data(
        name, from_date=from_date, to_date=to_date, country=country, as_json=True)
    return data
