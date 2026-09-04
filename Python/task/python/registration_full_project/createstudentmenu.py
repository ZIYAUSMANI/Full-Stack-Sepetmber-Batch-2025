def create_menu():
    print("""\n*+*+*+*+*+*+*+*+ STUDENT REGISTRATION MENU +*+*+*+*+*+*+*+*
1. REGISTRATION
2. SEARCH STUDENT DATA
3. DELETE STUDENT DATA
4. SHOW ALL STUDENT DATA
5. EXIT
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*""")   
    try:
        choice = int(input("Enter the choice: "))
        if choice < 1 or choice > 5:
            print("Invalid choice! Please select between 1 to 5.")
            choice = 0

    except:
        print("Invalid input! Only numbers are allowed.")
        choice = 0    
    return choice