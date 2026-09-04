data={}
data["name"]=input("enter your name=")
data["id"]=int(input("enter your id="))
data["address"]=input("enter your address=")
data["email"]=input("enter your email=")
q1=input("enter your qualification=")
y1=int(input("enter your passing year="))
q2=input("enter your qualification=")
y2=int(input("enter your passing year="))
data["age"]=int(input("enter your age="))
data["gender"]=input("enter your gender=")

data["education"] = [
    {"qualification": q1, "year": y1},
    {"qualification": q2, "year": y2}
]


print(f"\nname = {data["name"]}")
print(f"id = {data["id"]}")
print(f"email = {data["email"]}")
print(f"address = {data["address"]}")
print(f"qualification = {data["education"][0]["qualification"]}")
print(f"qualification = {data["education"][0]["year"]}")
print(f"qualification = {data["education"][1]["qualification"]}")
print(f"qualification = {data["education"][1]["year"]}")
print(f"age = {data["age"]}")
print(f"gender = {data["gender"]}")
print(data)