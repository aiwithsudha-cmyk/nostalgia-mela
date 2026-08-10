const player = document.getElementById("videoPlayer");
const seekBar = document.getElementById("seekBar");
const volume = document.getElementById("volume");
const crowd = document.getElementById("crowdSound");

const playlist = [
  "videos/rhyme1.mp4",
  "videos/rhyme2.mp4",
  "videos/rhyme3.mp4",
  "videos/rhyme4.mp4"
];

let index = 0;

document.addEventListener("click", () => {
  bgVideo.muted = false;
}, { once: true });


/* ▶ Load video */
function loadVideo(i) {
  player.src = playlist[i];
  player.play();
}

/* ⏯ Play/Pause */
function togglePlay() {
  if (player.paused) {
    player.play();
    // crowd.play(); // 🔊 start ambient sound
  } else {
    player.pause();
  }
}

/* ⏭ Next */
function nextVideo() {
  index = (index + 1) % playlist.length;
  loadVideo(index);
}

/* ⏮ Prev */
function prevVideo() {
  index = (index - 1 + playlist.length) % playlist.length;
  loadVideo(index);
}

/* ⏩ Seek */
player.addEventListener("timeupdate", () => {
  seekBar.value = (player.currentTime / player.duration) * 100;
});

seekBar.addEventListener("input", () => {
  player.currentTime = (seekBar.value / 100) * player.duration;
});

/* 🔊 Volume */
volume.addEventListener("input", () => {
  player.volume = volume.value;
});

/* 🔁 Auto next */
player.addEventListener("ended", nextVideo);

/* 🚀 Start */
loadVideo(index);
