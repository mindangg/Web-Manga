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
    localStorage.removeItem('accountLogin')
}

//bao

const userTableFooter = document.getElementById('user-table__footer');
const userTableBody = document.getElementById('user-table__body-content');
let userPageIndex = 1;
let totalUserPerPage = 6;

function render(users){
    let start = (userPageIndex - 1) * totalUserPerPage;
    let end = start + totalUserPerPage;
    let userList = users.slice(start, end);

    userTableBody.innerHTML = '';
    userList.map(user => {
        let row = document.createElement('tr');
        row.className = 'user table__row'
        row.id = `${user.userId}`
        row.innerHTML += `
        <td class="user table__cell user-table__cell userId">
            ${user.userId}
        </td>
        <td class="user table__cell user-table__cell username">
            ${user.username}
        </td>
        <td class="user table__cell user-table__cell password">
            ${user.password}
        </td>
        <td class="user table__cell user-table__cell email">
            ${user.email}
        </td>
        <td class="user table__cell user-table__cell phoneNumber">
            ${user.phoneNumber}
        </td>
        <td class="user table__cell user-table__cell createDate"> 
            ${user.createDate}
        </td>
        <td class="user table__cell user-table__cell address">
            ${user.address.houseNumber} ${user.address.street} ${user.address.ward} ${user.address.district} ${user.address.city}
        </td>
        <td class="user table__cell user-table__cell status">
            <input type="checkbox" id="${user.userId}-status" checked="${user.status}">
        </td>
        `
        userTableBody.append(row);
    });
    console.log("Render user successfully");
}

function renderUser(){
    let users = JSON.parse(localStorage.getItem('users'));
    let userTotalPage = Math.ceil(users.length / totalUserPerPage);
    if(userTotalPage > 1){
        userTableFooter.innerHTML = `
                <button class="button button__user__prev-pagi" 
                    id="button__user__prev-pagi"> << 
                </button>
                <input type="text" class="input input__pagi" id="input-user__pagi" style="width: 2%;" disabled> / ${userTotalPage}
                <button class="button button__user__next-pagi" 
                    id="button__user__next-pagi"> >> 
                </button>
            `;
        const inputPagi = document.getElementById("input-user__pagi");
        inputPagi.value = userPageIndex;

        render(users);

        document.getElementById("button__user__prev-pagi")
            .addEventListener("click", () => {
                console.log("Go to previous page");
                if (userPageIndex > 1) {
                    userPageIndex--;
                    inputPagi.value = userPageIndex;
                    render(users);
                } else {
                    console.error("Error");
                }
            });

        document.getElementById("button__user__next-pagi")
            .addEventListener("click", () => {
                console.log("Go to next page");
                if (userPageIndex < userTotalPage) {
                    userPageIndex++;
                    inputPagi.value = userPageIndex;
                    render(users);
                } else {
                    console.error("Error");
                }
            });
    }
}

function toAddressString(address){
    return address.houseNumber + " " + address.street + ", " + address.ward + ", " + address.district + ", " + address.city;
}

renderUser();