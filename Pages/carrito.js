import { carritoItemComponent } from "../../components/carrito.components.js";

const carritoContainer = document.getElementById('carritoContainer');
const totalCarrito = document.getElementById('totalCarrito');

function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        carritoContainer.innerHTML = `
            <div class="text-center mt-5">
                <i class="bi bi-cart-x" style="font-size: 3rem;"></i>
                <p class="mt-3">Tu carrito está vacío</p>
            </div>
        `;
        totalCarrito.textContent = '$0';
        return;
    }

    carritoContainer.innerHTML = carrito.map(p => {
        return carritoItemComponent(p.id, p.imagen, p.titulo, p.precio, p.cantidad);
    }).join('');

    const total = carrito.reduce((acumulador, p) => {
        return acumulador + (p.precio * p.cantidad);
    }, 0);

    totalCarrito.textContent = `$${total}`;

    const btnComprar = document.getElementById('btnComprar');

    if (carrito.length > 0) {
        btnComprar.classList.remove('d-none');
    } else {
        btnComprar.classList.add('d-none');
    }
}

//Para eliminar toda la cantidad de un producto del carrito//
window.eliminarDelCarrito = function(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(p => p.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
};
//Para eliminar la cantidad de un producto de a 1//
window.modificarCantidad = function(id, delta) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(p => p.id === id);

    if (producto) {
        producto.cantidad = Math.min(3, Math.max(0, producto.cantidad + delta));

        if (producto.cantidad <= 0) {
            carrito = carrito.filter(p => p.id !== id);
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
};

window.addEventListener('load', renderizarCarrito);