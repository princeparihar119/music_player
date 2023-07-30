document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const volumeSlider = document.getElementById("volumeSlider");
    const progressBar = document.getElementById("progress");
    const nextBtn = document.getElementById("nextBtn");
    
    playPauseBtn.addEventListener("click", function () {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
      } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
      }
    });
  
    volumeSlider.addEventListener("input", function () {
      audioPlayer.volume = volumeSlider.value;
    });
  
    audioPlayer.addEventListener("timeupdate", function () {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressBar.style.width = progress + "%";
    });
  });
  