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

//best slider

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

//book slider

let book_list = document.querySelector(".book__slider .book__slider__list");
let book_items = document.querySelectorAll(".book__slider .book__slider__list .book__slider__item");
let book_dots = document.querySelectorAll(".book__slider .book__slider__dots li");
let book_next = document.getElementById("book__slider__next");
let book_prev = document.getElementById("book__slider__prev");

let book_active = 0;
let book_lengthItems = book_items.length - 4;

book_next.onclick = function()
{
    if(book_active + 1 <= book_lengthItems)
    {
        book_active++;
        book_ReloadSlider();
        book_AddSlider();
    }
}

book_prev.onclick = function()
{
    if(book_active - 1 >= 0)
    {
        book_active--;
        book_ReloadSlider();
        book_RemoveSlider();
    }
}

function book_ReloadSlider()
{
    let book_checkLeft = book_items[book_active].offsetLeft;
    book_list.style.left = -book_checkLeft + "px";
}

function book_AddSlider()
{
    book_dots[book_active].classList.add("book__active");
}

function book_RemoveSlider()
{
    book_dots[book_active + 1].classList.remove("book__active");
}

//best slider popup

document.getElementById("best__item1").addEventListener("click", function(){
    document.querySelector(".product__page").style.display = "inline";
})

document.getElementById("product__close").addEventListener("click", function(){
    document.querySelector(".product__page").animate.ca
})


document.getElementById("product__close").addEventListener("click", function(){
    document.querySelector(".product__page").style.display = "none";
})























