from .serachid import search_by_id
from .serachingredients import search_by_ingredients
def search_data():

    while True:
        print("\n**********Search Coffee Data***************")
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
    