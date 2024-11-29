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
let userList = JSON.parse(localStorage.getItem('users'));
const userSelectSearch = document.getElementById('select-search-field')
const userSearchInput = document.getElementById('user__search--input');
const userSelectFilter = document.getElementById('select-filter-field')
const userSelectSort = document.getElementById('select-sort-field');

const userTableFooter = document.getElementById('user-table__footer');
const userTableBody = document.getElementById('user-table__body-content');
let userPageIndex = 1;
let totalUserPerPage = 6;

//for edit user menu
const editMenu = document.getElementById('user__edit-menu--container');
const cancelbtn = document.getElementById('user__edit-menu--cancel')
const savebtn = document.getElementById('user__edit-menu--save');
const fullName = document.getElementById('user__edit-menu--fullName')
const username = document.getElementById('user__edit-menu--username');
const password = document.getElementById('user__edit-menu--password');
const email = document.getElementById('user__edit-menu--email');
const phoneNumber = document.getElementById('user__edit-menu--phoneNumber');
const createDate = document.getElementById('user__edit-menu--createDate');
const houseNumber = document.getElementById('user__edit-menu--houseNumber');
const street = document.getElementById('user__edit-menu--street');
const ward = document.getElementById('user__edit-menu--ward');
const district = document.getElementById('user__edit-menu--district');
const city = document.getElementById('user__edit-menu--city');
const error = document.getElementById('user__edit-menu--error');

function render(users) {
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
        if (user.status === true) {
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

function renderUser(users) {
    let userTotalPage = Math.ceil(users.length / totalUserPerPage);
    if (userTotalPage > 1) {
        userTableFooter.innerHTML = `
                <button class="button button__user__prev-pagi" 
                    id="button__user__prev-pagi"> << 
                </button>
                <input type="text" class="input input__pagi" id="input-user__pagi" style="width: 3%; border: none" disabled> / ${userTotalPage}
                <button class="button button__user__next-pagi" 
                    id="button__user__next-pagi" style="margin-left: 10px"> >> 
                </button>
        `;
        const inputPagi = document.getElementById("input-user__pagi");
        inputPagi.value = userPageIndex;
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
    } else {
        userTableFooter.innerHTML = ``;
    }
    render(users);
}

function editUser(button) {
    let userId = button.id.split('-')[0];
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(u => u.userId === userId);

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
        editMenu.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        editMenu.style.display = 'none';
    });

    savebtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (username.value === '' || password.value === ''){
            password.style.border = '2px solid rgba(255, 51, 0, 0.76)';
            username.style.border = '2px solid rgba(255, 51, 0, 0.76)';
            error.innerHTML = "Username and password cannot be empty";
            error.style.display = 'block';
            return false;
        } else {
            password.style.border = '';
            username.style.border = '';
            error.innerHTML = "";
            error.style.display = 'none';
        }

        if (users.find(user => user.username === username.value)){
            username.style.border = '2px solid rgba(255, 51, 0, 0.76)';
            error.innerHTML = "Username has already existed";
            error.style.display = 'block';
            return false;
        } else{
            username.style.border = '';
            error.innerHTML = "";
            error.style.display = 'none';
        }

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
        userPageIndex = 1;
        totalUserPerPage = 6;
        renderUser(users);
    });
}

function disableUser(checkbox) {
    let userId = checkbox.id.split('-')[0];

    const editbtn = document.getElementById(userId + "-editbtn");
    const row = document.getElementById(userId);
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(u => u.userId === userId)

    if (checkbox.checked === true) {
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

function searchUser(){
    let value = userSelectSearch.value;
    userSearchInput.focus();
    userSearchInput.select();
    userSearchInput.placeholder = value;
    userFilter();
    userSearchInput.addEventListener('keyup', (event) => {
        userFilter();
    });
    userSelectFilter.addEventListener('change', (event) => {
        userFilter();
    });
    userSelectSort.addEventListener('change', (event) => {
        userFilter();
    });
}

function userFilter(){
    let users = JSON.parse(localStorage.getItem('users'));
    if (userSearchInput.value !== ''){
        let regex = new RegExp(userSearchInput.value, 'i');
        switch (userSelectSearch.value){
            case 'User ID':
                users = users.filter(user => regex.test(user.userId));
                break;
            case 'Full name':
                users = users.filter(user => regex.test(user.fullName));
                break;
            case 'Username':
                users = users.filter(user => regex.test(user.username));
                break;
            case 'Password':
                users = users.filter(user => regex.test(user.username));
                break;
            case 'Email':
                users = users.filter(user => regex.test(user.email));
                break;
            case 'Phone number':
                users = users.filter(user => regex.test(user.phoneNumber));
                break;
            case 'Address':
                users = users.filter(user => {
                    let userAddress = `${user.address.houseNumber} ${user.address.street}, ${user.address.ward}, ${user.address.district}, ${user.address.city}`;
                    return regex.test(userAddress);
                });
                break;
        }
    }
    if (userSelectFilter.value !== '0'){
        switch (userSelectFilter.value){
            case '1':
                users = users.filter(user => {return user.status === true});
                break;
            case '2':
                users = users.filter(user => user.status === false);
                break;
        }
    }
    let tempUsers = users;
    if (userSelectSort.value !== '0'){
        switch (userSelectSort.value){
            case '1':
                users.sort((user1, user2) => {
                    return (user1.fullName < user2.fullName)? -1 : 1;
                });
                break;
            case '2':
                users.sort((user1, user2) => {
                    return (user1.fullName > user2.fullName)? -1 : 1;
                });
                break;
            default:
                users = tempUsers;
                break;
        }
    }
    console.log(users);
    userPageIndex = 1;
    totalUserPerPage = 6;
    renderUser(users);
}

const generateId = (data) => {
    if (data.length === 0) {
        return 0;
    } else {
        const index = data[data.length - 1].userId.split("_")[1];
        return parseInt(index) + 1;
    }
};

function addUser(){
    let users = JSON.parse(localStorage.getItem('users'));
    let userId= `user_${generateId(users)}`;

    email.style.width = '40%';
    phoneNumber.style.width = '23%';
    createDate.style.display = 'inline-block';
    editMenu.style.display = 'flex';
    document.getElementById('user__edit-menu--userId').innerHTML = `${userId}`;
    editMenu.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    cancelbtn.addEventListener('click', (event) => {
        event.preventDefault();
        editMenu.querySelectorAll('input').forEach(input => {
            input.value = '';
        });

        editMenu.style.display = 'none';
        email.style.width = 'calc(50% - 16px)';
        phoneNumber.style.width = 'calc(50% - 16px)';
        createDate.style.display = 'none';
        username.style.border = '';
        error.innerHTML = "";
        error.style.display = 'none';
    });

    savebtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (username.value === '' || password.value === ''){
            password.style.border = '2px solid rgba(255, 51, 0, 0.76)';
            username.style.border = '2px solid rgba(255, 51, 0, 0.76)';
            error.innerHTML = "Username and password cannot be empty";
            error.style.display = 'block';
            return false;
        } else {
            password.style.border = '';
            username.style.border = '';
            error.innerHTML = "";
            error.style.display = 'none';
        }


        if (users.find(user => user.username === username.value)){
            username.style.border = '2px solid rgba(255, 51, 0, 0.76)';
            error.innerHTML = "Username has already existed";
            error.style.display = 'block';
            return false;
        } else{
            username.style.border = '';
            error.innerHTML = "";
            error.style.display = 'none';
        }

        let date;
        if (createDate.value === ''){
            let day = new Date();
            let dd = String(day.getDate()).padStart(2, '0');
            let mm = String(day.getMonth() + 1).padStart(2, '0');
            let yyyy = day.getFullYear();
            date = dd + "/" + mm + "/" + yyyy;
        } else {
            let parts = createDate.value.split('-');
            date = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }

        let user = {
            userId: `${userId}`,
            username: `${username.value}`,
            password: `${password.value}`,
            email: `${email.value}`,
            phoneNumber: `${phoneNumber.value}`,
            createDate: `${date}`,
            fullName: `${fullName.value}`,
            address: {
                houseNumber: `${houseNumber.value}`,
                street: `${street.value}`,
                ward: `${ward.value}`,
                district: `${district.value}`,
                city: `${city.value}`
            },
            status: true,
        }
        console.log(user);
        users.push(user);

        editMenu.style.display = 'none';
        email.style.width = 'calc(50% - 16px)';
        phoneNumber.style.width = 'calc(50% - 16px)';
        createDate.style.display = 'none';

        localStorage.setItem('users', JSON.stringify(users));

        userPageIndex = 1;
        totalUserPerPage = 6;
        renderUser(users);
    });
}

renderUser(userList);
// searchUser();