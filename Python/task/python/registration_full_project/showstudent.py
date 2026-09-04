import json
import studentregistration
student=studentregistration.get_studentdata()
def showall_data():
    if len(student) == 0:
        print("No student registered yet.")
    else:
        print("========All student data=======")
        print(json.dumps(student, indent=3))
        
