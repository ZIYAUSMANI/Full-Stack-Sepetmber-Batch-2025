class Accountmanagement:
    def __init__(self,accountnumber):
        self.accountnumber=accountnumber
        self.__pin=1235
        self.__balance=4000

    def deposit(self,userinput,pin):
         if self.__pin==pin:
             if userinput>0:
                 self.__balance+=userinput
                 print("Dposit successful")
                 print("balance:", self.__balance)
             else:
                print("Insufficient Amount")
         else:
            print("Invalid PIN")
    
    def withdraw(self,userinput,pin):
        if self.__pin==pin:
            amount=self.__balance-userinput
            self.__balance=amount
            if amount>0:
                print("Withdrawal successful")
                print("Remaining balance:", self.__balance)
            else:
                print("Insufficient balance")
        else:
            print("Invalid PIN")

    def balance(self,pin):
        if self.__pin==pin:
            print(f"amount = {self.__balance}")
            print(f"account number = {self.accountnumber}")
        else:
            print("Invalid PIN")

ob=Accountmanagement(12312345)
ob.withdraw(500,1235)
ob.balance(1235)
ob.deposit(500,1235)

             
    






