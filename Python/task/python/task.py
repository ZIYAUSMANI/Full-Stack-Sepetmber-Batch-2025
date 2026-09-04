import requests
import json
response=requests.get("https://jsonplaceholder.typicode.com/users")
data = response.json()
dic = {"data":data}                  


   
print(json.dumps(dic, indent=4))