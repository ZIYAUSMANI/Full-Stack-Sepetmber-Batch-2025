student=[]

for i in range(5):
    data={}
    data["name"]=input("enter your name=")
    data["id"]=int(input("enter your id="))
    print("===Enter Your Subject Marks===")
    english=int(input("enter your english mark="))
    hindi=int(input("enter your hindi mark="))
    maths=int(input("enter your maths mark="))
    science=int(input("enter your science mark="))
    computer=int(input("enter your computer mark="))
    data["percentage"]=(english+hindi+maths+science+computer)/5
    student.append(data)


if student[0]["percentage"] >= student[1]["percentage"] and student[0]["percentage"] >= student[2]["percentage"] and student[0]["percentage"] >= student[3]["percentage"] and student[0]["percentage"] >= student[4]["percentage"]:
    top1 = student[0]
elif student[1]["percentage"] >= student[0]["percentage"] and student[1]["percentage"] >= student[2]["percentage"] and student[1]["percentage"] >= student[3]["percentage"] and student[1]["percentage"] >= student[4]["percentage"]:
    top1 = student[1]
elif student[2]["percentage"] >= student[0]["percentage"] and student[2]["percentage"] >= student[1]["percentage"] and student[2]["percentage"] >= student[3]["percentage"] and student[2]["percentage"] >= student[4]["percentage"]:
    top1 = student[2]
elif student[3]["percentage"] >= student[0]["percentage"] and student[3]["percentage"] >= student[1]["percentage"] and student[3]["percentage"] >= student[2]["percentage"] and student[3]["percentage"] >= student[4]["percentage"]:
    top1 = student[3]
else:
    top1 = student[4]



print("\n=== Student Marks Percentage Sheet ===")
print(f"{student[0]['id']} {student[0]['name']} scored {student[0]['percentage']}%")
print(f"{student[1]['id']} {student[1]['name']} scored {student[1]['percentage']}%")
print(f"{student[2]['id']} {student[2]['name']} scored {student[2]['percentage']}%")
print(f"{student[3]['id']} {student[3]['name']} scored {student[3]['percentage']}%")
print(f"{student[4]['id']} {student[4]['name']} scored {student[4]['percentage']}%")

print("\n=== Topper of the Class ===")
print(f"1st: {top1['id']} {top1['name']} scored {top1['percentage']}%")
