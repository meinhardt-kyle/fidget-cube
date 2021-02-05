# unknown expression:  178
completed_sequences = {
    "button" : False,
    "pin" : False,
    "acceleration" : False,
    "light" : False,
}
def check_for_completion():
    if completed_sequences['button']:
        game.create_sprite(0, 2)
        game.create_sprite(1, 2)
    if completed_sequences['pin']:
        game.create_sprite(2, 1)
        game.create_sprite(2, 0)
    if completed_sequences['acceleration']:
        game.create_sprite(3, 2)
        game.create_sprite(4, 2)
    if completed_sequences['light']:
        game.create_sprite(2, 3)
        game.create_sprite(2, 4)
    return True if completed_sequences['button'] and completed_sequences['pin'] and completed_sequences['acceleration'] and completed_sequences['light'] else False

def button_sequence(): 
    button_map = {
        'A': Button.A,
        'B': Button.B,
        'AB': Button.AB
    }
    sequence = ['A', 'B', 'A']
    for y in sequence:
        if input.button_is_pressed(button_map[y]):
            completed_sequences['button'] = True

def pin_sequence():
    pass

def acceleration_sequence():
    pass

def light_sequence():
    pass

while not check_for_completion():
    if not completed_sequences['button']:
        button_sequence()
    if not completed_sequences['pin']:
        pin_sequence()
    if not completed_sequences['acceleration']:
        acceleration_sequence()
    if not completed_sequences['light']:
        light_sequence()

basic.clear_screen()