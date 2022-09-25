var theDojo = [
[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
];

var dojoDiv = document.querySelector("#the-dojo");

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);

buildMyDojo(10, 10);

// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);

//Count the sum of surrounding numbers of the clicked box
function howMany(i, j, self) {
  var sumNearBy = 0;
  //check the row line by line
  for (var row = (i - 1); row <= (i + 1); row++) {
    //constrain the checking range
    if (row < 0 || row >= theDojo.length) {
      continue;
    }
    //check the column in each row, line by line
    for (var col = (j - 1); col <= (j + 1); col++) {
      //constrain the checking range
      if (col < 0 || col >= theDojo[row].length) {
        continue;
      }
      //rule out the box we clicked on
      if (row == i && col == j) {
        continue;
      }
      //sum up the surrounding 8 boxes
      sumNearBy += theDojo[row][col];
    }
  }
  //change the inner text of the box we clicked on
  self.innerText = sumNearBy;
}

//Set mine into the empty board
function buildMyDojo(height, width) {
  //reset the 2D array
  for (var row = 0; row < height; row++) {
    for (var col = 0; col < width; col++) {
      theDojo[row][col] = 0;
    }
  }

  //randomize mine and set into the reset array
  for (i = 0; i < 10; i++) {
    randomRow = Math.floor(Math.random() * theDojo.length);
    randomCol = Math.floor(Math.random() * theDojo[0].length);
    if (theDojo[randomRow][randomCol] !== 1) {
      theDojo[randomRow][randomCol] = 1;
    }
  }

}

//What happen when player clicked the mine
function gameOver(i, j) {
  if (theDojo[i][j] == 1) {
    alert("BOMB!");
    dojoDiv.innerHTML = render(theDojo);
    buildMyDojo(10, 10);
  }
}

//Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this); gameOver(${i}, ${j})"></button>`;
    }
  }
  return result;
}





