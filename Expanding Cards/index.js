const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        removeActiveClass();
        button.classList.add('active');
    });
});
//@ts-ignore Shows error because same named const is in other project, that doesnt change anything so i'm using ignore.
const removeActiveClass = () => {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
};
