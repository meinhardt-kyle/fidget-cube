//  unknown expression:  178
let completed_sequences = {
    "button" : false,
    "pin" : false,
}

function check_for_completion() {
    return completed_sequences["button"] && completed_sequences["pin"] ? true : false
}

while (!check_for_completion()) {
    
}
