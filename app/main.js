'use strict';

import Clock from './clock';

const clockComponents = document.querySelectorAll('[data-component="clock"]');

Array.from(clockComponents).forEach(el => new Clock(el));
