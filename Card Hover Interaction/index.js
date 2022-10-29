const card = document.querySelector('.card');
const cardContent = document.querySelector('.card-content');
card.addEventListener('touchstart', () => {
    card.classList.add('active');
    console.log('dodano');
    setTimeout(() => {
        card.classList.remove('active');
        console.log('wydano');
    }, 500);
});
