import json
from MyPackage.get_api import fetchApi
from .search_id import searchId 
from .search_address import searchAddress
from .search_email import searchEmail

data=fetchApi()
print(json.dumps(data,indent=4))

def search_menu():
     while True:
        print("\n********** Search data ***************")
        print("1. Search data by id: ")
        print("2. Search data by address: ")
        print("3. Search data by email: ")
        print("4. Exit: ")
        print("****************************************")

     
        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            searchId()
        elif choice == 2:
            searchAddress()
        elif choice == 3:
            searchEmail()
        elif choice == 4:
            print("thank you!")
            break
        else:
            print("Invalid choice! Please select between 1 to 4.")
