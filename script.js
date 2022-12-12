const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");
let scores = 0;
let getIntoContact = 0;

function jump() {
  dinoOryg();
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
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

  if (cactusLeft < dinoLeft + 20 && cactusLeft > dinoLeft && dinoTop >= 140) {
    dino.classList.remove("dinoClass");
    dino.classList.add("collision");
    delay(40).then(() => alert("Game Over!"));
    // console.log("colision");
  } else {
    ScorePoint(dinoLeft, cactusLeft, birdLeft);
  }
  if (birdLeft < dinoLeft + 20 && birdLeft > dinoLeft && dinoTop <= 160) {
    dino.classList.remove("dinoClass");
    dino.classList.add("collision");
    delay(40).then(() => alert("Game Over!"));
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
  //   console.log(x);
  if (x < 0) {
    // console.log(x);
    bird.classList.remove("birdFly");
  }
}, 10);

setInterval(function () {
  bird.classList.add("birdFly");
}, 4500);

function ScorePoint(dinoLeft, cactusLeft, birdLeft) {
  if (cactusLeft < dinoLeft + 20 && cactusLeft > dinoLeft) {
    getIntoContact += 1;
    if (getIntoContact === 1) {
      scores++;
      getIntoContact = 0;
    }
  }
  if (birdLeft < dinoLeft + 20 && birdLeft > dinoLeft) {
    scores += 1;
    console.log(scores);
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
