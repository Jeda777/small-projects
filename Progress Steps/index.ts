const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const progressNumbers = document.querySelectorAll('p')
const progressBars = document.querySelectorAll('.progress-bar')

let activeNumber = 0

const update = () => {
  switch (activeNumber) {
    case 3:
      btnNext.setAttribute('disabled', 'true')
      progressNumbers[3].classList.add('active-number')
      progressBars[2].classList.add('active-bar')
      break
    case 2:
      btnNext.removeAttribute('disabled')
      progressNumbers[2].classList.add('active-number')
      progressNumbers[3].classList.remove('active-number')
      progressBars[1].classList.add('active-bar')
      progressBars[2].classList.remove('active-bar')
      break
    case 1:
      btnPrev.removeAttribute('disabled')
      progressNumbers[1].classList.add('active-number')
      progressNumbers[2].classList.remove('active-number')
      progressBars[0].classList.add('active-bar')
      progressBars[1].classList.remove('active-bar')
      break
    case 0:
      btnPrev.setAttribute('disabled', 'true')
      progressNumbers[0].classList.add('active-number')
      progressNumbers[1].classList.remove('active-number')
      progressBars[0].classList.remove('active-bar')
      break
  }
}
update()

const increaseNumber = () => {
  if (activeNumber !== 3) {
    activeNumber++
  }
}
const decreaseNumber = () => {
  if (activeNumber !== 0) {
    activeNumber--
  }
}
btnPrev.addEventListener('click', () => {
  decreaseNumber()
  update()
})
btnNext.addEventListener('click', () => {
  increaseNumber()
  update()
})
