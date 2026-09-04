from .filehandler import file
from .checkvalidation import contact_exists_check
from .checkvalidation import contact_check
from .checkvalidation import name_check
from .checkvalidation import address_check
from .filehandler import write_in_file
def update_data():
    client = file()
    if len(client) == 0:
        print("No client registered yet.")
    else:
        contact_input = input("Enter the contact number of that client = ")
        contact_input = contact_check(contact_input)
        found = False
  
        for data in client:
            if data["contact"] == contact_input:
                 print("\n--- Client Found ---")
                 update_menu(data)
                 found = True   

        if not found:
            print("No client found with this contact.")
        else:
            write_in_file(client)


def update_menu( data):
    while True:
        print("\n**********  Data ***************")
        print("1. update name")
        print("2. update address")
        print("3. update contact")
        print("4. back")
        print("***************************************")

        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
                data["name"] = input("\nEnter new name = ")
                name = name_check(data["name"])
                data["name"] = name
        elif choice == 2:
                 data["address"] = input("Enter new address = ")
                 address = address_check(data["address"])
                 data["address"] = address
        elif choice == 3:
             data["contact"] = input("Enter new contact = ")
             contact = contact_exists_check(data["contact"])
             data["contact"] = contact
        elif choice == 4:
            break
        else:
            print("Invalid choice! Please select between 1 to 4.")
