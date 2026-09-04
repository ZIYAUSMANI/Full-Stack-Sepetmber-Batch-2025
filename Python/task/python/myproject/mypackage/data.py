import requests
import json
response=requests.get("https://api.samplapis.com/coffee/hot")
data=response.json()
def give_data():
    return data
