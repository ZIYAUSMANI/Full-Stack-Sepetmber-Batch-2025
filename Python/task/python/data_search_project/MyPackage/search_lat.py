from .get_api import fetchApi
from .checkvalidation import lat_chcek
fetch_data=fetchApi()

def search_by_lat():
    s_la=input("enter your latitude number = ")
    s_la=lat_chcek(s_la)
    for item in fetch_data:
        if s_la==item["address"]["geo"]["lat"]:
            print("---------found------\n")
            for k,v in item.items():
                print(f"{k} = {v}")
            break
    else:
        print("not found")