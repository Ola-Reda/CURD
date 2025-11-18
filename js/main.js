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


function nameValidation() {
    var regax = /^[a-zA-Z0-9]{3,15}$/
    var myString = productName.value
    if(regax.test(myString)) {
        productName.classList.add("is-valid")
        productName.classList.remove("is-invalid")
        document.querySelector(".paratest").classList.add("d-none")
        return true
    }
    else {
        productName.classList.add("is-invalid")
        productName.classList.remove("is-valid")
        document.querySelector(".paratest").classList.remove("d-none")
        return false
    }
}

function priceValidation() {
    var regax = /^[1-9][0-9]{0,6}$/
    var myString = productPrice.value
    if(regax.test(myString)) {
        productPrice.classList.add("is-valid")
        productPrice.classList.remove("is-invalid")
        return true
    }
    else {
        productPrice.classList.add("is-invalid")
        productPrice.classList.remove("is-valid")
        return false
    }
}

function categoryValidation() {
    var regax = /^(tv|Mobile|Screens|Electornics)$/i
    var myString = productCategory.value
    console.log(regax.test(myString))
    if(regax.test(myString)) {
        productCategory.classList.add("is-valid")
        productCategory.classList.remove("is-invalid")
        return true
    }
    else {
        productCategory.classList.add("is-invalid")
        productCategory.classList.remove("is-valid")
        return false
    }
}

function imageValidation() {
    var regax = /^[\w-@ ]+\.(svg|png|jpg|jpeg)$/
    var myString = productImage.value.slice(12)
    console.log(regax.test(myString))
    if(regax.test(myString)) {
        productImage.classList.add("is-valid")
        productImage.classList.remove("is-invalid")
        return true
    }
    else {
        productImage.classList.add("is-invalid")
        productImage.classList.remove("is-valid")
        return false
    }
}

function descValidation() {
    var regax = /^.+$/
    var myString = productDescription.value
    console.log(regax.test(myString))
    if(regax.test(myString)) {
        productDescription.classList.add("is-valid")
        productDescription.classList.remove("is-invalid")
        return true
    }
    else {
        productDescription.classList.add("is-invalid")
        productDescription.classList.remove("is-valid")
        return false
    }
}


function AddProducts() {
    if(nameValidation() && priceValidation() && categoryValidation() && imageValidation() && descValidation() ){
        var products = {
        name: productName.value,
        price: productPrice.value,
        describtion: productDescription.value,
        category: productCategory.value,
        image: `imgs/${productImage.value.slice(12)}`
        }
        productsList.push(products)
        localStorage.setItem("products", JSON.stringify(productsList))
        displyProducts();
        clearInputsvalue()
    }
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
    // productsList[termIndex].name = productName.value
    // productsList[termIndex].price = productPrice.value 
    // productsList[termIndex].describtion = productDescription.value 
    // productsList[termIndex].category = productCategory.value 
    // productsList[termIndex].image = productImage.value.slice(12)

    var updatedroduct = {
        name: productName.value,
        price: productPrice.value,
        describtion: productDescription.value,
        category: productCategory.value,
        image: `imgs/${productImage.value.slice(12)}`
    }
    productsList.splice(termIndex,1,updatedroduct)

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
    productName.classList.remove("is-valid")
    productPrice.classList.remove("is-valid")
    productCategory.classList.remove("is-valid")
    productImage.classList.remove("is-valid")
    productDescription.classList.remove("is-valid")
}