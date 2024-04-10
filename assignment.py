import random
import numpy as np

def random():
    x = np.random.randint(1,10)
    return x
def compare(x,y):
    if x == y:
        return True
    else:
        return False

def QuestionOne():
    num = random()
    guess = int(input("Guess the number between 1 and 10"))
    while True:
        if compare(num, guess) == True:
            break
        else:
            guess = int(input("Wrong, guess again"))
            
def setLowercase(x):
    capital_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    lowercase_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    x = list(x)
    string = ""
    for a in x:
        counter = 0
        while counter != 26:
            if a == capital_letters[counter]:
                string = string + lowercase_letters[counter]
                break
            counter += 1
        if counter == 26:
            string = string + a
    return string

def Palindrome(a):
    countStart = 0
    countEnd = -1
    while countStart <= (len(a)/2):
        if a[countStart] == a[countEnd]:
            countStart += 1
            countEnd -= 1
        else:
            return "isn't"
    return "is"

def Symmetrical(x):
    halfway = int((len(x)/2))
    half1 = x[0:halfway]
    half2 = x[halfway: ]
    if half1 == half2:
        return "is"
    else:
        return "isn't"
    
def Question2():
    while True:
        word = input("Enter a word: ")
        if word == "-1":
            break
        else:
            print("The word",word,Palindrome(setLowercase(word)),"a palindrome")
            print("The word",word,Symmetrical(setLowercase(word)),"symmetrical")
            
