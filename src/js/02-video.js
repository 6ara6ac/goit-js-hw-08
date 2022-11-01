import Vimeo from '@vimeo/player';
let throttle = require('lodash.throttle');

    const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

    player.on('timeupdate', throttle(onPlay,1000));
  
    function onPlay () {
    this.getCurrentTime().then(function(sec) {
        console.log ('Current time ' + sec);
        return localStorage.setItem("videoplayer-current-time", sec);
    })
};

player.setCurrentTime (localStorage.getItem("videoplayer-current-time"));






