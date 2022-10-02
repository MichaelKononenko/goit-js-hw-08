import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveData, 1000));
function saveData(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

// player.on('play', data => {
//   const savedTime = localStorage.getItem('videoplayer-current-time');
//   if (data.seconds !== savedTime && savedTime) {
//     player.setCurrentTime(savedTime);
//   }
// });

// if (localStorage.getItem('videoplayer-current-time')) {
//   const savedTime = localStorage.getItem('videoplayer-current-time');
//   player.setCurrentTime(savedTime);
// }
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
