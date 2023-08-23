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

