from investpy.currency_crosses import get_currency_cross_recent_data as gccrd
from .models import Portfolio, Profit, Currency
from datetime import datetime


def set_currency_rate():
    currency = Currency.objects.get(id=1)


def add_profits():
    sg = gccrd('USD/KRW').iloc[-1, 3]
    pfs = Portfolio.objects.all()
    for pf in pfs:
        now, stocks = 0, pf.stocks.all()
        for stock in stocks:
            t = sg
            if stock.currency == 'KRW':
                sg = 1
            now += stock.count * stock.current_price * sg
            sg = t
        Profit.objects.create(money=now, portfolio=pf)
    print(f'===== ADD PROFITS AT {datetime.now()} =====')
