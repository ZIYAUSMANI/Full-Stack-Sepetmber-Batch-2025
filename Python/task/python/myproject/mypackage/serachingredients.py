from .data import give_data
from .check import ingredients_chcek 
data=give_data()
def search_by_ingredients():
    ingredients_input = input("enter the ingredient name = ").lower()
    ingredients_input = ingredients_chcek(ingredients_input)
    found = False

    for item in data:
        for qual in item["ingredients"]:
            if qual.lower() == ingredients_input:
                print("\n--- data Found ---")
                for key, value in item.items():
                        print(f"{key} = {value}")
                found = True
                

    if not found:
        print("No coffee data found with this ingredeints name.")