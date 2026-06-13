
export const cardComponent = (id, ImageLink, tituloProducto, text, precio) =>{

    return `
        <div class="col">
            <div class="card ">
                <img src=${ImageLink} alt="producto">
                <div class="cardbody">
                    <h5 class="card-title mt-1 mx-2">${tituloProducto}</h5>
                    <p class="card-text mx-2 mb-2">${text}</p>
                </div>
                <div class="card-footer">
                    <div class="row text-center">
                        <div class="col">
                            <p class="price mt-2">$${precio}</p>
                        </div>
                        <div class="col">
                            <div class="input-group">
                                <button class="btn btn-outline-secondary mx-auto" type="button" onclick="cambiarCantidad(this, -1)">-</button>
                                <input type="text" class="form-control text-center" min="0" max="3" placeholder="0" readonly>
                                <button class="btn btn-outline-secondary" type="button" onclick="cambiarCantidad(this, 1)">+</button>
                            </div>   
                        </div>
                        <div class="col-12 mt-2">
                            <button class="btn btn-warning w-100" onclick="agregarAlCarrito(${id}, '${tituloProducto}', ${precio}, '${ImageLink}', this)">
                                <i class="bi bi-cart-plus"> agregar al carrito</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};
//Para agregar limite de pedido y agregar funcionalidad a los botones de agregar y restar producto//
window.cambiarCantidad = function cambiarCantidad(btn, delta) {
    const input = btn.closest('.input-group').querySelector('input');
    const actual = parseInt(input.value) || 0;
    input.value = Math.max(0, Math.min(3, actual + delta));
};
//Para agregar productos al carrito//
window.agregarAlCarrito = function(id, titulo, precio, imagen, btn) {
    //Para leer el carrito//      
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    //Para leer la cantidad de producto seleccionado con los btn (+/-)//
    const input = btn.closest('.card-footer').querySelector('input');
    const cantidad = parseInt(input.value) || 1;
    
    //Para buscar si el producto ya está en el carrito//
    const productoExistente = carrito.find(p => p.id === id);
    if(productoExistente){
        const nuevaCantidad = productoExistente.cantidad + cantidad;
        if(nuevaCantidad > 3) {
            alert(`Solo se pueden agregar hasta 3 unidades de ${titulo}`)
            
        } else {
            alert(`${titulo} agregado al carrito`);
            productoExistente.cantidad += cantidad;
        }
        
    } else {
        carrito.push({id, titulo, precio, imagen, cantidad});
        alert(`${titulo} agregado al carrito`);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    
} 
