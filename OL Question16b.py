# Question 16_b
# Student Name: Ciaran Lynch

Standard_Postal_List=["Netherlands","Denmark","Poland","Portugal","Finland","Romania","France","Germany","Greece","Spain",
                      "Hungary","Sweden","Ireland"]
country = input("Please enter the country that you wish to send the order to: ")
counter = 0
while counter < len(Standard_Postal_List):
    if Standard_Postal_List[counter] == country:
        print("This country uses standard postage and packaging costs")
        break
    counter+=1
if counter == len(Standard_Postal_List):
    print("This country is not on the approved delivery list.")
    NewCountry = input("Would you like to add this country to the approved Postal List for future deliveries, y/n: ")
    if NewCountry == "y":
        Standard_Postal_List.append(country)
        print(country,"has been added to the Standard_Postal_List")
    else:
        print(country,"has not been added to the Standard_Postal_List")

print(sorted(Standard_Postal_List))

