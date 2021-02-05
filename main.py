# unknown expression:  178
completed_sequences = {
    "button" : False,
    "pin" : False,
}
def check_for_completion():
    return True if completed_sequences['button'] and completed_sequences['pin'] else False

while not check_for_completion():
    pass