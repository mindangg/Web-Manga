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
            return usernameRegex.test(username.value);
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
            console.error("Confirm Password does not match");
        }
    }

    static checkBlankField (field){
        const inputs = document.getElementsByTagName('input');
        for (let input of inputs){
            if (this.isBlank(input.value)){
                input.style.border = '1px solid rgba(255, 51, 0, 0.76)';
                input.labels[0].innerText = 'This can not be blank';
                input.labels[0].style.display = 'block';
            } else {
                input.style.border = '2px solid #363636';
                input.labels[0].innerText = '';
                input.labels[0].style.display = 'none';
            }
        }
    }
}