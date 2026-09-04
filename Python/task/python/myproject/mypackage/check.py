def id_chcek(id):
    while True:
        id_chcek=id.isdigit() 
        if id_chcek==False :
            print("Invalid id! id should have only digit.")
            id=input("\nEnter your id =")
        else:
             return id
        
def ingredients_chcek(ingredients):
    while True:
        ingredients_chcek=ingredients.isalpha()
        if ingredients_chcek==False:
            print("Invalid ingredients name!ingredients name should have only character.")
            ingredients=input("\nEnter your ingredient =")
        else:
             return ingredients