for i in range(6):
    for c in range(6,i,-1):
        print(" ",end="")
    for s in range(1,i+1,1):
        print("*",end="")
    for e in range(c,0,-1):
        print("*",end="")
    print()
for i in range(6):
     for c in range(1,i+1,1):
         print(" ",end="")
     for s in range(i,6,1):
         print("*",end="")    
     for r in range(s,i,-1):
         print("*",end="")  
     print()        