# Question 16(a)
# Student Name:Ciaran Lynch

#This is a simple ordering system

print("Welcome to the new online ordering system.\n")

total_cost=0
item_count=1

username = input("Please enter your user name: ")
no_of_item = int(input("How many items are in the customers order: "))
if no_of_item < 0:
    print("Invalid option")
else:
    while no_of_item != 0:
        price_of_item=float(input("Enter the price of item {}".format(item_count)+" : € "))
        total_cost+=price_of_item
        item_count = item_count + 1
        no_of_item = no_of_item - 1

    print("You entered",item_count,"items and the total is €",total_cost)

    AccBalIn = float(input("What is the customers current account balance € "))
    AccBalOut = AccBalIn - total_cost
    if AccBalOut >= 0:
        print("Your remaining balance: €",AccBalOut)
    else:
        remainder = abs(AccBalOut)
        print("The customer does not have enough credit in their account, they still owe: €",remainder)
    print("The member of staff  who processed your order was:",username)
  

  




