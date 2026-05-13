import { cardComponent } from "../components/card.component.js";

let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {title: 'AMD Ryzen x xxxx', link:'"https://http2.mlstatic.com/D_NQ_NP_2X_631999-MLA99867252311_112025-F.webp"', text: 'Lorem ipsum dolor sit', precio:'$2000'},
    {title: 'AMD Ryzen x xxxx', link:'"https://www.venex.com.ar/products_images/1755777303_6.jpg"', text: 'Lorem ipsum dolor sit', precio:'$1500'},
    {title: 'INTEL CORE IX XXXXX', link:'"https://www.venex.com.ar/products_images/1662383634_intel_i5_12ca.png"', text: 'Lorem ipsum dolor sit', precio:'$1650'}
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardComponent(e.link, e.title, e.text, e.precio)
    }).join('')
    cardContainer.innerHTML = cards
})