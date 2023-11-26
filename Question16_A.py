# Question 16(a)
# Name and School: 
import random
def function():
    s_name=input("Enter your surname:      ")    
    f_name=input("Enter your first name:   ")
    age = int(input("Enter your age:          "))
    eircode = input("Enter your Eircode:      ")
    trial = input("Do you agree to enrol in a vaccine trial?\nType 'Yes' or 'No'             ")
    if age >= 12:
        if age >= 50:
            statement = "you will receive the ADENO vaccine"
        else:
            statement = "you will recive the MRNA vaccine"
    else:
        statement = "you will not receive a vaccine"
    eircode_array = []
    eircode_array.extend(eircode)
    if (int(eircode_array[-1]) % 2) == 0:
        place = "Eastwood"
    else:
        place = "Northwood"
    print("Hello", f_name, s_name, "you are",age,"years old")
    print("Eircode is",eircode)
    print("You must attend",place,"for your vaccine")
    if trial == "Yes":
        print("You are now enrolled in the trial to receive Super vaccine",random.choice(["A","B","C"]))
    print(f_name,",",statement)

function()
command = ""
while command != "END":
    command = input("If you have finished entering people's details type 'END', otherwise press RETURN:\n")
    if command == "END":
        break
    else:
        function()

List = [4, 5, 9, 8, 10, 17, 99, 77]
counter = 0
while counter != (len(List)-1):
    if List[counter] > List[counter + 1]:
        a = List[counter]
        b = List[counter + 1]
        List[counter] = b
        List[counter + 1] = a
    counter = counter + 1
if (len(List) % 2) == 0:
    pos2 = len(List) / 2
    pos1 = pos2 - 1
    median = (List[pos1] + List[pos2]) / 2
else:
    pos = len(List) / 2
    pos = pos - 0.5
    median = List[pos]
print("\nThe median of the list is",median)