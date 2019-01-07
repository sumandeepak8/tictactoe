let player1 = 'firstPlayer';
let player2 = 'secondPlayer';
let player1Moves = [];
let player2Moves = [];
const wininigConditions = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '5', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '5', '7'], ['3', '6', '9']]
let turnCounter = 0;

const isSubset = function (wininigConditions, moves) {
  return wininigConditions.some((x) => {
    return x.every(function (y) {
      return moves.includes(y);
    });
  });
};

const declareWinner = function (symbol) {
  let symbolDetails = {
    'X': {
      moves: player1Moves,
      player: player1,
    },
    '0': {
      moves: player2Moves,
      player: player2,
    },
  };
  let player = symbolDetails[symbol]['player'];
  let moves = symbolDetails[symbol]['moves'];

  if (!isSubset(wininigConditions, moves) && player1Moves.length == 5) {
    document.getElementById('turn').innerHTML = " Match is drawn ";
    document.getElementById('turn').setAttribute("style", "background-color:green");
  }
  if (isSubset(wininigConditions, moves)) {
    document.getElementById('turn').innerHTML = player + '  has won the match';
    document.getElementById('turn').setAttribute("style", "background-color:green");
    for (let id = 1; id <= 9; id++) {
      document.getElementById(id.toString()).setAttribute('disabled', 'disabled');
    }
  }
}

const moveToggler = function (id) {
  let value = turnCounter;
  let isOdd = value % 2;
  if (isOdd) {
    player2Moves.push(id);
    return '0';
  }
  player1Moves.push(id);
  return 'X';
}

const firstTurn = function () {
  document.getElementById('turn').innerHTML = player1 + "'s turn ";
};

const whoseTurn = function (symbol) {
  if (symbol == 'X')
    document.getElementById('turn').innerHTML = player2 + "'s turn ";
  if (symbol == '0')
    document.getElementById('turn').innerHTML = player1 + "'s turn ";
};

const getPlayer1 = function () {
  let name = document.getElementById('player1').value;
  if (name != '')
    player1 = name;
  document.getElementById('X').innerHTML = player1 + "'s playing symbol is 'X' ";
  document.getElementById('player1').setAttribute('disabled', 'disabled');
}

const getPlayer2 = function () {
  let name = document.getElementById('player2').value;
  if (name != '')
    player2 = name;
  document.getElementById('0').innerHTML = player2 + "'s playing symbol is '0' ";
  document.getElementById('player2').setAttribute('disabled', 'disabled');
}

const updateBoard = function (id) {
  let symbol = moveToggler(id);
  whoseTurn(symbol);
  document.getElementById(id).value = symbol;
  document.getElementById(id).setAttribute('disabled', 'disabled');
  turnCounter += 1;
  declareWinner(symbol);
}

const setFocus = function () {
  if (event.keyCode == 13) {
    document.getElementById('player2').focus();
  }
};

const showBoard = function () {
  getPlayer1();
  getPlayer2();
  firstTurn();
  document.getElementById('board').style.visibility = 'visible';
  document.getElementById('turn').style.visibility = 'visible';
}