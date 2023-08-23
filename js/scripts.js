//Business Logic

function Player(name, turnTotal, total) {
    this.id = name;
    this.turnTotal = turnTotal;
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



const player1 = new Player(1, 0, 0);
const player2 = new Player(2, 0, 0);

const game = new Game();
game.addPlayers(player1, player2);

console.log(player1);
console.log(player2);
console.log(game);
