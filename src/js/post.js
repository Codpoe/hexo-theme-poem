var header = document.querySelector('.header');
var lastScrollTop = 0;
var isHeaderSwitch = false;

window.addEventListener('scroll', function (ev) {
    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var distance = scrollTop - lastScrollTop;
    if (Math.abs(distance) < 80) {
        return;
    }
    if (!isHeaderSwitch && distance >= 80) {
        isHeaderSwitch = true;
        header.classList.toggle('header--switch');
    } else if (isHeaderSwitch && distance <= -80) {
        isHeaderSwitch = false;
        header.classList.toggle('header--switch');
    }
    lastScrollTop = scrollTop;
})