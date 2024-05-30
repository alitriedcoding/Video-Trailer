const btnEl = document.querySelector(".btn");
const videocontainerEl = document.querySelector(".video_container");
const exitEl = document.querySelector(".exit");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  videocontainerEl.classList.remove("active");
});

exitEl.addEventListener("click", () => {
  videocontainerEl.classList.add("active");
  videoEl.pause;
  videoEl.currentTime = 0;
});
