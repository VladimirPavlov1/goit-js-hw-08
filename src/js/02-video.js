var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
console.dir(iframe)
const player = new Vimeo.Player(iframe)
console.log(player)
player.on('timeupdate',throttle(function(data) {
    data.preventDefault
    let currentTime = data.seconds
    console.log(currentTime)
    localStorage.setItem('videoplayer-current-time',currentTime)
  
},1000));
let localCurrentTime =Number(localStorage.getItem("videoplayer-current-time"))
console.log(localCurrentTime)

player.setCurrentTime(localCurrentTime).then(function(seconds) {
    seconds=localCurrentTime
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            localCurrentTime<0;
            break;

        default:
            // some other error occurred
            break;
    }
});

