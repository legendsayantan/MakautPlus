//fix focus detection
function fixFocus() {
    window.addEventListener("visibilitychange", function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("focus", function (event) {
        document.hasFocus = function () { return true; }
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("blur", function (event) {
        document.hasFocus = function () { return true; }
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("mouseover", function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("mouseout", function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("pointerover", function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("pointerout", function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    window.addEventListener("visibilitychange", function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
    }, true);
    document.hasFocus = function () { return true; }
}
setInterval(function () {
    fixFocus()
}, 10000)
fixFocus()