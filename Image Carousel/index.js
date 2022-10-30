const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const images = document.querySelectorAll('img');
let id = 0;
const changeActiveImg = () => {
    images.forEach((img, index) => {
        if (index < id) {
            img.classList.add('left');
            img.classList.remove('right');
        }
        else if (index == id) {
            img.classList.remove('left');
            img.classList.remove('right');
        }
        else {
            img.classList.remove('left');
            img.classList.add('right');
        }
    });
};
changeActiveImg();
prevBtn.addEventListener('click', () => {
    if (id === 0)
        id = images.length - 1;
    else
        id--;
    changeActiveImg();
});
nextBtn.addEventListener('click', () => {
    if (id === images.length - 1)
        id = 0;
    else
        id++;
    changeActiveImg();
});
