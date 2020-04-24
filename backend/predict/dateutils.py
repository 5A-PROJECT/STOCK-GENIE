from datetime import datetime, timedelta


class DateUtil():
    def __init__(self, dis):
        self.now = datetime.now()
        self.calc_day = self.now + timedelta(days=dis)
        self.to_date = self.change_dateform(self.now)
        self.from_date = self.change_dateform(self.calc_day)

    def change_dateform(self, date):
        date = str(date).split(" ")[0].split("-")
        date.reverse()
        date = "/".join(date)
        return date
