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
// ==================================================================================
// SHOW SLIDER 
// ==================================================================================
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
            <h4>${sliderProduct[i].series}</h4>
            <p>$${sliderProduct[i].price}</p>
            <button id="${sliderProduct[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `
        bookSliderList.innerHTML += `
        <div class="book__slider__item">
            <a id="${sliderProduct[i + 1].productId}" onclick="showProductInfo(this)">
                <img src="${sliderProduct[i + 1].cover1}" alt="">
                <img src="${sliderProduct[i + 1].cover2}" alt="">
            </a>
            <h4>${sliderProduct[i + 1].series}</h4>
            <p>$${sliderProduct[i + 1].price}</p>
            <button id="${sliderProduct[i + 1].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `
    }
    // 
    // BEST
    // 
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
}
// ==================================================================================
// SHOW PRODUCT INFO (DETAIL)
// ==================================================================================
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
                <p>Price: ${p.price}$</p>
                <p>Author:</p>
                <h2>${p.author}</h2>
                <p>${p.category}</p>
                <p>Quantity: </p>

                <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
                <button id="${p.productId}" onclick="Cart.addToCart(this)">Add to cart</button>

                <p>Availability: ${p.stock}</p><br>
                <h4>Description: </h4><br>
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























