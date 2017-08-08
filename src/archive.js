import './css/font-awesome.min.css';
import './css/github-markdown.css';
import './css/base.css';
import './css/archive.css';

import './js/common.js';
import draw from './js/triangle-canvas.js';

var canvas = document.querySelector('.triangle-canvas');
if (canvas) {
    draw(false, canvas);
}

