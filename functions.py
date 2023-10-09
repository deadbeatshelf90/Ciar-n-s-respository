"""
num = int(input("enter a number: "))
def count-to-x(x):
    count = 0
    while count != x:
        count = count + 1
        print(count)
count-to-x(num)

import random
a = int(input("enter a low num: "))
b = int(input("enter a high num: "))
comp_num = random.randint(a,b)
c = int(input("I am thinking of a number: "))
def iscorrect(x):
    answered = False
    while answered == False:
        if x == comp_num:
            print("Correct")
            break
        elif x < comp_num:
            x = int(input("Too low, try again: "))
        elif x > comp_num:
            x = int(input("Too high, try again: "))
iscorrect(c)
"""
import random
def menu():
    print("1) Addition")
    print("2) Subtraction")
    enter = int(input("Enter 1 or 2: "))
    if enter == 1:
        add()
    elif enter == 2:
        sub()
    else:
        print("input not supported")
def add():
    num1 = random.randint(5,20)
    num2 = random.randint(5,20)
    print(num1)
    print(num2)
    answer = int(input("Add these numbers: "))
    print(check(answer, (num1+num2)))
def sub():
    num1 = random.randint(25,50)
    num2 = random.randint(1,25)
    print(num1)
    print(num2)
    answer = int(input("Subtract these numbers: "))
    print(check(answer, (num1-num2)))
def check(x,y):
    if x == y:
        return "Correct"
    else:
        y = str(y)
        string = str("Incorrect, the answer was ")
        return string+y
NameList = []  
def Menu():
    print("1) Add a name")
    print("2) Change a name")
    print("3) Delete a name")
    print("4) End program")
    print("\n")
    enter = int(input("Choose operation: "))
    print("\n")
    if enter == 1:
        addname()
    elif enter == 2:
        changename()
    elif enter == 3:
        deletename()
    elif enter == 4:
        print("Closing program")
        NameList.clear()
    else:
        print("operation not supported")
    print("\n") 
def addname():
    name = input("enter the name: ")
    NameList.append(name)
    print(name,"has been added to the list")
    print("\n")
    Menu()
def changename():
    oldname = input("what name do you want to change: ")
    a = 0
    while a < len(NameList):
        if oldname == NameList[a]:
            newname = input("what is the new name: ")
            NameList[a] = newname
            break   
        a = a + 1
    if a == len(NameList):
        print("name not found")
    print("\n")
    Menu()
def deletename():
    name = input("what name do you want to delete: ")
    a = 0
    while a < len(NameList):
        if name == NameList[a]:
            delname = NameList[a]
            del(NameList[a])
            print(delname,"has been deleted")
            print("\n")
            break
        else:
            a = a + 1
    Menu()
file_name = ""
def Menu2():
    print("1) Add to file")
    print("2) View all records")
    print("3) delete a record")
    print("4) quit program")
    print("\n")
    choice = int(input("Enter the number of your selection: "))
    if choice == 1:
        add_file()
    if choice == 2:
        view()
    if choice == 3:
        delete_record()
    if choice == 4:
        Quit()
    else:
        print("not recognised")
        Menu2()
def add_file():
    file_name = input("enter the file directory: ")
    Menu2()
def view():
    if file_name == "":
        print("no file selected")
    else:
        file = open(file_name,"r")
        sheet = []
        n = 0
        for line in file:
            sheet[n] = line
            n = n + 1
    Menu2()
def Quit():
    print("closing programe")
    file_name = ""
def delete_record():
    record = int(input("what record are you deldeting"))
    del(sheet[record])