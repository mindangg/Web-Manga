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

var bestSellingProduct = [
    {
        productId: "manga_1", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action", 
        img1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg", 
        img2: "..img/books/sakamoto days/sakamoto-days-volume-6-back.jpg", 
        name: "Sakamoto Days - Volume 06", 
        price: 9.99, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 6 features story and art by Yuto Suzuki.",
        descr2: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
    },

    {
        productId: "manga_2", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Action", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        name: "Jujutsu Kaisen - Volume 04", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 14 features story and art by Gege Akutami.",
        descr2: "While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off. However, Junpei is also befriended by the culprit behind the bloody incidents—Mahito, a mischievous cursed spirit! Mahito sets in motion a devious plan involving Junpei, hoping to ensnare Itadori as well.",
    },

    {
        productId:"manga_3", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Comedy", 
        img1: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg", 
        name: "Spy X Family - Volume 03", 
        price: 7.99, 
        stock: 100,
        descr1: "Spy x Family manga volume 3 features story and art by Tatsuya Endo.",
        descr2: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
    },


    {
        productId:"manga_4", 
        series: "My Dress Up Darling", 
        author: "Fukuda Shinichi", 
        category: "Rom-Com", 
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-7-primary.jpg", 
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-7-back.jpg", 
        name: "My Dress Up Darling - Volume 07", 
        price: 9.99, 
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 7 features story and art by Shinichi Fukuda.",
        descr2: "Marin's bestie and Wakana's classmate Nowa might seem a little flaky, but the girl has some serious instinct when love is in the air! When she tosses out a bombshell at karaoke by flatly asking Marin and Wakana if they're an item, it sends the two running!"
    },

    {
        productId:"manga_5", 
        series: "Black Clover", 
        author: "Yuki Tabata", 
        category: "Shounen", 
        img1: "../img/books/black clover/black-clover-volume-23-primary.jpg", 
        img2: "../img/books/black clover/black-clover-volume-23-back.jpg", 
        name: "Black Clover - Volume 23", 
        price: 9.99, 
        stock: 150,
        descr1: "Black Clover manga volume 23 features story and art by Yuki Tabata.",
        descr2: "With the devil finally defeated, the Magic Knights are working hard to rebuild the damage done to the Clover Kingdom. Unfortunately for Asta, all the blame is being pinned on him and he’s set to be executed. He’s in the most trouble he’s ever been in, but you never count out a Black Bull!"
    },

    {
        productId:"manga_6", 
        series: "My Hero Academia", 
        author: "Yuki Tabata", 
        category: "Shounen", 
        img1: "../img/books/my hero academia/my-hero-academia-manga-volume-11-primary.jpg", 
        img2: "../img/books/my hero academia/my-hero-academia-manga-volume-11-back.jpg", 
        name: " Kohei Korikoshi - Volume 11", 
        price: 7.99, 
        stock: 150,
        descr1: "My Hero Academia volume 11 features story and art by Kohei Korikoshi.",
        descr2: "Bakugo’s abduction by the League of Villains was a carefully calculated move designed to draw out the Heroes—All Might in particular—and destroy them. Midoriya and his friends set out on a rescue mission that eventually pulls in not only All Might but also several other heroes! The casualties mount, until at last the mastermind of the plot appears—the only villain powerful enough to go head-to-head with All Might and possibly win…All For One!"
    },

    {
        productId:"manga_7", 
        series: "One Punch Man", 
        author: "Yusuke Murata", 
        category: "Shounen", 
        img1: "../img/books/one punch man/one-punch-man-volume-26-primary.jpg", 
        img2: "../img/books/one punch man/one-punch-man-volume-26-back.jpg", 
        name: "One Punch Man - Volume 26", 
        price: 7.99, 
        stock: 150,
        descr1: "One-Punch Man manga volume 26 features story by ONE and art by Yusuke Murata.",
        descr2: "As the fight against the Monster Association big shots heats up, Class-S heroes find themselves locked in a desperate struggle, but Tornado is closing in on Gyoro-Gyoro’s main body! Meanwhile, Blackluster confronts Garo, while Saitama wanders the labyrinth where the Monster Association is hiding out."
    },

    {
        productId:"manga_8", 
        series: "Mashle: Magic And Muscles", 
        author: "Hajime Komoto", 
        category: "Comedy", 
        img1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-primary.jpg", 
        img2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-back.jpg", 
        name: "Mashle: Magic And Muscles - Volume 17", 
        price: 9.59, 
        stock: 150,
        descr1: "Mashle: Magic and Muscles manga volume 17 features story and art by Hajime Komoto.",
        descr2: "Innocent Zero’s youngest child, Domina, steps in to put a stop to his father’s pursuit of Mash. Using the reprieve afforded them, Mash’s friends race against the clock in hopes of getting him to Meliadoul, the only hope he has of surviving without a heart. Meanwhile, as Mash hovers between life and death, he encounters a mysterious figure."
    },

]

bestSellingProduct.forEach(p => {
    document.querySelector(".best__slider__list").innerHTML += `
                <div class="best__slider__item">
                    <a>
                        <img src="${p.img1}" alt="">
                        <img src="${p.img2}" alt="">
                    </a>
                    <h4>${p.name}</h4>
                    <p>$${p.price}</p>
                    <button>+ Add to cart</button>
                </div>
    `
})

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



























