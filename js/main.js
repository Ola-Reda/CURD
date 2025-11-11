var productName = document.querySelector("#ProductName")
var productPrice = document.querySelector("#ProductPrice")
var productCategory = document.querySelector("#ProductCategory")
var productImage = document.querySelector("#ProductImage")
var productDescription = document.querySelector("#ProductDes")


var productsList = [];

function AddProducts() {
    var products = {
        name: productName.value,
        price: productPrice.value,
        describtion: productDescription.value,
        category: productCategory.value,
        image: ""
    }
    productsList.push(products)
    displyProducts();
    clearInputsvalue()
    console.log(productsList)
}

var dataBox = document.querySelector(".data")
function displyProducts() {
    var box = "";
    for(var i =0; i < productsList.length; i++){
        box += 
        `
            <div class="col-md-2">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${productsList.name}</h3>
                        <h5>${productsList.category}</h5>
                        <p><strong>price:</strong>${productsList.price}</p>
                        <p class="card-text">${productsList.describtion}</p>
                    </div>
                </div>
            </div>
        `
        dataBox.innerHTML = box
    }
}


function clearInputsvalue() {
    productName.value = ""
    productPrice.value = ""
    productDescription.value = ''
    productCategory.value = ""
}