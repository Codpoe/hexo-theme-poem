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
if (name) {
    name.style.textShadow = getLongShadow('212,213,213', 8);
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
        name.style.textShadow = getLongShadow('212,213,213', 10, ratioX, ratioY);
    });
}

