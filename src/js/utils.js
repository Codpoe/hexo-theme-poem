/**
 * 节流
 * @param fn 
 * @param wait 
 */
export function throttle(fn, wait) {
    let that = this;
    let args = arguments;
    let prev;
    let isFirst = true;
    return function () {
        var now = +new Date();
        if (isFirst) {
            fn.apply(that, args);
            isFirst = false;
            prev = +new Date();
            return;
        }
        if (now - prev > wait) {
            fn.apply(that, args);
            prev = now;
        }
    }
}
