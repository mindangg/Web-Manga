export class Validation {
    static isEmpty(value) {
        const regex = /^\s*$/
        return regex.test(value)
    }

    static checkUsernameLogin(username) {
        let isValid = true;
        if (Validation.isEmpty(username.value)) {
            username.style.border = '2px solid red';
            isValid = false;
            alert('Vui lòng nhập tên tài khoản');
        } else {
            // Kiem tra co ton tai username trong mang khong
            username.style.border = '2px solid #363636';
        }
        return isValid
    }

    static checkPasswordLogin(password) {
        let isValid = true;
        if (Validation.isEmpty(password.value)) {
            password.style.border = '2px solid red';
            isValid = false;
            alert('Vui lòng nhập mật khẩu');
        } else {
            // Kiem tra co ton tai username trong mang khong
            password.style.border = '2px solid #363636';
        }
        return isValid
    }

    static checkUsernameSignup(username) {
        let isValid = true;
        const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (Validation.isEmpty(username.value)) {
            username.style.border = '2px solid red';
            isValid = false;
            alert('Vui lòng nhập tên tài khoản');
        } else {
            if (!usernameRegex.test(username.value)) {
                username.style.border = '2px solid red';
                isValid = false;
                alert('Username ít nhất 6 ký tự và phải có ít nhất 1 chữ cái và 1 số');
            } else {
                username.style.border = '1px solid green';
            }
        }
        return isValid;
    }

    static checkEmail(email) {
        let isValid = true;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (Validation.isEmpty(email.value)) {
            email.style.border = '2px solid red';
            isValid = false;
            alert('Vui lòng nhập email');
        } else {
            if (!emailRegex.test(email.value)) {
                email.style.border = '1px solid red';
                isValid = false;
                alert('Email không đúng định dạng');
            } else {
                email.style.border = '1px solid green';
            }
        }
        return isValid;
    }

    static checkTel(tel) {
        let isValid = true;
        const telRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        if (Validation.isEmpty(tel.value)) {
            tel.style.border = '2px solid red';
            isValid = false;
            alert('Vui lòng nhập số điện thoại');
        } else {
            if (!telRegex.test(tel.value)) {
                tel.style.border = '2px solid red';
                isValid = false;
                alert('Số điện thoại không đúng định dạng');
            } else {
                tel.style.border = '1px solid green';
            }
        }
        return isValid;
    }

    static checkPassword(password) {
        let isValid = true;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (Validation.isEmpty(password.value)) {
            password.style.border = '2px solid red';
            isValid = false;
            alert('Vui lòng nhập mật khẩu');
        } else {
            if (!passwordRegex.test(password.value)) {
                password.style.border = '1px solid red';
                isValid = false;
                alert('Password ít nhất 6 ký tự và phải có ít nhất 1 chữ cái và 1 số');
            } else {
                password.style.border = '2px solid green';
            }
        }
        return isValid;
    }
}
