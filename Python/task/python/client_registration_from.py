import uuid
totaldata = []

def name_check(name):
    while True:
        check = name.replace(" ", "").isalpha()
        if check == False:
            print("Invalid name! Name should contain only characters.")
            name = input("\nEnter your name = ")
        else:
            return name

def address_check(address):
    while True:
        check = address.replace(" ", "").isdigit()
        if check == True:
            print("Invalid address! Address should not contain only digits.")
            address = input("\nEnter your address = ")
        else:
            return address

def document_check(document):
    while(True):
        check=document.isdigit()
        if check== True:
            print("Invalid document name! it should not contain only digits.")
            document=input("enter your document name=")
        else:
            return document
        

def is_url(text):
    while(True):
        if text.startswith("http://") and len(text) > 7:
            after = text[7:]
        elif text.startswith("https://") and len(text) > 8:
            after = text[8:]
        else:
            print("Invalid! It should be a URL.")
            text=input("Upload your url")
            continue

        if after.isdigit() == False:
            return text
        else:
            print("Invalid! URL must contain a proper domain name.")
            text=input("Upload your url")


def document(data):
    document_list=[]
    while True:
        try:
            next_step = int(input("Press 1 for next... "))
            if next_step == 1:
                for i in range(3):
                    total_document={}

                    total_document["document_name"] = input("enter your document name=")
                    document=document_check(total_document["document_name"])
                    total_document["document_name"]=document

                    total_document["document_url"] = input("Upload you url=")
                    url=is_url(total_document["document_url"])
                    total_document["document_url"]=url

                    document_list.append(total_document)
                    
                data["total_document"]=document_list
                break
            else:
                print("If you have filled the above details, then press 1 for next...")
        except:
            print("Invalid input! Characters are not allowed.")


def review(data):
    print("\n----- Check your details -----\n")
    for key, value in data.items():

        if key=="total_document":
            print("Total Document")
            for document in data["total_document"]:
                for key,value in document.items():
                    print(f"   {key} = {value}")
        else:
            print(f"{key} = {value}")


def submit_or_cancel(data):
    print("""\n|=====================|              |=====================|
|  For Submit Press 1 |              |  For Cancel Press 2 |
|=====================|              |=====================|""")
    while True:
        try:
            tell = int(input("Enter number = "))
            if tell == 2:
                print("Try again!")
                del data
                break
            elif tell == 1:
                print("Submitted successfully!")
                totaldata.append(data)
                break
            else:
                print("Invalid choice!")
        except:
            print("Invalid input! Characters are not allowed.")


def client_data():
    data = {}
    print("============== Fill The Form ===============")
    
    data["name"] = input("\nEnter your name = ")
    data["name"] = name_check(data["name"])

    data["id"] = uuid.uuid4().hex[:13]

    data["address"] = input("Enter your address = ")
    data["address"] = address_check(data["address"])

    document(data)
    print("\n============================================")

    review(data)
    submit_or_cancel(data)

client_data()





