/* VALIDACION FORMULARIO HOME */ 
let formulario = document.getElementById('formtarjeta');
let dni = document.getElementById('dni');
let invalidDni = document.getElementById('invalidDni');

let confirmar = document.getElementById('confirmar');
let confirmado = document.getElementById('confirmado');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let error = false;
    dni.classList.remove("is-invalid");
    dni.classList.add("is-valid");
    invalidDni.classList.add("visually-hidden");


    if (dni.value.length < 7) {
        error = true;
        dni.focus();
        dni.classList.add("is-invalid");
        invalidDni.classList.remove("visually-hidden");
    }

    if (!error) {
        setTimeout( function() { window.location.href = "confirmado.html"; }, 1000 );
    }

});