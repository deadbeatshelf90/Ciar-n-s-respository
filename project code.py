import serial
import random
import time
import numpy as np

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM5"
ser.open()

ser2 = serial.Serial()
ser2.baudrate = 115200
ser2.port = "COM6"
ser2.open()

stringOut = ""
heartrates = []
while True:
    game_data = ser.read().decode()
    heart_data = ser2.read().decode()
    
    if game_data == "#":
        print(stringOut)
        print("\n")
        stringOut = ""
    else:
        stringOut += mb_data
    
    if len(heartrates) < 10:
        heartrates = heartrates.push(heart_data)
        if len(heartrates) == 10:
            rr_intervals = np.diff(heart_rate_data)

# Mean RR (Mean of RR intervals in milliseconds)
            mean_rr = np.mean(rr_intervals)

# SDNN (Standard deviation of RR intervals in milliseconds)
            sdnn = np.std(rr_intervals)

# RMSSD (Root mean square of successive differences in RR intervals in milliseconds)
            rmssd = np.sqrt(np.mean(np.square(np.diff(rr_intervals))))

# pNN50 (Percentage of successive RR intervals differing by more than 50 ms)
            nn50 = np.sum(np.abs(np.diff(rr_intervals)) > 50)
            total_rr_intervals = len(rr_intervals)
            pnn50 = (nn50 / total_rr_intervals) * 100 if total_rr_intervals != 0 else 0

# Display HRV features
            print("Mean RR: {:.2f} ms".format(mean_rr))
            print("SDNN: {:.2f} ms".format(sdnn))
            print("RMSSD: {:.2f} ms".format(rmssd))
            print("pNN50: {:.2f}%".format(pnn50))
            heartrates = []
    
    

    