import draw from './triangle-canvas.js';

var firstScreen = document.querySelector('.first-screen');
var name = document.querySelector('.center .name');
var description = document.querySelector('.first-screen .description');
var links = document.querySelector('.first-screen .links');
var entryBtn = document.querySelector('.entry-btn');
var headerWrapper = document.querySelector('.header-wrapper');
var wrapper = document.querySelector('.wrapper');
var triangleCanvas = document.getElementsByClassName('triangle-canvas');

/**
 * fly animation
 */
if (entryBtn) {
    draw(true, triangleCanvas[0]);
    entryBtn.addEventListener('click', function (ev) {
        name.classList.add('name--fly-out');
        description.classList.add('description--fly-out');
        links.classList.add('links--fly-out');
        entryBtn.classList.add('entry-btn--fly-out');
        headerWrapper.classList.add('header-wrapper--show');
        wrapper.classList.add('wrapper--show');
        triangleCanvas[0].classList.add('triangle-canvas--hidden');
        if (triangleCanvas.length === 2) {
            setTimeout(function () {
                draw(false, triangleCanvas[0]);
                triangleCanvas[0].classList.remove('triangle-canvas--hidden');
            }, 900);
        }    
    });
} else {
    headerWrapper.classList.add('header-wrapper--show');
    wrapper.classList.add('wrapper--visible');
    if (triangleCanvas[0]) {
        draw(false, triangleCanvas[0]);
    }    
}

/**
 * the long shadow of name in the first-screen
 */
function getLongShadow(startColor = '212,213,213', stepNum = 12, ratioX = 1, ratioY = 1) {
    let textShadow = '';
    let alpha;
    let color;
    let seperator = ',';

    for (let i = 0.5; i <= stepNum; i=i+0.5) {
        alpha = (1 - (i - 0.5) / stepNum) * 0.6;
        color = `rgba(${startColor}, ${alpha})`;
        if (i === stepNum) {
            seperator = '';
        }
        textShadow += `${i * ratioX}px ${i * ratioY}px ${color}${seperator}`;
    }
    return textShadow;
}

/**
 * dynamic long shadow
 */
if (name) {
    name.style.textShadow = getLongShadow('212,213,213', 12);
    let rect = name.getBoundingClientRect();
    let focus = { x: rect.left, y: rect.top };
    let mouse = { x: 0, y: 0 };
    let width = (window.innerWidth - focus.x) * 3 / 4;
    let height = (window.innerHeight - focus.y) * 3 / 4;
    let ratioX;
    let ratioY;
    firstScreen.addEventListener('mousemove', function (ev) {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        ratioX = (mouse.x - focus.x) / width;
        ratioY = (mouse.y - focus.y) / height;
        name.style.textShadow = getLongShadow('212,213,213', 12, ratioX, ratioY);
    });
}

