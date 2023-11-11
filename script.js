"strict mode";
const button0 = document.getElementById("button--0");
const button1 = document.getElementById("button--1");
const button2 = document.getElementById("button--2");
const button3 = document.getElementById("button--3");
const button4 = document.getElementById("button--4");
const button5 = document.getElementById("button--5");
const button6 = document.getElementById("button--6");
const button7 = document.getElementById("button--7");
const button8 = document.getElementById("button--8");
const btn_img0 = document.querySelector(".btn_img--0");
const btn_img1 = document.querySelector(".btn_img--1");
const btn_img2 = document.querySelector(".btn_img--2");
const btn_img3 = document.querySelector(".btn_img--3");
const btn_img4 = document.querySelector(".btn_img--4");
const btn_img5 = document.querySelector(".btn_img--5");
const btn_img6 = document.querySelector(".btn_img--6");
const btn_img7 = document.querySelector(".btn_img--7");
const btn_img8 = document.querySelector(".btn_img--8");
const winnerMessage = document.querySelector(".winner-message");
const overlay = document.querySelector(".overlay");
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const circle_choice = document.getElementById("circle_choice");
const cross_choice = document.getElementById("cross_choice");
const choice = document.querySelector(".choice");
const overlay_start = document.querySelector(".overlay_start");
const opening_choice = document.querySelector(".opening_choice");

//conditions

let activePlayer = 0;
let playing = true;
let score0 = [];
let score1 = [];
let truescore0 = 0;
let truescore1 = 0;

//for choices

circle_choice.addEventListener("click", function () {
  console.log("clicked");
  opening_choice.classList.add("hidden");

  //function for switching player
  const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
  };

  //function for player 1 winning
  const player1Winner = function () {
    winnerMessage.textContent = "Player 1 Wins!";
    winnerMessage.style = "font-size: 50px";
    winnerMessage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  //function for player 2 winning
  const player2Winner = function () {
    winnerMessage.textContent = "Player 2 Wins!";
    winnerMessage.style = "font-size: 50px";
    winnerMessage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  //function for running a check if player is winning
  const checkWinner = function (n) {
    if (activePlayer === 0) {
      score0.push(n);
    } else {
      score1.push(n);
    }
    //check for O's
    for (let i = 0; i < score0.length; i++) {
      if (score0.includes(0) && score0.includes(1) && score0.includes(2)) {
        player1Winner();
      } else if (
        score0.includes(3) &&
        score0.includes(4) &&
        score0.includes(5)
      ) {
        player1Winner();
      } else if (
        score0.includes(6) &&
        score0.includes(7) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(3) &&
        score0.includes(6)
      ) {
        player1Winner();
      } else if (
        score0.includes(1) &&
        score0.includes(4) &&
        score0.includes(7)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(5) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(4) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(4) &&
        score0.includes(6)
      ) {
        player1Winner();
      }
    }

    //check for X's
    for (let i = 0; i < score1.length; i++) {
      if (score1.includes(0) && score1.includes(1) && score1.includes(2)) {
        player2Winner();
      } else if (
        score1.includes(3) &&
        score1.includes(4) &&
        score1.includes(5)
      ) {
        player2Winner();
      } else if (
        score1.includes(6) &&
        score1.includes(7) &&
        score1.includes(8)
      ) {
        player2Winner();
      } else if (
        score1.includes(0) &&
        score1.includes(3) &&
        score1.includes(6)
      ) {
        player2Winner();
      } else if (
        score1.includes(1) &&
        score1.includes(4) &&
        score1.includes(7)
      ) {
        player2Winner();
      } else if (
        score1.includes(2) &&
        score1.includes(5) &&
        score1.includes(8)
      ) {
        player2Winner();
      } else if (
        score1.includes(0) &&
        score1.includes(4) &&
        score1.includes(8)
      ) {
        player2Winner();
      } else if (
        score1.includes(2) &&
        score1.includes(4) &&
        score1.includes(6)
      ) {
        player2Winner();
      }
    }

    //for draw
    let scoreSum = [...score0, ...score1];
    if (scoreSum.length >= 9) {
      if (score0.includes(0) && score0.includes(1) && score0.includes(2)) {
        player1Winner();
      } else if (
        score0.includes(3) &&
        score0.includes(4) &&
        score0.includes(5)
      ) {
        player1Winner();
      } else if (
        score0.includes(6) &&
        score0.includes(7) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(3) &&
        score0.includes(6)
      ) {
        player1Winner();
      } else if (
        score0.includes(1) &&
        score0.includes(4) &&
        score0.includes(7)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(5) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(4) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(4) &&
        score0.includes(6)
      ) {
        player1Winner();
      } else {
        winnerMessage.textContent = "It's a Draw!";
        winnerMessage.style = "font-size: 50px";
        winnerMessage.classList.remove("hidden");
        overlay.classList.remove("hidden");
      }
    }
  };

  const btn0Func = function () {
    btn_img0.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img0.src = "circle.png")
      : (btn_img0.src = "cross.png");
    checkWinner(0);
    switchPlayer();
    button0.removeEventListener("click", btn0Func);
  };

  const btn1Func = function () {
    btn_img1.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img1.src = "circle.png")
      : (btn_img1.src = "cross.png");
    checkWinner(1);
    switchPlayer();
    button1.removeEventListener("click", btn1Func);
  };

  const btn2Func = function () {
    btn_img2.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img2.src = "circle.png")
      : (btn_img2.src = "cross.png");
    checkWinner(2);
    switchPlayer();
    button2.removeEventListener("click", btn2Func);
  };

  const btn3Func = function () {
    btn_img3.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img3.src = "circle.png")
      : (btn_img3.src = "cross.png");
    checkWinner(3);
    switchPlayer();
    button3.removeEventListener("click", btn3Func);
  };

  const btn4Func = function () {
    btn_img4.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img4.src = "circle.png")
      : (btn_img4.src = "cross.png");
    checkWinner(4);
    switchPlayer();
    button4.removeEventListener("click", btn4Func);
  };

  const btn5Func = function () {
    btn_img5.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img5.src = "circle.png")
      : (btn_img5.src = "cross.png");
    checkWinner(5);
    switchPlayer();
    button5.removeEventListener("click", btn5Func);
  };

  const btn6Func = function () {
    btn_img6.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img6.src = "circle.png")
      : (btn_img6.src = "cross.png");
    checkWinner(6);
    switchPlayer();
    button6.removeEventListener("click", btn6Func);
  };

  const btn7Func = function () {
    btn_img7.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img7.src = "circle.png")
      : (btn_img7.src = "cross.png");
    checkWinner(7);
    switchPlayer();
    button7.removeEventListener("click", btn7Func);
  };

  const btn8Func = function () {
    btn_img8.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img8.src = "circle.png")
      : (btn_img8.src = "cross.png");
    checkWinner(8);
    switchPlayer();
    button8.removeEventListener("click", btn8Func);
  };

  button0.addEventListener("click", btn0Func);
  button1.addEventListener("click", btn1Func);
  button2.addEventListener("click", btn2Func);
  button3.addEventListener("click", btn3Func);
  button4.addEventListener("click", btn4Func);
  button5.addEventListener("click", btn5Func);
  button6.addEventListener("click", btn6Func);
  button7.addEventListener("click", btn7Func);
  button8.addEventListener("click", btn8Func);

  //new game

  const innit = function () {
    overlay.classList.add("hidden");
    winnerMessage.classList.add("hidden");
    activePlayer = 0;
    score0 = [];
    score1 = [];
    scoreSum = [];

    btn_img0.classList.add("hidden");
    btn_img1.classList.add("hidden");
    btn_img2.classList.add("hidden");
    btn_img3.classList.add("hidden");
    btn_img4.classList.add("hidden");
    btn_img5.classList.add("hidden");
    btn_img6.classList.add("hidden");
    btn_img7.classList.add("hidden");
    btn_img8.classList.add("hidden");

    button0.addEventListener("click", btn0Func);
    button1.addEventListener("click", btn1Func);
    button2.addEventListener("click", btn2Func);
    button3.addEventListener("click", btn3Func);
    button4.addEventListener("click", btn4Func);
    button5.addEventListener("click", btn5Func);
    button6.addEventListener("click", btn6Func);
    button7.addEventListener("click", btn7Func);
    button8.addEventListener("click", btn8Func);

    if (winnerMessage.textContent === "Player 1 Wins!") {
      truescore0++;
      score0El.textContent = truescore0;
    } else if (winnerMessage.textContent === "Player 2 Wins!") {
      truescore1++;
      score1El.textContent = truescore1;
    }
  };

  overlay.addEventListener("click", innit);
  winnerMessage.addEventListener("click", innit);
});

//---------------------------------------player 1 is X----------------------------------------------------

cross_choice.addEventListener("click", function () {
  console.log("clicked O");
  opening_choice.classList.add("hidden");

  //function for switching player
  const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
  };

  //function for player 1 winning
  const player1Winner = function () {
    winnerMessage.textContent = "Player 1 Wins!";
    winnerMessage.style = "font-size: 50px";
    winnerMessage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  //function for player 2 winning
  const player2Winner = function () {
    winnerMessage.textContent = "Player 2 Wins!";
    winnerMessage.style = "font-size: 50px";
    winnerMessage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  //function for running a check if player is winning
  const checkWinner = function (n) {
    if (activePlayer === 0) {
      score0.push(n);
    } else {
      score1.push(n);
    }
    //check for O's
    for (let i = 0; i < score0.length; i++) {
      if (score0.includes(0) && score0.includes(1) && score0.includes(2)) {
        player1Winner();
      } else if (
        score0.includes(3) &&
        score0.includes(4) &&
        score0.includes(5)
      ) {
        player1Winner();
      } else if (
        score0.includes(6) &&
        score0.includes(7) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(3) &&
        score0.includes(6)
      ) {
        player1Winner();
      } else if (
        score0.includes(1) &&
        score0.includes(4) &&
        score0.includes(7)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(5) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(4) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(4) &&
        score0.includes(6)
      ) {
        player1Winner();
      }
    }

    //check for X's
    for (let i = 0; i < score1.length; i++) {
      if (score1.includes(0) && score1.includes(1) && score1.includes(2)) {
        player2Winner();
      } else if (
        score1.includes(3) &&
        score1.includes(4) &&
        score1.includes(5)
      ) {
        player2Winner();
      } else if (
        score1.includes(6) &&
        score1.includes(7) &&
        score1.includes(8)
      ) {
        player2Winner();
      } else if (
        score1.includes(0) &&
        score1.includes(3) &&
        score1.includes(6)
      ) {
        player2Winner();
      } else if (
        score1.includes(1) &&
        score1.includes(4) &&
        score1.includes(7)
      ) {
        player2Winner();
      } else if (
        score1.includes(2) &&
        score1.includes(5) &&
        score1.includes(8)
      ) {
        player2Winner();
      } else if (
        score1.includes(0) &&
        score1.includes(4) &&
        score1.includes(8)
      ) {
        player2Winner();
      } else if (
        score1.includes(2) &&
        score1.includes(4) &&
        score1.includes(6)
      ) {
        player2Winner();
      }
    }

    //for draw
    let scoreSum = [...score0, ...score1];
    if (scoreSum.length >= 9) {
      if (score0.includes(0) && score0.includes(1) && score0.includes(2)) {
        player1Winner();
      } else if (
        score0.includes(3) &&
        score0.includes(4) &&
        score0.includes(5)
      ) {
        player1Winner();
      } else if (
        score0.includes(6) &&
        score0.includes(7) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(3) &&
        score0.includes(6)
      ) {
        player1Winner();
      } else if (
        score0.includes(1) &&
        score0.includes(4) &&
        score0.includes(7)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(5) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(0) &&
        score0.includes(4) &&
        score0.includes(8)
      ) {
        player1Winner();
      } else if (
        score0.includes(2) &&
        score0.includes(4) &&
        score0.includes(6)
      ) {
        player1Winner();
      } else {
        winnerMessage.textContent = "It's a Draw!";
        winnerMessage.style = "font-size: 50px";
        winnerMessage.classList.remove("hidden");
        overlay.classList.remove("hidden");
      }
    }
  };

  const btn0Func = function () {
    btn_img0.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img0.src = "cross.png")
      : (btn_img0.src = "circle.png");
    checkWinner(0);
    switchPlayer();
    button0.removeEventListener("click", btn0Func);
  };

  const btn1Func = function () {
    btn_img1.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img1.src = "cross.png")
      : (btn_img1.src = "circle.png");
    checkWinner(1);
    switchPlayer();
    button1.removeEventListener("click", btn1Func);
  };

  const btn2Func = function () {
    btn_img2.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img2.src = "cross.png")
      : (btn_img2.src = "circle.png");
    checkWinner(2);
    switchPlayer();
    button2.removeEventListener("click", btn2Func);
  };

  const btn3Func = function () {
    btn_img3.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img3.src = "cross.png")
      : (btn_img3.src = "circle.png");
    checkWinner(3);
    switchPlayer();
    button3.removeEventListener("click", btn3Func);
  };

  const btn4Func = function () {
    btn_img4.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img4.src = "cross.png")
      : (btn_img4.src = "circle.png");
    checkWinner(4);
    switchPlayer();
    button4.removeEventListener("click", btn4Func);
  };

  const btn5Func = function () {
    btn_img5.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img5.src = "cross.png")
      : (btn_img5.src = "circle.png");
    checkWinner(5);
    switchPlayer();
    button5.removeEventListener("click", btn5Func);
  };

  const btn6Func = function () {
    btn_img6.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img6.src = "cross.png")
      : (btn_img6.src = "circle.png");
    checkWinner(6);
    switchPlayer();
    button6.removeEventListener("click", btn6Func);
  };

  const btn7Func = function () {
    btn_img7.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img7.src = "cross.png")
      : (btn_img7.src = "circle.png");
    checkWinner(7);
    switchPlayer();
    button7.removeEventListener("click", btn7Func);
  };

  const btn8Func = function () {
    btn_img8.classList.remove("hidden");

    activePlayer === 0
      ? (btn_img8.src = "cross.png")
      : (btn_img8.src = "circle.png");
    checkWinner(8);
    switchPlayer();
    button8.removeEventListener("click", btn8Func);
  };

  button0.addEventListener("click", btn0Func);
  button1.addEventListener("click", btn1Func);
  button2.addEventListener("click", btn2Func);
  button3.addEventListener("click", btn3Func);
  button4.addEventListener("click", btn4Func);
  button5.addEventListener("click", btn5Func);
  button6.addEventListener("click", btn6Func);
  button7.addEventListener("click", btn7Func);
  button8.addEventListener("click", btn8Func);

  //new game

  const innit = function () {
    overlay.classList.add("hidden");
    winnerMessage.classList.add("hidden");
    activePlayer = 0;
    score0 = [];
    score1 = [];
    scoreSum = [];

    btn_img0.classList.add("hidden");
    btn_img1.classList.add("hidden");
    btn_img2.classList.add("hidden");
    btn_img3.classList.add("hidden");
    btn_img4.classList.add("hidden");
    btn_img5.classList.add("hidden");
    btn_img6.classList.add("hidden");
    btn_img7.classList.add("hidden");
    btn_img8.classList.add("hidden");

    button0.addEventListener("click", btn0Func);
    button1.addEventListener("click", btn1Func);
    button2.addEventListener("click", btn2Func);
    button3.addEventListener("click", btn3Func);
    button4.addEventListener("click", btn4Func);
    button5.addEventListener("click", btn5Func);
    button6.addEventListener("click", btn6Func);
    button7.addEventListener("click", btn7Func);
    button8.addEventListener("click", btn8Func);

    if (winnerMessage.textContent === "Player 1 Wins!") {
      truescore0++;
      score0El.textContent = truescore0;
    } else if (winnerMessage.textContent === "Player 2 Wins!") {
      truescore1++;
      score1El.textContent = truescore1;
    }
  };

  overlay.addEventListener("click", innit);
  winnerMessage.addEventListener("click", innit);
});
