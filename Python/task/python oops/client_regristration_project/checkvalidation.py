from filehandler import Filehandler
class Checkvalidation:
    def name_check(self,name):
        while True:
            if not name.replace(" ", "").isalpha():
                print("Invalid name! Name should have only characters.")
                name = input("\nEnter your name = ")
            else:
                return name


    def address_check(self,address):
        while True:
            if address.isdigit():
                print("Invalid address! Address should not have only digits.")
                address = input("\nEnter your address = ")
            else:
                return address
            
    def contact_check(self,contact):
        while True:
            if not contact.isdigit() or len(contact) != 10:
                print("Invalid contact! Contact should have only digits and be 10 digits long.")
                contact = input("\nEnter your contact = ")
                continue
            else:
                return contact
    
    
    def contact_exists_check(self,contact):
        file=Filehandler()
        
        while True:
            data = file.file()

            if not contact.isdigit() or len(contact) != 10:
                print("Invalid contact! Contact should have only digits and be 10 digits long.")
                contact = input("\nEnter your contact = ")
                continue

            duplicate = False
            for i in data:
                if i["contact"] == contact:
                    print("Contact already exists!")
                    contact = input("\nEnter your contact = ")
                    duplicate = True
                    break

            if duplicate:
                continue
            else:
                return contact
