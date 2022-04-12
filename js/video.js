const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const slowerButton = document.querySelector("#slower");
const fasterButton = document.querySelector("#faster");
const skipButton = document.querySelector("#skip");
const player = document.querySelector("#player1");
const muteButton = document.querySelector("#mute");
const slider = document.querySelector("#slider");
const origStyleButton = document.querySelector("#orig");
const vintageStyleButton = document.querySelector("#vintage");
const volume = document.querySelector("#volume");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  player.loop = false;
  player.preload = true;
  player.autoplay = false;
});

playButton.addEventListener("click", function () {
  player.play();
  volume.innerHTML = player.volume * 100 + "%";
});

pauseButton.addEventListener("click", function () {
  player.pause();
});

slowerButton.addEventListener("click", function () {
  player.playbackRate *= 0.95;
  console.log(play.playbackRate);
});

fasterButton.addEventListener("click", function () {
  player.playbackRate /= 0.95;
  console.log(play.playbackRate);
});

slider.addEventListener("change", function (e) {
  if (mute.innerHTML == "Unmute") {
    player.muted = false;
    mute.innerHTML = "Mute";
  }
  volume.innerHTML = e.target.value + "%";
  player.volume = e.target.value / 100;
});

skipButton.addEventListener("click", function () {
  if (player.currentTime < player.duration - 15.001) {
    player.currentTime += 15;
  } else {
    player.currentTime = 0;
  }
  console.log(player.currentTime);
});

muteButton.addEventListener("click", function () {
  if (mute.innerHTML == "Mute") {
    player.muted = true;
    mute.innerHTML = "Unmute";
    slider.value = 0;
  } else {
    player.muted = false;
    mute.innerHTML = "Mute";
    slider.value = player.volume * 100;
  }
});

origStyleButton.addEventListener("click", function () {
  player.classList.remove("oldSchool");
});

vintageStyleButton.addEventListener("click", function () {
  player.classList.add("oldSchool");
});
