function updateWindowSize() {
    const widthSpan = document.getElementById('width');
    const heightSpan = document.getElementById('height');

    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    widthSpan.textContent = windowWidth;
    heightSpan.textContent = windowHeight;
}

window.addEventListener('load', updateWindowSize);
window.addEventListener('resize', updateWindowSize);