import { throttle } from './utils.js';

var _className;
var _activeEle;
var tocItems = [];
var offsets = [];

function scrollSpy(toc, { className = 'active', baseOffset = 100 } = {}) {
    var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    _className = className;
    toc.querySelectorAll('a[href^="#"]').forEach((item, index) => {
        var heading = document.querySelector(item.getAttribute('href'));
        item.setAttribute('data-index', index);
        offsets.push(Math.floor(heading.getBoundingClientRect().top + scrollTop - baseOffset));
        tocItems.push(item);
    });
    window.addEventListener('scroll', throttle(function (ev) {
        scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        var index = tocItems.length;
        if (scrollTop <= offsets[0]) {
            activate(tocItems[0]);
            return;
        }
        while (index--) {
            if (scrollTop >= offsets[index]
                && (!offsets[index + 1] || scrollTop < offsets[index + 1])) {
                activate(tocItems[index]);
            }
        }
    }, 100));
}

function activate(ele) {
    if (_activeEle === ele) {
        return;
    }
    if (_activeEle) {
        _activeEle.classList.toggle(_className);
    }
    ele.classList.toggle(_className);
    _activeEle = ele;
}

export { scrollSpy, offsets };

