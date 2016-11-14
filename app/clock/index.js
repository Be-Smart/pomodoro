'use strict';

import template from './clock.pug';
import './clock.sass';
import Timer from './timer';

export default class Clock {
  constructor(el) {
    this._elem = el;
    this._elem.innerHTML = template();
    this._counting = false;

    this._minutesElem = this._elem.querySelector('[data-element="minutes"]');
    this._timer = new Timer({
      minutesElem: this._elem.querySelector('[data-element="minutes"]'),
      secondsElem: this._elem.querySelector('[data-element="seconds"]'),
      stateElem: this._elem.querySelector('[data-element="state"]')
    });

    this._elem.addEventListener('click', this._onClockDisplayClick.bind(this));
    this._elem.addEventListener('input', this._onInputValueChange.bind(this));
  }

  _onInputValueChange (event) {
    let inputElem = event.target.closest('[data-element="field"]');
    let fieldValue = inputElem.value;

    if ( isNaN(fieldValue) || fieldValue < 1 || fieldValue > 60 ) {
      fieldValue = inputElem.value = 1;
      console.log(fieldValue);
    }

    if (inputElem.id === 'session') {
      if (fieldValue < 10) fieldValue = `0${fieldValue}`;
      this._minutesElem.innerHTML = fieldValue;
    }
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
    let sessionValue = this._elem.querySelector('#session').value;
    if (sessionValue < 10) sessionValue = `0${sessionValue}`;

    let breakValue = this._elem.querySelector('#break').value;
    if (breakValue < 10) breakValue = `0${breakValue}`;

    if (!this._counting) {
      this._timer.start(sessionValue, breakValue);
      this._counting = true;
    } else {
      this._timer.stop(sessionValue);
      this._counting = false;
    }
  }

}
