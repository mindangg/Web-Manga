//Get current date
let day = new Date();
let dd = String(day.getDate()).padStart(2, '0');
let mm = String(day.getMonth() + 1).padStart(2, '0');
let yyyy = day.getFullYear();
let curDay = dd + "/" + mm + "/" + yyyy;

let userList = JSON.parse(localStorage.getItem('users')) || [
    {
        userId: "user_0",
        username: "admin",
        password: "admin",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381433",
        createDate: '10/02/2005',
        fullName: "Ho Quoc Bao",
        address: {
            houseNumber: '28/2',
            street: 'Phung Ta Chu',
            ward: 'An Lac A',
            district: 'Binh Tan',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_1",
        username: "baohoo10205",
        password: "Bao10205",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381430",
        createDate: '20/11/2023',
        fullName: "Bao Ho",
        address: {
            houseNumber: '28',
            street: 'Phung Ta Chu',
            ward: 'An Lac A',
            district: 'Binh Tan',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_2",
        username: "baohoo100205",
        password: "Bao100205",
        email: "baohoo1002@gmail.com",
        phoneNumber: "0938381431",
        createDate: '24/12/2023',
        fullName: "Quoc Bao",
        address: {
            houseNumber: '',
            street: '',
            ward: '',
            district: '',
            city: ''
        },
        status: false,
    },
    {
        userId: "user_3",
        username: "baohoo1002",
        password: "Bao1002",
        email: "quocbao10205@gmail.com",
        phoneNumber: "0938381432",
        createDate: '01/01/2024',
        fullName: "Bao",
        address: {
            houseNumber: '273',
            street: 'An Duong Vuong',
            ward: '3',
            district: '5',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_4",
        username: "quocbao",
        password: "Bao100205",
        email: "baoho10205@gmail.com",
        phoneNumber: "0938381433",
        createDate: '10/02/2024',
        fullName: "Ho Bao",
        address: {
            houseNumber: '105',
            street: 'Ba Huyen Thanh Quan',
            ward: 'Vo Thi Sau',
            district: '3',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_5",
        username: "bael10205",
        password: "Bael10205",
        email: "baoho1002@gmail.com",
        phoneNumber: "0938381434",
        createDate: '23/04/2024',
        fullName: "Anh Linh",
        address: {
            houseNumber: '',
            street: '',
            ward: '',
            district: '',
            city: ''
        },
        status: true,
    },
    {
        userId: "user_6",
        username: "bael100205",
        password: "Bael100205",
        email: "anhlinh2707@gmail.com",
        phoneNumber: "0938381435",
        createDate: '27/07/2024',
        fullName: "Quynh",
        address: {
            houseNumber: '4',
            street: 'Ton Duc Thang',
            ward: 'Ben Nghe',
            district: '1',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_7",
        username: "quocbao10205",
        password: "Quocbao10205",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381436",
        createDate: '05/11/2024',
        fullName: "Bael",
        address: {
            houseNumber: '',
            street: '',
            ward: '',
            district: '',
            city: ''
        },
        status: true,
    },
    {
        userId: "user_8",
        username: "mindang",
        password: "Dangmin",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381437",
        createDate: '20/11/2024',
        fullName: "Dang",
        address: {
            houseNumber: '273',
            street: 'An Duong Vuong',
            ward: '3',
            district: '5',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_9",
        username: "huybao",
        password: "Huybao0015",
        email: "dthbao@gmail.com",
        phoneNumber: "0838381433",
        createDate: '20/11/2024',
        fullName: "Huy Bao",
        address: {
            houseNumber: '99',
            street: 'An Duong Vuong',
            ward: '16',
            district: '8',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_10",
        username: "phusomia",
        password: "Phusomia666",
        email: "phusomia@gmail.com",
        phoneNumber: "0288381433",
        createDate: '12/11/2024',
        fullName: "Tu Anh Phu",
        address: {
            houseNumber: '99',
            street: 'An Duong Vuong',
            ward: '16',
            district: '8',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_11",
        username: "hetytuong",
        password: "Hetytuong",
        email: "phusomia@gmail.com",
        phoneNumber: "0288381434",
        createDate: '13/11/2024',
        fullName: "Anh Phu",
        address: {
            houseNumber: '',
            street: '',
            ward: '',
            district: '',
            city: ''
        },
        status: true,
    },
    {
        userId: "user_11",
        username: "bael1002",
        password: "69Bao69",
        email: "3123410016@gmail.com",
        phoneNumber: "0289381433",
        createDate: '11/11/2024',
        fullName: "Baro",
        address: {
            houseNumber: '227',
            street: 'Nguyen Van Cu',
            ward: '4',
            district: '5',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_12",
        username: "bael666",
        password: "leaB1002",
        email: "3123410016@gmail.com",
        phoneNumber: "0289381533",
        createDate: '17/11/2024',
        fullName: "Quagmire",
        address: {
            houseNumber: '220',
            street: 'Tran Binh Trong',
            ward: '4',
            district: '5',
            city: 'TP.HCM'
        },
        status: true,
    },
    {
        userId: "user_13",
        username: "1",
        password: "1",
        email: "3123410016@gmail.com",
        phoneNumber: "0289381533",
        createDate: '17/11/2024',
        fullName: "Quagmire",
        address: {
            houseNumber: '220',
            street: 'Tran Binh Trong',
            ward: '4',
            district: '5',
            city: 'TP.HCM'
        },
        status: true,
    },
];

let account = JSON.parse(localStorage.getItem('accountLogin')) || null;

//FOR SIGN UP
const signup = document.getElementById('signup');
const submitSignUp = document.getElementById('signup__btn');
const username = document.getElementById('signup__input--username');
const password = document.getElementById('signup__input--password');
const confirmPassword = document.getElementById('signup__input--confpasword');
const email = document.getElementById('signup__input--email');
const phoneNumber = document.getElementById('signup__input--phone');
const notification = document.getElementById('notification');
const signupInput = document.getElementsByClassName('signup__input');

//FOR SIGN IN
const login = document.getElementById('login')
const usernameLogin = document.getElementById('login__input--username');
const passwordLogin = document.getElementById('login__input--password');
const forget = document.getElementById('login__forget');
const submitLogin = document.getElementById('login__btn');

// FOR EDIT USER
const userInfo = document.getElementById("user-info");
const userFullname = document.getElementById("user-info__fullName")
const userphoneNumber = document.getElementById("user-info__phoneNumber")
const userHouseNumber = document.getElementById("user-info__houseNumber")
const userStreet = document.getElementById("user-info__street")
const userWard = document.getElementById("user-info__ward")
const userDistrict = document.getElementById("user-info__district")
const userCity = document.getElementById("user-info__city")

//SIGN UP EVENT
submitSignUp.addEventListener("click", (event) => {
    event.preventDefault();
    if (Validation.checkBlankField(signup))
        return false;
    if (!Validation.isBlank(username.value))
        User.validateUsername(username);

    if (!Validation.isBlank(password.value))
        User.validatePassword(password);

    if (!Validation.isBlank(confirmPassword.value))
        User.validateConfirmPassword(password, confirmPassword);

    if (!Validation.isBlank(email.value))
        User.validateEmail(email);

    if (!Validation.isBlank(phoneNumber.value))
        User.validatePhoneNumber(phoneNumber);

    if (check) {
        username.style.border = '1px solid rgba(255, 51, 0, 0.76)';
        username.labels[0].innerText = 'Username has already existed';
        username.labels[0].style.display = 'block';
        username.focus();
    } else {
        username.style.border = '';
        username.labels[0].innerText = '';
        username.labels[0].style.display = 'none';
    }

    if (
        !check &&
        !Validation.isBlank(username.value) &&
        !Validation.isBlank(password.value) &&
        !Validation.isBlank(confirmPassword.value) &&
        !Validation.isBlank(email.value) &&
        !Validation.isBlank(phoneNumber.value) &&
        Validation.usernameIsValid(username) &&
        Validation.passwordIsValid(password) &&
        Validation.isMatch(password, confirmPassword) &&
        Validation.emailIsValid(email) &&
        Validation.phoneIsValid(phoneNumber)
    ) {
        if (User.insert(`user_${User.generateId(userList)}`, username.value, password.value, email.value, phoneNumber.value)) {
            clearField(signup);
            document.getElementById("signup__page").style.display = "none";
            document.getElementById("login__page").style.display = "inline";
        } else {
            console.log('Login failed');
            showNotification("There were some problem, sign up failed");
        }
    }
})

let check = false;
username.addEventListener('blur', (event) => {
    check = Validation.usernameExisted(username);
    if (check) {
        username.style.border = '1px solid rgba(255, 51, 0, 0.76)';
        username.labels[0].innerText = 'Username has already existed';
        username.labels[0].style.display = 'block';
        username.focus();
    } else {
        username.style.border = '';
        username.labels[0].innerText = '';
        username.labels[0].style.display = 'none';
    }
})

password.addEventListener('focus', (event) => {
    password.labels[0].innerText = 'Password must be at least 6 characters long, and include at least one uppercase letter, one number.';
    password.labels[0].style.display = 'block';
    password.labels[0].style.color = 'gray';
    signupInput[1].style.marginBottom = '46px';
})

password.addEventListener('blur', (event) => {
    password.labels[0].innerText = '';
    password.labels[0].style.display = 'none';
    password.labels[0].style.color = 'rgba(255, 51, 0, 0.76)';
    signupInput[1].style.marginBottom = '25px';
})

//SIGN IN EVENT
submitLogin.addEventListener('click', (event) => {
    account = findAccount(usernameLogin.value, passwordLogin.value);
    console.log(account);
    if (account === undefined) {
        passwordLogin.labels[0].innerText = 'Username or password is not correct';
        passwordLogin.labels[0].style.display = 'block';
    } else {
        passwordLogin.labels[0].innerText = '';
        passwordLogin.labels[0].style.display = 'none';
        if (account.status === false) {
            passwordLogin.labels[0].innerText = 'Account has been disabled';
            passwordLogin.labels[0].style.display = 'block';
            return false;
        } else {
            passwordLogin.labels[0].innerText = '';
            passwordLogin.labels[0].style.display = 'none';
        }

        if (account.username === 'admin' && account.password === 'admin') {
            window.location.href = '../html/admin.html';
            return true;
        } else {
            // phusomnia
            localStorage.setItem('accountLogin', JSON.stringify(account));
            //
            passwordLogin.labels[0].innerText = '';
            passwordLogin.labels[0].style.display = 'none';
            clearField(login);
            showNotification('Welcome, ' + account.username);
            document.getElementById("login__page").style.display = "none";
            document.getElementById("main__page").style.display = "inline";

            // phusomnia
            User.renderAccountLogin();
            viewHome();
        }
    }
})

const findAccount = (username, password) => {
    userList = JSON.parse(localStorage.getItem('users'));
    return userList.find(user => user.username === username && user.password === password)
}

//USER
class User {
    // phusomnia
    constructor(userId, username, password, email, phoneNumber) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.createDate = curDay;
        this.phoneNumber = phoneNumber;
        this.fullName = '';
        this.address = {
            houseNumber: '',
            street: '',
            ward: '',
            district: '',
            city: ''
        };
        this.status = true; //check if account is block or not
    }

    static validateUsername = (username) => {
        if (!Validation.usernameIsValid(username)) {
            username.labels[0].innerText = 'Username must contain only letters and numbers';
            username.labels[0].style.display = 'block';
        } else {
            username.labels[0].innerText = '';
            username.labels[0].style.display = 'none';
        }
    }

    static validatePassword = (password) => {
        if (!Validation.passwordIsValid(password)) {
            password.labels[0].innerText = 'Password do not meet requirement';
            password.labels[0].style.display = 'block';
        } else {
            password.labels[0].innerText = '';
            password.labels[0].style.display = 'none';
        }
    }

    static validateConfirmPassword = (password, confirmPassword) => {
        if (!Validation.isMatch(password, confirmPassword)) {
            confirmPassword.labels[0].innerText = 'Does not match password';
            confirmPassword.labels[0].style.display = 'block';
        } else {
            confirmPassword.labels[0].innerText = '';
            confirmPassword.labels[0].style.display = 'none';
        }
    }

    static validateEmail = (email) => {
        if (!Validation.emailIsValid(email)) {
            email.labels[0].innerText = 'Email is invalid';
            email.labels[0].style.display = 'block';
        } else {
            email.labels[0].innerText = '';
            email.labels[0].style.display = 'none';
        }
    }

    static validatePhoneNumber = (phoneNumber) => {
        if (!Validation.phoneIsValid(phoneNumber)) {
            phoneNumber.labels[0].innerText = 'Phone number is invalid';
            phoneNumber.labels[0].style.display = 'block';
        } else {
            phoneNumber.labels[0].innerText = '';
            phoneNumber.labels[0].style.display = 'none';
        }
    }

    // phusonmnia
    static generateId = (data) => {
        if (data.length === 0) {
            return 0;
        } else {
            const index = data[data.length - 1].userId.split("_")[1];
            return parseInt(index) + 1;
        }
    };

    static insert(userId, username, password, email, phone_number) {
        const newUser = new User(userId, username, password, email, phone_number);
        console.log("Add new user:")
        console.log(newUser);
        try {
            let users = JSON.parse(localStorage.getItem("users"));
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            showNotification('Sign up successfully');
            return true;
        } catch (e) {
            console.log("Add new user failed");
            return false;
        }
    }

    static findByUserid(id) {
        return userList.find(u => u.userId === id);
    }

    static onload() {
        if (JSON.parse(localStorage.getItem('users')) === null) {
            localStorage.setItem('users', JSON.stringify(userList));
            console.log('Set users');
        } else {
            userList = JSON.parse(localStorage.getItem('users'));
            console.log('Get users');
        }
    }
    // ==================================================================================
    // RENDER USER-INFO
    // ==================================================================================
    static renderUserInfo() {
        if (account) {
            clearField(userInfo);
            userFullname.value = account.fullName;
            userphoneNumber.value = account.phoneNumber;
            userHouseNumber.value = account.address.houseNumber;
            userStreet.value = account.address.street;
            userWard.value = account.address.ward;
            userDistrict.value = account.address.district;
            userCity.value = account.address.city;
        }
    }
    // ==================================================================================
    // EDIT USER-INFO
    // ==================================================================================
    static editUserInfo() {
        let users = JSON.parse(localStorage.getItem('users'));
        if (!Validation.checkBlankField(userInfo)) {
            const currentEditUserIndex = users.findIndex(user => user.userId === JSON.parse(localStorage.getItem('accountLogin')).userId)
            const queryUserInfoInput = document.querySelector(".edit-user__form").querySelectorAll("input");
            for (const userInfoInput of queryUserInfoInput) {
                const metadata = userInfoInput.id.split("__")[1];
                if (metadata === "fullName" || metadata === "phoneNumber") {
                    users[currentEditUserIndex][metadata] = userInfoInput.value;
                } else {
                    users[currentEditUserIndex]["address"][metadata] = userInfoInput.value;
                }
            }
            account = users[currentEditUserIndex];
            localStorage.setItem('accountLogin', JSON.stringify(account));
            this.renderUserInfo();
            localStorage.setItem('users', JSON.stringify(users));
            alert("Thông tin tài khoản cập nhật thành công");
        }
    }
    // 
    static renderAccountLogin() {
        const loginIcon = document.getElementById('login__icon');
        const loginIconResponsive = document.getElementById('login__icon__responsive');
        account = JSON.parse(localStorage.getItem('accountLogin'));
        if (account) {

            document.getElementsByClassName('navbar__home')[0]
                .querySelectorAll('div')[1]
                .innerText = `${account.username}`;
            document.getElementsByClassName('navbar__bar')[0]
                .querySelectorAll('div')[1]
                .innerText = `${account.username}`;
        } else {

            document.getElementsByClassName('navbar__home')[0]
                .querySelectorAll('div')[1]
                .innerText = "";
            document.getElementsByClassName('navbar__bar')[0]
                .querySelectorAll('div')[1]
                .innerText = "";
        }
    }
}

function showNotification(message) {
    notification.innerHTML = message;
    notification.className = "show";
    setTimeout(function () {
        notification.classList.remove("show");
    }, 3000);
}

function clearField(field) {
    const inputs = field.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = '';
    });
}
document.addEventListener('DOMContentLoaded', () => {
    User.renderAccountLogin();
});
// User.onload();
