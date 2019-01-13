const createButtons = function () {
  document.getElementById('board').innerHTML =
    `<input id="1" class="playButton" onclick="updateBoard('1')">
     <input id="2" class="playButton" onclick="updateBoard('2')">
     <input id="3" class="playButton" onclick="updateBoard('3')"><br>
     <input id="4" class="playButton" onclick="updateBoard('4')">
     <input id="5" class="playButton" onclick="updateBoard('5')">
     <input id="6" class="playButton" onclick="updateBoard('6')"><br>
     <input id="7" class="playButton" onclick="updateBoard('7')">
     <input id="8" class="playButton" onclick="updateBoard('8')">
     <input id="9" class="playButton" onclick="updateBoard('9')"></input>`;
};

const showPlayersDetailBoard = function () {
  document.getElementById("player_Details").innerHTML = `  
  Enter the name of player1 : <input type="text" id="player1" onkeydown="setFocus()"><br><br>
  Enter the name of player2 : <input type="text" id="player2" onkeydown="setFocus();"><br><br>
  <button class="start_button" onclick="showBoard()">start</button>  
  <button class="start_button" onclick="location.reload()">Reset</button>
  <p id="X"></p>
  <p id="0"></p>
  <p id="winner"></p>
  <div id="turn" style="background-color: lightgrey"></div>`;
};

const loadingFunctions = function () {
  showPlayersDetailBoard();
  document.getElementById('player1').focus();
  createButtons();
};

window.onload = loadingFunctions;