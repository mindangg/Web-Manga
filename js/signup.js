import { Validation } from './Validation.js';

const signupBtn = document.querySelector('.signup__btn');
const signupUsername = document.getElementById('signup__input-username');
const signupEmail = document.getElementById('signup__input-email');
const signupTel = document.getElementById('signup__input-tel');
const signupPassword = document.getElementById('signup__input-password');

signupBtn.addEventListener('click', () => {
    console.log('Đăng ký...');
    if (
        Validation.checkUsernameSignup(signupUsername) &&
        Validation.checkEmail(signupEmail) &&
        Validation.checkTel(signupTel) &&
        Validation.checkPassword(signupPassword)
    ) {
        console.log('Đăng ký thành công');
    } else {
        console.log('Đăng ký thất bại');
    }
})