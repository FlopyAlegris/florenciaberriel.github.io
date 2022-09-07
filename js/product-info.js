//ENTREGA 3

//Copie esta linea de products.js para que me siga mostrando el usuario en el nav
document.querySelector("li>div").innerHTML = localStorage.getItem("usuario");

//traigo los datos desde la APIS
fetch(PRODUCT_INFO_URL) 
    .then (response => response.json()) 
    .then(json => mostrarDatos(json))
    .catch(e => console.log(e)) //muestra si hay un error


const mostrarDatos = (product) => {
    htmlContent = `
    <div class="m-5">
            <h2>${product.name}</h2><hr>
        <p>Descripcion<br>${product.description}</p>
        <p>Categoria<br>${product.category}</p>
        
    </div>`
    
    document.getElementById("product-container").innerHTML = htmlContent

}