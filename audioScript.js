var audio = new Audio('./SampleAudio_0.4mb.mp3');

audio.oncanplaythrough = function() {
  audio.play();
};

audio.loop = true;

audio.onended = function() {
  audio.play();
};
