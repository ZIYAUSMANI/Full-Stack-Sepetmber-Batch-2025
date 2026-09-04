from .get_api import fetchApi
from .checkvalidation import email_chcek
fetch_data = fetchApi()
def searchEmail():
    s_em = input("enter your email = ")
    s_em = email_chcek(s_em)

    for item in fetch_data:
        if s_em==item['email'] :
            print("--------found-------------\n")
            for k,v in item.items():
                print(f"{k} : {v}")
            break
    else:
        print("not found")

