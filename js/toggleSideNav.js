function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var main = document.getElementById("main");
    var productPage = document.getElementById("product-page");

    toggle(productPage)
}

function toggle(e) {
    if (sidenav.style.width === "200px") {
        sidenav.style.width = "0";
        e.style.marginLeft = "0";
    } else {
        sidenav.style.width = "200px";
        e.style.marginLeft = "200px";
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