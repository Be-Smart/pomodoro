'use strict';

import template from './clock.pug';
import './clock.sass';
import Timer from './timer';

export default class Clock {
  constructor(el) {
    this._elem = el;
    this._elem.innerHTML = template();
    this._counting = false;

    // this._minutesElem = this._elem.querySelector('[data-element="minutes"]');
    this._timer = new Timer({
      minutesElem: this._elem.querySelector('[data-element="minutes"]'),
      secondsElem: this._elem.querySelector('[data-element="seconds"]')
    });

    this._elem.addEventListener('click', this._onClockDisplayClick.bind(this));
  }

  _onClockDisplayClick(event) {
    let btnElem = event.target.closest('[data-element="btn"]');
    let unitsElem = event.target.closest('[data-element="units"]');

    if (btnElem) {
      this._toggleClockDisplay();
    } else if (unitsElem) {
      this._switchTimerState();
    }
  }

  _toggleClockDisplay () {
    let timerDisplay = this._elem.querySelector('[data-display="timer"]');
    let settingsDisplay = this._elem.querySelector('[data-display="settings"]');

    timerDisplay.classList.toggle('js-hidden');
    settingsDisplay.classList.toggle('js-hidden');
  }

  _switchTimerState () {
    let inputValue = this._elem.querySelector('#session').value;
    console.log(inputValue);
    if (!this._counting) {
      this._timer.start(inputValue);
      this._counting = true;
    } else {
      this._timer.stop();
      this._counting = false;
    }
  }

}
