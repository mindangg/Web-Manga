class Validation {
    constructor() {}

    static isBlank(value) {
        try {
            return value === null || value === undefined || value === ''
        } catch (err) {
            console.error("Value Is Blank");
        }
    }

    static usernameIsValid (username) {
        const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
        try {
            return usernameRegex.test(username);
        } catch (err) {
            console.error("Username Invalid");
        }
    }

    static passwordIsValid (password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        try {
            return passwordRegex.test(password);
        } catch (err) {
            console.error("Password Invalid");
        }
    }

    static emailIsValid (email) {
        const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        try {
            return emailRegex.test(email);
        } catch (err) {
            console.error("Email Invalid");
        }
    }

    static phoneIsValid (phoneNumber) {
        const phoneRegex = /^0\d{9}$/;
        try {
            return phoneRegex.test(phoneNumber)
        } catch (err) {
            console.error("Phone Number Invalid");
        }
    }

    static isMatch(password, confirmPassword){
        try {
            return password === confirmPassword;
        } catch (e) {
            console.error("Confirm Password doesn't match");
        }
    }

    static checkBlankInField() {
        const signup = document.getElementById('signup');
        const inputs = signup.getElementsByTagName('input').valueOf();
        for (let input of inputs) {
            if (Validation.isBlank(input)) {
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
        }
    }
}