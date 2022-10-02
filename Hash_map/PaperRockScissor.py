from random import randint


d1 = ["rock", "paper", "scissor"]
d2 = randint(0,2)

def stupidgame(d1, d2):
    guess = int(input("Enter your pick: 0 for rock, 1 for paper, 2 for scissor? "))
    if d1[guess] == "rock" and d2 == 0 or d1[guess] == "paper" and d2 ==1 or d1[guess] == "scissor" and d2 ==2:
        return "Draw"
    elif d1[guess] == "rock" and d2 == 2 or d1[guess] == "paper" and d2 == 0 or d1[guess] == "scissor" and d2 == 1:
        return "You won"
    return "You lose"

def smartgame(d1, d2):

    output = {
        "rock":
            {"rock": "draw", "scissor": "win", "paper": "lose"},
        "paper":
            {"rock": "win", "scissor": "lose", "paper": "draw"},
        "scissor":
            {"rock": "lose", "scissor": "draw", "paper": "win"}
    }
    return (output[d1][d2])


print(stupidgame(d1,d2))
print(smartgame("rock","paper"))

