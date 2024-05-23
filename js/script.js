'use strict'
const container = document.querySelector('.container')

const btnNext = container.querySelector('.arrows .next')
const btnBack = container.querySelector('.arrows .back')

const list = container.querySelector('.container .list')
const thumb = container.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

const moveItemsOnClick = (type) => {
    const listItems = container.querySelectorAll('.list .list-item')
    const tahumbItems = thumb.querySelectorAll('.thumb .thumb-item')

    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(tahumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(tahumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
        
    }, 1000)
}
