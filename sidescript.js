init = () => {
  const startEvent = navigator.userAgent.match(/ipod|ipad|iphone/i) ?
    'touchstart' :
    'click';

  const body = document.querySelector('body');
  const close = document.querySelector('#close');
  const greeting = document.querySelector('#greeting');
  const modal = document.querySelector('#modal');
  const modalText = document.querySelector('#modalText');
  const sound = document.querySelector('#sound');

  const message = [
    'For unto us ',
    'a Child is born, ',
    'Unto us ',
    'a Son is given; ',
    'all power and dominion ',
    'will be upon ',
    'His shoulder. ',
    'And His name, ',
    'will be called... ',
    'Wonderful, ',
    'Counselor, ',
    'Mighty God, ',
    'Everlasting Father, ',
    'Prince of Peace! ',
    ' - Isaiah 9:6 ',
    ' ',
    'Rejoice! ',
    'Merry Christmas! '
  ];

  const song =
    'https://www.dropbox.com/s/55gzajpe1wkuafp/MaryDidYouKnow-OneVoiceChildrensChoir.mp3?raw=1';

  /*
  Be sure to visit #OneVoiceChildrensChoir link to Youtube...
  https://www.youtube.com/watch?v=sNYpxYKtC_w&list=PLyOD0lTWtynOrxqw3o8upA43yR7iXB9fO
  ...They are Really an Amazing Childrens Choir!
  */

  let audio = new Audio(song);
  audio.load();
  audio.pause();
  audio.loop = false;

  function modalOff() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    greeting.style.opacity = '1';
    modalText.style.opacity = '0';
    close.style.visibility = 'hidden';
    close.removeEventListener(startEvent, modalOff);
    pauseAudio();
  }

  function modalOn() {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    greeting.style.fontSize = '7vmin';
    greeting.style.opacity = '0';
    greeting.innerHTML = '';
    modalText.style.opacity = '1';
    body.style.setProperty('--hidden', '0');
    close.style.visibility = 'visible';
    close.style.opacity = '0.5';
    close.addEventListener(startEvent, modalOff);
  }

  function pauseAudio() {
    audio.paused ? audio.play() : audio.pause();
    audio.paused ? (sound.innerText = '🔇') : (sound.innerText = '🔊');
  }

  function displayText(msg) {
    greeting.innerHTML = message[msg];
    greeting.style.opacity = '0.8';
    return;
  }

  modalOn();

  sound.addEventListener(startEvent, pauseAudio);

  audio.addEventListener('playing', function () {
    audio.ontimeupdate = function () {
      let ct = audio.currentTime;

      switch (true) {
        case ct > 198:
          greeting.style.fontSize = '7vmin';
          break;

        case ct > 190:
          greeting.style.fontSize = 'calc(100vw / 10)';
          greeting.style.opacity = '0';
          break;

        case ct > 177:
          displayText(17);
          greeting.style.opacity = '1';
          greeting.style.transition = '10s';
          break;

        case ct > 173:
          greeting.style.opacity = '0';
          break;

        case ct > 168.5:
          displayText(16);
          break;

        case ct > 164:
          greeting.style.opacity = '0';
          break;

        case ct > 159.5:
          displayText(15);
          break;

        case ct > 155:
          greeting.style.opacity = '0';
          break;

        case ct > 146:
          displayText(14);
          break;

        case ct > 141.5:
          greeting.style.opacity = '0';
          break;

        case ct > 137:
          displayText(13);
          break;

        case ct > 132.5:
          greeting.style.opacity = '0';
          break;

        case ct > 128:
          displayText(12);
          break;

        case ct > 123.5:
          greeting.style.opacity = '0';
          break;

        case ct > 119:
          displayText(11);
          break;

        case ct > 114.5:
          greeting.style.opacity = '0';
          break;

        case ct > 110:
          displayText(10);
          break;

        case ct > 105.5:
          greeting.style.opacity = '0';
          break;

        case ct > 102:
          displayText(9);
          break;

        case ct > 97.5:
          greeting.style.opacity = '0';
          break;

        case ct > 93:
          displayText(8);
          break;

        case ct > 88.5:
          greeting.style.opacity = '0';
          break;

        case ct > 84:
          displayText(7);
          break;

        case ct > 79.5:
          greeting.style.opacity = '0';
          break;

        case ct > 75:
          displayText(6);
          break;

        case ct > 70.5:
          greeting.style.opacity = '0';
          break;

        case ct > 66:
          displayText(5);
          break;

        case ct > 61.5:
          greeting.style.opacity = '0';
          break;

        case ct > 57:
          displayText(4);
          break;

        case ct > 52.5:
          greeting.style.opacity = '0';
          break;

        case ct > 48:
          displayText(3);
          break;

        case ct > 43.5:
          greeting.style.opacity = '0';
          break;

        case ct > 39:
          displayText(2);
          break;

        case ct > 34.5:
          greeting.style.opacity = '0';
          break;

        case ct > 30:
          displayText(1);
          break;

        case ct > 25.5:
          greeting.style.opacity = '0';
          break;

        case ct > 21:
          displayText(0);
          break;

        case ct > 9.5:
          body.style.setProperty('--hidden', '0.5');
          break;

        case ct > 9:
          greeting.style.transition = '5s';
          greeting.style.opacity = '0';
          break;
      }
    };
  });

  audio.addEventListener('ended', function () {
    audio.pause();
    audio.currentTime = 0;
    modalOn();
  });
};

document.addEventListener('DOMContentLoaded', init);