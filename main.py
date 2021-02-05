# unknown expression:  178
completed_sequences = {
    "button" : False,
    "pin" : False,
    "acceleration" : False,
    "light" : False,
}
def check_for_completion():
    return True if completed_sequences['button'] and completed_sequences['pin'] and completed_sequences['acceleration'] and completed_sequences['light'] else False

def display_segments():
    game.create_sprite(0, 2)
    game.create_sprite(1, 2)

def button_sequence():
    pass

def pin_sequence():
    pass

def acceleration_sequence():
    pass

def light_sequence():
    pass

while not check_for_completion():
    display_segments()

basic.clear_screen()
