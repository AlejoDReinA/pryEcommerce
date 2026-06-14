import { cardComponent } from "../components/card.component.js";
import { renderizarFiltros } from "../components/filtros.components.js"

const cardContainer = document.getElementById('cardContainer');
const filtrosMarca = document.getElementById('filtrosMarca');
let todosProcesadores = [];

function renderizarCards(productos) {
    cardContainer.innerHTML = productos.map(p =>
        cardComponent(p.id, p.imagen, p.titulo, p.descripcion, p.precio)
    ).join('');
}

window.addEventListener('load', () => {
    fetch('/pryEcommerce/data/productos.json')
        .then(r => r.json())
        .then(data => {
            todosProcesadores = data.procesadores;
            renderizarCards(todosProcesadores);
            renderizarFiltros(todosProcesadores, filtrosMarca, cardContainer, renderizarCards);
        });
});
