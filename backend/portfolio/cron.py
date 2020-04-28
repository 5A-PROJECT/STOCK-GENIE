from investpy.currency_crosses import get_currency_cross_recent_data as gccrd
from stock.models import Currency
from .models import Portfolio, Profit
from datetime import datetime


def set_currency():
    currency = Currency.objects.all()
    if len(currency) == 0:
        sg = gccrd('USD/KRW').iloc[-1, 3]
        Currency.objects.create(ratio=sg)
    else:
        currency = currency[0]
        currency.ratio = sg
        currency.save()


def add_profits():
    sg = Currency.objects.get(name='USD/KRW').ratio
    pfs = Portfolio.objects.all()
    for pf in pfs:
        now, stocks = 0, pf.stocks.all()
        for stock in stocks:
            exchange = 1 if stock.currency == 'KRW' else sg.ratio
            now += stock.count * stock.current_price * exchange
        Profit.objects.create(money=now, portfolio=pf)
