const item = document.querySelector('.item')
const pHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const pHolder of pHolders) {
    pHolder.addEventListener('dragover', dragover)
    pHolder.addEventListener('dragenter', dragenter)
    pHolder.addEventListener('dragleave', dragleave)
    pHolder.addEventListener('drop', dragdrop)
}

function dragstart(event) {    
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
    
}

function dragend(event) {    
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    // console.log('drag over');
}
function dragenter(event) {
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    
}