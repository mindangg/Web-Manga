let productCurrentHomePage = 1;
let productPerHomePage = 9;
let prduct
// ==================================================================================
// RENDER HOME PAGE 
// ==================================================================================
function renderViewIndex(renderProduct) {
    productContainer.innerHTML = ""

    let start = (productCurrentHomePage - 1) * productPerHomePage;
    let end = start + productPerHomePage;
    let productList = renderProduct.slice(start, end);

    if (productList.length > 0) {
        productList.forEach(p => {
            productContainer.innerHTML += `
    <div id="${p.productId}" class="product__item">
        <a id=${p.productId} onclick="showProductInfo(this)">
            <img src="${p.cover1}" alt="">
            <img src="${p.cover2}" alt="">
        </a>
        <h4>${p.series}</h4>
        <p>$${p.price}</p>
        <button id=${p.productId} onclick="Cart.addToCart(this)">+ Add to cart</button>
        <p>Stock: ${p.stock}</p>
    </div>
`
        });
        renderPagination(renderProduct);
    } else {
        alert("Chưa có sản phẩm !!!")
    }
}

function renderPagination(renderProduct) {
    let productContainerFooter = document.querySelector('.product-container__footer');
    println(productContainerFooter)
    productContainerFooter.innerHTML = ""

    const productTotalPages = Math.ceil(renderProduct.length / productPerHomePage);

    if (productTotalPages > 1) {
        productContainerFooter.innerHTML = `
    <div class="pagination">
        <button class="button button__product__prev-pagi" 
        id="button__product__prev-pagi"> &lt; </button>

        <span type="text" class="page-info"> 
            <pre id="input-product__pagi"> </pre>    
        </span>
        
        <button class="button button__product__next-pagi" 
        id="button__next-pagi"> &gt; </button>
    </div>
`

        const inputPagi = document.getElementById("input-product__pagi");
        inputPagi.innerText = `${productCurrentHomePage} / ${productTotalPages}`;

        document.getElementById("button__product__prev-pagi").addEventListener("click", () => {
            if (productCurrentHomePage > 1) {
                productCurrentHomePage--;
                renderViewIndex(renderProduct);
            } else {
                console.error("Không thể điều hướng trang trước đó.");
            }
        });

        document.getElementById("button__next-pagi").addEventListener("click", () => {
            if (productCurrentHomePage < productTotalPages) {
                productCurrentHomePage++;
                renderViewIndex(renderProduct);
            } else {
                console.error("Không thể điều hướng trang tiếp theo.");
            }
        });
    }
}
// ==================================================================================
// RENDER PRODUCT DETAIL
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
// TOGGLE USER INFO 
// ==================================================================================
function toggleUserInfo(e) {
    const userInfo = document.querySelector('.user-info__container')
    const orderHistory = document.querySelector('.order__history')
    if (e.id === userInfo.className) {
        userInfo.style.display = 'inherit'
        orderHistory.style.display = 'none'
    }
    else {
        userInfo.style.display = 'none'
        orderHistory.style.display = 'inherit'
        Order.renderOrderView()
    }
}
// ==================================================================================
function logoutUser() {
    localStorage.removeItem('accountLogin')
    User.renderAccountLogin()
    viewHome()
    window.location.reload()
}
// ==================================================================================
function fetchPropertyProduct(url) {
    if (url.search) {
        const categorySearch = url.searchParams.get('category')
        const authorSearch = url.searchParams.get('author')
        const categoryOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.category === categorySearch)
        const authorOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.author === categorySearch)
        if (categoryOfProduct.length > 0 && categorySearch.length > 0) {
            renderViewIndex(categoryOfProduct)
        }
    } else {
        renderViewIndex(JSON.parse(localStorage.getItem('productTable')))
    }
}
// ==================================================================================
// RENDER VIEW OF PAGE
// ==================================================================================
function renderView(e) {
    const billingInfo = document.querySelector('.billing-info')
    if (e === billingInfo) {
        layerOfView.forEach(layer => layer === billingInfo ?
            layer.style.display = 'flex' : layer.style.display = 'none')
    }
    else {
        layerOfView.forEach(layer => layer === e ?
            layer.style.display = 'inherit' : layer.style.display = 'none')
    }
}
// ==================================================================================
function viewHome() {
    setURLForPage('home')
    const mainPage = document.querySelector('.main__page')
    renderView(mainPage)
    const bookSlider = document.querySelector('.book__slider')
    bookSlider.style.display = 'inherit'
    renderViewIndex(JSON.parse(localStorage.getItem('productTable')))
    window.scrollTo(530, 530);
}
// ==================================================================================
function viewCart() {
    setURLForPage('cart')
    const cartContainer = document.querySelector('.cart__container')
    renderView(cartContainer)
    window.scrollTo(5, 5);
}
// ==================================================================================
function viewBill() {
    const emptyCart = cartTable.length === 0
    if (emptyCart) {
        alert('Your cart is empty')
        return
    } else {
        setURLForPage('bill')
        const billingInfo = document.querySelector('.billing-info')
        renderView(billingInfo)
        Order.renderBillingForm();
    }
}
// ==================================================================================
function viewLogin() {
    const signupPage = document.querySelector('.login__page')
    renderView(signupPage)
    window.scrollTo(30, 30)
}
// ==================================================================================
function viewUserInfo() {
    if (localStorage.getItem('accountLogin')) {
        setURLForPage('user-info')
        const userInfo = document.querySelector('.user-info')
        renderView(userInfo)
        User.renderUserInfo()
    } else {
        setURLForPage('login')
        viewLogin();
    }
}
// ==================================================================================
// IIFE
// ==================================================================================
(() => {
    // Set default value for select address
    const defaultBillingSelect = document.getElementById('selectAddressOrder')
    defaultBillingSelect.value = `userAddress`

    if (localStorage.getItem('admin') === 'admin') {
        window.location.href = `${URLToAdmin[0]}/html/admin.html`
    }
    Product.onload();
    User.onload();
    fetchPropertyProduct(URLOfWebpage)
    User.renderAccountLogin()
    User.renderUserInfo()
    Cart.renderCartPreview(cartTable)
    Order.renderOrderView();
    switch (page) {
        case 'home': viewHome(); break;
        case 'cart': viewCart(); break;
        case 'bill': viewBill(); break;
        case 'user-info': viewUserInfo(); break;
        case 'login': viewLogin(); break;
        default: break;
    }
})()