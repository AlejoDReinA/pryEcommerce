const navElement = [
    {title: 'Inicio', link:'../index.html'},
    {title: 'Procesadores', link:'../Pages/cpu.html'},
    {title: 'Tarjetas de video', link:'../Pages/gpu.html'},
    {title: 'Motherboards', link:'../Pages/motherboard.html'},
]
const navbar = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <!--agregar titulo e icono al navbar-->
            <a href="#" class="navbar-brand"> 
                <img src="../Imagenes/shop.svg" alt="logo" width="30" height="24">
                Tienda gamer
            </a>
            <!--agregar barra de busqueda-->
            <form class="d-flex w-50 ms-auto" role="search">
                <div class="input-group">
                    <input class="form-control" type="search" placeholder="Buscar producto" aria-label="search">
                    <!--agregar icono de lupa-->
                    <span class="input-group-text">
                        <i class="bi bi-search"></i>
                    </span>
                </div>
            </form>
            <a href="../Pages/auth/login.html" class="btn btn-success ms-auto"> <i class="bi bi-box-arrow-in-left"></i></a>
            <a href="#" class="btn btn-dark"><i class="bi bi-cart3"></i></a>    

            <a id="btnLogout" href="#" class="btn btn-danger"><i class="bi bi-box-arrow-right"></i></a>
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <!--Boton para colapsar el navbar-->
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="toggle navigation">
                <span class="navbar-toggler-icon "></span>
                
            </button>

            <div class="collapse navbar-collapse justify-content-center nav-underline" id="navbarCollapse">
                <ul class="navbar-nav nav-underline">
                    
                    ${
                        navElement.map(e => {
                            const esActivo = window.location.href.includes(e.link) ? 'active' : '';
                            return `
                            <li class="nav-item">
                                <a class="nav-link ${esActivo}" href=${e.link}>${e.title}</a>
                            </li>
                            `
                        }).join('')
                    }
                </ul>
            </div>
        </div>
    </nav>
` 
let navbarContainer = document.querySelector('header')
window.addEventListener('load', ()=> {
    navbarContainer.innerHTML = navbar
    //agregar funcionalidad al boton de logout para que redirija al Inicio//
    document.getElementById('btnLogout').addEventListener('click', ()=>{
        window.location.href = '../Pages/auth/login.html'
    })
})