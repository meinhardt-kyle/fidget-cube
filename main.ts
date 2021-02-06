//  unknown expression:  178
let completed_sequences = {
    "button" : false,
    "pin" : false,
    "acceleration" : false,
    "light" : false,
}

function check_for_completion() {
    if (completed_sequences["button"]) {
        game.createSprite(0, 2)
        game.createSprite(1, 2)
    }
    
    if (completed_sequences["pin"]) {
        game.createSprite(2, 1)
        game.createSprite(2, 0)
    }
    
    if (completed_sequences["acceleration"]) {
        game.createSprite(3, 2)
        game.createSprite(4, 2)
    }
    
    if (completed_sequences["light"]) {
        game.createSprite(2, 3)
        game.createSprite(2, 4)
    }
    
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

let pin_index = 0
function pin_pattern() {
    let pin_sequence = [1, 2, 1, 1, 2, 2]
    
    while (true) {
        if (input.pinIsPressed(TouchPin.P1)) {
            if (pin_sequence[pin_index] == 1) {
                pin_index += 1
            }
            
            basic.showNumber(pin_index)
            if (pin_index == pin_sequence.length) {
                completed_sequences["button"] = true
                sequence_solved()
                break
            }
            
        } else {
            pin_index = 0
            basic.showNumber(pin_index)
        }
        
        basic.clearScreen()
        break
        if (input.pinIsPressed(TouchPin.P2)) {
            if (pin_sequence[pin_index] == 2) {
                pin_index += 1
                basic.showNumber(pin_index)
                if (pin_index == pin_sequence.length) {
                    completed_sequences["button"] = true
                    sequence_solved()
                    break
                }
                
            } else {
                pin_index = 0
                basic.showNumber(pin_index)
            }
            
            basic.clearScreen()
            break
        }
        
        break
    }
}

function acceleration_pattern() {
    
}

function light_pattern() {
    
}

while (!check_for_completion()) {
    if (!completed_sequences["button"]) {
        button_pattern()
    }
    
    if (!completed_sequences["pin"]) {
        pin_pattern()
    }
    
    if (!completed_sequences["acceleration"]) {
        acceleration_pattern()
    }
    
    if (!completed_sequences["light"]) {
        light_pattern()
    }
    
}
basic.clearScreen()
