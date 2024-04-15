import random
colors = ["red","blue","green","yellow"]
answer = []
def getColor():
    x = random.randint(0,3)
    return colors[x]
counter = 0
while counter <= 3:
    answer[counter] = getColor()
def game():
    inputs = []
    inputs[0] = input("enter the first colour: ")
    inputs[1] = input("enter the second colour: ")
    inputs[2] = input("enter the third colour: ")
    inputs[3] = input("enter the fourth colour: ")
    
    correctplace = 0
    incorrectplace = 0
    position = [0,0,0,0]
    
    count2 = 0
    while count2 <= 3:
        if inputs[count2] == answer[count2]:
            correctplace += 1
            position[count2] = 1
        count2 += 1
    
    count3 = 0
    while count3 != correctplace:
        if position[count3] == 0:
            count4 = 0
            while count4 <= 3:
                if position[count4] and count4 != count3:
                    if inputs[count4] == answer[count4]:
                        incorrectplace += 1
        count3 += 1
    if correctplace != 4:
        print("Correct colour in the right place:",correctplace)
        print("Correct colout in the wrong place:",incorrectplace)
        game()
    else:
        a = input("Thats correct, play again Y/N")
        if a == "Y":
            game()