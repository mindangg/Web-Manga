// phusomnia
let productCurrentHomePage = 1;
let productPerHomePage = 9;
// ==================================================================================
// RENDER HOME PAGE 
// ==================================================================================
// @viewController
// render sản phẩm ở end-user
function renderViewIndex(renderProduct) {
    const productContainer = document.querySelector('.product__container')
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
    } else {
        console.error("Chưa có sản phẩm !!!")
    }
    renderPagination(renderProduct);
}
// ==================================================================================
// RENDER HOME PAGE 
// ==================================================================================
// @viewController
// render phân trang sản phẩm ở end-user
function renderPagination(renderProduct) {
    let productContainerFooter = document.querySelector('.product-container__footer');
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
// RENDER ALL PRODUCT PAGE
// ==================================================================================

const allProductPage = document.getElementById('all-product__page');
const totalProductPerPage = 8;
let allProductPageIndex

const renderProductPage = (productTable) => {
    document.querySelector('.book__slider').style.display = 'none';
    document.querySelector('.banner').style.display = 'none';
    allProductPage.style.display = 'block';

    const productPagination = document.getElementById('all-product__pagination');
    const totalProductPage = Math.ceil(productTable.length / totalProductPerPage);
    productPagination.innerHTML = ``;
    allProductPageIndex = 1;
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
        const productPaginationPrev = document.getElementById('all-product__pagination--prev');
        const productPaginationNext = document.getElementById('all-product__pagination--next');
        const pageNumber = productPagination.getElementsByTagName('input')[0];
        productPaginationPrev.addEventListener('click', () => {
            if (allProductPageIndex > 1) {
                allProductPageIndex--;
                pageNumber.value = allProductPageIndex.toString();
                renderProduct(productTable);
            }
        })

        productPaginationNext.addEventListener('click', () => {
            if (allProductPageIndex < totalProductPage) {
                allProductPageIndex++;
                pageNumber.value = allProductPageIndex.toString();
                renderProduct(productTable);
            }
        })
    }
    renderProduct(productTable);
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

// ==================================================================================
// RENDER PRODUCT DETAIL
// ==================================================================================
// xem chi tiết sản phẩm ở end-user
// ==================================================================================
// show product detail

//DUPLICATE(main_phusomnia)

// function showProductInfo(e) {
//     const productInfo = document.querySelector('.product__page')
//     productInfo.style.display = 'inline'
//     document.querySelector(".product").style.animationName = "topDown"
//     const product = JSON.parse(localStorage.getItem("productTable"))
//     const findProductById = product.find(p => p.productId == e.id)
//
//     if (!findProductById) {
//         alert("Product not found")
//         return
//     }
//
//     let p = findProductById
//     productInfo.innerHTML = `
//         <div class="product">
//                     <a id="product__close" onclick="closeProduct()"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
//                     <div class="product__img">
//                         <img id="product__img1" src="${p.cover1}">
//                         <img id="product__img2" src="${p.cover2}">
//
//                         <a id="product__view1" onclick="changeProductView(this)"><img src="${p.cover1}"></a>
//                         <a id="product__view2" onclick="changeProductView(this)"><img src="${p.cover2}"></a>
//                     </div>
//
//                     <div class="product__info">
//                         <h1>${p.name}</h1>
//                         <div class="product__info--rating">
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                         </div>
//                         <p>Author:</p>
//                         <h2>${p.author}</h2>
//                         <p>${p.category}</p>
//                         <p>Quantity: </p>
//
//                         <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
//                         <button id="product__add">Add to cart</button>
//
//                         <p>Availability: ${p.stock}</p><br>
//                         <h4>Description</h4>
//                         <p>${p.description}</p><br>
//                     </div>
//                 </div>
//     `
// }
// // close product detail
// function closeProduct() {
//     document.querySelector(".product").style.animationName = "bottomUp"
//     setTimeout(function () {
//         document.querySelector(".product__page").style.display = "none"
//     }, 365)
// }
// ==================================================================================
// TOGGLE USER INFO 
// ==================================================================================
// @viewController
// toggle to view order or user info
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
// @viewController 
// logout account 
function logoutUser() {
    localStorage.removeItem('accountLogin')
    localStorage.removeItem('cart')
    User.renderAccountLogin()
    viewHome()
    window.location.reload()
}
// ==================================================================================
// ==================================================================================
// RENDER VIEW OF PAGE
// ==================================================================================
// render khi qua các trang khác
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
// về trang chủ
function viewHome() {
    //
    setURLForPage('home')
    //
    const mainPage = document.querySelector('.main__page')
    renderView(mainPage)
    //
    // const bookSlider = document.querySelector('.book__slider')
    // bookSlider.style.display = 'inherit'
    //
    window.scrollTo(530, 530);
}
// ==================================================================================
// trang giỏ hàng
function viewCart() {
    // 
    if(cartTable.length === 0)
        viewEmptyCart()
    else{
        setURLForPage('cart')
        // 
        const cartContainer = document.querySelector('.cart__container')
        renderView(cartContainer)
        //
        window.scrollTo(5, 5);
    }

}
// ==================================================================================
// trang thanh toán
function viewBill() {
    const emptyCart = cartTable.length === 0
    if (emptyCart) {
        alert('Your cart is empty')
        return
    } else {
        setURLForPage('bill')
        //
        const billingInfo = document.querySelector('.billing-info')
        renderView(billingInfo)
        //
        Order.renderBillingForm();
    }
}
// ==================================================================================
// trang đăng ký
function viewLogin() {
    const signupPage = document.querySelector('.login__page')
    renderView(signupPage)
    window.scrollTo(0, -30)
}
// ==================================================================================
// thông tin người dùng
function viewUserInfo() {
    // neu co account thi 
    if (account) {
        //
        setURLForPage('user-info')
        const userInfo = document.querySelector('.user-info')
        //
        renderView(userInfo)
        window.scrollTo(0, 30)
        User.renderUserInfo()
    } else {
        setURLForPage('login')
        viewLogin();
    }
}
//
function viewFilter() {
    const URLcurrent = new URL(window.location)

    const productList = document.querySelector('.all-product__page')
    renderView(productList)
    //@handleURL
    fetchPropertyProduct(URLcurrent)
}
// 
function viewSearch() {
    const productList = document.querySelector('.all-product__page')
    renderView(productList)
    allProductPageIndex = 1;
    handleSearchProduct()
}
// ==================================================================================
//
function viewAllProduct() {
    setURLForPage('all-product');
    const allProductPage = document.querySelector('.all-product__page');
    renderView(allProductPage);

    document.querySelector('.main__page').style.display = 'inherit';
    document.querySelector('.slider').style.display = 'inherit';
    document.querySelector('.best__slider').style.display = 'inherit';
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.book__slider').style.display = 'none';
    let productTable = JSON.parse(localStorage.getItem("productTable"))
    renderProductPage(productTable);
    window.scrollTo(0, 1400);
}
// ==================================================================================
// IIFE
// ==================================================================================
// thực thi các hàm khi load hoặc reload trang
// ==================================================================================
(() => {
    const defaultBillingSelect = document.getElementById('selectAddressOrder')
    defaultBillingSelect.value = `userAddress`
    // nếu local storage có admin: admin thì chuyển hướng đến trang admin
    if (localStorage.getItem('admin') === 'admin') {
        window.location.href = `${URLToAdmin[0]}/html/admin.html`
    }
    // load các local storage của product, user
    Product.onload();
    User.onload();
    Order.onload();
    showSlider()
    // lấy tham số url trang hiện tại để render product 
    // fetchPropertyProduct(URLOfWebpage)
    // render tài khoản đăng nhập và thông tin người dùng
    User.renderAccountLogin()
    User.renderUserInfo()
    // render giỏ hàng, đơn hàng
    Cart.renderCartPreview(cartTable)
    Order.renderOrderView();
    // render các trang
    switch (page) {
        case 'home': viewHome(); break;
        case 'cart': viewCart(); break;
        case 'bill': viewBill(); break;
        case 'user-info': viewUserInfo(); break;
        case 'login': viewLogin(); break;
        case 'filter': viewFilter(); break;
        case 'search': viewSearch(); break;
        case 'all-product': viewAllProduct(); break;
        default: break;
    }
})()