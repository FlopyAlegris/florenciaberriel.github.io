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

<<<<<<< HEAD
//onload atributo
=======
>>>>>>> a68ec1aca3b838510fa6c9be4b8bf51bb7d037fd
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
<<<<<<< HEAD
document.getElementById("muestra-usuario").innerHTML = localStorage.getItem("usuario"); 
}//ENTREGA2 linea 34 selecciona con el getElement el elemento con id "muestra-usuario" y con el inner muestra el localStorage en pantalla(html)

=======
}
>>>>>>> a68ec1aca3b838510fa6c9be4b8bf51bb7d037fd
