let draging = false
const listItems = document.querySelectorAll('li')
const body = document.body
const liParent = listItems[0].parentNode
const dragList = document.getElementById('dragList')
let draggedItem
let hoveredItem


listItems.forEach(li => {
  li.addEventListener('mousedown', (event) => {
    event.preventDefault()
    draging = true
    console.log(event)
    draggedItem = event.target
    dragList.append(draggedItem)
    body.style.cursor = 'grabbing'

  })

  li.addEventListener('mouseover', () => {
    if (draging) hoveredItem = li
  })

  li.addEventListener('mouseout', (event) => {
    if (hoveredItem) hoveredItem.style = ``
    hoveredItem = null
  })
})

body.addEventListener('mouseup', (event) => {
  draging = false
  if (draggedItem) liParent.insertBefore(draggedItem, hoveredItem)
  if (hoveredItem) hoveredItem.style = ``
  hoveredItem = null
  body.style.cursor = null
  draggedItem = null
})

body.addEventListener('mousemove', (event) => {
  event.preventDefault()
  if (!draging) return
  dragList.style.top = `${event.y - 20}px`
  dragList.style.left = `${event.x - 30}px`
  if (hoveredItem) hoveredItem.style = `padding-top: 17px ` 
})

body.addEventListener('mouseleave', () => {
  draging = false
  if (draggedItem) liParent.append(draggedItem)
  if (hoveredItem) hoveredItem.style = ``
  hoveredItem = null
  body.style.cursor = null
  draggedItem = null
})