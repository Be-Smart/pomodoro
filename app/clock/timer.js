'use strict';

export default class Timer {
  constructor(options) {
    this._minutesElem = options.minutes;
    this._secondsElem = options.seconds;
  }

  start(minutes){
    this._defaultTime = minutes;
    let timeInSeconds = minutes * 60 -1;

    this._timer = setInterval( () => {
      let time = this._updateTime(timeInSeconds);

      this._minutesElem.innerHTML = time.minutes;
      this._secondsElem.innerHTML = time.seconds;

      timeInSeconds--;
    }, 1000 );

  }

  stop() {
    clearInterval(this._timer);
    this._minutesElem.innerHTML = this._defaultTime;
    this._secondsElem.innerHTML = '00';
  }

  _updateTime(time) {
    if (time < 1) clearInterval(this._timer);

    let min = Math.floor( (time/60) % 60 );
    if (min < 10) min = `0${min}`;

    let sec = Math.floor(time % 60);
    if (sec < 10) sec = `0${sec}`;

    return {
      minutes: min,
      seconds: sec
    };
  }

}
