import serial
import random
import time

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM5"
ser.open()

"""Create colors and delay outside of functions because they are needed by more
    than one"""
colors = ['red', 'green', 'yellow', 'orange']
delay = 1

def startgame():
    print("Welcome to Simon Says!")
    Round = 1
    while True:
        sequence = generate_sequence(Round)
        display_sequence(sequence)
        player_input = get_player_input()
        
        if check_input(player_input, sequence):
            print("Correct! Next round.")
            Round += 1
        else:
            print(f"Wrong! Game over. Your score: {Round-1}")
            break
         
def generate_sequence(length):
    """Generate a random sequence of colors."""
    return [random.choice(colors) for _ in range(length)]

def display_sequence(sequence):
    """Display the sequence to the player."""
    for color in sequence:
        print(color, end=' ')
        ser.write(color.encode('utf-8'))
        time.sleep(delay)  # Pause for "delay" second between colors
    print()

def get_player_input():
    """Get the player's input sequence."""
    return input("Your turn: ").split()

def check_input(player_input, sequence):
    """Check if the player's input matches the generated sequence."""
    return player_input == sequence

while True:
    mb_start = str(ser.readline().decode('utf-8'))
    mb_start = mb_start.replace(" ", "")
    mb_start = mb_start.replace("\r\n","")
    if mb_start == "a":
        startgame()

    