import json
import os

path = r"C:\indixpert\python\client_registration_project\mypackage\clientdata.json"

def file():
    if os.path.exists(path):
        with open(path, 'r') as r:
            clientdata = json.load(r)
        return clientdata
    else:
        clientdata = []
        with open(path, 'w') as file:
            json.dump(clientdata, file, indent=4)
        return clientdata

def write_in_file(clientdata):
    with open(path, 'w') as file:
        file.write(json.dumps(clientdata, indent=4))