import { cardComponent } from "../components/card.component.js";

let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {title: 'Nvidia RTX XXXX', link:'"https://www.venex.com.ar/products_images/1776259413_placa_de_video_gigabyte_nvidia_geforce_rtx_5070_aorus_master_12gb_gddr7_ocpng"', text: 'Lorem ipsum dolor sit', precio:'$4000'},
    {title: 'Intel ARC BXXX', link:'"https://www.venex.com.ar/products_images/1756305009_24.png"', text: 'Lorem ipsum dolor sit', precio:'$3000'},
    {title: 'AMD Radeon RX XXXX XT', link:'"https://www.venex.com.ar/products_images/1755086606_5.jpg"', text: 'Lorem ipsum dolor sit', precio:'$3350'}
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardComponent(e.link, e.title, e.text, e.precio)
    }).join('')
    cardContainer.innerHTML = cards
})