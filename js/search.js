// ==================================================================================
// SEARCH BOX COMPONENT 
// ==================================================================================
// 
document.addEventListener("DOMContentLoaded", () => {
    var search__input = document.getElementById("search__input")
    //var filter__series = document.getElementById("filter__series")
    search__input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            searchProduct()
        }
    })
})
// ==================================================================================
// SEARCH PRODUCT 
// ==================================================================================
function searchProduct() {
    handleURLsearch()
}
// ==================================================================================
// HANDLE URL SEARCH
// ==================================================================================
// @search
function handleURLsearch() {
    let seriesInput = removeSpecialChar(search__input.value)
    let categoryInput = document.getElementById("filter__category").value
    let priceMinInput = document.getElementById("filter__min").value
    let priceMaxInput = document.getElementById("filter__max").value

    if (parseFloat(priceMinInput) > parseFloat(priceMaxInput)) {
        alert("giá max phải lớn hơn min")
        return
    }
    // @handleURL 
    setURLForSearch(seriesInput, categoryInput, priceMinInput, priceMaxInput)
    // @search
    handleSearchProduct()
}
// ==================================================================================
// HANDLE SEARCH PRODUCT
// ==================================================================================
// @search
function handleSearchProduct() {
    // get value of filter from URL
    const searchProuductURL = new URL(window.location)
    const filterSeries = searchProuductURL.searchParams.get('series')
    const filterCategory = searchProuductURL.searchParams.get('category')
    const filterPriceMin = searchProuductURL.searchParams.get('priceMin')
    const filterPriceMax = searchProuductURL.searchParams.get('priceMax')

    let searchBoxProduct = JSON.parse(localStorage.getItem("productTable"));
    // if 
    if (!searchProuductURL.search) {
        const productList = document.querySelector('.product-list')
        renderView(productList)

        renderViewIndex(searchBoxProduct)
        return
    }

    // if 
    if (filterSeries !== "") {
        const regex = new RegExp(filterSeries, "i");
        searchBoxProduct = searchBoxProduct.filter((item) => regex.test(item.series))
    }
    if (filterCategory !== "") {
        searchBoxProduct = searchBoxProduct.filter((item) =>
            removeSpecialChar(item.category) === removeSpecialChar(filterCategory))
    }
    if (filterPriceMin !== "" && filterPriceMax !== "") {
        searchBoxProduct = searchBoxProduct.filter((item) => filterPriceMin <= item.price <= filterPriceMax)
    }
    if (filterPriceMin !== "") {
        searchBoxProduct = searchBoxProduct.filter((item) => item.price >= filterPriceMin)
    }
    if (filterPriceMax !== "") {
        searchBoxProduct = searchBoxProduct.filter((item) => item.price <= filterPriceMax)
    }

    const productList = document.querySelector('.product-list')
    renderView(productList)

    // @viewController
    renderViewIndex(searchBoxProduct)
}