import os
num=int(input("how many folder do you want to creat= "))
for i in range(num):
    folder_name = input("Enter folder name = ")
    os.makedirs(folder_name)