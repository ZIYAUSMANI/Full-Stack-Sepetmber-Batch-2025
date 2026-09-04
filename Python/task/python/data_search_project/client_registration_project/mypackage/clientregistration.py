from .checkvalidation import name_check
from .checkvalidation import address_check
from .checkvalidation import contact_exists_check
from .filehandler import file
from .filehandler import write_in_file
import uuid

clientdata = file()

def registration():
    data = {}
    data["id"] = uuid.uuid4().hex[:8]

    data["name"] = input("\nEnter your name = ")
    name = name_check(data["name"])
    data["name"] = name

    data["address"] = input("Enter your address = ")
    address = address_check(data["address"])
    data["address"] = address

    data["contact"] = input("Enter your contact = ")
    contact = contact_exists_check(data["contact"])
    data["contact"] = contact

    clientdata.append(data)
    print("Registered successfully!")
    write_in_file(clientdata)

