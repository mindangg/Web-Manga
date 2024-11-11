var sidenav = document.getElementById("sidenav");
var main = document.getElementById("main");
var productPage = document.getElementById("product-page");
function toggleNav() {
    let productPage = document.getElementById('product-page');
    let userPage = document.getElementById('user-page');
    let orderPage = document.getElementById('order-page');
    if (sidenav.style.width === "200px") {
        sidenav.style.width = "0";
        productPage.style.marginLeft = "0";
        userPage.style.marginLeft = "0";
        orderPage.style.marginLeft = "0";
    } else {
        sidenav.style.width = "200px";
        productPage.style.marginLeft = "200px";
        userPage.style.marginLeft = "200px";
        orderPage.style.marginLeft = "200px";
    }
}

function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};