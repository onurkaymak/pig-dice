//Business Logic

function Player(name, turnTotal, total) {
    this.player = name;
    this.turnTotal = turnTotal;
    this.total = total;
    this.turn = false;
}

function Game() {
    this.players = {};
}



// const player1 = new Player(1, 0, 0);
// const player2 = new Player(2, 0, 0);

const game = new Game();

// console.log(player1);
// console.log(player2);
console.log(game);