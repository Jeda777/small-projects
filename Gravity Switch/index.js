const switchEl = document.getElementById('switch');
const ball = document.getElementById('ball');
switchEl.style.animationPlayState = 'paused';
const listenerFunc = () => {
    switchEl.style.animationPlayState = 'running';
    if (switchEl.classList.length === 0) {
        switchEl.classList.add('activated');
        ball.classList.add('activated');
    }
    else {
        switchEl.classList.toggle('activated');
        switchEl.classList.toggle('deactivated');
        ball.classList.toggle('activated');
        ball.classList.toggle('deactivated');
    }
};
switchEl.addEventListener('click', listenerFunc);
switchEl.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
        listenerFunc();
    }
});
