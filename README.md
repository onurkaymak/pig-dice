```
Describe Player()

Test #1: "It should create a Player constructor function with defined properties."
Code: Player()
Expected Output: {...}


Describe Game()

Test #1: "It should create a Game constructor function with defined properties."
Code:
const game = new Game()
Expected Output: {players: {...}}

Describe addPlayers()

Test #1: "It should add players into a game"
Code:
Game.prototype.addPlayers(player1, player2)
Expected Output: { players: { 1: {...}, 2: {...} } }

Describe setTurns(playerToPlay, playerToWait);

Test #1: "It should set players' turns to decide who is going to play next."
Code:
Game.prototype.setTurns(playerToPlay, playerToWait)
Expected Output: {id:1, roundTotal: 0, total: 0, turn: true}

Describe rollDice()

Test #1: "It should create a dice for the player, if the dice is equal to one, player's roundTotal should be 0.
If the dice is greater then one, dice number should be add into the player's total number."
Code:
Game.prototype.rollDice()
Expected Output: {id:1, roundTotal: roundTotal, total: total += roundTotal, turn: true}

Describe hold()

Test #1: "It should add roundTotal number into total number."
Code:
Game.prototype.hold()
Expected Output: {id:1, roundTotal: 0, total: total += roundTotal, turn: false}

```
