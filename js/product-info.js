//ENTREGA 3
//modifique la URL PRODUCT-INFO-COMMENTS-URL para anadirle el valor del id de product al json
const URL_COMENTARIOS = `https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem("productID")}.json`;


//ENTREGA 4 // 4.1 recarga a producto relacionado
function setProductRelatedID(id) {
    localStorage.setItem("productID", id);
    window.location.reload();
}





//contador para las estrellas
//creo una funcion y un contador para que recorra los valores y me muestre la cantidad de estrellas chckeadas y las que no en funcion de valor.
function agregarEstrella(cantEstrellas) {
    let estrellita = ""
    for (i = 0; i < cantEstrellas; i++) {
        estrellita += `<span class="fa fa-star checked"></span>`
    }
    for (i = cantEstrellas; i < 5; i++) {
        estrellita += `<span class="fa fa-star"></span>`
    }
    return estrellita;
}

//Copie esta linea de products.js para que me siga mostrando el usuario en el nav


// 3.2 Solicitud de obtencion de info de cada producto y se muestra en product-info
//traigo los datos desde la APIS
fetch(PRODUCT_INFO_URL)  //esta constante la modifiqué en init.js y la traigo de allí mismo vinculado el script en el html de product-info
    .then(response => response.json())
    .then(json => mostrarDatos(json))
    .catch(e => console.log(e)) //muestra si hay un error

//mostramos los datos de todos los productos
const mostrarDatos = (product) => {
    productContentToAppend = `
            <h2>${product.name}</h2><hr>
        <p><strong>Descripción</strong><br>${product.description}</p>
        <p><strong>Categoría</strong><br>${product.category}</p> 
        <p><strong>Cantidad de vendidos</strong><br>${product.soldCount}<button id="add-cart" style="float:right";>Agregar al carrito</button></p>
        <p><strong>Imágenes ilustrativas</strong><br><p>
        
        
    `
    

    document.getElementById("product-container").innerHTML = productContentToAppend;

    //Entrega 4 desafiate 1
    let imagesContentToAppend = ""
    
    for(let i=0; i<product.images.length; i++){

    imagesContentToAppend += `

        <img src="${product.images[i]}" class="img">

            `
    }
    document.querySelector('.grande').innerHTML += imagesContentToAppend;



    //ENTREGA 4 ----> 4.1
    let productosRelacionadosContentToAppend = ""
    let productosRelacionados = product.relatedProducts;


    for (let i = 0; i < productosRelacionados.length; i++) {

        productosRelacionadosContentToAppend += `
        <div class="p-3 cursor-active" style="box-shadow: 0 5px 10px;border: 1px solid gray">
            <div onclick="setProductRelatedID(${productosRelacionados[i].id})">
                <img class="w-25" src="${productosRelacionados[i].image}">
                <strong><p style="float:right;">${productosRelacionados[i].name}</p></strong>
            </div>
            
        </div>
        `
    }
    document.getElementById("producto-relacionado").innerHTML += productosRelacionadosContentToAppend;
};

fetch(URL_COMENTARIOS)
    .then(response => response.json())
    .then(json => mostrarComentarios(json))
const mostrarComentarios = (comentarios) => {
    comentariosContentToAppend = ""

    for (let i = 0; i < comentarios.length; i++) {      /*las [i] van con los objetos no con sus propiedades*/
        comentariosContentToAppend += `
        <div class="p-3" style="box-shadow: 0 5px 10px;border: 1px solid gray"> 
            <p><strong>Comentario:</strong></p>
            <p><strong>${comentarios[i].user}</strong></p><p>${comentarios[i].dateTime}</p>
            ${agregarEstrella(comentarios[i].score)}
            <p>${comentarios[i].description}</p>
            
        </div>
        `

    }
    document.getElementById("comentarios").innerHTML += comentariosContentToAppend;


};


//Esto lo cree para poder guardar como nombre en lo comentarios, el usuario ya guardado en localStorage
//y mostrar con el substring solamente desde el 1er caracter (0) hasta el ultimo antes del @ 
let nombre = localStorage.getItem('usuario')
nombre = nombre.substring(0, nombre.indexOf('@'))


document.addEventListener('submit', (e) => { //submit evento para enviar formulario
    e.preventDefault();
    let comentarioPropio = {     //cree un objeto que toma como propiedades : 
        description: document.getElementById("textarea").value, // description para que tome el valor del textarea del form
        score: document.querySelector('input[type=radio]:checked').value // y score para que tome el valor del input checkeado.

    }

    let comentarioPropioToAppend =
        `
    <div class="p-3" style="box-shadow: 0 5px 10px;border: 1px solid gray"> 
        <p><strong>Comentario:</strong></p> 
        <p><strong>${nombre}</strong></p><p>${fecha}</p>
        ${agregarEstrella(comentarioPropio.score)}
        <p>${comentarioPropio.description}</p>
        
    </div>
    `
    document.getElementById("comentarios").innerHTML += comentarioPropioToAppend;

});

//esto lo cree para que muestre la fecha cuando realizamos el comentario
let fecha = new Date();
fecha = fecha.toLocaleString();

//entrega 4 desafiate 2 CARRUSEL

const grande= document.querySelector('.grande');
const punto= document.querySelectorAll('.punto');

punto.forEach((cadaPunto, i ) => {
    punto[i].addEventListener('click', ()=> {
        //guarda la posicion del punto
        let position = i ;
        //calcula el espacio que debe desplazarse el contenedor 'grande'
        let operacion = position * -25
        
        //mueve el contenedor 'grande'
        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
    punto[i].classList.remove('activo');
});

    punto[i].classList.add('activo');
    });
});



