const header = document.querySelector('header')
window.addEventListener('scroll', function () {
    const n = document.documentElement.scrollTop
    if (n < 400) {
        header.style.opacity = 1;
    } else {
        header.style.opacity = 0.6
    }
})