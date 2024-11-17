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
    userList.map((user) => {
        let row = document.createElement('tr');
        row.className = 'user table__row'
        row.id = `${user.userId}`
        row.innerHTML += `
        <td class="user table__cell user-table__cell userId">
            ${user.userId}
        </td>
        <td class="user table__cell user-table__cell fullName">
            ${user.fullName}
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
            ${user.address.houseNumber} ${user.address.street}, ${user.address.ward}, ${user.address.district}, ${user.address.city}
        </td>
        <td class="user table__cell user-table__cell status">
            <input type="checkbox" id="${user.userId}-status" onclick="disableUser(this)">
        </td>
        <td class="user table__cell user-table__cell editbtn">
            <button id="${user.userId}-editbtn" onclick="editUser(this)">Edit</button>
        </td>
        `
        userTableBody.append(row);
        const editbtn = document.getElementById(user.userId + '-editbtn');
        const userRow = document.getElementById(user.userId);
        const statusCheckbox = document.getElementById(user.userId + '-status');
        if (user.status === true){
            userRow.classList.remove('disable');
            statusCheckbox.checked = true;
            editbtn.disabled = false;
        } else {
            userRow.classList.add('disable');
            statusCheckbox.checked = false;
            editbtn.disabled = true;
        }
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

function editUser(button){
    let userId = button.id.split('-')[0];
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(u => u.userId === userId);

    const editMenu = document.getElementById('user__edit-menu--container');
    const cancelbtn = document.getElementById('user__edit-menu--cancel')
    const savebtn = document.getElementById('user__edit-menu--save');
    const fullName = document.getElementById('user__edit-menu--fullName')
    const username = document.getElementById('user__edit-menu--username');
    const password = document.getElementById('user__edit-menu--password');
    const email = document.getElementById('user__edit-menu--email');
    const phoneNumber = document.getElementById('user__edit-menu--phoneNumber');
    const houseNumber = document.getElementById('user__edit-menu--houseNumber');
    const street = document.getElementById('user__edit-menu--street');
    const ward = document.getElementById('user__edit-menu--ward');
    const district = document.getElementById('user__edit-menu--district');
    const city = document.getElementById('user__edit-menu--city');

    editMenu.style.display = 'flex';
    document.getElementById('user__edit-menu--userId').innerHTML = `${user.userId}`;
    fullName.value = `${user.fullName}`;
    username.value = `${user.username}`;
    password.value = `${user.password}`;
    email.value = `${user.email}`;
    phoneNumber.value = `${user.phoneNumber}`;
    houseNumber.value = `${user.address.houseNumber}`;
    street.value = `${user.address.street}`;
    ward.value = `${user.address.ward}`;
    district.value = `${user.address.district}`;
    city.value = `${user.address.city}`;

    cancelbtn.addEventListener('click', (event) => {
        event.preventDefault();
        editMenu.style.display = 'none';
    })

    savebtn.addEventListener('click', (event) => {
        event.preventDefault();
        user.fullName = fullName.value;
        user.username = username.value;
        user.password = password.value;
        user.email = email.value;
        user.phoneNumber = phoneNumber.value;
        user.address.houseNumber = houseNumber.value;
        user.address.street = street.value;
        user.address.ward = ward.value;
        user.address.district = district.value;
        user.address.city = city.value;

        editMenu.style.display = 'none';
        alert("Update user's information successfully");
        localStorage.setItem('users', JSON.stringify(users));
        renderUser();
    })
}

function disableUser(checkbox){
    let userId = checkbox.id.split('-')[0];

    const editbtn = document.getElementById(userId + "-editbtn");
    const row = document.getElementById(userId);
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(u => u.userId === userId)

    if (checkbox.checked === true){
        row.classList.remove('disable');
        user.status = true;
        editbtn.disabled = false;
    } else {
        row.classList.add('disable');
        user.status = false;
        editbtn.disabled = true;
    }
    localStorage.setItem('users', JSON.stringify(users));
}

function searchUser(value){

}

renderUser();
