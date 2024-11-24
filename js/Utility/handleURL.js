// ================================================================================== 
// HANDLE URL
// ==================================================================================
const URLOfWebpage = new URL(window.location)
console.log(URLOfWebpage)
// GET ALL LAYER ELEMENT`
const layerOfView = document.querySelectorAll('.layer')
// URL FOR PAGE
const page = URLOfWebpage.searchParams.get('page')
const home = "index.html"

// SET URL FOR PAGE
function setURLForPage(page) {
    const urlParams = new URLSearchParams(window.location.search);
    if (page === "home") {
        window.history.replaceState({}, '', home);
    } else {
        urlParams.set('page', page);
        window.history.replaceState({}, '', '?' + urlParams.toString());
    }
}