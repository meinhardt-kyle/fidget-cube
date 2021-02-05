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
        'A': input.button_is_pressed(Button.A),
        'B': input.button_is_pressed(Button.B),
        'AB': input.button_is_pressed(Button.AB),
    }
    sequence = ['A', 'B', 'A']
    index = 0
    for y in sequence:
        index += 1
        if button_map['A']:
            button_pressed = 'A'
        elif button_map['B']:
            button_pressed = 'AB'
        elif button_map['B']:
            button_pressed = 'AB'
        else:
            button_pressed = None

        if button_pressed == y and index == len(sequence):
            completed_sequences['button'] = True
        elif button_pressed == y: 
            continue
        else:
            break
        

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