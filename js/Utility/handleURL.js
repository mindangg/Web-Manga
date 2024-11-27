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
function setURLForNavSearch(series = "", category = "", author = "", price = "") {
    let URLNavSearch
    if (series !== "") {
        URLNavSearch = `page=filter&series=${series}`
    }

    if (category !== "") {
        URLNavSearch = `page=filter&category=${category}`
    }

    if (author !== "") {
        URLNavSearch = `page=filter&author=${author}`
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
        URLSearch = "page=search&search=all"
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
        // get series from URL 
        const seriesSearch = url.searchParams.get('series')
        let seriesOfProduct = []
        // filter product with series
        if (seriesSearch !== null) {
            seriesOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p =>
                removeSpecialChar(p.series) === removeSpecialChar(seriesSearch)
            )
        }

        // get category from URL 
        const categorySearch = url.searchParams.get('category')
        let categoryOfProduct = []
        // filter product with category
        if (categorySearch !== null) {
            categoryOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p =>
                removeSpecialChar(p.category) === removeSpecialChar(categorySearch)
            )
        }

        // get author from URL 
        const authorSearch = url.searchParams.get('author')
        let authorOfProduct = []
        // filter product with author
        if (authorSearch !== null) {
            authorOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p =>
                removeSpecialChar(p.author) === removeSpecialChar(authorSearch)
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
                case "12-to-17-dollars":
                    priceOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.price >= 12 && p.price <= 17)
                    console.log(priceOfProduct)
                    break;
                case "over-17-dollars":
                    priceOfProduct = JSON.parse(localStorage.getItem('productTable')).filter(p => p.price > 17)
                    console.log(priceOfProduct)
                    break;
                default:
                    break;
            }
        }

        if (seriesSearch !== null) {
            // @viewController
            renderProductPage(seriesOfProduct)
            window.scroll
        }

        if (categorySearch !== null) {
            // @viewController
            renderProductPage(categoryOfProduct)
            window.scroll
        }

        if (authorSearch !== null) {
            // @viewController
            renderProductPage(authorOfProduct)
            window.scroll
        }

        if (priceSearch !== null) {
            // @viewController
            renderProductPage(priceOfProduct)
        }
    }
}
//
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