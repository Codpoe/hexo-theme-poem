var header = document.querySelector('.header');
var headerNormal = document.querySelector('.header__normal');
var headerPost = document.querySelector('.header__post-hidden');
var lastScrollTop = 0;
var isHeaderSwitch = false;

window.addEventListener('scroll', function (ev) {
    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var distance = scrollTop - lastScrollTop;
    if (Math.abs(distance) < 100) {
        return;
    }
    if (!isHeaderSwitch && distance >= 100) {
        isHeaderSwitch = true;
        header.classList.toggle('header--switch');
    } else if (isHeaderSwitch && distance <= -100) {
        isHeaderSwitch = false;
        header.classList.toggle('header--switch');
    }
    lastScrollTop = scrollTop;
})