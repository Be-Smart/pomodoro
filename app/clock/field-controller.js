'use strict';

export default class FieldController {
  constructor(options) {
    this._elem = options.elem;
    this._minutesElem = options.minutesElem;
    this._inputAttribute = options.inputAttribute;
    this._sessionFieldId = options.sessionFieldId;

    this._elem.addEventListener('input', this._onFieldValueChange.bind(this));
    this._elem.addEventListener('keypress', this._onFieldKeyPress.bind(this));
    this._elem.addEventListener('focus', this._onFieldFocus.bind(this), true);
  }

  _onFieldValueChange (event) {
    let inputElem = event.target.closest(this._inputAttribute);
    let fieldValue = inputElem.value;

    if (fieldValue < 1) {
      fieldValue = inputElem.value = 1;
    } else if (fieldValue > 60) {
      fieldValue = inputElem.value = 60;
    } else if (fieldValue.length > 2 || fieldValue[0] < 1) {
      fieldValue = inputElem.value = fieldValue.slice(1);
    }

    if (inputElem.id === this._sessionFieldId) {
      if (fieldValue < 10) fieldValue = `0${fieldValue}`;
      this._minutesElem.innerHTML = fieldValue;
    }
  }

  _onFieldFocus (event) {
    let target = event.target.closest(this._inputAttribute);
    if (!target) return;
    target.select();
  }

  _onFieldKeyPress (event) {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    let char = this._getChar(event);

    if (char == null) return;

    if (char < '0' || char > '9') {
      event.preventDefault();
    }
  }

  _getChar (event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which);
    }

    return null;
  }

}
