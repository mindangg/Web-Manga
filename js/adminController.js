const sideNavProperty = document.getElementById('sidenav').querySelectorAll('div');

let togglePage = (e) => {
    sideNavProperty.forEach((item) => {
        if (e.id === item.id) {
            document.getElementById(`${item.id}-page`).style.display = 'initial'
        } else {
            try {
                document.getElementById(`${item.id}-page`).style.display = 'none'
            } catch (err) {
                console.log("")
            }
        }
    })
}
