let userList = JSON.parse(localStorage.getItem("users")) || [];

//FOR SIGN UP
const signup = document.getElementById('signup');
const submit = document.getElementById('signup__btn');
const username = document.getElementById('signup__input--username');
const password = document.getElementById('signup__input--password');
const confirmPassword = document.getElementById('signup__input--confpasword');
const email = document.getElementById('signup__input--email');
const phoneNumber = document.getElementById('signup__input--phone');
const notification = document.getElementById('notification');
const signupInput = document.getElementsByClassName('signup__input');

//FOR SIGN IN
const usernameLogin = document.getElementById('login__input--username');
const passwordLogin = document.getElementById('login__input--password');
const forget = document.getElementById('logi')
//SIGN UP EVENT
submit.addEventListener("click", (event) => {
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
        if (User.insert(username.value, password.value, phoneNumber.value, email.value)) {
            username.value = '';
            password.value = '';
            confirmPassword.value = '';
            email.value = '';
            phoneNumber.value = '';
            setTimeout(function () {
                document.getElementById("signup__page").style.display = "none";
                document.getElementById("login__page").style.display = "inline";
            }, 3000);
        } else {
            notification.innerText = "There were some problem, sign up failed";
            showNotification();
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
    signupInput[1].style.marginBottom = '37px';
})

password.addEventListener('blur', (event) => {
    password.labels[0].innerText = '';
    password.labels[0].style.display = 'none';
    password.labels[0].style.color = 'rgba(255, 51, 0, 0.76)';
    signupInput[1].style.marginBottom = '25px';
})

//SIGN IN EVENT


//USER

//Get current date
let day = new Date();
let dd = String(day.getDate()).padStart(2, '0');
let mm = String(day.getMonth() + 1).padStart(2, '0');
let yyyy = day.getFullYear();
let curDay = dd + "/" + mm + "/" + yyyy;

class User {
    constructor(username, password, phoneNumber, email) {
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.createDate = curDay;
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

    static insert(username, password, phone_number, email) {
        const newUser = new User(username, password, phone_number, email);
        console.log("Add new user:")
        console.log(newUser);
        try {
            userList.push(newUser);
            localStorage.setItem('users', JSON.stringify(userList));
            showNotification();
            return true;
        } catch (e) {
            console.log("Add new user failed");
            return false;
        }
    }
}

class Address {
    constructor(username, address) {
        this.username = username;
        this.address = address;
    }
}

function showNotification() {
    notification.className = "show";
    setTimeout(function () {
        notification.className = notification.classList.remove("show");
    }, 3000);
}

