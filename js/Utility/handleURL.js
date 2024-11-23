// ================================================================================== 
// handle URL
// ==================================================================================
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