file = open("mean-median-mode-frequency.csv")
answer = 0
a = 0
b = 0
c = 0
num = ""
numList = []
total = 0
lineNum = 0
for line in file:
    if line == "\n":
        lineNum = lineNum + 1
        while a < len(numList):
            letter = int(numList[a])
            total = total + letter
            a = a + 1
        a = 0
        answer = total/len(numList)
        print("The mean of line",lineNum ,"is" , answer)
        if (len(numList) % 2) == 0:
            firstNum = int(numList[int(len(numList)/ 2)])
            secondNum = int(numList[int((len(numList)/ 2) + 1)])
            answer = (firstNum + secondNum) / 2
            print("The median of line",lineNum,"is" , answer)
        else:
            answer = int(numList[int((len(numList) / 2)+0.5)])
            print("The median of line",lineNum,"is" , answer)
        from collections import Counter
        c = Counter(numList)
        max_pair = c.most_common()[0]
        print("The mode of line",lineNum,"is %s and its frequency is %d" %(max_pair[0], max_pair[1]))
        numList.clear()
    else:
        b = 0
        c = 0
        Line = line
        while len(Line) != 0:
            if Line[b] != ",":
                num = num + Line[b]
                b = b + 1
            else:
                numList.append(num)
                num = ""
                while c != 0:
                    Line.replace(Line[0], "")
                    c = c - 1
                b = b + 1
            if b == (len(Line) - 2):
                numList.append(num)
                break
        numList.remove(numList[len(numList)-1])
lineNum = lineNum + 1
while a < len(numList):
    letter = int(numList[a])
    total = total + letter
    a = a + 1
a = 0
answer = total/len(numList)
print("The mean of line",lineNum ,"is" , answer)
if (len(numList) % 2) == 0:
    firstNum = int(numList[int(len(numList)/ 2)])
    secondNum = int(numList[int((len(numList)/ 2) + 1)])
    answer = (firstNum + secondNum) / 2
    print("The median of line",lineNum,"is" , answer)
else:
    answer = int(numList[int((len(numList) / 2)+0.5)])
    print("The median of line",lineNum,"is" , answer)
from collections import Counter
c = Counter(numList)
max_pair = c.most_common()[0]
print("The mode of line",lineNum,"is %s and its frequency is %d" %(max_pair[0], max_pair[1]))
file.close()