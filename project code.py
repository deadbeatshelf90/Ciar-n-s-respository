import serial
import random
import time

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM5"
ser.open()

stringOut = ""
while True:
    mb_data = ser.read().decode()
    
    if mb_data == "#":
        print(stringOut)
        print("\n")
        stringOut = ""
    else:
        stringOut += mb_data

    