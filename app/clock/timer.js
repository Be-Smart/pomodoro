'use strict';

export default class Timer {
  constructor(options) {
    this._minutesElem = options.minutesElem;
    this._secondsElem = options.secondsElem;
    this._stateElem = options.stateElem;
    this._isSession = true;
  }

  start(sessionLength, pauseLength) {
    this._sessionLength = sessionLength;
    this._breakLength = pauseLength;
    this._timeInSeconds = (this._isSession ? this._sessionLength : this._breakLength) * 60 - 1;

    this._timer = setInterval( () => {
      let time = this._updateTime(this._timeInSeconds);
      this._render(time.minutes, time.seconds);
    }, 1000 );
  }

  stop(sessionLength) {
    clearInterval(this._timer);
    this._isSession = true;
    this._render(sessionLength);
  }

  _updateTime(time) {
    if (time < 1) {
      this._isSession = this._isSession ? false : true;
      this._timeInSeconds = (this._isSession ? this._sessionLength : this._breakLength) * 60 + 1;
    }

    let min = Math.floor( (time/60) % 60 );
    if (min < 10) min = `0${min}`;

    let sec = Math.floor(time % 60);
    if (sec < 10) sec = `0${sec}`;

    this._timeInSeconds--;

    return {
      minutes: min,
      seconds: sec
    };
  }

  _render (minutes='00', seconds='00') {
    this._minutesElem.innerHTML = minutes;
    this._secondsElem.innerHTML = seconds;
    this._stateElem.innerHTML = this._isSession ? 'Focus' : 'Break';
  }

}
