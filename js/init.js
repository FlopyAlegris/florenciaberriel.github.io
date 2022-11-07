const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";

// Ent2 En la const PRODUCTS_URL coloque entre `` el url de la APIS de products y con un marcador ${} le agregue el valor dinamico del localStorage
const PRODUCTS_URL = `https:japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`; 

//Entrega3 En la const PRODUCT_INFO_URL coloque entre `` el url de la APIS de products y con un marcador ${} le agregue el valor dinamico del localStorage
const PRODUCT_INFO_URL = `https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productID")}.json`;

//Entrega3 tome esta url y la trabajo en product-info.js
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";

const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";  
  
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


//esta funcion hace que la variable USER declarado en localStorage sea false y como se ve mas abajo me redirecciona a login
function desconectarse(){
  localStorage.setItem('USER', 'false');
  localStorage.removeItem("usuario"); // 4.2 clear para que borre el usuario guardado cuando cierres sesion
}


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

document.getElementById("muestra-usuario").innerHTML = localStorage.getItem("usuario");

document.addEventListener('DOMContentLoaded', validarUsuario()); //Esto lo pongo para que siempre lo primero que cargue sea la vealidacion de usuario



//Entrega 4 (hago las funciones en init porque los html tienen vinculado a init.js entonces tienen funcionalidad)


document.querySelector('#button1').addEventListener('click', () => {
  window.location.href = "./cart.html";
});

document.querySelector('#button2').addEventListener('click', () => {
  window.location.href = "./my-profile.html";
});

document.querySelector('#button3').addEventListener('click', () => {
  desconectarse()
  window.location.href = "./login.html";
});
