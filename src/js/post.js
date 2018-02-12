import { scrollSpy, offsets } from './scrollspy.js';
import { throttle } from './utils.js';

var header = document.querySelector('.header');
var headerNormal = document.querySelector('.header__normal');
var headerPost = document.querySelector('.header__post-hidden');
var tocNode = document.querySelector('.toc');
var lastScrollTop = 0;
var isHeaderSwitch = false;

window.addEventListener('scroll', function (ev) {
    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var distance = scrollTop - lastScrollTop;
    if ((distance > 0 && scrollTop < 500) || Math.abs(distance) < 100) {
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
});

window.addEventListener('load', function (ev) {
    if (!tocNode) {
        return;
    }
    tocNode.addEventListener('click', ev => {
        var target = ev.target;
        if (target.classList.contains('toc-text')) {
            ev.preventDefault();
            scrollAnim(offsets[target.parentNode.dataset.index], 500);
        }
    });
    scrollSpy(document.querySelector('.toc'), { className: 'toc-link--active' });
});

function scrollAnim(targetScrollTop, duration) {
    var startTime;
    var timerId;

    function scroll(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        var progress = timestamp - startTime;
        var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        window.scrollTo(0, scrollTop + (targetScrollTop - scrollTop) * progress / duration + 1);
        if (progress >= duration) {
            window.cancelAnimationFrame(timerId);
        } else {
            timerId = window.requestAnimationFrame(scroll);
        }
    }

    timerId = window.requestAnimationFrame(scroll);
}    

