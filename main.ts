//  unknown expression:  178
let completed_sequences = {
    "button" : false,
    "pin" : false,
    "acceleration" : false,
    "light" : false,
}

function check_for_completion() {
    //  if completed_sequences['button']:
    //      game.create_sprite(0, 2)
    //      game.create_sprite(1, 2)
    //  if completed_sequences['pin']:
    //      game.create_sprite(2, 1)
    //      game.create_sprite(2, 0)
    //  if completed_sequences['acceleration']:
    //      game.create_sprite(3, 2)
    //      game.create_sprite(4, 2)
    //  if completed_sequences['light']:
    //      game.create_sprite(2, 3)
    //      game.create_sprite(2, 4)
    return completed_sequences["button"] && completed_sequences["pin"] && completed_sequences["acceleration"] && completed_sequences["light"] ? true : false
}

function sequence_solved() {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    # # # # #
    `)
    basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    # # # # #
    # . . # #
    # . . # #
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    # # # # #
    # . . # #
    # # . # #
    # # # # #
    # # # # #
    `)
    basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
    basic.clearScreen()
}

let b_index = 0
function button_pattern() {
    let b_sequence = ["A", "B", "B", "A", "B", "A", "A"]
    
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (b_sequence[b_index] == "A") {
                b_index += 1
                basic.showNumber(b_index)
                if (b_index == b_sequence.length) {
                    completed_sequences["button"] = true
                    sequence_solved()
                    break
                }
                
            } else {
                b_index = 0
                basic.showNumber(b_index)
            }
            
            basic.clearScreen()
            break
        }
        
        if (input.buttonIsPressed(Button.B)) {
            if (b_sequence[b_index] == "B") {
                b_index += 1
                basic.showNumber(b_index)
                if (b_index == b_sequence.length) {
                    completed_sequences["button"] = true
                    sequence_solved()
                    break
                }
                
            } else {
                b_index = 0
                basic.showNumber(b_index)
            }
            
            basic.clearScreen()
            break
        }
        
        break
    }
}

function pin_pattern() {
    let pin1_pressed = false
    let pin2_pressed = false
    while (true) {
        if (input.pinIsPressed(TouchPin.P0)) {
            pin1_pressed = true
        }
        
        if (input.pinIsPressed(TouchPin.P1)) {
            pin2_pressed = true
        }
        
        if (pin1_pressed && pin2_pressed) {
            completed_sequences["pin"] = true
            sequence_solved()
            break
        }
        
    }
}

//  acceleration_axies = {
//      'y': False,
//      'x': False,
//      'z':False
//      }
function acceleration_pattern() {
    //  while True:
    //  if input.acceleration(Dimension.X) > 400:
    //      acceleration_axies['x'] = True
    //      sequence_solved()
    //  # if acceleration_axies['x'] == True:
    //  if input.acceleration(Dimension.Z) > 400:
    //      acceleration_axies['z'] = True
    //      sequence_solved()
    //  if input.acceleration(Dimension.Y) > 400:
    //      acceleration_axies['y'] = True
    //      sequence_solved()
    if (input.isGesture(Gesture.Shake)) {
        completed_sequences["acceleration"] = true
        sequence_solved()
    }
    
}

//  break
function light_pattern() {
    if (input.lightLevel() < 50) {
        completed_sequences["light"] = true
        sequence_solved()
    }
    
}

while (!check_for_completion()) {
    if (!completed_sequences["button"]) {
        button_pattern()
    } else if (!completed_sequences["pin"]) {
        pin_pattern()
    } else if (!completed_sequences["acceleration"]) {
        acceleration_pattern()
    } else if (!completed_sequences["light"]) {
        light_pattern()
    }
    
}
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . # . . .
    . # . # #
    . . # . .
    # # . # .
    . . . # .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . . # .
    # # . # .
    . . # . .
    . # . # #
    . # . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # # . # #
    # # . # #
    . . # . .
    # # . # #
    # # . # #
    `)
basic.showLeds(`
    # # . # #
    # # # # #
    . # # # .
    # # # # #
    # # . # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.showString("Hooray!")
