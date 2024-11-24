// ================================================================================== 
// HANDLE URL
// ==================================================================================
const URLOfWebpage = new URL(window.location)
const originURL = URLOfWebpage.href.split("?")[0]
console.log(originURL)
// GET ALL LAYER ELEMENT`
const layerOfView = document.querySelectorAll('.layer')
// URL FOR PAGE
const page = URLOfWebpage.searchParams.get('page')
// HOME INDEX
const home = "index.html"

// SET URL FOR PAGE
function setURLForPage(page) {
    // const urlParams = new URLSearchParams(window.location.search);
    if (page === "home") {
        window.history.replaceState({}, '', home);
    } else {
        // urlParams.set('page', page);
        const URLPage = `page=${page}`
        window.history.replaceState(originURL, '', '?' + URLPage);
    }
}

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