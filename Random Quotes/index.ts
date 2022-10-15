const quoteText = document.querySelector('#quote')
const authorText = document.querySelector('#author')

const getQuote = () => {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((res) => {
      quoteText.innerHTML = res.content
      authorText.innerHTML = res.author
    })
}
getQuote()
