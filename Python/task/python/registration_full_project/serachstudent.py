import checkvalidation
import studentregistration

student = studentregistration.get_studentdata()

def search_studentid():
    id_input = input("enter the id number = ")
    id_input = checkvalidation.id_chcek(id_input)  
    found = False

    for s in student:
        if s["id"] == id_input:
            print("\n--- Student Found ---")
            for key, value in s.items():
                if key == "qualifictions":
                    print("Qualifications:")
                    for q in value:
                        for k, v in q.items():
                            print(f"  {k} = {v}")
                else:
                    print(f"{key} = {value}")
            found = True
            break

    if not found:
        print("No student found with this id")


def search_studentqualification():
    qualification_input = input("enter the qualification = ").lower()
    qualification_input = checkvalidation.qualification_chcek(qualification_input)
    found = False

    for s in student:
        for qual in s["qualifictions"]:
            if qual["qualification"].lower() == qualification_input:
                print("\n--- Student Found ---")
                for key, value in s.items():
                    if key == "qualifictions":
                        print("Qualifications:")
                        for q in value:
                            for k, v in q.items():
                                print(f"  {k} = {v}")
                    else:
                        print(f"{key} = {value}")
                found = True
                break

    if not found:
        print("No student found with this qualification.")


def search_student():
    if len(student) == 0:
        print("No student registered yet.")
        return

    while True:
        print("\n**********search student***************")
        print("1. Search student by id: ")
        print("2. Search student by Qualification: ")
        print("3. Back: ")
        print("****************************************")

     
        try:
            choice = int(input("Enter your choice = "))
        except ValueError:
            print("Invalid input! Only numbers are allowed.")
            continue

        if choice == 1:
            search_studentid()
        elif choice == 2:
            search_studentqualification()
        elif choice == 3:
            break
        else:
            print("Invalid choice! Please select between 1 to 3.")
