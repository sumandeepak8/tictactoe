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

const declareWinner = function (choice) {
  let moves = [];
  let player;
  if (choice == 'x') {
    moves = player1Moves;
    player = player1
  };
  if (choice == 'o') {
    moves = player2Moves;
    player = player2;
  };

  if (isSubset(wininigConditions, moves)) {
    alert('' + player + ' has won the match');
    process.exit();
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
  document.getElementById('player1').setAttribute('disabled', 'disabled')
}

const getPlayer2 = function () {
  player2 = document.getElementById('player2').value;
  document.getElementById('player2').setAttribute('disabled', 'disabled')

}

const updateBoard = function (id) {
  let choice = moveToggler(id);
  document.getElementById(id).value = choice;
  document.getElementById(id).setAttribute('disabled', 'disabled')  
  declareWinner(choice);
}