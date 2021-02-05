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

function button_sequence() {
    let button_pressed: string;
    let button_map = {
        "A" : input.buttonIsPressed(Button.A),
        "B" : input.buttonIsPressed(Button.B),
        "AB" : input.buttonIsPressed(Button.AB),
    }
    
    let sequence = ["A", "B", "A"]
    for (let y of sequence) {
        if (button_map["A"]) {
            button_pressed = "A"
        } else if (button_map["B"]) {
            button_pressed = "AB"
        } else if (button_map["B"]) {
            button_pressed = "AB"
        } else {
            button_pressed = null
        }
        
        if (button_pressed == y) {
            completed_sequences["button"] = true
        } else {
            break
        }
        
    }
}

function pin_sequence() {
    
}

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
