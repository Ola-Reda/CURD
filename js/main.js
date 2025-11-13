var productName = document.querySelector("#ProductName")
var productPrice = document.querySelector("#ProductPrice")
var productCategory = document.querySelector("#ProductCategory")
var productImage = document.querySelector("#ProductImage")
var productDescription = document.querySelector("#ProductDes")
var searchInput = document.querySelector("#SearchInput")
var addBtn = document.querySelector("#AddBtn")
var editBtn = document.querySelector("#EditBtn")

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
        image: "samsung.jpg"
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
            <div class="col-md-3">
                <div class="card mb-3">
                    <img src="${productsList[i].image}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${productsList[i].name}</h3>
                        <h5>${productsList[i].category}</h5>
                        <p><strong>price:</strong>${productsList[i].price}</p>
                        <p class="card-text">${productsList[i].describtion}</p>
                        <button onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete <i class="fa-solid fa-trash"></i></button>
                        <button class="btn btn-outline-warning" onclick="updateProductValue(${i})">update <i class="fa-solid fa-pencil"></i></button>
                    </div>
                </div>
            </div>
        `
        dataBox.innerHTML = box
    }
}

var term;
function updateProductValue(index) {
    termIndex = index
    productName.value = productsList[index].name
    productPrice.value = productsList[index].price
    productDescription.value = productsList[index].describtion
    productCategory.value = productsList[index].category

    addBtn.classList.add("d-none")
    editBtn.classList.remove("d-none")

}


function updateProducts() {
    productsList[termIndex].name = productName.value
    productsList[termIndex].price = productPrice.value 
    productsList[termIndex].describtion = productDescription.value 
    productsList[termIndex].category = productCategory.value 
    localStorage.setItem("products", JSON.stringify(productsList))
    displyProducts()

    addBtn.classList.remove("d-none")
    editBtn.classList.add("d-none")

}

function deleteProducts(index) {
    productsList.splice(index,1)
    localStorage.setItem("products", JSON.stringify(productsList))
    displyProducts()
}


function searchProducts() {

    var dataBox = document.querySelector(".data")

var box = "";
    for(var i =0; i < productsList.length; i++){
        if((productsList[i].name).toLowerCase().includes((searchInput.value).toLowerCase())){
             box += 
        `
            <div class="col-md-3">
                <div class="card mb-3">
                    <img src="${productsList[i].image}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${productsList[i].name}</h3>
                        <h5>${productsList[i].category}</h5>
                        <p><strong>price:</strong>${productsList[i].price}</p>
                        <p class="card-text">${productsList[i].describtion}</p>
                        <button onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete <i class="fa-solid fa-trash"></i></button>
                        <button class="btn btn-outline-warning">update <i class="fa-solid fa-pencil"></i></button>
                    </div>
                </div>
            </div>
        `
        }
       
    }
    if(box == ``) {
        box = "no products"
        
    }

    dataBox.innerHTML = box
}



function clearInputsvalue() {
    productName.value = ""
    productPrice.value = ""
    productDescription.value = ''
    productCategory.value = ""
}