from .filehandler import file
from .filehandler import write_in_file
from .checkvalidation import contact_check

def delete_data():
    client = file()
    if len(client) == 0:
        print("No client registered yet.")
    else:
        contact = input("Enter the contact number = ")
        contact = contact_check(contact)
        found = 0
        for data in client:
            if data["contact"] == contact:
                client.remove(data)
                print(f"The client {data['name']} data is deleted successfully!")
                found = 1
                break
        if found == 0:
            print("No data found with this contact.")
        else:
            write_in_file(client)
