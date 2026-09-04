listdata=[]
data={}
data["name"]=input("enter your name=")
data["id"]=int(input("enter your id="))
q1=input("enter your qualification=")
y1=int(input("enter your passing year="))
data["education"] = [
    {"qualification": q1, "year": y1},
]
listdata.append(data)

data={}
data["name"]=input("enter your name=")
data["id"]=int(input("enter your id="))
q1=input("enter your qualification=")
y1=int(input("enter your passing year="))
q2=input("enter your qualification=")
y2=int(input("enter your passing year="))
q3=input("enter your qualification=")
y3=int(input("enter your passing year="))
data["education"] = [
    {"qualification": q1, "year": y1},
    {"qualification": q2, "year": y2},
    {"qualification": q3, "year": y3},
]
listdata.append(data)

print(listdata)

