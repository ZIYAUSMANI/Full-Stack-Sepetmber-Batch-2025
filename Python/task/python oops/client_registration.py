import requests
import json

response = requests.get("https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions")
data = response.json()

class Data:
    def __init__(self, data):
        self.data = data
    
    def show(self):
        print(json.dumps(self.data,indent=4))

    def search_by_key(self):
        book_key = input("Enter the book key to search in docs: ")
        found_book = False

        for doc in self.data.get("docs", []):
            editions = doc.get("editions", {})  
            for edition_doc in editions.get("docs", []): 
                    if edition_doc.get("key")==book_key:
                        print("\nFound data!")
                        for key, value in doc.items():
                            print(f"{key} = {value}")
                        found_book = True
                        break
        if not found_book:
            print("data not found at this key")

    def menu(self):
        while True:
            print("\n********** View Data ***************")
            print("1. View all data")
            print("2. View specific data by book key")
            print("3. Exit")
            print("***************************************")

            try:
                choice = int(input("Enter your choice = "))
            except ValueError:
                print("Invalid input! Only numbers are allowed.")
                continue

            if choice == 1:
                self.show()
            elif choice == 2:
                self.search_by_key()
            elif choice == 3:
                print("Thank you !")
                break
            else:
                print("Invalid choice! Please select between 1 to 3.")
        
ob = Data(data)
ob.menu()