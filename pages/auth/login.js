const usuarioValido = {
    email: 'admin@tienda.com',
    password: '1234'
};

//Le dice que espere a que todo el HTML esté cargado// 
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('loginForm');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const emailIngresado = document.querySelector('input[name="email"]').value;
        const passIngresada = document.querySelector('input[name="pass"]').value;

        if (emailIngresado === usuarioValido.email && passIngresada === usuarioValido.password) {
            sessionStorage.setItem('usuarioLogueado', JSON.stringify({ email: emailIngresado }));
            window.location.href = '/pryEcommerce/index.html';
            alert('Sesión iniciada')
        } else {
            alert('Email o contraseña incorrectos.');
        }
    });
});