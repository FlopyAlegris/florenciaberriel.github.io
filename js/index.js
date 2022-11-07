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



//esta funcion validarUsuario la cree para poder ver si el usuario pudo loguearse con exito e impedir que entre sin hacerlo


//onload atributo

//ENTREGA2 linea 38 selecciona con el getElement el elemento con id "muestra-usuario" y con el inner muestra el localStorage en pantalla(html)


