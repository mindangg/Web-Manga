let userList = [];

let submit = document.getElementById('signup__btn')
let signup = document.getElementById('signup');
let username = document.getElementById('username__input');
let password = document.getElementById('password__input');
let confirmPassword = document.getElementById('confirm_password__input');
let email = document.getElementById('email__input');
let phoneNumber = document.getElementById('phone__input');

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

