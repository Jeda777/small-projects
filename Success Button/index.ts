document.querySelector('button').addEventListener('click', (e) => {
  const target = e.currentTarget as HTMLElement
  target.classList.add('animation')
})
