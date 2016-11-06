'use strict';

import template from './clock.pug';
import './clock.sass';

export default class Clock {
  constructor(el) {
    this._elem = el;
    this._elem.innerHTML = template();
    this._elem.addEventListener('click', this._toggle.bind(this));
    this._timerDisplay = this._elem.querySelector('[data-display="timer"]');
    this._settingsDisplay = this._elem.querySelector('[data-display="settings"]');
  }

  _toggle(event) {
    let elem = event.target.closest('[data-element="btn"]');
    let dataSet = event.target.dataset.btn;
    if (!elem) return;
    this._timerDisplay.classList.toggle('js-hidden');
    this._settingsDisplay.classList.toggle('js-hidden');
  }

}
