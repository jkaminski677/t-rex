const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");

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

  if (cactusLeft < dinoLeft && cactusLeft > dinoLeft - 20 && dinoTop >= 140) {
    alert("Game Over!");
    // console.log("colision");
  }
  if (birdLeft < dinoLeft && birdLeft > dinoLeft - 20 && dinoTop <= 160) {
    alert("Game Over!");
    // console.log("colision");
  }
}, 10);

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
