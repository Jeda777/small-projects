const container = document.querySelector('#container');
const childs = [];
const getColor = () => {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
};
for (let i = 0; i < 30 * 20; i++) {
    const child = container.appendChild(document.createElement('div'));
    childs.push(child);
}
childs.forEach((i) => {
    i.addEventListener('pointerenter', () => {
        i.style.cssText = `--color: ${getColor()}`;
        //i.setAttribute('color', getColor())
        i.classList.add('hover');
    });
    i.addEventListener('pointerout', () => {
        i.classList.remove('hover');
    });
});
