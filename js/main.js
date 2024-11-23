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

let sliderProduct = JSON.parse(localStorage.getItem('productTable'))
function showSlider() {
    const bookSliderList = document.querySelector(".book__slider__list")
    bookSliderList.innerHTML = ''
    for (var i = 0; i < sliderProduct.length; ++i) {
        bookSliderList.innerHTML += `
        <div class="book__slider__item">
            <a id="${sliderProduct[i].productId}" onclick="showProductInfo(this)">
                <img src="${sliderProduct[i].cover1}" alt="">
                <img src="${sliderProduct[i].cover2}" alt="">
            </a>
            <h4>${sliderProduct[i].series}</h4>
            <p>$${sliderProduct[i].price}</p>
            <button id="${sliderProduct[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `
    }
}
showSlider()

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
                <h1>${p.series}</h1>
                <div class="product__info--rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p>Author:</p>
                <h2>${p.author}</h2>
                <p>${p.category}</p>
                <p>Stock: ${p.stock}</p>
                <h4>Description</h4>
                <p>${p.description}</p><br>
                <button id=${p.productId} onclick="Cart.addToCart(this)">+ Add to cart</button>
            </div>
        </div>
    `
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

























