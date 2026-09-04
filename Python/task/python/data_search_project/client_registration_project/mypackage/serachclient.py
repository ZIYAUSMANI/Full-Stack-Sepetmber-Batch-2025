from .checkvalidation import contact_check
from .filehandler import file

def search_data():
    client = file()
    contact_input = input("Enter the contact number = ")
    contact_input = contact_check(contact_input)
    found = False

    for data in client:
        if data["contact"] == contact_input:
            print("\n--- Data Found ---")
            for key, value in data.items():
                print(f"{key} = {value}")
            found = True
            break

    if not found:
        print("No data found with this contact")

def view_all_data():
    client = file()
    print("---------view client data------------")
    for data in client:
        for key, value in data.items():
            print(f"{key} = {value}")
        print("\n-------------------------")

def show_data():
    client = file()
    if len(client) == 0:
        print("No client registered yet.")
        return

    while True:
        print("\n********** Search Data ***************")
        print("1. View all data")
        print("2. View specific data by contact")
        print("3. Back")
        print("***************************************")

        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            view_all_data()
        elif choice == 2:
            search_data()
        elif choice == 3:
            break
        else:
            print("Invalid choice! Please select between 1 to 3.")
