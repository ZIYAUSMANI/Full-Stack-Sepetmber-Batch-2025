from .data import give_data
from .check import id_chcek
data=give_data()
def search_by_id():
    id_input = input("enter the id number = ")
    id_input=id_chcek(id_input)
    found = False

    for item in data:
        if str(item["id"])  == id_input:
            print("\n--- Coffee Data Found ---")
            for key, value in item.items():
                    print(f"{key} = {value}")
            found = True
            break

    if found==False:
        print("No coffee data found with this id")