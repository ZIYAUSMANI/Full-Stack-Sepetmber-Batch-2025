listdata=[]
data={}
data["id"]=int(input("enter your id="))
data["name"]=input("enter your name=")
data["email"]=input("enter your email=")
data["address"]=input("enter your address=")
listdata.append(data)

data={}
data["id"]=int(input("enter your id="))
data["name"]=input("enter your name=")
data["email"]=input("enter your email=")
data["address"]=input("enter your address=")
listdata.append(data)

id=listdata[0]["id"]
print(id)
listdata[0]["id"]=listdata[1]["id"]
listdata[1]["id"]=id
print(listdata)