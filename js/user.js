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