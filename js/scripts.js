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

