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

b_sequence = ['A', 'B', 'A']
b_index = 0


def button_sequence():
    global b_index

    while True:
        if input.button_is_pressed(Button.A):
                button_pressed = 'A'
        if input.button_is_pressed(Button.B):
                button_pressed = 'B'
                
        if b_sequence[b_index] == button_pressed:
            # print(b_sequence[b_index])
            b_index += 1
            basic.show_number(b_index)
            if b_index == len(b_sequence):
                completed_sequences['button'] = True
                break
            break
        break
        # else:
        #     b_index = 0
        #     basic.show_number(b_index)
        #     break
        # if b_index == 1:
        #     if b_sequence[b_index] == button_pressed:
        #         # print(b_sequence[b_index])
        #         b_index += 1
        #         basic.show_number(b_index)
        #         break
        #     # else:
        #     #     b_index = 0
        #     #     basic.show_number(b_index)
        #     #     break
        # if b_index == 2:
        #     if input.button_is_pressed(Button.A):
        #         b_index += 1
        #         basic.show_number(b_index)
        #         break
        #     if input.button_is_pressed(Button.B):
        #         b_index = 0
        #         basic.show_number(b_index)
        #         break
        # if b_index == 3:
        #     completed_sequences['button'] = True
        #     break
        

    # while True:
    #     if b_index == 0:
    #         if input.button_is_pressed(Button.A):
    #             b_index += 1
    #             basic.show_number(b_index)
    #             break
    #         if input.button_is_pressed(Button.B):
    #             b_index = 0
    #             basic.show_number(b_index)
    #             break
    #     if b_index == 1:
    #         if input.button_is_pressed(Button.B):
    #             b_index += 1
    #             basic.show_number(b_index)
    #             break
    #         if input.button_is_pressed(Button.A):
    #             b_index = 0
    #             basic.show_number(b_index)
    #             break
    #     if b_index == 2:
    #         if input.button_is_pressed(Button.A):
    #             b_index += 1
    #             basic.show_number(b_index)
    #             break
    #         if input.button_is_pressed(Button.B):
    #             b_index = 0
    #             basic.show_number(b_index)
    #             break
    #     if b_index == 3:
    #         completed_sequences['button'] = True
    #     break
 

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