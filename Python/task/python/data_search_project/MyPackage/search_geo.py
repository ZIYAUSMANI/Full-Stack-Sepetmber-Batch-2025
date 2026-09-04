from .search_lat import search_by_lat
from .search_lng import search_by_lng
def search_by_geo():
    while True:
        print("\n**********Search Geo******************")
        print("1. Search data by latitude: ")
        print("2. Search data by longitude: ")
        print("3. Back: ")
        print("****************************************")

     
        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            search_by_lat()
        elif choice == 2:
            search_by_lng()
        elif choice == 3:
            break
        else:
            print("Invalid choice! Please select between 1 to 3.")