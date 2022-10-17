const input = document.querySelector('input')

input.addEventListener('mousemove', (e) => {
  const r = 211 + (Number(input.value) / 100) * 27
  const g = 211 + (Number(input.value) / 100) * -34
  const b = 211 + (Number(input.value) / 100) * -166
  input.style.background = `rgb(${r}, ${g}, ${b})`
  input.dataset.value = input.value
  input.style.setProperty('--left', `${e.pageX - input.getBoundingClientRect().left}px`)
})
