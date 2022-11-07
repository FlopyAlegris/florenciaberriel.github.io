const email = document.getElementById('email');
const primerNombre = document.getElementById('first-name');
const segundoNombre = document.getElementById('second-name');
const primerApellido = document.getElementById('first-surname');
const segundoApellido = document.getElementById('second-surname');
const telefono = document.getElementById('telefono');

let usuarioACargar = JSON.parse(localStorage.getItem(`usuarioGuardado-${localStorage.getItem('usuario')}`));


function cargarDatos() {
    primerNombre.setAttribute('value', usuarioACargar.name)
    primerApellido.setAttribute('value', usuarioACargar.surname)
    if (!usuarioACargar.secondName == (undefined || "") || !usuarioACargar.secondSurname == (undefined || "") || !usuarioACargar.phone == (undefined || "")) {
    segundoNombre.setAttribute('value', usuarioACargar.secondName)
    segundoApellido.setAttribute('value', usuarioACargar.secondSurname)
    telefono.setAttribute('value', usuarioACargar.phone)
    guardarDatos();
}

}

function guardarDatos() {
    let usuario = {
        'name': primerNombre.value,
        'surname': primerApellido.value,
        'email': email.value,
        'secondName': segundoNombre.value,
        'secondSurname': segundoApellido.value,
        'phone': telefono.value,
    } 

    /* usuario.push(primerNombre.value, primerApellido.value, email.value, segundoNombre.value, segundoApellido.value, telefono.value); */
    console.log({ usuario });
    localStorage.setItem(`usuarioGuardado-${localStorage.getItem('usuario')}`, JSON.stringify(usuario));
}



(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                guardarDatos();
                cargarDatos();
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//console.log(localStorage.getItem('usuarioGuardado'))
//console.log({usuario});
document.addEventListener('DOMContentLoaded', () => {
    email.value = localStorage.getItem("usuario");
    cargarDatos()
    console.log(usuarioACargar);
})

