const input1 = document.querySelector('#name-1') as HTMLInputElement
const input2 = document.querySelector('#name-2') as HTMLInputElement
const resultText = document.querySelector('p')
const button = document.querySelector('button')
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5e56821bd2mshea6d46a98754ebfp12f85cjsn72f9bfe7b6a7',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
  },
}

let name1: string
let name2: string

input1.addEventListener('change', () => {
  name1 = input1.value
})
input2.addEventListener('change', () => {
  name2 = input2.value
})
const getResult = () => {
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`, options)
    .then((response) => response.json())
    .then((response) => (resultText.innerText = response.percentage + '%'))
    .catch((err) => console.error(err))
}
button.addEventListener('click', () => {
  getResult()
})
