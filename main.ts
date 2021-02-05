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

let b_sequence = ["A", "B", "A"]
let b_index = 0
function button_sequence() {
    let button_pressed: string;
    
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            button_pressed = "A"
        }
        
        if (input.buttonIsPressed(Button.B)) {
            button_pressed = "B"
        }
        
        if (b_sequence[b_index] == button_pressed) {
            //  print(b_sequence[b_index])
            b_index += 1
            basic.showNumber(b_index)
            if (b_index == b_sequence.length) {
                completed_sequences["button"] = true
                break
            }
            
            break
        }
        
        break
    }
}

//  else:
//      b_index = 0
//      basic.show_number(b_index)
//      break
//  if b_index == 1:
//      if b_sequence[b_index] == button_pressed:
//          # print(b_sequence[b_index])
//          b_index += 1
//          basic.show_number(b_index)
//          break
//      # else:
//      #     b_index = 0
//      #     basic.show_number(b_index)
//      #     break
//  if b_index == 2:
//      if input.button_is_pressed(Button.A):
//          b_index += 1
//          basic.show_number(b_index)
//          break
//      if input.button_is_pressed(Button.B):
//          b_index = 0
//          basic.show_number(b_index)
//          break
//  if b_index == 3:
//      completed_sequences['button'] = True
//      break
//  while True:
//      if b_index == 0:
//          if input.button_is_pressed(Button.A):
//              b_index += 1
//              basic.show_number(b_index)
//              break
//          if input.button_is_pressed(Button.B):
//              b_index = 0
//              basic.show_number(b_index)
//              break
//      if b_index == 1:
//          if input.button_is_pressed(Button.B):
//              b_index += 1
//              basic.show_number(b_index)
//              break
//          if input.button_is_pressed(Button.A):
//              b_index = 0
//              basic.show_number(b_index)
//              break
//      if b_index == 2:
//          if input.button_is_pressed(Button.A):
//              b_index += 1
//              basic.show_number(b_index)
//              break
//          if input.button_is_pressed(Button.B):
//              b_index = 0
//              basic.show_number(b_index)
//              break
//      if b_index == 3:
//          completed_sequences['button'] = True
//      break
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
