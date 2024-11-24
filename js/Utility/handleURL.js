// ================================================================================== 
// HANDLE URL
// ==================================================================================
const URLOfWebpage = new URL(window.location)
const originURL = URLOfWebpage.href.split("?")[0]
// GET ALL LAYER ELEMENT`
const layerOfView = document.querySelectorAll('.layer')
// URL FOR PAGE
const page = URLOfWebpage.searchParams.get('page')
// HOME INDEX
const home = "index.html"

// SET URL FOR PAGE
function setURLForPage(page) {
    if (page === "home") {
        window.history.replaceState({}, '', home);
    } else {
        const URLPage = `page=${page}`
        window.history.replaceState(originURL, '', '?' + URLPage);
    }
}
// ==================================================================================
// SET URL FOR NAVBAR SEARCH
// ==================================================================================
function setURLForNavSearch(category = "", price = "") {
    let URLNavSearch
    if (category !== "") {
        URLNavSearch = `page=filter&category=${category}`
    }
    if (price !== "") {
        URLNavSearch = `page=filter&price=${price}`
    }
    window.history.replaceState({}, '', '?' + URLNavSearch);
    viewFilter()
}
// ==================================================================================
// SET URL FOR SEARCH INPUT
// ================================================================================== 
function setURLForSearch(series = "", category = "", priceMin = "", priceMax = "") {
    let URLSearch = ""
    if (series === "" && category === "" && priceMin === "" && priceMax === "") {
        URLSearch = "page=search&search=default"
    } else {
        URLSearch += `page=search&series=${series}&category=${category}&priceMin=${priceMin}&priceMax=${priceMax}`
    }

    if (URLSearch === "") {
        window.history.replaceState({}, '', home);
    } else {
        window.history.replaceState({}, '', '?' + URLSearch);
    }
}
// ==================================================================================
// FETCH 
// ==================================================================================
function fetchPropertyProduct(url) {
    if (url.search) {
        // get category from URL 
        const categorySearch = url.searchParams.get('category')
        let categoryOfProduct = []
        // filter product with category
        if (categorySearch !== null) {
            categoryOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p =>
                removeSpecialChar(p.category) === removeSpecialChar(categorySearch)
            )
        }
        // get price from URL
        const priceSearch = url.searchParams.get('price')
        let priceOfProduct = []
        // filter product with price
        if (priceSearch !== null) {
            switch (priceSearch) {
                case "under-7-dollars":
                    priceOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.price < 7)
                    console.log(priceOfProduct)
                    break;
                case "7-to-12-dollars":
                    priceOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.price >= 7 && p.price <= 12)
                    console.log(priceOfProduct)
                    break;
                case "7-15":
                    priceOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.price >= 7 && p.price <= 15)
                    console.log(priceOfProduct)
                    break;
                default:
                    break;
            }
        }

        if (categorySearch !== null) {
            // @viewController
            renderViewIndex(categoryOfProduct)
        }
        if (priceSearch !== null) {
            // @viewController
            renderViewIndex(priceOfProduct)
        }
    }
}