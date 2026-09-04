def name_chcek(name):
    while True:
        
        name_chcek=name.replace(" ", "").isalpha()
        if name_chcek==False:
            print("Invalid name! name should have only characater.")
            name=input("\nEnter your name =")
        else:
            return name
        
def id_chcek(id):
    while True:
        id_chcek=id.isdigit() 
        if id_chcek==False or int(id)<=100:
            print("Invalid id! id should have only digit and more then 100.")
            id=input("\nEnter your id =")
        else:
             return id
        
def address_chcek(address):
    while True:
        address_chcek=address.isdigit()
        if address_chcek==True:
            print("Invalid address! address should not have only digit.")
            address=input("\nEnter your address =")
        else:
             return address
        
def qualification_chcek(qualification):
    while True:
        qualification_chcek=qualification.isalpha()
        if qualification_chcek==False:
            print("Invalid qualification! qualification should have only character.")
            qualification=input("\nEnter your qualification=")
        else:
             return qualification
        
def year_chcek(year):
    while True:
        year_chcek=year.isdigit()
        if year_chcek==False or int(year)<1900 or int(year)>2024:
            print("Invalid year! year should have only digit and between 1900 to 2024.")
            year=input("\nEnter your passing year=")
        else:
             return year
        
