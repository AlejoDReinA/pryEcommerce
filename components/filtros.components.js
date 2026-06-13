export function renderizarFiltros(productos, filtrosMarca, cardContainer, renderizarCards) {
    const marcas = [...new Set(productos.map(p => p.marca))];

    filtrosMarca.innerHTML = ['Todas', ...marcas].map(marca => `
        <button class="btn btn-outline-warning filtro" data-marca="${marca}">
            ${marca}
        </button>
    `).join('');

    document.querySelectorAll('.filtro').forEach(btn => {
        btn.addEventListener('click', () => {
            const marcaSeleccionada = btn.dataset.marca;
            const filtrados = marcaSeleccionada === 'Todas' 
                ? productos 
                : productos.filter(p => p.marca === marcaSeleccionada);
            renderizarCards(filtrados);
        });
    });
}