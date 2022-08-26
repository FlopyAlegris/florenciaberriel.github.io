document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//esta funcion hace que la variable USER declarado en localStorage sea false y como se ve mas abajo me redirecciona a login
function desconectarse(){
    localStorage.setItem('USER', 'false');
}

//esta funcion validarUsuario la cree para poder ver si el usuario pudo loguearse con exito e impedir que entre sin hacerlo

function validarUsuario() {
    if(localStorage.getItem('USER')){ //verifica si el USER existe
    
        if(localStorage.getItem('USER')  == 'false'){
            alert('Debe logearse correctamente')
            window.location.href = "login.html";//si el usuario es false (no cumplir con mi validacion) rebota a login
    }
    } else {
    window.location.href = "login.html"; 
    alert('Debe logearse correctamente'); //esto impide que el cliente navegue por el index sin pasar por el login previamente (y lo redirige)
}
}