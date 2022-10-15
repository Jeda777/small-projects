const notificationsList = document.querySelector('#notifications-list')
const notificationBtn = document.querySelector('#notification-btn')

let count = 1

notificationBtn.addEventListener('click', () => {
  giveNotification()
})

const giveNotification = () => {
  const li = notificationsList.appendChild(document.createElement('li'))
  li.innerText = `Notification ${count}`
  count++
  setTimeout(() => {
    li.remove()
  }, 5000)
}
