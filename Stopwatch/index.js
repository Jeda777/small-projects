const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const text = document.querySelector('p');
let working = false;
let time = 0;
let interval;
const renderTime = () => {
    let secText;
    // I know that is not millisecond
    let msText;
    if (time < 100) {
        secText = '00';
        if (time < 10) {
            msText = `0${time}`;
        }
        else {
            msText = time.toString();
        }
    }
    else {
        secText = time.toString();
        secText = secText.substring(0, secText.length - 2);
        msText = time.toString();
        msText = msText.substring(msText.length - 2);
    }
    text.innerText = `${secText}:${msText}`;
};
const changeBtn = () => {
    if (working) {
        startBtn.innerText = 'Stop';
    }
    else {
        startBtn.innerText = 'Start';
    }
};
const counting = () => {
    time++;
    renderTime();
};
const startAndStop = () => {
    if (!working) {
        interval = setInterval(() => counting(), 10);
    }
    else {
        clearInterval(interval);
    }
    working = !working;
    changeBtn();
};
const reset = () => {
    clearInterval(interval);
    working = false;
    time = 0;
    renderTime();
    changeBtn();
};
startBtn.addEventListener('click', () => {
    startAndStop();
});
resetBtn.addEventListener('click', () => {
    reset();
});
