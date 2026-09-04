
import uuid
from checkvalidation import Checkvalidation
from filehandler import Filehandler

class Clientmodel:
    name = str
    address = str
    contact = str
    id = int
    Clientdata=[]
     
class Client:
    def registration(self):
        client = Clientmodel()
        check = Checkvalidation
        check = Checkvalidation()      
        client.id=uuid.uuid4().hex[:8]
        client.name = input("enter your name=")
        client.name = check.name_check(client.name)
        client.address = input("enter your address=")
        client.address = check.address_check(client.address)
        client.contact = input("enter your contact=")
        client.contact = check.contact_exists_check(client.contact)
        return client
    
    def show(self):
        file=Filehandler()
        client=Clientmodel()
        client.clientdata=file.file()
        print("------------veiw data------------")
        for data in client.clientdata:
            for key,value in data.items():
                print(f"{key} = {value}")
            print("\n-------------------\n")
    
    def search_data(self):
        file=Filehandler()
        check=Checkvalidation()
        client=Clientmodel()
        client.clientdata=file.file()
        found=0
        client.contact=input("enter your contact=")
        client.contact =check.contact_check(client.contact)
        for data in client.clientdata:
             if data["contact"] == client.contact:
                  print("----found data-----")
                  for key,value in data.items():
                       print(f"{key} = {value}")
                  found=1
        if found==0:
            print("No data found with this contact.")

    def show_data(self):
        file=Filehandler()
        client=Clientmodel()
        client.clientdata=file.file()
        if len(client.clientdata) == 0:
            print("No client registered yet.")
            return

        while True:
            print("\n********** View Data ***************")
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
                self.show()
            elif choice == 2:
                self.search_data()
            elif choice == 3:
                break
            else:
                print("Invalid choice! Please select between 1 to 3.")
            
         

    def delete(self):
        file=Filehandler()
        check=Checkvalidation()
        client=Clientmodel()
        client.clientdata=file.file()
        if len(client.clientdata)==0:
            print("No client registered yet.")
        else:
            client.contact=input("enter your contact number =")
            client.contact=check.contact_check(client.contact)
            found=0
            for data in client.clientdata:
                if data["contact"]==client.contact:
                    client.clientdata.remove(data)
                    print(f"The client {data['name']} data is deleted successfully!")
                    found = 1
                    break

            if found == 0: 
                    print("No data found with this contact.")
            else:
                    file.write_in_file(client.clientdata)

    def update(self):
        file=Filehandler()
        check=Checkvalidation()
        client=Clientmodel()
        client.clientdata=file.file()
        if len(client.clientdata)==0:
            print("No client registered yet.")
        else:
            client.contact=input("enter your contact number =")
            client.contact=check.contact_check(client.contact)
            found=0
            for data in client.clientdata:
                if data["contact"]==client.contact:
                    print("-----data found--------")
                    for key,value in data.items():
                        print(f"{key} = {value}")
                    print("\nnote: you cannot update id!")
                    self.update_menu(data)
                    found = 1
                    break

            if found == 0: 
                    print("No data found with this contact.")
            else:
                    file.write_in_file(client.clientdata)

    def update_menu(self,data):
         check=Checkvalidation()
         client=Clientmodel()
         while True:
            print("\n**********Update your Data***************")
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
                data["name"]=check.name_check(input("enter new name="))
            elif choice == 2:
                data["address"]=check.address_check(input("enter new address="))
            elif choice == 3:
                data["contact"]=check.contact_exists_check(input("enter new contact="))
            elif choice == 4:
                break
            else:
                print("Invalid choice! Please select between 1 to 4.")
            
    def menu(self):
            file=Filehandler()
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
            
                if choice==1:
                    clientdata=file.file()
                    data=self.registration()
                    clientdata.append(data.__dict__)
                    file.write_in_file(clientdata)
                elif choice==2:
                    self.show_data()
                elif choice == 3:
                    self.delete()
                elif choice == 4:
                    self.update()
                elif choice == 5:
                    print("thank you!")
                    break
                else:
                    print("Invalid choice! Please select between 1 to 5.")



ob = Filehandler()
obj = Client()
obj.menu()


