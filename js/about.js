document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('my-video');
    var playButton = document.getElementById('play-button');
    var pauseButton = document.getElementById('pause-button');
  
    playButton.addEventListener('click', function() {
      video.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    });
  
    pauseButton.addEventListener('click', function() {
      video.pause();
      pauseButton.style.display = 'none';
      playButton.style.display = 'block';
    });

    video.addEventListener('pause', function() {
        if (!playButton) {
          playButton = document.createElement('div');
          playButton.id = 'play-button';
          playButton.innerHTML = '&#x25B6;';
          playButton.addEventListener('click', function() {
            video.play();
            playButton.style.display = 'none';
          });
          videoContainer.appendChild(playButton);
        }
      });
    });