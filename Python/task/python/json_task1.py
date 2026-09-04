import json
path="D:/new folder/"

with open("new.json",'r') as f:
    total_file=f.read()


total_file=json.loads(total_file)


def create_file():
    try:
        total_num=total_file["file_number"]
        num=int(input("enter how many filde do want to create ="))

        for i in range(num):
            total_num+=1
            file_name=f"{path}log_{total_num}.text"
            with open(file_name,'w') as f:
                f.write("hello")
        
        print(f"{num} files created successfully and last file number is {total_num}")

        total_file["file_number"]=total_num
        with open("new.json",'w') as file:
            file.write(json.dumps(total_file))
    except:
        print("invalide! please enter number only")

create_file()
