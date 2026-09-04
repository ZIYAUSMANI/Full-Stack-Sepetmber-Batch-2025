from .get_api import fetchApi
from .checkvalidation import lng_chcek
data= fetchApi()

def search_by_lng():
    s_lng=input("enter your longitude numbere = ")
    s_lng=lng_chcek(s_lng)
    for item in data:
        if s_lng==item["address"]["geo"]["lng"]:
            print("-------found-------\n")
            for k,v in item.items():
                print(f"{k} = {v}")
            break
    else:
        print("not found")
