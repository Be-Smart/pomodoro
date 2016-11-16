'use strict';

import template from './clock.pug';
import './clock.sass';
import Timer from './timer';
import FieldController from './field-controller';

export default class Clock {
  constructor(elem) {
    this._elem = elem;
    this._elem.innerHTML = template();
    this._counting = false;

    this._minutesElem = this._elem.querySelector('[data-element="minutes"]');
    this._stateElem = this._elem.querySelector('[data-element="state"]')

    new FieldController ({
      elem: this._elem,
      minutesElem: this._minutesElem,
      inputAttribute: '[data-element="field"]',
      sessionFieldId: 'session'
    });

    this._timer = new Timer({
      minutesElem: this._minutesElem,
      secondsElem: this._elem.querySelector('[data-element="seconds"]'),
      stateElem: this._stateElem
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
    this._stateElem.style.color = this._counting ? 'rgba(168, 210, 240, 0.9)' : '';
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
