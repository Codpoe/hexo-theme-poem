var isHeaderShrink = false;
var firstScreen = document.querySelector('.first-screen');
var windowMask = document.querySelector('.window-mask');
var header = document.querySelector('.header-wrapper');
var menuBar = document.querySelector('.menu-bar');
var drawer = document.querySelector('.header__drawer');

window.addEventListener('scroll', function(ev) {
    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var limit = firstScreen ? window.innerHeight / 2 : 0;
    if (firstScreen && scrollTop < window.innerHeight) {
        firstScreen.style.webkitTransform = `translateY(${- scrollTop / 4}px)`;
        firstScreen.style.MozTransform = `translateY(${- scrollTop / 4}px)`;
        firstScreen.style.msTransform = `translateY(${- scrollTop / 4}px)`;
        firstScreen.style.transform = `translateY(${- scrollTop / 4}px)`;
    }
    if (!isHeaderShrink && scrollTop > limit) {
        isHeaderShrink = true;
        header.classList.add('header-wrapper--shrink');
    } else if (isHeaderShrink && scrollTop <= limit) {
        isHeaderShrink = false;
        header.classList.remove('header-wrapper--shrink');
    }
});

menuBar.addEventListener('click', function (ev) {
    header.classList.toggle('header-wrapper--drawer-show');
    // menuBar.classList.toggle('menu-bar--close');
    // drawer.classList.toggle('header__drawer--show');
    // windowMask.classList.toggle('window-mask--show');
});

windowMask.addEventListener('click', function (ev) {
    header.classList.toggle('header-wrapper--drawer-show');
    // menuBar.classList.toggle('menu-bar--close');
    // drawer.classList.toggle('header__drawer--show');
    // windowMask.classList.toggle('window-mask--show');
});

