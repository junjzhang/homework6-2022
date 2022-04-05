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
    media.muted = false;
    mute.innerHTML = "Mute";
  }
  volume.innerHTML = e.target.value + "%";
  player.volume = e.target.value / 100;
});
