import { cardComponent } from "../components/card.component.js";

const cardContainer = document.getElementById('cardContainer')

window.addEventListener('load', () => {
    fetch('../data/productos.json').then(response => response.json()).then(data => {
        const cards = data.procesadores.map(p => {
            return cardComponent(p.id, p.imagen, p.titulo, p.descripcion, p.precio);
        }).join('');
        cardContainer.innerHTML = cards;
    });
})
