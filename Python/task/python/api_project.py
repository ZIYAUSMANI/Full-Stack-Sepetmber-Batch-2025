import requests
import json
response=requests.get("https://api.sampleapis.com/coffee/hot")
data=response.json()
print(json.dumps(response.json(),indent=4))

def search_by_id():
    id_input = input("enter the id number = ")
    found = False

    for item in data:
        if item["id"] == id_input:
            print("\n--- Student Found ---")
            for key, value in item.items():
                    print(f"{key} = {value}")
            found = True
            break

    if found==False:
        print("No student found with this id")

def search_by_ingredients():
    ingredients_input = input("enter the qualification = ").lower()

    found = False

    for item in data:
        for qual in item["ingredients"]:
            if qual.lower() == ingredients_input:
                print("\n--- Student Found ---")
                for key, value in item.items():
                        print(f"{key} = {value}")
                found = True
                

    if not found:
        print("No student found with this qualification.")

def search_data():

    while True:
        print("\n**********data student***************")
        print("1. Search data by id: ")
        print("2. Search data by ingredients: ")
        print("3. Back: ")
        print("****************************************")

     
        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            search_by_id()
        elif choice == 2:
            search_by_ingredients()
        elif choice == 3:
            break
        else:
            print("Invalid choice! Please select between 1 to 3.")


