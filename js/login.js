function alertaExitosa() {
    alert("Inicio de Sesión exitoso");
};

function alertaDenegada() {
    alert("Ups! Tuvimos un problema para ingresar");
};

function validar() {
    email = document.getElementById("mail");
    password = document.getElementById("password");
        if (email.value == 0 || password.value == 0) {
            alertaDenegada(); 
            return false;
        }else{
            alertaExitosa();
            localStorage.setItem('USER', 'true');
            
            
        }
};