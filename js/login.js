function alertaExitosa() {
    alert("Inicio de Sesión exitoso");
};

function alertaDenegada() {
    alert("Ups! Tuvimos un problema para ingresar");
};

//onclick atributo



function validar() {
    email = document.getElementById("mail");
    password = document.getElementById("password");
        if (email.value == 0 || password.value == 0) {
            alertaDenegada(); 
            return false;
        }else{
            alertaExitosa();

            localStorage.setItem("usuario", email.value);//ENTREGA2 declaarar mediante setItem la clave usuario y el valor del input email

            localStorage.setItem('USER', 'true');
            
            
        }

};
//linea 18 agregada para que al log exitoso me guarde el utlimo logueado





