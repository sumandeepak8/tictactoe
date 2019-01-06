let player1;
let player2;
let player1Moves = [];
let player2Moves = [];
const wininigConditions = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '5', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '5', '7'], ['3', '6', '9']]

const isSubset = function (wininigConditions, moves) {
  return wininigConditions.some((x) => {
    return x.every(function (y) {
      return moves.includes(y);
    });
  });
};

const declareWinner = function (symbol) {
  let moves = [];
  let player;
  if (symbol == 'x') {
    moves = player1Moves;
    player = player1
  };
  if (symbol == 'o') {
    moves = player2Moves;
    player = player2;
  };

  if (isSubset(wininigConditions, moves)) {
    document.getElementById('winner').innerHTML = player + '  has won the match';
    window.stop();
  }
}

const moveToggler = function (id) {
  let value = +document.getElementById('counter').value;
  document.getElementById('counter').value = value + 1;
  if (value % 2) {
    player2Moves.push(id);
    return 'o';
  }
  player1Moves.push(id);
  return 'x';
}

const getPlayer1 = function () {
  player1 = document.getElementById('player1').value;
  document.getElementById('x').innerHTML = "your symbol is 'x' ";
  document.getElementById('player1').setAttribute('disabled', 'disabled');
}

const getPlayer2 = function () {
  player2 = document.getElementById('player2').value;
  document.getElementById('o').innerHTML = "your symbol is 'o' ";
  document.getElementById('player2').setAttribute('disabled', 'disabled');

}

const updateBoard = function (id) {
  let symbol = moveToggler(id);
  document.getElementById(id).value = symbol;
  document.getElementById(id).setAttribute('disabled', 'disabled');
  declareWinner(symbol);
}