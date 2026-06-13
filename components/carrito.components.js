export const carritoItemComponent = (id, imagen, titulo, precio, cantidad) => {
    return `
        <div class="card mb-3" id="item-${id}">
            <div class="row g-0 align-items-center">
                <div class="col-3 col-md-2">
                    <img src="${imagen}" class="img-fluid rounded-start p-2" alt="${titulo}">
                </div>
                <div class="col-9 col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text mb-1">Cantidad: ${cantidad}</p>
                        <p class="card-text">Precio unitario: $${precio}</p>
                        <div class="input-group" style="width: 130px;">
                            <button class="btn btn-outline-secondary btn-sm me-0" onclick="modificarCantidad(${id}, -1)">-</button>
                            <input type="text" class="form-control form-control-sm text-center" value="${cantidad}" readonly>
                            <button class="btn btn-outline-secondary btn-sm" onclick="modificarCantidad(${id}, 1)">+</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 text-center py-2">
                    <p class="price mb-2">$${precio * cantidad}</p>
                    <button class="btn btn-danger btn-sm mb-4" onclick="eliminarDelCarrito(${id})">
                        <i class="bi bi-trash"></i> Eliminar todo
                    </button>
                </div>
            </div>
        </div>
    `
}
