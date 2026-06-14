import { cardComponent } from "/pryEcommerce/components/card.component.js";

const cardContainer = document.getElementById('cardContainer')

window.addEventListener('load', () => {
    fetch('/pryEcommerce/data/productos.json').then(response => response.json()).then(data => {
        //Tomar del JSON los productos de todas las categorias// 
        const destacados = [
            ...data.procesadores.slice(0, 3),
            ...data.placasDeVideo.slice(0, 3),
            ...data.motherboards.slice(0, 3)
        ];
        const cards = destacados.map(p => {
            return cardComponent(p.id, p.imagen, p.titulo, p.descripcion, p.precio);
        }).join('');
        cardContainer.innerHTML = cards;
    })
    .catch(error => console.error('Error al cargar los productos', error));
})




