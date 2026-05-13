import { cardComponent } from "../components/card.component.js";

let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {title: 'Motherboard AMD AMX', link:'"https://www.venex.com.ar/products_images/1726760036_1.png"', text: 'Lorem ipsum dolor sit', precio:'$2500'},
    {title: 'Motherboard AMD AMX', link:'"https://www.venex.com.ar/products_images/1752234150_1.jpg"', text: 'Lorem ipsum dolor sit', precio:'$1300'},
    {title: 'Motherboard INTEL', link:'"https://www.venex.com.ar/products_images/1741183084_3.png"', text: 'Lorem ipsum dolor sit', precio:'$2000'}
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardComponent(e.link, e.title, e.text, e.precio)
    }).join('')
    cardContainer.innerHTML = cards
})