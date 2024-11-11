class Validation {
    constructor() { }

    static isBlank(value) {
        try {
            return value === null || value === undefined || value === ''
        } catch (err) {
            console.error("Value Is Blank");
        }
        return false;
    }

    static usernameIsValid(username) {
        const usernameRegex = /^[a-zA-Z0-9]{1,}$/;
        try {
            return usernameRegex.test(username.value);
        } catch (err) {
            console.error("Username Invalid");
        }
    }

    static passwordIsValid(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        try {
            return passwordRegex.test(password.value);
        } catch (err) {
            console.error("Password Invalid");
        }
    }

    static emailIsValid(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        try {
            return emailRegex.test(email.value);
        } catch (err) {
            console.error("Email Invalid");
        }
    }

    static phoneIsValid(phoneNumber) {
        const phoneRegex = /^0\d{9}$/;
        try {
            return phoneRegex.test(phoneNumber.value)
        } catch (err) {
            console.error("Phone Number Invalid");
        }
    }

    static isMatch(password, confirmPassword) {
        try {
            return password.value === confirmPassword.value;
        } catch (e) {
            console.error("Confirm Password does not match");
        }
    }

    static checkBlankField(field) {
        const inputs = field.getElementsByTagName('input');
        let check = false;
        for (let input of inputs) {
            if (this.isBlank(input.value)) {
                input.style.border = '1px solid rgba(255, 51, 0, 0.76)';
                input.labels[0].innerText = 'This cannot be empty';
                input.labels[0].style.display = 'block';
                check = true;
            } else {
                input.style.border = '2px solid #363636';
                input.labels[0].innerText = '';
                input.labels[0].style.display = 'none';
            }
        }
        return check;
    }

    static usernameExisted(username) {
        let users = JSON.parse(localStorage.getItem("users"));
        return users.some(user => user.username === username.value);
    }
}