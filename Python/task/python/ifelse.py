postive_list=[]
negative_list=[]
num1=int(input("enter the number 1: "))
num2=int(input("enter the number 2: "))
num3=int(input("enter the number 3: "))
num4=int(input("enter the number 4: "))
num5=int(input("enter the number 5: "))
num6=int(input("enter the number 6: "))
num7=int(input("enter the number 7: "))
num8=int(input("enter the number 8: "))
num9=int(input("enter the number 9: "))
num10=int(input("enter the number 10: "))

if num1>101 or num2>101 or num3>101 or num4>101  or  num5>101  or num6>101  or num7>101  or num8>101  or num9>101  or num10>101 :
    if num2>0:
        postive_list.append(num2)
    else:
        negative_list.append(num2)

    if num3>0:
        postive_list.append(num3)
    else:
        negative_list.append(num3)

    if num4>0:
        postive_list.append(num4)
    else:
        negative_list.append(num4)

    if num5>0:
        postive_list.append(num5)
    else:
        negative_list.append(num5)

    if num6>0:
        postive_list.append(num6)
    else:
        negative_list.append(num6)

    if num7>0:
        postive_list.append(num7)
    else:
        negative_list.append(num7)

    if num8>0:
        postive_list.append(num8)
    else:
        negative_list.append(num8)

    if num9>0:
        postive_list.append(num9)
    else:
        negative_list.append(num9)


    if num10>0:
        postive_list.append(num10)
    else:
        negative_list.append(num10)

    print(f"postive number={postive_list}")
    print(f"negative number={negative_list}")
else:
    print("invalide num only you can enter number less then 100")




