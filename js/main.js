var productName = document.querySelector("#ProductName")
var productPrice = document.querySelector("#ProductPrice")
var productCategory = document.querySelector("#ProductCategory")
var productImage = document.querySelector("#ProductImage")
var productDescription = document.querySelector("#ProductDes")


var productsList = [];
if(localStorage.getItem("products") !== null) {
    productsList = JSON.parse(localStorage.getItem("products"))
    displyProducts()
}

function AddProducts() {
    var products = {
        name: productName.value,
        price: productPrice.value,
        describtion: productDescription.value,
        category: productCategory.value,
        image: ""
    }
    productsList.push(products)
    localStorage.setItem("products", JSON.stringify(productsList))
    displyProducts();
    clearInputsvalue()
}

function displyProducts() {
    var dataBox = document.querySelector(".data")

    var box = "";
    for(var i =0; i < productsList.length; i++){
        box += 
        `
            <div class="col-md-2">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${productsList[i].name}</h3>
                        <h5>${productsList[i].category}</h5>
                        <p><strong>price:</strong>${productsList[i].price}</p>
                        <p class="card-text">${productsList[i].describtion}</p>
                        <button onclick="deleteProducts(${i})">delete</button>
                        <button>update</button>
                    </div>
                </div>
            </div>
        `
        dataBox.innerHTML = box
    }
}

function deleteProducts(index) {
    productsList.splice(index,1)
    localStorage.setItem("products", JSON.stringify(productsList))
    displyProducts()
}


function clearInputsvalue() {
    productName.value = ""
    productPrice.value = ""
    productDescription.value = ''
    productCategory.value = ""
}