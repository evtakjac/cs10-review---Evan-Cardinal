// DICE SIMULATOR
// Buttons + Event Listeners
var rollBtn = document.getElementById("roll").addEventListener("click", roll);
var resetBtn = document.getElementById("reset");
var sumBtn = document.getElementById("sum");
resetBtn.addEventListener("click", reset);
// Variables
var diceSelect = document.getElementById("rollSelect");
var rollSet = "1Time";
var resultsEl = document.getElementById("results");
var t = 0;
var r1 = 0;
var r2 = 0;
var sum = 0;
var dieImg1 = document.getElementById("die1");
var dieImg2 = document.getElementById("die2");

// Functions
// Dice spinning
let imgDeg = 0;
let imgsrc = 0;
let imgsrc2 = 0;
let spinInterval = setInterval(spinDice, 125);
function spinDice() {
  //  First Dice
  if (imgsrc == 7) {
    imgsrc = 1;
    imgsrc2 = 1;
  }
  dieImg1.style.transform = `rotate(${imgDeg}deg)`;
  imgDeg += 10;
  dieImg1.src = `images/${imgsrc}.png`;
  imgsrc++;
  // Second Dice
  dieImg2.style.transform = `rotate(${imgDeg}deg)`;
  imgDeg += 10;
  dieImg2.src = `images/${imgsrc2}.png`;
  imgsrc2++;
}

function roll() {
  // Roll Once
  if (rollSelect.value == "1Time") {
    var r1 = (Math.random() * 5 + 1).toFixed();
    var r2 = (Math.random() * 5 + 1).toFixed();
    console.log(r1, r2);
    resultsEl.innerHTML += `<span>${r1},${r2}</span>`;
    dieImg1.src = `images/${r1}.png`;
    dieImg2.src = `images/${r2}.png`;
    clearInterval(spinInterval);
    // Roll 5 Times
  } else if (rollSelect.value == "5Time") {
    t = 0;
    while (t < 5) {
      var r1 = (Math.random() * 5 + 1).toFixed();
      var r2 = (Math.random() * 5 + 1).toFixed();
      console.log(r1, r2);
      resultsEl.innerHTML += `<span>${r1},${r2}</span>`;
      t++;
    }
    dieImg1.src = `images/${r1}.png`;
    dieImg2.src = `images/${r2}.png`;
    clearInterval(spinInterval);
    // Roll Until Snake Eyes
  } else if (rollSelect.value == "xTime") {
    let userPrompt = +prompt("How many rolls?");
    t = 0;
    while (t < userPrompt) {
      var r1 = (Math.random() * 5 + 1).toFixed();
      var r2 = (Math.random() * 5 + 1).toFixed();
      console.log(r1, r2);
      resultsEl.innerHTML += `<span>${r1},${r2}</span>`;
      t++;
    }
    dieImg1.src = `images/${r1}.png`;
    dieImg2.src = `images/${r2}.png`;
    clearInterval(spinInterval);
    // ROLL SNAKE EYES
  } else if (rollSelect.value == "snakeEyes") {
    do {
      var r1 = (Math.random() * 5 + 1).toFixed();
      var r2 = (Math.random() * 5 + 1).toFixed();
      console.log(r1, r2);
      resultsEl.innerHTML += `<span>${r1},${r2}</span>`;
    } while (!(r1 == 1 && r2 == 1));
    dieImg1.src = `images/${r1}.png`;
    dieImg2.src = `images/${r2}.png`;
    clearInterval(spinInterval);
    // Roll Doubles
  } else if (rollSelect.value == "doubles") {
    do {
      var r1 = (Math.random() * 5 + 1).toFixed();
      var r2 = (Math.random() * 5 + 1).toFixed();
      console.log(r1, r2);
      resultsEl.innerHTML += `<span>${r1},${r2}</span>`;
    } while (!(r1 == r2));
    dieImg1.src = `images/${r1}.png`;
    dieImg2.src = `images/${r2}.png`;
    clearInterval(spinInterval);
  }
}

function reset() {
  clearInterval(spinInterval);
  spinInterval = setInterval(spinDice, 100);
  console.log("test");
  resultsEl.innerHTML = `<h3>Dice Rolls</h3>`;
}
