import studentregistration
import checkvalidation
def delete_studentdata():
    student = studentregistration.get_studentdata()
    if len(student) == 0:
        print("No student registered yet.")
    else:
        id = input("Enter the id number = ")
        id=checkvalidation.id_chcek(id)
        found = 0
        for stu in student:
            if(stu["id"]==id):
                student.remove(stu)
                print(f"the student {stu["name"]} data is deleted successfully!")
                found = 1
                break
        if found == 0:
            print("No student found with this id.")
