from .clientregistration import registration
from .serachclient import show_data
from .deleteclient import delete_data
from .updateclient import update_data

def dashboard():
    while True:
        print("""\n*+*+*+*+*+*+*+*+ CLIENT REGISTRATION MENU +*+*+*+*+*+*+*+*
1. REGISTRATION
2. SEARCH DATA
3. DELETE DATA
4. UPDATE DATA
5. EXIT
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*""")

        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            registration()
        elif choice == 2:
            show_data()
        elif choice == 3:
            delete_data()
        elif choice == 4:
            update_data()
        elif choice == 5:
            print("thank you!")
            break
        else:
            print("Invalid choice! Please select between 1 to 5.")
