// Utility Logic

function checkForTheWin(player) {
    if (player.total >= 100 || player.total + player.roundTotal >= 100) {
        console.log(`We have a winner! The winner is player ${player.id}`);
    }
}

function findWhoIsNext(id, players, game) {
    if (game.players[id] !== undefined) {
        let whoIsNext = players.filter(function (p) {
            return p !== id;
        })
        return whoIsNext;
    }
}


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

Game.prototype.rollDice = function (player, game) {
    let dice = Math.floor(Math.random() * 6 + 1);
    console.log(`Dice = ${dice}`);

    if (dice === 1) {
        player.roundTotal = 0;
        player.turn = false;

        let id = player.id.toString();
        let players = Object.keys(game.players);

        let result = findWhoIsNext(id, players, game)
        game.players[result].turn = true;

        console.log(game.players);
    }
    else {
        player.roundTotal += dice;
        console.log(game.players)
        checkForTheWin(player);
    }
    return player;


};

Game.prototype.hold = function (player, game) {
    player.total += player.roundTotal;
    player.roundTotal = 0;
    player.turn = false;

    let id = player.id.toString();
    let players = Object.keys(game.players);

    let result = findWhoIsNext(id, players, game);
    game.players[result].turn = true;

    checkForTheWin(id, players, game);
    console.log(game.players)
    return player
};


//UI Logic

function rollDice(player, game) {
    const result = game.rollDice(player, game);
    return result;

};

function hold(player, game) {
    const result = game.hold(player, game);
    return result;
};

function startTheGame() {
    const p1rollbtn = document.getElementById("roll-1");
    const p1holdbtn = document.getElementById("hold-1");

    const p2rollbtn = document.getElementById("roll-2");
    const p2holdbtn = document.getElementById("hold-2");

    const p1 = new Player(1, 0, 0);
    const p2 = new Player(2, 0, 0);
    const game = new Game();
    game.addPlayers(p1, p2);
    game.setTurns(p1, p2);


    p1rollbtn.addEventListener('click', function () {
        const result = rollDice(p1, game);

        if (result.turn === false) {
            p1rollbtn.setAttribute("disabled", "disabled");
            p1holdbtn.setAttribute("disabled", "disabled");
            p2rollbtn.removeAttribute("disabled", "disabled");
            p2holdbtn.removeAttribute("disabled", "disabled");
        }
    });

    p1holdbtn.addEventListener('click', function () {
        const result = hold(p1, game);

        if (result.turn === false) {
            p1holdbtn.setAttribute("disabled", "disabled");
            p1rollbtn.setAttribute("disabled", "disabled");

            p2holdbtn.removeAttribute("disabled", "disabled");
            p2rollbtn.removeAttribute("disabled", "disabled");
        }
    });




    p2rollbtn.addEventListener('click', function () {
        const result = rollDice(p2, game);

        if (result.turn === false) {
            p2rollbtn.setAttribute("disabled", "disabled");
            p2holdbtn.setAttribute("disabled", "disabled");
            p1rollbtn.removeAttribute("disabled", "disabled");
            p1holdbtn.removeAttribute("disabled", "disabled");
        }
    });



    p2holdbtn.addEventListener('click', function () {
        const result = hold(p2, game);

        if (result.turn === false) {
            p2holdbtn.setAttribute("disabled", "disabled");
            p2rollbtn.setAttribute("disabled", "disabled");

            p1holdbtn.removeAttribute("disabled", "disabled");
            p1rollbtn.removeAttribute("disabled", "disabled");
        }
    });

};





window.addEventListener('load', function () {
    const startButton = document.getElementById("button-start");
    startButton.addEventListener('click', startTheGame);
});


