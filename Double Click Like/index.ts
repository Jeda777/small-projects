const photo1 = document.querySelector('#photo-1')
const photo2 = document.querySelector('#photo-2')

photo1.addEventListener('dblclick', (e: MouseEvent) => {
  appendSmallHeart(e)
})
const appendSmallHeart = (e: MouseEvent) => {
  const heart = document.body.appendChild(document.createElement('div'))
  heart.classList.add('small-heart')
  heart.style.left = `${e.clientX}px`
  heart.style.top = `${e.clientY}px`
  const img = heart.appendChild(document.createElement('img'))
  img.setAttribute('src', './heart.png')
  img.setAttribute('alt', 'heart')
  setTimeout(() => {
    heart.remove()
  }, 500)
}

photo2.addEventListener('dblclick', () => {
  appendBigHeart()
})
const appendBigHeart = () => {
  const heart = photo2.appendChild(document.createElement('div'))
  heart.classList.add('big-heart')
  const img = heart.appendChild(document.createElement('img'))
  img.setAttribute('src', './heart.png')
  img.setAttribute('alt', 'heart')
  setTimeout(() => {
    heart.remove()
  }, 1000)
}
