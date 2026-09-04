studentdata={}
studentdata["name"]=input("enter your name=")
studentdata["rollno"]=int(input("enter your roll.no="))
studentdata["hindi"]=int(input("enter your hindi marks="))
studentdata["english"]=int(input("enter your english marks="))
studentdata["maths"]=int(input("enter your maths marks="))
studentdata["science"]=int(input("enter your science marks="))
studentdata["computer"]=int(input("enter your computer marks="))
total=studentdata["hindi"]+studentdata["english"]+studentdata["maths"]+studentdata["science"]+studentdata["computer"]
per=total/5
studentdata["percentge"]=per
print(studentdata)
name=studentdata["name"]
rollno=studentdata["rollno"]
print(f"student number :{name}")
print(f"student rollno :{rollno}")
print(f"student percentage :{per}")
