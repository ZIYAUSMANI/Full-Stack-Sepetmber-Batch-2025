from .get_api import fetchApi 
from .checkvalidation import id_chcek
fetch_data=fetchApi()
def searchId():
    s_id=input("enter your id = ")
    s_id=id_chcek(s_id)
    for item in fetch_data:
        if s_id==str(item["id"]):
            print("---found------\n")
            for k,v in item.items():
                print(f"{k} = {v}")
            break

    else:
        print("not found")
