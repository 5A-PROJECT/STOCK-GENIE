from investpy.currency_crosses import get_currency_cross_recent_data as gccrd
from .models import Portfolio, Profit, Currency


def set_currency_rate():
    currency = Currency.objects.get(id=1)


def add_profits():
    pfs = Portfolio.objects.all()
    for pf in pfs:
        stocks = pf.stocks.all()
        now = 0
        for stock in stocks:
            sg = 1
            if stock.currency != 'KRW':
                sg = gccrd(f'{stock.currency}/KRW').iloc[-1, 3]
            now += stock.count * stock.current_price * sg
        Profit.objects.create(money=now, portfolio=pf)
