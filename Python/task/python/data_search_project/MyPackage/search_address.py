from .search_zipcode import search_by_zipcode
from .search_geo import search_by_geo
def searchAddress():
    while True:
        print("\n********** Search Address ***************")
        print("1. Search data by zipcode: ")
        print("2. Search data by geo: ")
        print("3. Back: ")
        print("*******************************************")

     
        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            search_by_zipcode()
        elif choice == 2:
            search_by_geo()
        elif choice == 3:
            break
        else:
            print("Invalid choice! Please select between 1 to 3.")