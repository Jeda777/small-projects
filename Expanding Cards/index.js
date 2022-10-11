const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        removeActiveClass();
        button.classList.add('active');
    });
});
const removeActiveClass = () => {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
};
