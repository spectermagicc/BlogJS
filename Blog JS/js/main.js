//VALIDACIÓN DEL FORMULARIO

var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    mensaje = formulario.mensaje,
    error = document.getElementById('error');

function validarNombre(name) {

    if (nombre.value == '' || nombre.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, complete el nombre</li>';
        console.log('Por favor, complete el nombre');

        name.preventDefault();
    } else
        error.style.display = 'none';

}

function validarCorreo(name) {

    if (correo.value == '' || correo.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, ingrese un correo</li>';
        console.log('Por favor, ingrese un correo');

        name.preventDefault();
    } else
        error.style.display = 'none';

}

function validarMensaje(name) {
    if (mensaje.value == '' || mensaje.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, ingrese un mensaje</li>';
        console.log('Por favor, ingrese un mensaje');

        name.preventDefault();
    } else
        error.style.display = 'none';
}

function validarTodo(name) {

    error.innerHTML = '';

    validarNombre(name);
    validarCorreo(name);
    validarMensaje(name);
}

formulario.addEventListener('submit', validarTodo);