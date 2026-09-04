def email_chcek(email):
    while True:
        if "@" in email and "." in email:
          
            extension = email.split(".")[-1]

            if len(extension) <= 3 and extension.isalpha():
                return email  
            
        print("Invalid email! Email must contain '@', '.', and a 3-letter extension.")
        email = input("Enter your email again: ")

        
def id_chcek(id):
    while True:
        id_chcek=id.isdigit() 
        if id_chcek==False:
            print("Invalid id! id should have only digit.")
            id=input("\nEnter your id again=")
        else:
             return id
        
def zipcode_chcek(zipcode):
    while True:
        zipcode_chcek = all(ch.isdigit() or ch == "-" for ch in zipcode)

        if zipcode_chcek == False:
            print("Invalid address! zipcode should have only digit or '-'.")
            zipcode = input("\nEnter your zipcode again=")
        else:
            return zipcode

def lat_chcek(lat):
    while True:
        try:
            float(lat)  

            if "." not in lat:
                print("Invalid latitude! It must be a decimal number (must contain a dot).")
                lat = input("Enter your latitude again = ")
                continue
            return lat  

        except ValueError:
            print("Invalid latitude! It must be a decimal number.")
            lat = input("Enter your latitude again = ")

def lng_chcek(lng):
    while True:
        try:
            float(lng)  

            if "." not in lng:
                print("Invalid longitude! It must be a decimal number (must contain a dot).")
                lng = input("Enter your longitude again = ")
                continue
            return lng  

        except ValueError:
            print("Invalid longitude! It must be a decimal number.")
            lng = input("Enter your longitude again = ")
