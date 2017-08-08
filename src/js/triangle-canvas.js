var canvas,
    ctx,
    dpr = window.devicePixelRatio || 1,
    width = window.innerWidth,
    height = window.innerHeight,
    length = 70,
    points = [],
    current = 0;

function draw(isFirstScreen = false, element) {
    var location = isFirstScreen ? 0.6 : 0.2;
    canvas = element;
    ctx = canvas.getContext('2d');
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.globalAlpha = 0.4;
    ctx.clearRect(0, 0, width, height);
    current = Math.PI * Math.floor(Math.random() * 24) / 25;
    points = [
        {
            x: 0,
            y: height * location + length
        },
        {
            x: 0,
            y: height * location - length
        }
    ];
    while (points[1].x < width + length) {
        drawNext(points[0], points[1])
    }
}

function drawNext(a, b) {
    var c = {};
    c.x = b.x + (Math.random() * 2 - 0.25) * length;
    c.y = getNextY(b.y);

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.closePath();

    current += Math.PI / 25;
    ctx.fillStyle = '#' + (
        Math.cos(current) * 127 + 128 << 16 |
        Math.cos(current + Math.PI * 2 / 3) * 127 + 128 << 8 |
        Math.cos(current + Math.PI * 4 / 3) * 127 + 128).toString(16);
    ctx.fill();

    points[0] = points[1];
    points[1] = { x: c.x, y: c.y };
}

function getNextY(y) {
    var temp = y + (Math.random() * 2 - 1) * length;
    return (temp > height || temp < 0) ? getNextY(y) : temp;
}

export default draw;

