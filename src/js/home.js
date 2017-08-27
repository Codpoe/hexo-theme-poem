var gradients = [
    { left: '#fffbd5', right: '#b20a2c' },
    { left: '#74ebd5', right: '#ACB6E5' },
    { left: '#22c1c3', right: '#fdbb2d' },
    { left: '#1c92d2', right: '#f2fcfe' },
    { left: '#283c86', right: '#45a247' },
    { left: '#000046', right: '#1CB5E0' },
    { left: '#007991', right: '#78ffd6' },
    { left: '#EB5757', right: '#000000' },
    { left: '#4AC29A', right: '#BDFFF3' },
    { left: '#20002c', right: '#cbb4d4' },
    { left: '#4568DC', right: '#B06AB3' },
    { left: '#3494E6', right: '#EC6EAD' },
    { left: '#F3904F', right: '#3B4371' },
    { left: '#3a6186', right: '#89253e' },
    { left: '#2196f3', right: '#f44336' },
    { left: '#ff4b1f', right: '#1fddff' },
    { left: '#4B79A1', right: '#283E51' },
    { left: '#43cea2', right: '#185a9d' },
    { left: '#5f2c82', right: '#49a09d' },
    { left: '#085078', right: '#85D8CE' },
    { left: '#00467F', right: '#A5CC82' }
];
var lastIndex;
var firstScreen = document.querySelector('.first-screen');

/**
 * change the gradient colors of the first screen
 */
function changeColor() {
    var index = Math.floor(Math.random() * 21);
    while (index === lastIndex) {
        index = Math.floor(Math.random() * 21);
    }
    lastIndex = index;
    firstScreen.style.background = `linear-gradient(to right, ${gradients[index].left}, ${gradients[index].right})`;
}

// firstScreen.addEventListener('mousedown', changeColor);

/**
 * the long shadow of name in the first-screen
 */
function getLongShadow(startColor = '212,213,213', shadowLength = 8, ratioX = 1, ratioY = 1) {
    let textShadow = '';
    let alpha;
    let color;
    let seperator = ',';

    for (let i = 0.5; i <= shadowLength; i=i+0.5) {
        alpha = (1 - (i - 0.5) / shadowLength) * 0.6;
        color = `rgba(${startColor}, ${alpha})`;
        if (i === shadowLength) {
            seperator = '';
        }
        textShadow += `${i * ratioX}px ${i * ratioY}px ${color}${seperator}`;
    }
    return textShadow;
}

/**
 * dynamic long shadow
 */
var name = document.querySelector('.first-screen--grid .name');
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

