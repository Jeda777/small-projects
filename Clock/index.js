const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const setClock = () => {
    const currentDate = new Date();
    const seconds = (currentDate.getSeconds() / 60) * 360;
    const minutes = (currentDate.getMinutes() / 60) * 360 + seconds / 60;
    const hours = (currentDate.getHours() / 12) * 360 + minutes / 12;
    hourHand.style.setProperty('--rotation', hours.toString());
    minuteHand.style.setProperty('--rotation', minutes.toString());
    secondHand.style.setProperty('--rotation', seconds.toString());
};
setInterval(() => setClock(), 1000);
