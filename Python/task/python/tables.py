start=int(input("enter table number frome were you to start="))
end=int(input("enter table number frome were you to end="))

for i in range(start,end+1,1):
    for j in range(1,11,1):
        result=j*i
        print(f"{i} x {j} = {result}") 
    print("\n")