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

def sequence_solved():
    basic.show_leds("""
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        """)
    basic.show_leds("""
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    # # # # #
    """)
    basic.show_leds("""
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    """)
    basic.show_leds("""
    # # # # #
    # . . # #
    # . . # #
    # . . . #
    # # # # #
    """)
    basic.show_leds("""
    # # # # #
    # . . # #
    # # . # #
    # # # # #
    # # # # #
    """)
    basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)

b_index = 0
def button_pattern():
    b_sequence = ['A', 'B', 'B', 'A', 'B', 'A', 'A']
    global b_index

    while True:
        if input.button_is_pressed(Button.A):
            if b_sequence[b_index] == 'A':
                b_index += 1
                basic.show_number(b_index)
                if b_index == len(b_sequence):
                    completed_sequences['button'] = True
                    sequence_solved()
                    break
            else:
                b_index = 0
                basic.show_number(b_index)
            basic.clear_screen()
            break
        if input.button_is_pressed(Button.B):           
            if b_sequence[b_index] == 'B':
                b_index += 1
                basic.show_number(b_index)
                if b_index == len(b_sequence):
                    completed_sequences['button'] = True
                    sequence_solved()
                    break
            else:
                b_index = 0
                basic.show_number(b_index)
            basic.clear_screen()
            break
        break
       
pin_index = 0
def pin_pattern():
    pin_sequence = [1, 2, 1, 1, 2, 2]
    global pin_index

    while True:
        if input.pin_is_pressed(TouchPin.P1):
            if pin_sequence[pin_index] == 1:
                pin_index += 1
            basic.show_number(pin_index)
            if pin_index == len(pin_sequence):
                completed_sequences['button'] = True
                sequence_solved()
                break
        else:
            pin_index = 0
            basic.show_number(pin_index)
        basic.clear_screen()
        break
        if input.pin_is_pressed(TouchPin.P2):           
            if pin_sequence[pin_index] == 2:
                pin_index += 1
                basic.show_number(pin_index)
                if pin_index == len(pin_sequence):
                    completed_sequences['button'] = True
                    sequence_solved()
                    break
            else:
                pin_index = 0
                basic.show_number(pin_index)
            basic.clear_screen()
            break
        break

def acceleration_pattern():
    pass

def light_pattern():
    pass

while not check_for_completion():
    if not completed_sequences['button']:
        button_pattern()
    if not completed_sequences['pin']:
        pin_pattern()
    if not completed_sequences['acceleration']:
        acceleration_pattern()
    if not completed_sequences['light']:
        light_pattern()

basic.clear_screen()