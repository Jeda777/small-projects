const card = document.querySelector('.card');
card.addEventListener('touchstart', () => {
    card.classList.add('active');
    console.log('dodano');
    setTimeout(() => {
        card.classList.remove('active');
        console.log('wydano');
    }, 500);
});
