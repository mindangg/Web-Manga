//slider

let list = document.querySelector(".slider .slider__list");
let items = document.querySelectorAll(".slider .slider__list .slider__item");
let dots = document.querySelectorAll(".slider .slider__dots li");
let next = document.getElementById("slider__next");
let prev = document.getElementById("slider__prev");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function()
{
    if(active + 1 > lengthItems)
        active = 0;
    else
        active++;
    ReloadSlider();
}

prev.onclick = function()
{
    if(active - 1 < 0)
        active = lengthItems;
    else
        active--;
    ReloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 5000);

function ReloadSlider()
{
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .slider__dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000);
}

dots.forEach((li, key) =>{
    li.addEventListener("click", function(){
        active = key;
        ReloadSlider();
    })
})

//slider

let best_list = document.querySelector(".best__slider .best__slider__list");
let best_items = document.querySelectorAll(".best__slider .best__slider__list .best__slider__item");
let best_dots = document.querySelectorAll(".best__slider .best__slider__dots li");
let best_next = document.getElementById("best__slider__next");
let best_prev = document.getElementById("best__slider__prev");

let best_active = 0;
let best_lengthItems = best_items.length - 4;

best_next.onclick = function()
{
    if(best_active + 1 <= best_lengthItems)
    {
        best_active++;
        best_ReloadSlider();
        best_AddSlider();
    }
}

best_prev.onclick = function()
{
    if(best_active - 1 >= 0)
    {
        best_active--;
        best_ReloadSlider();
        best_RemoveSlider();
    }
}

function best_ReloadSlider()
{
    let best_checkLeft = best_items[best_active].offsetLeft;
    best_list.style.left = -best_checkLeft + "px";
}

function best_AddSlider()
{
    best_dots[best_active].classList.add("best__active");
}

function best_RemoveSlider()
{
    best_dots[best_active + 1].classList.remove("best__active");
}

//best slider popup

document.getElementById("best__slider__popup__close").addEventListener("click", function(){
    document.querySelector(".best__slider__popup").style.display = "none";
})

//SIGN UP
let userList = [];

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

signup.addEventListener("submit", (event) => {
    event.preventDefault();
    username.style.display = 'none';
    // if (Validation.isBlank(username.value)){
    //     username_error.innerText = "Khong duoc de trong";
    // } else {
    //     username_error.innerText = "";
    // }
})






















