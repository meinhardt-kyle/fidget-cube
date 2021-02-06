# unknown expression:  178
completed_sequences = {
    "button" : False,
    "pin" : False,
    "acceleration" : False,
    "light" : False,
}
def check_for_completion():
    # if completed_sequences['button']:
    #     game.create_sprite(0, 2)
    #     game.create_sprite(1, 2)
    # if completed_sequences['pin']:
    #     game.create_sprite(2, 1)
    #     game.create_sprite(2, 0)
    # if completed_sequences['acceleration']:
    #     game.create_sprite(3, 2)
    #     game.create_sprite(4, 2)
    # if completed_sequences['light']:
    #     game.create_sprite(2, 3)
    #     game.create_sprite(2, 4)
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
    basic.clear_screen()

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
       

def pin_pattern():
    pin1_pressed = False
    pin2_pressed = False
    while True:
        if input.pin_is_pressed(TouchPin.P0):
            pin1_pressed = True
        if input.pin_is_pressed(TouchPin.P1):
            pin2_pressed = True
        if pin1_pressed and pin2_pressed:
            completed_sequences['pin'] = True
            sequence_solved()
            break


acceleration_axies = {
    'y': False,
    'x': False,
    'z':False
    }
def acceleration_pattern():
    # while True:
        # if input.acceleration(Dimension.X) > 400:
        #     acceleration_axies['x'] = True
        #     sequence_solved()
        # # if acceleration_axies['x'] == True:
        # if input.acceleration(Dimension.Z) > 400:
        #     acceleration_axies['z'] = True
        #     sequence_solved()
        # if input.acceleration(Dimension.Y) > 400:
        #     acceleration_axies['y'] = True
        #     sequence_solved()
    if input.is_gesture(Gesture.Shake):
        completed_sequences['acceleration'] = True
        sequence_solved()
            # break
        

def light_pattern():
    if input.light_level() < 50:
        completed_sequences['light'] = True
        sequence_solved()

while not check_for_completion():
    if not completed_sequences['button']:
        button_pattern()
    else:
        if not completed_sequences['pin']:
            pin_pattern()
        else:
            if not completed_sequences['acceleration']:
                acceleration_pattern()
            else:
                if not completed_sequences['light']:
                    light_pattern()

basic.clear_screen()
basic.show_string("Hooray!")
