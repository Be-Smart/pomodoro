'use strict';

import template from './clock.pug';
import './clock.sass';

export default class Clock {
  constructor(el) {
    this._elem = el;
    this._elem.innerHTML = template();
  }
}
