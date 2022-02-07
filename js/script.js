let draging = false
const listItems = document.querySelectorAll('li')
const body = document.body
const liParent = listItems[0].parentNode
let draggedItem


listItems.forEach(li => li.addEventListener('mousedown', (event) => {
  event.preventDefault()
  draging = true
  console.log(event)
  draggedItem = event.target
  dragList.append(draggedItem)
}))

body.addEventListener('mouseup', (event) => {
  draging = true
  console.log(event)
  if(draggedItem) liParent.append(draggedItem)

  draggedItem = null
})

body.addEventListener('mousemove', () => {
  event.preventDefault()
  if (!draging) return
  console.log(event)
})

