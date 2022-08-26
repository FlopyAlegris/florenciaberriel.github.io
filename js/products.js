
function showCategoriesList(){

    
    
    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.products.length; i++){
        let category = currentCategoriesArray.products[i];

                
            
                htmlContentToAppend += `
            <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${category.image}" alt="${category.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${category.name}</h4>
                            <small class="text-muted">${category.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${category.description}</p>
                    </div>
                </div>
            </div>
            `
        }
        
        
        

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }


    

    document.addEventListener("DOMContentLoaded", function(e){   

        getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(function(resultObj){
            if (resultObj.status === "ok"){
                currentCategoriesArray = resultObj.data
                showCategoriesList()
                //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
            }
        });
    });