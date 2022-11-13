const input = document.querySelector('input')

input.addEventListener('input', () => {
  const r = 211 + (Number(input.value) / 100) * 27
  const g = 211 + (Number(input.value) / 100) * -34
  const b = 211 + (Number(input.value) / 100) * -166
  input.style.background = `rgb(${r}, ${g}, ${b})`
  input.dataset.value = input.value
  const normalize = (Number(input.value) / 100) * 22.5 - 7.5
  if (Number(input.value) === 50) {
    input.style.setProperty('--left', `${(input.clientWidth * Number(input.value)) / 100}px`)
  } else if (Number(input.value) >= 50) {
    input.style.setProperty('--left', `${(input.clientWidth * Number(input.value)) / 100 - normalize}px`)
  } else if (Number(input.value) <= 50) {
    input.style.setProperty('--left', `${(input.clientWidth * Number(input.value)) / 100 - normalize + 3}px`)
  }
})
