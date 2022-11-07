//ENTREGA 5 // 4.1
const URL_CART = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
//ENTREGA 6
const metodoDeEnvio = document.getElementsByClassName('radios');
const costoDeEnvio = document.getElementById('costo-de-envio');
const totalConEnvio = document.getElementById('total-con-envio')
const formaDePagoCredito = document.getElementById('tarj-credito');
const formaDePagoTransferencia = document.getElementById('transf-bancaria');
const tarjeta = document.getElementById("numero-de-tarjeta");
const codigo = document.getElementById("codigo");
const vencimiento = document.getElementById("vto");
const transfBancaria = document.getElementById('n-de-cuenta');

const direccion = document.getElementById('direccion');
const numero = document.getElementById('num-direccion');
const esquina = document.getElementById('esquina');

//const mensaje = document.getElementById('mensaje');
const alerta = document.querySelector('.alert-sucess')
const alertaModal = document.getElementById('mensaje-de-alerta')
const mensajeModal = document.getElementById('mensaje');






// ENTREGA 5 // 4.3

let precioUnitario = 0
let subtotal = 0
//ENTREGA 6 VALIDACIONES





function verificarRadio() {
    if (metodoDeEnvio[0].checked) {
        costoDeEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.15).toFixed()}`;
        totalConEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.15) + precioUnitario * document.getElementById("cantidad").value}`
    }
    if (metodoDeEnvio[1].checked) {
        costoDeEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.07).toFixed()}`;
        totalConEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.07) + precioUnitario * document.getElementById("cantidad").value}`
    }
    if (metodoDeEnvio[2].checked) {
        costoDeEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.05).toFixed()}`;
        totalConEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.05) + precioUnitario * document.getElementById("cantidad").value}`
    }

};

function subTotal() {
    document.getElementById('subtotal').innerHTML = precioUnitario * document.getElementById("cantidad").value;
    document.getElementById('p-subtotal').innerHTML = `USD ${precioUnitario * document.getElementById("cantidad").value}`; //ENTREGA 6
    verificarRadio();
}




function totalCarrito() {
    verificarRadio()

    for (let i = 0; i < metodoDeEnvio.length; i++) {
        metodoDeEnvio[i].addEventListener('click', () => {
            if (i = 0) {
                costoDeEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.15).toFixed()}`;
                totalConEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.15) + precioUnitario * document.getElementById("cantidad").value}`
            }
            if (i = 1) {
                costoDeEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.07).toFixed()}`;
                totalConEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.07) + precioUnitario * document.getElementById("cantidad").value}`
            }
            if (i = 2) {
                costoDeEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.05).toFixed()}`;
                totalConEnvio.innerHTML = `USD ${(precioUnitario * document.getElementById("cantidad").value * 0.05) + precioUnitario * document.getElementById("cantidad").value}`
            }
        });
    };
}


function metodoDePagoCredito() {
    if (formaDePagoCredito.checked) {
        transfBancaria.disabled = true
        tarjeta.disabled = false
        codigo.disabled = false
        vencimiento.disabled = false
        mensajeModal.innerHTML = 'Tarjeta de Credito'
    }
}

function pagoTransferencia() {
    if (formaDePagoTransferencia.checked) {
        transfBancaria.disabled = false
        tarjeta.disabled = true
        codigo.disabled = true
        vencimiento.disabled = true
        mensajeModal.innerHTML = 'Transferencia Bancaria'
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    
                } else if (document.querySelector('.was-validated')) {
                    compraExitosa()
                    }
                    
                    mostrarAlertaModal()
                
                form.classList.add('was-validated')
                }, false)
                
        })
})()

function mostrarAlertaModal() {
        if(mensajeModal.innerHTML == ' Seleccione metodo de pago ') {
        alertaModal.classList.replace('d-none','text-danger')
    }else {
        alertaModal.classList.replace('text-danger', 'd-none')
    }
}

    
    


function compraExitosa(){
    document.querySelector('.alert-success').classList.replace('d-none', 'show');
    
}



















document.addEventListener("DOMContentLoaded", () => {
    fetch(URL_CART)
        .then(response => response.json())
        .then(json => mostrarEnCarrito(json))


    const mostrarEnCarrito = (data) => {

        infoContentToAppend = ""


        precioUnitario = data.articles[0].unitCost;

        infoContentToAppend += `
            
                <tr>
                    
                    <td><img style="width: 7em" src="${data.articles[0].image}"></td>
                    <td>${data.articles[0].name}</td>
                    <td>${precioUnitario}</td>
                    <td><input class="form-control" id="cantidad" type="number" value="${data.articles[0].count}" min=1 onchange="subTotal()"></td>
                    <td>${data.articles[0].currency}</td>
                    <td><p id="subtotal">${precioUnitario}</td>
                                        
                </tr>
                
        `
        document.querySelector('tbody').innerHTML = infoContentToAppend;
        document.getElementById('p-subtotal').innerHTML = `USD ${precioUnitario * document.getElementById("cantidad").value}`;


    };


});