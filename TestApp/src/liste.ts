function setupList(element: HTMLButtonElement) {
  let items = ['Item 1', 'Item 2', 'Item 3']
  const listElement = document.createElement('ul')
  element.appendChild(listElement)
    const renderList = () => {
    listElement.innerHTML = ''
    items.forEach(item => {
      const listItem = document.createElement('li')
        listItem.textContent = item
        listElement.appendChild(listItem)
    })
  }
  renderList()
  element.addEventListener('click', () => {
    items.push(`Item ${items.length + 1}`)
    renderList()
  })
}

export { setupList };