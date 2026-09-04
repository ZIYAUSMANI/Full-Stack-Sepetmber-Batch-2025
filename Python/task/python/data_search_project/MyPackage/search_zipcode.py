from .get_api import fetchApi
from .checkvalidation import zipcode_chcek
fetch_data=fetchApi()

def search_by_zipcode():
    s_zipcode=input("enter your zipcode=")
    s_zipcode=zipcode_chcek(s_zipcode)
    for item in fetch_data:
       if s_zipcode==item["address"]["zipcode"]:
                print("-------found---------\n")
                for k,v in item.items():
                    print(f"{k}={v}")
                break

    else:
        print("not found")
