let userList = JSON.parse(localStorage.getItem("users")) || [];

const signup = document.getElementById('signup');
const submit = document.getElementById('signup__btn');
const username = document.getElementById('signup__input--username');
const password = document.getElementById('signup__input--password');
const confirmPassword = document.getElementById('signup__input--confpasword');
const email = document.getElementById('signup__input--email');
const phoneNumber = document.getElementById('signup__input--phone');
const signupInput = document.getElementsByClassName('signup__input');
submit.addEventListener("click", (event) => {
    event.preventDefault();
    Validation.checkBlankField(signup);
    if (!Validation.isBlank(username.value)){
        validateUsername(username);
    }
    if (!Validation.isBlank(password.value)){
        validatePassword(password);
    }
    if (!Validation.isBlank(confirmPassword.value)){
        validateConfirmPassword(password, confirmPassword);
    }
    if (!Validation.isBlank(email.value)){
        validateEmail(email);
    }
    if (!Validation.isBlank(phoneNumber.value)){
        validatePhoneNumber(phoneNumber);
    }

    if (
        !Validation.usernameIsExisted(username.value) &&
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
        User.insert(username.value, password.value, phoneNumber.value, email.value);
    }
})

const validateUsername = (username) => {
    if (!Validation.usernameIsValid(username)) {
        username.labels[0].innerText = 'Username must contain only const ters and numbers';
        username.labels[0].style.display = 'block';
    } else {
        username.labels[0].innerText = '';
        username.labels[0].style.display = 'none';
    }
}

const validatePassword = (password) => {
    if (!Validation.passwordIsValid(password)){
        password.labels[0].innerText = 'Password do not meet requirement';
        password.labels[0].style.display = 'block';
    } else {
        password.labels[0].innerText = '';
        password.labels[0].style.display = 'none';
    }
}

const validateConfirmPassword = (password, confirmPassword) => {
    if (!Validation.isMatch(password, confirmPassword)){
        confirmPassword.labels[0].innerText = 'Does not match password';
        confirmPassword.labels[0].style.display = 'block';
    } else {
        confirmPassword.labels[0].innerText = '';
        confirmPassword.labels[0].style.display = 'none';
    }
}

const validateEmail = (email) => {
    if (!Validation.emailIsValid(email)){
        email.labels[0].innerText = 'Email is invalid';
        email.labels[0].style.display = 'block';
    } else {
        email.labels[0].innerText = '';
        email.labels[0].style.display = 'none';
    }
}

const validatePhoneNumber = (phoneNumber) => {
    if (!Validation.phoneIsValid(phoneNumber)){
        phoneNumber.labels[0].innerText = 'Phone number is invalid';
        phoneNumber.labels[0].style.display = 'block';
    } else {
        phoneNumber.labels[0].innerText = '';
        phoneNumber.labels[0].style.display = 'none';
    }
}

userList.forEach(user => {
    console.log(user._username);
})
username.addEventListener('blur', (event) => {
    console.log(Validation.usernameIsExisted(username.value));
    if (Validation.usernameIsExisted(username.value)){
        username.style.border = '1px solid rgba(255, 51, 0, 0.76)';
        username.labels[0].innerText = 'Username has already existed';
        username.labels[0].style.display = 'block';
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
// let day = new Date();
// let curDay = day.getDay() - day.getMonth()
class User {
    constructor(username, password, phoneNumber, email) {
        this._username = username;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._email = email;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phone_number(value) {
        this._phoneNumber = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    toString(){
        return "[username: " + this.username + ", password: " + this.password + ", email: " + this.email
            + ", phoneNumber: " + this.phoneNumber + "]";
    }

    static insert(username, password, phone_number, email){
        const newUser = new User(username, password, phone_number, email);
        console.log("Add new user:")
        console.log(newUser);
        try {
            userList.push(newUser);
            localStorage.setItem('users', JSON.stringify(userList));
        } catch (e){
            console.log("Add new user failed");
        }
    }
}

