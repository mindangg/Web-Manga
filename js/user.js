
//Get current date
let day = new Date();
let dd = String(day.getDate()).padStart(2, '0');
let mm = String(day.getMonth() + 1).padStart(2, '0');
let yyyy = day.getFullYear();
let curDay = dd + "/" + mm + "/" + yyyy;

let userList = [
    {
        userId: "user_0",
        username: "1",
        password: "1",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381431",
        createDate: '10/02/2005',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        userId: "user_1",
        username: "baohoo100205",
        password: "Baohoo100205",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381431",
        createDate: '10/02/2005',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        userId: "user_2",
        username: "baohoo1002",
        password: "Baohoo100205",
        email: "baohoo1002@gmail.com",
        phoneNumber: "0938381432",
        createDate: '30/10/2024',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        id: "user_3",
        username: "quocbao",
        password: "Baohoo100205",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381433",
        createDate: '05/11/2024',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        userId: "user_4",
        username: "quocbaohoo",
        password: "Baohoo1002",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381434",
        createDate: '24/12/2023',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        userId: "user_5",
        username: "bael10205",
        password: "Baohoo100205",
        email: "baohoo1002@gmail.com",
        phoneNumber: "0938381435",
        createDate: '01/01/2020',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        userId: "user_6",
        username: "bael10205",
        password: "Baohoo100205",
        email: "baohoo1002@gmail.com",
        phoneNumber: "0938381435",
        createDate: '11/09/2001',
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
    {
        userId: "user_7",
        username: "admin",
        password: "admin",
        email: "baohoo10205@gmail.com",
        phoneNumber: "0938381435",
        createDate: curDay,
        address1: '',
        address2: '',
        address3: '',
        status: true,
    },
];

let account = null;


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
        if (User.insert(`user_${User.generateId(userList)}`, username.value, password.value, phoneNumber.value, email.value)) {
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
            localStorage.setItem('accountLogin', JSON.stringify(account.userId));
            //
            passwordLogin.labels[0].innerText = '';
            passwordLogin.labels[0].style.display = 'none';
            clearField(login);
            document.getElementsByClassName('navbar__home')[0]
                .querySelectorAll('div')[1]
                .innerText = `${account.username}`;
            document.getElementsByClassName('navbar__bar')[0]
                .querySelectorAll('div')[1]
                .innerText = `${account.username}`;
            document.getElementById('login__icon').removeEventListener('click', toLoginPage);
            document.getElementById('login__icon__responsive').removeEventListener('click', toLoginPage);
            document.getElementById("login__page").style.display = "none";
            document.getElementById("main__page").style.display = "inline";
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
        this.phoneNumber = phoneNumber;
        this.createDate = curDay;
        this.address1 = '';
        this.address2 = '';
        this.address3 = ''
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

    static insert(userId, username, password, phone_number, email) {
        const newUser = new User(userId, username, password, phone_number, email);
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

    static onload() {
        if (JSON.parse(localStorage.getItem('users')) === null) {
            localStorage.setItem('users', JSON.stringify(userList));
            console.log('Set users');
        } else {
            userList = JSON.parse(localStorage.getItem('users'));
            console.log('Get users');
        }
    }
    // 
    static renderAccountLogin() {
        console.log(localStorage.getItem('accountLogin'))
        if (localStorage.getItem('accountLogin')) {
            let accountLogin = userList.find(user => user.userId === JSON.parse(localStorage.getItem('accountLogin')));
            document.getElementsByClassName('navbar__home')[0]
                .querySelectorAll('div')[1]
                .innerText = `${accountLogin.username}`;
            document.getElementsByClassName('navbar__bar')[0]
                .querySelectorAll('div')[1]
                .innerText = `${accountLogin.username}`;
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

User.onload();
User.renderAccountLogin();
