import datetime
import uuid
import json

student=[]
def registration():
    data={}
    data["name"]=input("\nEnter your name =")
    data["id"] = uuid.uuid4().hex[:13]
    data["register_date"] = datetime.datetime.now().strftime("%d-%m-%Y")
    student.append(data)

   
for i in range(5):
    registration()

print(json.dumps(student, indent=4))



