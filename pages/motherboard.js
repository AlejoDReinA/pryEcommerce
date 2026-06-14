import { cardComponent } from "/pryEcommerce/components/card.component.js";
import { renderizarFiltros } from "/pryEcommerce/components/filtros.components.js";

const cardContainer = document.getElementById('cardContainer');
const filtrosMarca = document.getElementById('filtrosMarca');
let todasMother = [];

function renderizarCards(productos) {
    cardContainer.innerHTML = productos.map(p =>
        cardComponent(p.id, p.imagen, p.titulo, p.descripcion, p.precio)
    ).join('');
}

window.addEventListener('load', () => {
    fetch('/pryEcommerce/data/productos.json')
        .then(r => r.json())
        .then(data => {
            todasMother = data.motherboards;
            renderizarCards(todasMother);
            renderizarFiltros(todasMother, filtrosMarca, cardContainer, renderizarCards);
        });
});