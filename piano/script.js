let keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', playNote);
});

function playNote(e) {
  let key = e.target;
  let note = document.getElementById(key.dataset.note);
  key.classList.add('active');
  note.currentTime = 0;
  note.play();
  note.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}


window.addEventListener('keydown', function (e) {
  if (e.shiftKey) {
    audio = document.querySelector(`audio[data-key="shift+${e.keyCode}"]`);
    key = document.querySelector(`.key[data-key="shift+${e.keyCode}"]`);
  } else {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  }
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
  audio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
});