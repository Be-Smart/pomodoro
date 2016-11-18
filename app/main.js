'use strict';

import Clock from './clock';

const clockComponents = document.querySelectorAll('[data-component="clock"]');

[].forEach.call(clockComponents, el => new Clock(el));
