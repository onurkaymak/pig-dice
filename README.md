```
Describe Player()

Test #1: "It should create a Player constructor function with defined properties"
Code: Player()
Expected Output: {...}


Describe Game()

Test #1: "It should create a Game constructor function with defined properties"
Code:
const game = new Game();
Expected Output: {players: {...}}

Describe addPlayers()

Test #1: "It should add players into a game"
Code:
Game.prototype.addPlayers(player1, player2);
Expected Output: { players: { 1: {...}, 2: {...} } }

Describe setTurns()

Test #1: "It should set players' turns to decide who is going to play next"
Code:
Game.prototype.setTurns();
Expected Output: {id:1, turnTotal: 0, total: 0, turn: true}

```
