file = open("data.csv","r")
for line in file:
    data = line.strip()
    print(data)
file.close()