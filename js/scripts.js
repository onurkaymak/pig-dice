//Business Logic

function Player(id, roundTotal, total) {
    this.id = id;
    this.roundTotal = roundTotal;
    this.total = total;
    this.turn = false;
}

function Game() {
    this.players = {};
}

Game.prototype.addPlayers = function (player1, player2) {
    this.players[player1.id] = player1;
    this.players[player2.id] = player2;
};

Game.prototype.setTurns = function (playerToPlay, playerToWait) {
    playerToPlay.turn = true;
    playerToWait.turn = false;
};

Game.prototype.rollDice = function (player) {
    let dice = Math.floor(Math.random() * 6 + 1);

    console.log(`Dice = ${dice}`);

    if (dice === 1) {
        player.roundTotal = 0;
        player.turn = false;
    }
    else {
        player.roundTotal += dice;
    }
};

Game.prototype.hold = function (player) {
    player.total += player.roundTotal;
    player.roundTotal = 0;
};



const player1 = new Player(1, 0, 0);
const player2 = new Player(2, 0, 0);

const game = new Game();
game.addPlayers(player1, player2);

game.setTurns(player1, player2);
game.rollDice(player1);
console.log(player1);

game.rollDice(player1);
console.log(player1);

game.hold(player1);
console.log(player1);