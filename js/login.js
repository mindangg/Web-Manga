import { Validation } from './Validation.js';

const loginUsername = document.getElementById('login__input-username');
const loginPassword = document.getElementById('login__input-password');
const loginBtn = document.querySelector('.login__btn');

loginBtn.addEventListener('click', () => {
    if (
        Validation.checkUsernameLogin(loginUsername) &&
        Validation.checkPasswordLogin(loginPassword)
    ) {
        console.log('Đăng nhập thành công')
    } else {
        console.log('Đăng nhập thất bại')
    }
})