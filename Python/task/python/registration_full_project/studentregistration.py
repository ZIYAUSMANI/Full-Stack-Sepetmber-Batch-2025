import checkvalidation 
studentdata=[]
def get_studentdata():
    return studentdata 

def add_qualification():

    qualification_data={}
    qualification_data["qualification"]=input("Enter your qualification =")
    qualification=checkvalidation.qualification_chcek(qualification_data["qualification"])
    qualification_data["qualification"]=qualification

    qualification_data["passing_year"]=input("Enter your passing year =")
    year=checkvalidation.year_chcek(qualification_data["passing_year"])
    qualification_data["passing_year"]=year

    return qualification_data

def registration():
    data={}
    total_qualifications=[]
    data["name"]=input("\nEnter your name =")
    name=checkvalidation.name_chcek(data["name"])
    data["name"]=name

    data["id"]=input("Enter your id =")
    id=checkvalidation.id_chcek(data["id"])
    data["id"]=id
  
    data["address"]=input("Enter your address =")
    address=checkvalidation.address_chcek(data["address"])
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

