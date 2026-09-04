from .filehandler import file

def name_check(name):
    while True:
        if not name.replace(" ", "").isalpha():
            print("Invalid name! Name should have only characters.")
            name = input("\nEnter your name = ")
        else:
            return name


def address_check(address):
    while True:
        if address.isdigit():
            print("Invalid address! Address should not have only digits.")
            address = input("\nEnter your address = ")
        else:
            return address


def contact_exists_check(contact):
    while True:
        data = file()

        if not contact.isdigit() or len(contact) != 10:
            print("Invalid contact! Contact should have only digits and be 10 digits long.")
            contact = input("\nEnter your contact = ")
            continue

        duplicate = False
        for i in data:
            if i.get("contact") == contact:
                print("Contact already exists!")
                contact = input("\nEnter your contact = ")
                duplicate = True
                break

        if duplicate:
            continue
        else:
            return contact
def contact_check(contact):
    while True:
        if not contact.isdigit() or len(contact) != 10:
            print("Invalid contact! Contact should have only digits and be 10 digits long.")
            contact = input("\nEnter your contact = ")
            continue
        else:
            return contact
