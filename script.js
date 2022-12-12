const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");
let scores = 0;
let getIntoContact = 0;
let amountOfLeft = 0;
let amountOfRight = 0;
let amountOfUp = 0;
let Amount = 0;
let allbuttonsToCode = 0;
let birdTime = 4500;

function jump() {
  dinoOryg();
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
      getIntoContact = 0;
    }, 600);
  }
}

function Upjump() {
  amountOfUp++;
  StarCoding(amountOfLeft, amountOfRight, amountOfUp);
  dinoOryg();
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
      getIntoContact = 0;
    }, 600);
  }
}

function down() {
  dino.classList.remove("dinoClass");
  dino.classList.add("down");
}
function dinoOryg() {
  dino.classList.remove("down");
  dino.classList.add("dinoClass");
  getIntoContact = 0;
}

function move(e) {
  var k = e.keyCode,
    chrId = document.getElementById("dino"),
    chr = {
      leftright: function () {
        var x = parseInt(getComputedStyle(chrId).left);
        if (k == 39) {
          x += 7;
        } else if (k == 37) {
          x -= 7;
        }
        return x;
      },
    };

  chrId.style.left = chr.leftright() + "px";
}

function LeftClickMove() {
  amountOfLeft++;
  StarCoding(amountOfLeft, amountOfRight, amountOfUp);
  amountOfLeft++;
  (chrId = document.getElementById("dino")),
    (chr = {
      leftright: function () {
        var x = parseInt(getComputedStyle(chrId).left);
        x -= 7;
        return x;
      },
    });

  chrId.style.left = chr.leftright() + "px";
}

function RightClickMove() {
  amountOfRight++;
  StarCoding(amountOfLeft, amountOfRight, amountOfUp);

  (chrId = document.getElementById("dino")),
    (chr = {
      leftright: function () {
        var x = parseInt(getComputedStyle(chrId).left);
        x += 7;
        return x;
      },
    });

  chrId.style.left = chr.leftright() + "px";
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let dinoLeft = parseInt(
    window.getComputedStyle(dino).getPropertyValue("left")
  );
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  let birdLeft = parseInt(
    window.getComputedStyle(bird).getPropertyValue("left")
  );

  if (
    cactusLeft < dinoLeft + 20 &&
    cactusLeft > dinoLeft - 20 &&
    dinoTop >= 140
  ) {
    dino.classList.remove("dinoClass");
    dino.classList.add("collision");
    // delay(40).then(() => alert("Game Over!"));
    // console.log("colision");
  } else {
    ScorePoint(dinoLeft, cactusLeft, birdLeft);
  }
  if (birdLeft < dinoLeft + 20 && birdLeft > dinoLeft + 10 && dinoTop <= 160) {
    dino.classList.remove("dinoClass");
    dino.classList.add("collision");
    // delay(40).then(() => alert("Game Over!"));
    // console.log("colision");
  } else {
    ScorePoint(dinoLeft, cactusLeft, birdLeft);
  }
}, 10);

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Bird Animation
setInterval(function () {
  birdCord = document.getElementById("bird");
  var x = parseInt(window.getComputedStyle(birdCord).getPropertyValue("left"));
  if (x < 0) {
    bird.classList.remove("birdFly");
  }
}, 10);

setInterval(function () {
  bird.classList.add("birdFly");
}, birdTime);


function ScorePoint(dinoLeft, cactusLeft, birdLeft) {
  if (getIntoContact == 0) {
    if (
      (cactusLeft < dinoLeft && cactusLeft > dinoLeft - 40) ||
      (birdLeft < dinoLeft && birdLeft > dinoLeft - 40)
    ) {
      scores++;
      document.getElementById("score").innerHTML = "Score: " + scores;
      getIntoContact = 1;
    }
  }
}

function StarCoding(lef, rig, u) {
  if (lef == 1) {
    setInterval(function () {
      Amount++;
      // console.log(Amount);
    }, 1000);
  }
  if (Amount > 0 && Amount < 10) {
    if (lef / 2 == 3 && rig == 6 && u == 9) {
      console.log("xd");
      dino.classList.remove("dinoClass");
      dino.classList.remove("down");
      cactus.classList.remove("cactuses");
      bird.classList.remove("birdFly");
      document.getElementById("bird").remove();
    }
  }
}

document.addEventListener("keydown", move);

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 38 || event.keyCode === 32) {
    jump();
  }
  if (event.keyCode === 40) {
    down();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 40) {
    dinoOryg();
  }
});
