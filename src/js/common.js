var isHeaderShrink = false;
var header = document.querySelector('.header-wrapper');
var menuBar = document.querySelector('.menu-bar');
var mobileMenu = document.querySelector('.mobile-menu');
var isMobileMenuHidden = true;

window.addEventListener('scroll', function (ev) {
    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (!isHeaderShrink && scrollTop !== 0) {
        isHeaderShrink = true;
        header.classList.add('header-wrapper--shrink');
    } else if (isHeaderShrink && scrollTop === 0) {
        isHeaderShrink = false;
        header.classList.remove('header-wrapper--shrink');
    }
});

menuBar.addEventListener('click', function (ev) {
    if (isMobileMenuHidden) {
        isMobileMenuHidden = false;
        mobileMenu.classList.add('mobile-menu--show');
    } else {
        isMobileMenuHidden = true;
        mobileMenu.classList.remove('mobile-menu--show');
    }
});

