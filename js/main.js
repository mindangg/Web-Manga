// ==================================================================================
// SLIDER
// ==================================================================================
let list = document.querySelector(".slider .slider__list");
let items = document.querySelectorAll(".slider .slider__list .slider__item");
let dots = document.querySelectorAll(".slider .slider__dots li");
let next = document.getElementById("slider__next");
let prev = document.getElementById("slider__prev");

let active = 0;
let lengthItems = items.length - 1;
// ==================================================================================
next.onclick = function () {
    if (active + 1 > lengthItems)
        active = 0;
    else
        active++;
    ReloadSlider();
}
// ==================================================================================
prev.onclick = function () {
    if (active - 1 < 0)
        active = lengthItems;
    else
        active--;
    ReloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 5000);

function ReloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .slider__dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 5000);
}
// ==================================================================================
dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        ReloadSlider();
    })
})

function showSlider() {
    let sliderProduct = JSON.parse(localStorage.getItem('productTable'))
    const bestSliderList = document.querySelector(".best__slider__list")
    const bookSliderList = document.querySelector(".book__slider__list")
    bestSliderList.innerHTML = ''
    bookSliderList.innerHTML = ''
    for (var i = 0; i < sliderProduct.length; i += 8) {
        bestSliderList.innerHTML += `
        <div class="best__slider__item">
            <a id="${sliderProduct[i].productId}" onclick="showProductInfo(this)">
                <img src="${sliderProduct[i].cover1}" alt="">
                <img src="${sliderProduct[i].cover2}" alt="">
            </a>
            <h4>${sliderProduct[i].name}</h4>
            <p>$${sliderProduct[i].price}</p>
            <button id="${sliderProduct[i].id}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `
        bookSliderList.innerHTML += `
        <div class="book__slider__item">
            <a id="${sliderProduct[i+1].productId}" onclick="showProductInfo(this)">
                <img src="${sliderProduct[i+1].cover1}" alt="">
                <img src="${sliderProduct[i+1].cover2}" alt="">
            </a>
            <h4>${sliderProduct[i+1].series}</h4>
            <p>$${sliderProduct[i+1].price}</p>
            <button id="${sliderProduct[i+1].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `
    }
    //best slider

    let best_list = document.querySelector(".best__slider .best__slider__list");
    let best_items = document.querySelectorAll(".best__slider .best__slider__list .best__slider__item");
    let best_dots = document.querySelectorAll(".best__slider .best__slider__dots li");
    let best_next = document.getElementById("best__slider__next");
    let best_prev = document.getElementById("best__slider__prev");

    let best_active = 0;
    let best_lengthItems = best_items.length - 4;

    best_next.onclick = function () {
        if (best_active + 1 <= best_lengthItems) {
            best_active++;
            best_ReloadSlider();
            best_AddSlider();
        }
    }

    best_prev.onclick = function () {
        if (best_active - 1 >= 0) {
            best_active--;
            best_ReloadSlider();
            best_RemoveSlider();
        }
    }

    function best_ReloadSlider() {
        let best_checkLeft = best_items[best_active].offsetLeft;
        best_list.style.left = -best_checkLeft + "px";
    }

    function best_AddSlider() {
        best_dots[best_active].classList.add("best__active");
    }

    function best_RemoveSlider() {
        best_dots[best_active + 1].classList.remove("best__active");
    }

    let book_list = document.querySelector(".book__slider .book__slider__list");
    let book_items = document.querySelectorAll(".book__slider .book__slider__list .book__slider__item");
    let book_dots = document.querySelectorAll(".book__slider .book__slider__dots li");
    let book_next = document.getElementById("book__slider__next");
    let book_prev = document.getElementById("book__slider__prev");

    let book_active = 0;
    let book_lengthItems = book_items.length - 4;

    book_next.onclick = function () {
        if (book_active + 1 <= book_lengthItems) {
            book_active++;
            book_ReloadSlider();
            book_AddSlider();
        }
    }

    book_prev.onclick = function () {
        if (book_active - 1 >= 0) {
            book_active--;
            book_ReloadSlider();
            book_RemoveSlider();
        }
    }

    function book_ReloadSlider() {
        let book_checkLeft = book_items[book_active].offsetLeft;
        book_list.style.left = -book_checkLeft + "px";
    }

    function book_AddSlider() {
        book_dots[book_active].classList.add("book__active");
    }

    function book_RemoveSlider() {
        book_dots[book_active + 1].classList.remove("book__active");
    }
}

//search
function convert(e){
    return (e.replaceAll("-", " ")).toLowerCase()
}

const renderProduct = (productTable) => {
    const productPageContainer = document.getElementById('all-product__page--container');
    let start = (allProductPageIndex - 1) * totalProductPerPage
    let end = start + totalProductPerPage
    let curProductArray = productTable.slice(start, end);

    productPageContainer.innerHTML = ``;
    curProductArray.forEach(p => {
        productPageContainer.innerHTML += `
            <div id="${p.productId}" class="book__slider__item">
                <a id=${p.productId} onclick="showProductInfo(this)">
                    <img src="${p.cover1}" alt="">
                    <img src="${p.cover2}" alt="">
                </a>
                <h4>${p.series}</h4>
                <p>$${p.price}</p>
                <button id=${p.productId} onclick="Cart.addToCart(this)">+ Add to cart</button>
            </div>
        `
    })
}

const allProductPage = document.getElementById('all-product__page');
const totalProductPerPage = 8;
let allProductPageIndex = 1;

const renderProductPage = (productDisplay) => {
    document.querySelector('.best__slider').style.display = 'none';
    document.querySelector('.book__slider').style.display = 'none';
    document.querySelector('.banner').style.display = 'none';
    allProductPage.style.display = 'block';
    const productPagination = document.getElementById('all-product__pagination');

    //document.querySelector(".search__page__lists h1").innerText = "Search by " + capitalizeAllWords(renderBy) + " : " + capitalizeAllWords(renderProduct) 

    const totalProductPage = Math.ceil(productDisplay.length / totalProductPerPage);

    if (totalProductPage >= 1) {
        productPagination.innerHTML = `
            <button id="all-product__pagination--prev">
                    <i class="fa-solid fa-angle-left" id="left__angle"></i>
                    <i class="fa-solid fa-arrow-left" id="left__arrow"></i>
                </button>
                <input type="text" disabled value="${allProductPageIndex}"> / ${totalProductPage}
                <button id="all-product__pagination--next" style="margin-left: 15px">
                    <i class="fa-solid fa-angle-right" id="right__angle"></i>
                    <i class="fa-solid fa-arrow-right" id="right__arrow"></i>
            </button>
        `
    }

    renderProduct(productDisplay);

    const productPaginationPrev = document.getElementById('all-product__pagination--prev');
    const productPaginationNext = document.getElementById('all-product__pagination--next');
    const pageNumber = productPagination.getElementsByTagName('input')[0];
    productPaginationPrev.addEventListener('click', () => {
        if (allProductPageIndex > 1){
            allProductPageIndex--;
            pageNumber.value = allProductPageIndex;
            renderProduct(productDisplay);
        }
    })

    productPaginationNext.addEventListener('click', () => {
        if (allProductPageIndex < totalProductPage){
            allProductPageIndex++;
            pageNumber.value = allProductPageIndex;
            renderProduct(productDisplay);
        }
    })
}

function renderProductPageByURL(productFindByURL) {
    let productTable = JSON.parse(localStorage.getItem('productTable'));
    let productDisplay;

    // Check by series
    productDisplay = productTable.filter(p => 
        p.series.toLowerCase() === productFindByURL.toLowerCase()
    );
    if (productDisplay.length > 0) {
        renderProductPage(productDisplay);
        return;
    }

    // Check by category
    productDisplay = productTable.filter(p => 
        p.category.toLowerCase() === productFindByURL.toLowerCase()
    );
    if (productDisplay.length > 0) {
        renderProductPage(productDisplay);
        return;
    }

    // Check by author
    productDisplay = productTable.filter(p => 
        p.author.toLowerCase() === productFindByURL.toLowerCase()
    );
    if (productDisplay.length > 0) {
        renderProductPage(productDisplay);
        return;
    }

    if(productFindByURL.toLowerCase().includes("under")){
        productDisplay = productTable.filter(p => {
        return p.price < 7;
        })
        renderProductPage(productDisplay);
        return;
    }   

    else if(productFindByURL.toLowerCase().includes("7 to 12")){
        productDisplay = productTable.filter(p => {
        return p.price >= 7 && p.price <= 12;
        })
        renderProductPage(productDisplay);
        return;
    }

    else if(productFindByURL.toLowerCase().includes("12 to 17")){
        productDisplay = productTable.filter(p => {
        return p.price > 12 && p.price <= 17;
        })
        renderProductPage(productDisplay);
        return;
    }

    else if(productFindByURL.toLowerCase().includes("over")){
        productDisplay = productTable.filter(p => {
        return p.price > 17;
        })
        renderProductPage(productDisplay);
        return;
    } 

}

function searchProductByURL(){
    const urlSearchIndex = window.location.search
    console.log(urlSearchIndex)

    const urlSearch = new URLSearchParams(urlSearchIndex)

    if(urlSearch.get("series")){
        const seriesSearch = urlSearch.get("series")
        renderProductPageByURL(convert(seriesSearch))
    }

    else if(urlSearch.get("category")){
        const categorySearch = urlSearch.get("category")
        renderProductPageByURL(convert(categorySearch))
    }


    else if(urlSearch.get("author")){
        const authorSearch = urlSearch.get("author")
        renderProductPageByURL(convert(authorSearch))
    }


    else if(urlSearch.get("price")){
        console.log("4")
        const priceSearch = urlSearch.get("price")
        renderProductPageByURL(convert(priceSearch))
    }
}

searchProductByURL()

function searchProduct(){
    productSearch = search__input.value.toLowerCase()
    let productArray = JSON.parse(localStorage.getItem('productTable'))
    document.getElementById("main__page").style.display = "none"
    document.getElementById("search__page").style.display = "inline"
    let searchPage = document.querySelector(".search__page__list");
    searchPage.innerHTML = ""
    if(document.getElementById("filter").className == ""){
        for(let i = 0; i < productArray.length; i++){
            if(((productArray[i].name.toLowerCase().search(productSearch) !== -1) ||
                (productArray[i].series.toLowerCase().search(productSearch) !== -1) ||
                (productArray[i].category.toLowerCase().search(productSearch) !== -1) ||
                (productArray[i].author.toLowerCase().search(productSearch) !== -1)) &&
                productSearch != ''){
                searchPage.innerHTML += `
                <div class="search__page__item">
                    <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                        <img src="${productArray[i].cover1}" alt="">
                        <img src="${productArray[i].cover2}" alt="">
                    </a>
                    <h4>${productArray[i].name}</h4>
                    <p>$${productArray[i].price}</p>
                    <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                </div>
                ` 
            }
        }
    }

    else{
        let filter__series = document.getElementById("filter__series")
        let filter__min = document.getElementById("filter__min").value
        let filter__max = document.getElementById("filter__max").value

        if(filter__series.value == "all"){
            if(filter__max == "" && filter__min =="")
                for(let i = 0; i<productArray.length; i++){
                    if (productArray[i].series.toLowerCase().search(productSearch) != -1){
                        searchPage.innerHTML += `
                        <div class="search__page__item">
                            <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                                <img src="${productArray[i].cover1}" alt="">
                                <img src="${productArray[i].cover2}" alt="">
                            </a>
                            <h4>${productArray[i].name}</h4>
                            <p>$${productArray[i].price}</p>
                            <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                        </div>
                        ` 
                    }
                }

            else
                for(let i = 0; i<productArray.length; i++){
                    if (productArray[i].series.toLowerCase().search(productSearch) != -1 && productArray[i].price >= filter__min && productArray[i].price <= filter__max){
                        searchPage.innerHTML += `
                        <div class="search__page__item">
                            <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                                <img src="${productArray[i].cover1}" alt="">
                                <img src="${productArray[i].cover2}" alt="">
                            </a>
                            <h4>${productArray[i].name}</h4>
                            <p>$${productArray[i].price}</p>
                            <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                        </div>
                        ` 
                    }
                }
		}

		else{
            productSearchFilter = convert(filter__series.value)
            console.log(productSearchFilter)
			for(let i = 0; i < productArray.length; i++){
				if (productArray[i].series.toLowerCase().search(productSearchFilter) != -1 && productArray[i].price >= filter__min && productArray[i].price <= filter__max){
                    searchPage.innerHTML += `
                    <div class="search__page__item">
                        <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                            <img src="${productArray[i].cover1}" alt="">
                            <img src="${productArray[i].cover2}" alt="">
                        </a>
                        <h4>${productArray[i].name}</h4>
                        <p>$${productArray[i].price}</p>
                        <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                    </div>
                    ` 
				}
			}
		}
    }
    search__input.value = ""
}

document.addEventListener("DOMContentLoaded", function(){
    var search__input = document.getElementById("search__input")
    //var filter__series = document.getElementById("filter__series")
    search__input.addEventListener("keydown", (e) =>{
        if(e.key == "Enter"){
            console.log("Hi")
            searchProduct()
        }
    })
})

function capitalizeAllWords(str){
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

function renderViewSearchProduct(renderProduct, renderBy){
    let productArray = JSON.parse(localStorage.getItem('productTable'))
    document.getElementById("main__page").style.display = "none"
    document.getElementById("search__page").style.display = "inline"
    let searchPage = document.querySelector(".search__page__list");
    searchPage.innerHTML = ""
    document.querySelector(".search__page__lists h1").innerText = "Search by " + capitalizeAllWords(renderBy) + " : " + capitalizeAllWords(renderProduct) 
    
    for(let i = 0; i < productArray.length; i++){
        if(renderProduct == productArray[i].series.toLowerCase() || 
            renderProduct == productArray[i].category.toLowerCase() ||
            renderProduct == productArray[i].author.toLowerCase()
        )
        searchPage.innerHTML += `
        <div class="search__page__item">
            <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                <img src="${productArray[i].cover1}" alt="">
                <img src="${productArray[i].cover2}" alt="">
            </a>
            <h4>${productArray[i].name}</h4>
            <p>$${productArray[i].price}</p>
            <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `   
    }
}

function showProductInfo(e) {
    const productInfo = document.querySelector('.product__page')
    productInfo.style.display = 'inline'
    document.querySelector(".product").style.animationName = "topDown"
    const product = JSON.parse(localStorage.getItem("productTable"))
    const findProductById = product.find(p => p.productId == e.id)

    if (!findProductById) {
        alert("Product not found")
        return
    }

    let p = findProductById
    productInfo.innerHTML = `
                    <div class="product">
                    <a id="product__close" onclick="closeProduct()"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
                    <div class="product__img">
                        <img id="product__img1" src="${p.cover1}">
                        <img id="product__img2" src="${p.cover2}">

                        <a id="product__view1" onclick="changeProductView(this)"><img src="${p.cover1}"></a>
                        <a id="product__view2" onclick="changeProductView(this)"><img src="${p.cover2}"></a>
                    </div>

                    <div class="product__info">
                        <h1>${p.name}</h1>
                        <div class="product__info--rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>Price: ${p.price}$</p>
                        <p>Author:</p>
                        <h2>${p.author}</h2>
                        <p>${p.category}</p>
                        <p>Quantity: </p>

                        <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
                        <button id="${p.productId}" onclick="Cart.addToCart(this)">Add to cart</button>

                        <p>Availability: ${p.stock}</p><br>
                        <h4>Description</h4>
                        <p>Description: </p><br>
                        <p>${p.description}</p>
                    </div>
                </div>
    `
}

function changeProductView(e) {
    if (e.id == "product__view1")
        document.getElementById("product__img1").style.opacity = 1;
    else
        document.getElementById("product__img1").style.opacity = 0;
}

function closeProduct() {
    document.querySelector(".product").style.animationName = "bottomUp"
    setTimeout(function () {
        document.querySelector(".product__page").style.display = "none"
    }, 365)
}
// ==================================================================================
// BOOK SLIDER
// ==================================================================================

// 
//
//
const URLOfWebpage = new URL(window.location)
const URLOfIndex = window.location.href
const URLToAdmin = URLOfIndex.split("html")
const layerOfView = document.querySelectorAll('.layer')
const page = URLOfWebpage.searchParams.get('page')
const home = "index.html"

function setURLForPage(page) {
    const urlParams = new URLSearchParams(window.location.search);
    if (page === "home") {
        window.history.replaceState({}, '', home);
    } else {
        urlParams.set('page', page);
        window.history.replaceState({}, '', '?' + urlParams.toString());
    }
}

const loginXmark = document.getElementById('login__page--off')
const signUpXmark = document.getElementById('signup__page--off')
const userInfoOff = document.getElementById('user-info--off')

loginXmark.addEventListener('click', () => {
    setURLForPage('home')
    viewHome()
})

signUpXmark.addEventListener('click', () => {
    setURLForPage('home')
    viewHome()
})

userInfoOff.addEventListener('click', () => {
    setURLForPage('home')
    viewHome()
})
























