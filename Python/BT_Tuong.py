import requests as rq
import json

class DownloadCovidInfo:
    def __init__(self, url = "https://api.covid19api.com/summary"):
        self.url = url

    def get_all_data(self):
        res = rq.get(self.url)
        return res

    def get_data_by_country(self):
        countries = (self.get_all_data()).json()["Countries"]
        res = []
        for country in countries:
            ctr = {
                "Country" : country["Country"],
                "CountryCode" : country["CountryCode"],
                "Slug" : country["Slug"],
                "Total Confirmed" : country["TotalConfirmed"]
            }
            print(ctr)
            res.append(ctr)
        return res

    def save_to_file(self, file):
        with open(file, "w") as f:
            json.dump(self.get_data_by_country(), f)

obj = DownloadCovidInfo()
print(obj.get_all_data())
print(obj.get_data_by_country())
obj.save_to_file("countries.json")