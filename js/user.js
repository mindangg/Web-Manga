let userList = [];

let signup = document.getElementById('signup');
let submit = document.getElementById('signup__btn');
let username = document.getElementById('signup__input--username');
let password = document.getElementById('signup__input--password');
let confirmPassword = document.getElementById('signup__input--confpasword');
let email = document.getElementById('signup__input--email');
let phoneNumber = document.getElementById('signup__input--phone');

let username_error = document.getElementById('signup__input--username-error');
let password_error = document.getElementById('signup__input--password-error');
let confirmPassword_error = document.getElementById('signup__input--confpasword-error');
let email_error = document.getElementById('signup__input--email-error');
let phoneNumber_error = document.getElementById('signup__input--phone-error');
submit.addEventListener("click", (event) => {
    event.preventDefault();
    Validation.checkBlankField(signup);
})

class User {
    constructor(username, password, phone_number, email) {
        this._username = username;
        this._password = password;
        this._phone_number = phone_number;
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

    get phone_number() {
        return this._phone_number;
    }

    set phone_number(value) {
        this._phone_number = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    static insert(username, password, phone_number, email){
        const newUser = new User(username, password, phone_number, email);
        userList.push(newUser);
    }
}

