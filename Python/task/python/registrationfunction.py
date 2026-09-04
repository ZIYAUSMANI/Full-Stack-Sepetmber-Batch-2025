import json
studentdata=[]
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
        
def add_qualification():
    qualification_data={}
    qualification_data["qualification"]=input("Enter your qualification =")
    qualification=qualification_chcek(qualification_data["qualification"])
    qualification_data["qualification"]=qualification

    qualification_data["passing_year"]=input("Enter your passing year =")
    year=year_chcek(qualification_data["passing_year"])
    qualification_data["passing_year"]=year

    return qualification_data

def registration():
    data={}
    total_qualifications=[]
    data["name"]=input("\nEnter your name =")
    name=name_chcek(data["name"])
    data["name"]=name

    data["id"]=input("Enter your id =")
    id=id_chcek(data["id"])
    data["id"]=id
  
    data["address"]=input("Enter your address =")
    address=address_chcek(data["address"])
    data["address"]=address
    
    qualification=add_qualification()
    total_qualifications.append(qualification)
    while True:
        more_qualification=input("You want to add more qualification enter yes/no: ").lower()
        if more_qualification=="yes":
            qualification=add_qualification()
            total_qualifications.append(qualification)
        else:
            break
  
    data["qualifictions"]=total_qualifications
    studentdata.append(data)
    print("Student registered successfully!")

def search_studentid():
     id = input("enter the id number = ")
     id=id_chcek(id)
     found = 0

     for student in studentdata :              
         if student["id"] == id:    
            print("\n--- Student Found ---")
            for key, value in student.items():
                if key == "qualifictions":
                    print("Qualifications:")
                    for q in value:
                        for key, value in q.items():
                            print(f"  {key} = {value}")
                                
                else:
                    print(f"{key} = {value}")
            found = 1

     if found == 0:
            print("No student found with this id")

def search_studentqualification():
    qualification = input("enter the qualification = ").lower()
    qualification=qualification_chcek(qualification)
    found = 0

    for student in studentdata:
        for qual in student["qualifictions"]:
            if qual["qualification"].lower() == qualification:
                print("\n--- Student Found ---")
                for key, value in student.items():
                    if key == "qualifictions":
                        print("Qualifications:")
                        for q in value:
                            for k, v in q.items():
                                print(f"  {k} = {v}")
                    else:
                        print(f"{key} = {value}")
                found = 1
                break

    if found == 0:
        print("No student found with this qualification.")

def search_student():
     if len(studentdata) == 0:
        print("No student registered yet.")
     else:
        print("**********search student***************")
        print("1. Search student by id: ")
        print("2. Search student by Qualification: ")
        print("3. Back: ")
        print("****************************************")
        while True:
            try:
                choice = int(input("Enter your choice = "))
                if choice == 1:
                    search_studentid()
                elif choice == 2:
                    search_studentqualification()
                elif choice == 3:
                    break
                else:
                    print("Invalid choice! Please select between 1 to 3.")
            except:
                print("Invalid input! Only numbers are allowed.")


def delete_studentdata():
    if len(studentdata) == 0:
        print("No student registered yet.")
    else:
        id = input("Enter the id number = ")
        id=id_chcek(id)
        found = 0
        for stu in studentdata:
            if(stu["id"]==id):
                studentdata.remove(stu)
                print(f"the student {stu["name"]} data is deleted successfully!")
                found = 1
                break
        if found == 0:
            print("No student found with this id.")

def showall_data():
    if len(studentdata) == 0:
        print("No student registered yet.")
    else:
        print("========All student data=======")
        print(json.dumps(studentdata, indent=3))
        


def create_menu():
    print("""\n*+*+*+*+*+*+*+*+ STUDENT REGISTRATION MENU +*+*+*+*+*+*+*+*
1. REGISTRATION
2. SEARCH STUDENT DATA
3. DELETE STUDENT DATA
4. SHOW ALL STUDENT DATA
5. EXIT
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*""")   
    try:
        choice = int(input("Enter the choice: "))
        if choice < 1 or choice > 5:
            print("Invalid choice! Please select between 1 to 5.")
            choice = 0

    except:
        print("Invalid input! Only numbers are allowed.")
        choice = 0    
    return choice