
export const cardComponent = (ImageLink, tituloProducto, text, precio) =>{

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
                            <p class="price">${precio}</p>
                        </div>
                        <div class="col">
                            <div class="input-group">
                                <button class="btn btn-outline-secondary mx-auto" type="button" onclick="cambiarCantidad(this, -1)">-</button>
                                <input type="text" class="form-control text-center" min="0" max="3" placeholder="0" readonly>
                                <button class="btn btn-outline-secondary" type="button" onclick="cambiarCantidad(this, 1)">+</button>
                            </div>   
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
//Para agregar limite de pedido y agregar funcionalidad a los botones de agregar y restar producto//
window.cambiarCantidad = function cambiarCantidad(btn, delta) {
    const input = btn.closest('.input-group').querySelector('input');
    const actual = parseInt(input.value) || 0;
    input.value = Math.max(0, Math.min(3, actual + delta));
}