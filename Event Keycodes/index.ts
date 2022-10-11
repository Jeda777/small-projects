const eventKeyText = document.getElementById('event-key')
const eventKeyCodeText = document.getElementById('event-keycode')
const eventCodeText = document.getElementById('event-code')

document.addEventListener('keydown', (e) => {
  eventKeyText.innerText = e.key
  eventKeyCodeText.innerText = e.keyCode.toString()
  eventCodeText.innerText = e.code
})
