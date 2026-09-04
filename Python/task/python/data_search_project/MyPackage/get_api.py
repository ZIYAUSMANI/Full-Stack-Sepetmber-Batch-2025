import requests
import json
response=requests.get("https://jsonplaceholder.typicode.com/users")
data = response.json()
def fetchApi():
    return data

