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

let logOutAdmin = () => {
    localStorage.removeItem('admin')
}

//bao

let users = JSON.parse(localStorage.getItem('users'));
const userTableFooter = document.getElementById('user-table__footer');

let userPageIndex = 1;
let totalUserPerPage = 5;
let userCurrentPage = 1;

function renderUser(){
    let userTotalPage = Math.ceil(users.length / totalUserPerPage);
    if(userTotalPage > 1){
        userTableFooter.innerHTML = `
                <button class="button button__user__prev-pagi" 
                    id="button__user__prev-pagi"> << 
                </button>
                <input type="text" class="input input__pagi" id="input-user__pagi" style="width: 2%;"> / ${userTotalPage}
                <button class="button button__user__next-pagi" 
                    id="button__user__next-pagi"> >> 
                </button>
            `;
        const inputPagi = document.getElementById("input-user__pagi");
        inputPagi.value = userPageIndex;

        document
            .getElementById("button__user__prev-pagi")
            .addEventListener("click", () => {
                console.log("Go to previous page");
                if (userPageIndex > 1) {
                    userPageIndex--;
                    userCurrentPage = userPageIndex;
                    // Product.render(renderProduct);
                } else {
                    console.error("Error");
                }
            });

        document
            .getElementById("button__user__next-pagi")
            .addEventListener("click", () => {
                console.log("Go to next page");
                if (userPageIndex < userTotalPage) {
                    userPageIndex++;
                    userCurrentPage = userPageIndex;
                    // Product.render(renderProduct);
                } else {
                    console.error("Error");
                }
            });
    }
}

renderUser();
