import { cardComponent } from "../components/card.component.js";

const cardContainer = document.getElementById('cardContainer');
const tituloBusqueda = document.getElementById('tituloBusqueda');

window.addEventListener('load', () => {
    //Para Leer el término de búsqueda de la URL//
    const params = new URLSearchParams(window.location.search);
    const termino = params.get('q').toLowerCase();

    tituloBusqueda.textContent = `Resultados para: "${termino}"`;

    fetch('../data/productos.json')
        .then(r => r.json())
        .then(data => {
        
            const todosLosProductos = [
                ...data.procesadores,
                ...data.placasDeVideo,
                ...data.motherboards
            ];

            const resultados = todosLosProductos.filter(p =>
                p.titulo.toLowerCase().includes(termino) ||
                p.marca.toLowerCase().includes(termino)
            );
            const btnLupa = document.querySelector('.input-group-text');

            btnLupa.addEventListener('click', () => {
                const termino = inputBusqueda.value.trim();
                if (termino) {
                    window.location.href = `busqueda.html?q=${termino}`;
                }
            });

            if (resultados.length === 0) {
                cardContainer.innerHTML = `
                    <div class="text-center mt-5 w-100">
                        <i class="bi bi-search" style="font-size: 3rem;"></i>
                        <p class="mt-3">No se encontraron productos para "${termino}"</p>
                    </div>
                `;
                return;
            }

            cardContainer.innerHTML = resultados.map(p =>
                cardComponent(p.id, p.imagen, p.titulo, p.descripcion, p.precio)
            ).join('');
        });
});