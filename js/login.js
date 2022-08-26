function alertaExitosa() {
    alert("Inicio de Sesión exitoso");
};

function alertaDenegada() {
    alert("Ups! Tuvimos un problema para ingresar");
};
<<<<<<< HEAD
//onclick atributo
=======

>>>>>>> a68ec1aca3b838510fa6c9be4b8bf51bb7d037fd
function validar() {
    email = document.getElementById("mail");
    password = document.getElementById("password");
        if (email.value == 0 || password.value == 0) {
            alertaDenegada(); 
            return false;
        }else{
            alertaExitosa();
<<<<<<< HEAD
            localStorage.setItem("usuario", email.value);//ENTREGA2 declaarar mediante setItem la clave usuario y el valor del input email
=======
>>>>>>> a68ec1aca3b838510fa6c9be4b8bf51bb7d037fd
            localStorage.setItem('USER', 'true');
            
            
        }
<<<<<<< HEAD
};
//linea 18 agregada para que al log exitoso me guarde el utlimo logueado




=======
};
>>>>>>> a68ec1aca3b838510fa6c9be4b8bf51bb7d037fd
