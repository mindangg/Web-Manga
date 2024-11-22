function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    console.log(sidenav.style.wi)
    var page = document.querySelectorAll(".page")
    if (sidenav.style.width === "200px") {
        sidenav.style.width = "0";
        page.forEach(p => {
            p.style.marginLeft = "0"
        })
    } else {
        sidenav.style.width = "200px";
        page.forEach(p => {
            p.style.marginLeft = "200px"
        })
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