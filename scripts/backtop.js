const backtop = document.querySelector('.backtop')
const mikaOK=new Audio('../aduio/ok.wav')
window.addEventListener('scroll', function () {
    const n = document.documentElement.scrollTop
    if (n < 400) {
        backtop.style.opacity = 0;
    } else {
        backtop.style.opacity = 1;
    }
})
backtop.addEventListener('click', function () {
    // document.getElementsByTagName('audio')[1].play();
    mikaOK.play()
    setTimeout(function () {
        window.scrollTo(0, 0)
    }, 200)
})