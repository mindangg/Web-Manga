// ==================================================================================
// SEARCH BOX COMPONENT 
// ==================================================================================
// 
document.addEventListener("DOMContentLoaded", () => {
    let search__input = document.getElementById("search__input")
    //var filter__series = document.getElementById("filter__series")
    search__input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            searchProduct()
        }
    })
})
// ==================================================================================
// SEARCH PRODUCT 
// ==================================================================================
function searchProduct() {
    handleURLsearch()
    closeSearch();
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
    const searchProductURL = new URL(window.location)
    const filterSeries = searchProductURL.searchParams.get('series')
    const filterCategory = searchProductURL.searchParams.get('category')
    const filterPriceMin = searchProductURL.searchParams.get('priceMin')
    const filterPriceMax = searchProductURL.searchParams.get('priceMax')
    const allProduct = searchProductURL.searchParams.get('search')

    console.log(searchProductURL, filterSeries, filterCategory, filterPriceMin, filterPriceMax, allProduct)
    const searchBox = document.querySelector('.search__popup');
    const selectFilter = searchBox.querySelector('select')
    selectFilter.value = ''
    clearField(searchBox);
    const productList = document.querySelector('.all-product__page')
    let searchBoxProduct = JSON.parse(localStorage.getItem("productTable"));
    // if
    if (!searchProductURL.search || allProduct === 'all') {
        renderView(productList)

        renderProductPage(searchBoxProduct)
        return
    }
    console.log(searchBoxProduct)

    // if 
    if (filterSeries !== "") {
        console.log(1)
        const regex = new RegExp(filterSeries, "i");
        searchBoxProduct = searchBoxProduct.filter((item) => regex.test(item.series))
    }
    console.log(searchBoxProduct)
    if (filterCategory !== "") {
        console.log(2)
        searchBoxProduct = searchBoxProduct.filter((item) =>
            removeSpecialChar(item.category) === removeSpecialChar(filterCategory))
    }
    console.log(searchBoxProduct)
    if (filterPriceMin !== "" && filterPriceMax !== "") {
        console.log(3)
        searchBoxProduct = searchBoxProduct.filter((item) => filterPriceMin <= item.price <= filterPriceMax)
    }
    console.log(searchBoxProduct)
    if (filterPriceMin !== "") {
        console.log(4)
        searchBoxProduct = searchBoxProduct.filter((item) => item.price >= filterPriceMin)
    }
    console.log(searchBoxProduct)
    if (filterPriceMax !== "") {
        console.log(5)
        searchBoxProduct = searchBoxProduct.filter((item) => item.price <= filterPriceMax)
    }
    console.log(searchBoxProduct)
    renderView(productList)
    // @viewController
    renderProductPage(searchBoxProduct)
}