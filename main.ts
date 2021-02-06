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
function button_sequence() {
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

function acceleration_sequence() {
    
}

function light_sequence() {
    
}

while (!check_for_completion()) {
    if (!completed_sequences["button"]) {
        button_sequence()
    }
    
    if (!completed_sequences["pin"]) {
        pin_sequence()
    }
    
    if (!completed_sequences["acceleration"]) {
        acceleration_sequence()
    }
    
    if (!completed_sequences["light"]) {
        light_sequence()
    }
    
}
basic.clearScreen()
