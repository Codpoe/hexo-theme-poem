import './css/font-awesome.min.css';
import './css/base.css';
import './css/archive.css';

import './js/common.js';
import draw from './js/triangle-canvas.js';

var canvas = document.querySelector('.triangle-canvas');
var wrapper = document.querySelector('.wrapper');

if (canvas) {
    draw(false, canvas);
}

window.onload = function (ev) {
    wrapper.classList.add('wrapper--show');
}

