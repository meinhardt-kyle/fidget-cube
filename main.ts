//  unknown expression:  178
let completed_sequences = {
    "button" : false,
    "pin" : false,
    "acceleration" : false,
    "light" : false,
}

function check_for_completion() {
    return completed_sequences["button"] && completed_sequences["pin"] && completed_sequences["acceleration"] && completed_sequences["light"] ? true : false
}

function display_segments() {
    if (completed_sequences["button"]) {
        game.createSprite(0, 2)
        game.createSprite(1, 2)
    }
    
    if (completed_sequences["pin"]) {
        game.createSprite(2, 1)
        game.createSprite(2, 0)
    }
    
}

function button_sequence() {
    
}

function pin_sequence() {
    
}

function acceleration_sequence() {
    
}

function light_sequence() {
    
}

while (!check_for_completion()) {
    display_segments()
}
basic.clearScreen()
