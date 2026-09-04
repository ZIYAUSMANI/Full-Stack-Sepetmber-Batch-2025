import requests
import json

respons = requests.get("https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions")
data = respons.json()


class Mainmodel:
       numfound = None
       start = None
       numfoundexact = None
       num_found = None
       documentation_url = None
       q = None
       offset = None
       docs = None

class Docsmodel:
        key = None
        author_name = None
        title = None
        editions = None

class Editionmodel:
       numFound = None
       start = None
       numFoundExact = None
       docs =None

class Docseditionsmodel:
        key=None
        title=None

class Client_data:
    def __init__(self, data):
        self.data = data
        self.main = None

    def adddata(self):
        self.main = Mainmodel()
        self.main.numfound = self.data["numFound"]
        self.main.start = self.data["start"]
        self.main.numfoundexact = self.data["numFoundExact"]
        self.main.num_found = self.data["num_found"]
        self.main.documentation_url = self.data["documentation_url"]
        self.main.q = self.data["q"]
        self.main.offset = self.data["offset"]
        self.main.docs = self.data["docs"]

    def adddocs(self, data):
        obb = Docsmodel()
        obb.key = data.get("key", "N/A")
        obb.author_name = data.get("author_name", ["Unknown Author"])
        obb.title = data.get("title", "No Title")
        obb.editions = data.get("editions", {})
        return obb

    def addeditions(self, data):
        obbb = Editionmodel()
        obbb.numFound = data["numFound"]
        obbb.start = data["start"]
        obbb.numFoundExact = data["numFoundExact"]
        obbb.docs = data["docs"]
        return obbb

    def addeditiondocs(self, data):
        obob = Docseditionsmodel()
        obob.key = data["key"]
        obob.title = data["title"]
        return obob

    def show(self):
        self.adddata()

        print("----------- View data ---------------------\n")
        print("numFound =", self.main.numfound)
        print("start =", self.main.start)
        print("numFoundExact =", self.main.numfoundexact)
        print("num_found =", self.main.num_found)
        print("documentation_url =", self.main.documentation_url)
        print("query =", self.main.q)
        print("offset =", self.main.offset)
        print("docs:")

        for d in self.main.docs:
            obb = self.adddocs(d)
            print("   Author Name =", obb.author_name)
            print("   Key =", obb.key)
            print("   Title =", obb.title)

            if obb.editions:
                print("   editions:")
                obbb = self.addeditions(obb.editions)
                print("        numFound =", obbb.numFound)
                print("        start =", obbb.start)
                print("        numFoundExact =", obbb.numFoundExact)
                print("        docs:")

                for ed in obbb.docs:
                    obob = self.addeditiondocs(ed)
                    print("            Book Key =", obob.key)
                    print("            Book Title =", obob.title)

            print("\n------------------------------------------------------------\n")

    def search_by_key(self):
        search_data=input("Enter key of editions book like this(/books/OL28512463M) =")
        found=False
        self.adddata()
        for i in self.main.docs:
            obb=self.adddocs(i)
            if obb.editions:
               obbb=self.addeditions(obb.editions)
               for ed in obbb.docs:
                     obob=self.addeditiondocs(ed)
                     if obob.key==search_data:
                          print("----------Data Found-----------")
                          print("Author Name =", obb.author_name)
                          print("Key =", obb.key)
                          print("Title =", obb.title)
                          print("editions:   ")
                          print("    numFound =", obbb.numFound)
                          print("    start =", obbb.start)
                          print("    numFoundExact =", obbb.numFoundExact)
                          print("    docs: ")
                          print("        Book Key =", obob.key)
                          print("        Book Title =", obob.title)
                          found=True
                          break

        if found==False:
            print("No Data Found ")  

    def menu(self):
        while True:
            print("\n********** View Data ***************")
            print("1. View all data")
            print("2. View specific data by book key")
            print("3. Exit")
            print("************************************")

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
                     

    
ob=Client_data(data)
ob.menu()