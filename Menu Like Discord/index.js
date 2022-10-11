const items = document.querySelectorAll('.item');
items.forEach((item) => {
    item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
    });
});
//@ts-ignore Shows error because same named const is in other project, that doesnt change anything so i'm using ignore.
const removeActiveClass = () => {
    items.forEach((item) => {
        item.classList.remove('active');
    });
};
