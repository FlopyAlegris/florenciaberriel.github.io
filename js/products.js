

const ORDER_ASC_COST = "AZ";
const ORDER_DESC_COST = "ZA";
const ORDER_BY_SOLD_COUNT = "Relevancia";
let listadoActualCategorias = []; //defino lista vacia
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortCategories(criteria, array){ // .cost para que ordene asc y desc en funcion de precio 
    let result = [];
    if (criteria === ORDER_ASC_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_SOLD_COUNT){ //relevancia como .soldCount
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

//Entrega3 3.1 Tome la funcion de categories de setCatID y la modifique con product para que tome el valor guardado del id al hacer click y nos redirige a product-info
function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}




//me muestra todos los productos
function mostrarProductos(){

    let htmlContentToAppend = "";
    for (let producto of listadoActualCategorias) { //recorre el array

        //filtrados min y max 

        if (((minCount == undefined) || (minCount != undefined && parseInt(producto.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.cost) <= maxCount))){
//agregue una función onclick en la linea 58 para que al tocar los productos .
            htmlContentToAppend += `
            <div onclick="setProductID(${producto.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${producto.name} - ${producto.currency} ${producto.cost}</h4>
                        <small class="text-muted">${producto.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${producto.description}</p>
                </div>
            </div>
        </div>`
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}
function sortAndShowCategories(sortCriteria, categoriesArray){ //me muestra un nuevo arreglo segun el parametro definido 
    currentSortCriteria = sortCriteria; 

    if(categoriesArray != undefined){
        listadoActualCategorias = categoriesArray;
    }
    //definido arriba con los parametros criteria y array
    listadoActualCategorias = sortCategories(currentSortCriteria, listadoActualCategorias);

    //Muestro  ordenado
    mostrarProductos();
}

//cuando cargue todo manda esta info primero
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){ 
        if (resultObj.status === "ok"){
//obtengo datos de la propiedad de la categoria de productos y los ordeno en cantidad de articulos vendidos
            sortAndShowCategories(ORDER_BY_SOLD_COUNT, resultObj.data.products);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_SOLD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        mostrarProductos(); //limpia y si son indefinidos vuelve al array original
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        mostrarProductos(); //segun el filtrado
    });
});

//DESAFIATE- Ent2//

const buscar = document.getElementById("buscar")
    const contenedor = document.getElementsByClassName("list-group-item") //esta dentro de cat-list-container


//traemos los datos desde una API

fetch(PRODUCTS_URL)
    .then( response => response.json() )
    .then( json => mostrarDatos(json) )
    .catch( e => console.log(e) )

const mostrarDatos = (data) => {
    //console.log(data)
    
    for(let i=0; i<data.length; i++){
        htmlContentToAppend += `
        <div onclick="setCatID(${data[i].id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${data[i].image}" alt="${data[i].description}" class="img-thumbnail"></div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${data[i].name} -${data[i].currency} ${data[i].cost}</h4>
                        <small class="text-muted">${data[i].soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${data[i].description}</p>
                </div>
            </div>
        </div>
        `
    }
}    

//Búsqueda
buscar.addEventListener('keyup', (e)=>{
    let texto = e.target.value
    //console.log(texto)
    let er = new RegExp(texto, "i")
    for(let i=0; i<contenedor.length; i++) {
        let valor = contenedor[i]
        //console.log(valor)
        if(er.test(valor.innerText)){
            valor.classList.remove("ocultar")
        }else{
            //console.log(valor)
            valor.classList.add("ocultar")
        }
    }
})

/*RegExp*/ //para hacer que texto se vuelva patron (expresion regular)

document.getElementById("muestra-usuario").innerHTML = localStorage.getItem("usuario");    

