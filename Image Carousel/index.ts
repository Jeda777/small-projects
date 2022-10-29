const prevBtn = document.querySelector('#prev') as HTMLButtonElement
const nextBtn = document.querySelector('#next') as HTMLButtonElement
const images = document.querySelectorAll('img')

let id = 0

const changeActiveImg = () => {
  images.forEach((img, index) => {
    if (index < id) {
      img.classList.add('left')
      img.classList.remove('right')
    } else if (index == id) {
      img.classList.remove('left')
      img.classList.remove('right')
    } else {
      img.classList.remove('left')
      img.classList.add('right')
    }
  })
}
changeActiveImg()

prevBtn.addEventListener('click', () => {
  if (id === 0) return
  id--
  changeActiveImg()
})
nextBtn.addEventListener('click', () => {
  if (id === images.length - 1) return
  id++
  changeActiveImg()
})
