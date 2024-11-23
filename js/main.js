//slider
let list = document.querySelector(".slider .slider__list");
let items = document.querySelectorAll(".slider .slider__list .slider__item");
let dots = document.querySelectorAll(".slider .slider__dots li");
let next = document.getElementById("slider__next");
let prev = document.getElementById("slider__prev");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems)
        active = 0;
    else
        active++;
    ReloadSlider();
}

prev.onclick = function () {
    if (active - 1 < 0)
        active = lengthItems;
    else
        active--;
    ReloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 5000);

function ReloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .slider__dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        ReloadSlider();
    })
})

//product
let productArray = JSON.parse(localStorage.getItem('product')) || [
    {
        productId: "manga_0",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-1-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-1-back.jpg",
        name: "Sakamoto Days - Volume 01",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 1 features story and art by Yuto Suzuki.",
        descr2: "Taro Sakamoto was once a legendary hit man considered the greatest of all time. Bad guys feared him! Assassins revered him! But then one day he quit, got married, and had a baby.",
    },

    {
        productId: "manga_1",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-5-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-5-back.jpg",
        name: "Sakamoto Days - Volume 05",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 5 features story and art by Yuto Suzuki.",
        descr2: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation.",
    },

    {
        productId: "manga_2",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-6-back.jpg",
        name: "Sakamoto Days - Volume 06",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 6 features story and art by Yuto Suzuki.",
        descr2: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation.",
    },

    {
        productId: "manga_3",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-7-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-7-back.jpg",
        name: "Sakamoto Days - Volume 07",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 7 features story and art by Yuto Suzuki.",
        descr2: "Sakamoto and X finally face off! Although Sakamoto has vowed not to kill, X shakes him up by threatening his family.",
    },

    {
        productId: "manga_4",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-8-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-8-back.jpg",
        name: "Sakamoto Days - Volume 08",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 8 features story and art by Yuto Suzuki.",
        descr2: "In the third stage of the JCC transfer test, the participants are divided into multiple teams for a deadly game of “tail tag.",
    },

    {
        productId: "manga_5",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-10-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-10-back.jpg",
        name: "Sakamoto Days - Volume 10",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 10 features story and art by Yuto Suzuki.",
        descr2: "As Sakamoto and his friends hunt for the database at the JCC, Shin winds up in a serious duel with a teacher who might have information on what they want.",
    },

    {
        productId: "manga_6",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-12-primary.jpeg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-12-back.jpeg",
        name: "Sakamoto Days - Volume 12",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 12 features story and art by Yuto Suzuki.",
        descr2: "It's an assassin showdown! Shishiba and Osaragi take on Yotsumura and his geisha on the streets of Kyoto.",
    },


    {
        productId: "manga_7",
        series: "Sakamoto Days",
        author: "Yuto Suzuki",
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-15-primary.jpg",
        img2: "../img/books/sakamoto days/sakamoto-days-volume-15-back.jpg",
        name: "Sakamoto Days - Volume 15",
        price: 9.59,
        stock: 120,
        descr1: "Sakamoto Days manga volume 15 features story and art by Yuto Suzuki.",
        descr2: "It’s the legendary fighter Hyo and sniper Heisuke versus the magnetic Kumanomi! Who will emerge victorious in the fierce battle between three assassins with different styles of killing?",
    },

    {
        productId: "manga_8",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-primary.jpg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-back.jpg",
        name: "Jujutsu Kaisen - Volume 01",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami.",
        descr2: "In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoma Sukuna were lost and scattered about.",
    },


    {
        productId: "manga_9",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-back.jpg",
        name: "Jujutsu Kaisen - Volume 04",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami.",
        descr2: "While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off.",
    },

    {
        productId: "manga_10",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-11-primary.jpg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-11-back.jpg",
        name: "Jujutsu Kaisen - Volume 11",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 11 features story and art by Gege Akutami.",
        descr2: "Despite the crowd of civilians and transfigured humans, Satoru Gojo is able to defeat the cursed spirits at Shibuya Station. But it’s a trap!",
    },

    {
        productId: "manga_11",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-back.jpg",
        name: "Jujutsu Kaisen - Volume 14",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 14 features story and art by Gege Akutami.",
        descr2: "Sukuna, unleashed, is wrecking Shibuya, and Fushiguro has suffered a serious injury from a curse user’s surprise attack.",
    },

    {
        productId: "manga_12",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-15-primary.jpg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-15-back.jpg",
        name: "Jujutsu Kaisen - Volume 15",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 15 features story and art by Gege Akutami.",
        descr2: "Sukuna is on a murderous rampage. Meanwhile, invaluabe Jujutsu Sorcerers have been taken down, and even Kugisaki falls into Mahito’s trap!",
    },

    {
        productId: "manga_13",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-17-primary.jpg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-17-back.jpg",
        name: "Jujutsu Kaisen - Volume 17",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 17 features story and art by Gege Akutami.",
        descr2: "Hunted down by Okkotsu and on the brink of death, Itadori recalls a troubling family scene from his past. But why is the former form of Noritoshi Kamo there?",
    },

    {
        productId: "manga_14",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-22-primary.jpeg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-22-back.jpg",
        name: "Jujutsu Kaisen - Volume 22",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 22 features story and art by Gege Akutami.",
        descr2: "A mysterious cursed spirit suddenly flies into Sakurajima Colony. It’s someone who became a curse after death and bears a grudge against Maki!",
    },

    {
        productId: "manga_15",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-primary.jpeg",
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-back.jpeg",
        name: "Jujutsu Kaisen - Volume 23",
        price: 3.99,
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 23 features story and art by Gege Akutami.",
        descr2: "Sukuna reveals that he is the Disgraced One whom the Angel wants to kill. While Itadori grapples with that realization, Kenjaku sets in motion plans involving various nations.",
    },

    {
        productId: "manga_16",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-1-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-1-back.jpg",
        name: "Spy X Family - Volume 01",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 1 features story and art by Tatsuya Endo.",
        descr2: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit!"
    },

    {
        productId: "manga_17",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-2-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-2-back.jpg",
        name: "Spy X Family - Volume 02",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 2 features story and art by Tatsuya Endo.",
        descr2: "Twilight must infiltrate the prestigious Eden Academy to get close to his target Donovan Desmond, but does his daughter Anya even have the academic prowess to get in to the school?"
    },

    {
        productId: "manga_18",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-3-back.jpg",
        name: "Spy X Family - Volume 03",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 3 features story and art by Tatsuya Endo.",
        descr2: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit!"
    },

    {
        productId: "manga_19",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-4-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-4-back.jpg",
        name: "Spy X Family - Volume 04",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 4 features story and art by Tatsuya Endo.",
        descr2: "The Forgers look into adding a dog to their family, but this is no easy task—especially when Twilight has to simultaneously foil an assassination plot against a foreign minister!"
    },

    {
        productId: "manga_20",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-5-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-5-back.jpg",
        name: "Spy X Family - Volume 05",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 5 features story and art by Tatsuya Endo.",
        descr2: "Anya Forger has been trying her best to befriend Damian Desmond, the son of the powerful Ostanian political leader Donovan Desmond, but her attempts have been constantly rebuffed."
    },

    {
        productId: "manga_21",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-6-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-6-back.jpg",
        name: "Spy X Family - Volume 06",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 6 features story and art by Tatsuya Endo.",
        descr2: "Twilight and Nightfall enter an underground tennis tournament, hoping for an opportunity to obtain an intelligence document that threatens to bring the world to the brink of war!"
    },

    {
        productId: "manga_22",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-7-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-7-back.jpg",
        name: "Spy X Family - Volume 07",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 7 features story and art by Tatsuya Endo.",
        descr2: "As Donovan Desmond is about to share a rare family moment with his son Damian, Twilight cuts in to meet his target face-to-face for the first time."
    },

    {
        productId: "manga_23",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        img1: "../img/books/spy x family/spy-x-family-volume-10-primary.jpg",
        img2: "../img/books/spy x family/spy-x-family-volume-10-back.jpg",
        name: "Spy X Family - Volume 10",
        price: 4.99,
        stock: 100,
        descr1: "Spy x Family manga volume 10 features story and art by Tatsuya Endo.",
        descr2: "As a child, [REDACTED] lived a peaceful life with his parents, playing war games with his friends and having minor quarrels with his father."
    },

    {
        productId: "manga_24",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-1-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-1-back.jpg",
        name: "My Dress Up Darling - Volume 01",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 1 features story and art by Shinichi Fukuda.",
        descr2: "Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner."
    },

    {
        productId: "manga_25",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-2-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-2-back.jpg",
        name: "My Dress Up Darling - Volume 02",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 2 features story and art by Shinichi Fukuda.",
        descr2: "Though training to become an artisan who makes Hina doll heads, Wakana Gojo is instead making cosplay costumes for Marin Kitagawa, one of the most popular girls in the class."
    },

    {
        productId: "manga_26",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-3-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-3-back.jpg",
        name: "My Dress Up Darling - Volume 03",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 3 features story and art by Shinichi Fukuda.",
        descr2: "Wakana and Marin make it through their very first cosplay event, and not long after, Marin’s heart undergoes a change…?!"
    },

    {
        productId: "manga_27",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-6-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-6-back.jpg",
        name: "My Dress Up Darling - Volume 06",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 6 features story and art by Shinichi Fukuda.",
        descr2: "And that seems to be one of cosplay’s superpowers, as Wakana and Marin discover at an Ikebukuro event."
    },

    {
        productId: "manga_28",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-7-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-7-back.jpg",
        name: "My Dress Up Darling - Volume 07",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 7 features story and art by Shinichi Fukuda.",
        descr2: "Marin's bestie and Wakana's classmate Nowa might seem a little flaky, but the girl has some serious instinct when love is in the air!"
    },

    {
        productId: "manga_29",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-9-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-9-back.jpg",
        name: "My Dress Up Darling - Volume 09",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 9 features story and art by Shinichi Fukuda.",
        descr2: "To get the swanky DSLR camera of her dreams, Marin picks up more part-time work! And once she’s scraped up the cash to buy her shiny new gadget."
    },

    {
        productId: "manga_30",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-10-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-10-back.jpg",
        name: "My Dress Up Darling - Volume 10",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 10 features story and art by Shinichi Fukuda.",
        descr2: "Cue Marin and her ever proactive mind! She rings up a certain someone to see if they’d be game for an impromptu cosplay collaboration, but it’s going to be a hard sell!"
    },
    {
        productId: "manga_31",
        series: "My Dress Up Darling",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-12-primary.jpg",
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-12-back.jpg",
        name: "My Dress Up Darling - Volume 12",
        price: 7.99,
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 12 features story and art by Shinichi Fukuda.",
        descr2: "Although the impromptu horror-game group cosplay came with a whole bunch of twists, from JuJu’s surprise costume to Akira’s rowdy outburst."
    },

    {
        productId: "manga_32",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-7-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-7-back.jpg",
        name: "Black Clover - Volume 07",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 7 features story and art by Yuki Tabata.",
        descr2: "After the battle with the Eye of the Midnight Sun, the Wizard King suspects that there might be a traitor among the Magic Knights."
    },

    {
        productId: "manga_33",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-15-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-15-back.jpg",
        name: "Black Clover - Volume 15",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 15 features story and art by Yuki Tabata.",
        descr2: "As the Royal Knights selection test enters its final stage, a surprising team is still in contention! Can Asta or Yuno take the crown?"
    },

    {
        productId: "manga_34",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-21-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-21-back.jpg",
        name: "Black Clover - Volume 21",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 21 features story and art by Yuki Tabata.",
        descr2: "With Asta and Yuno now in the Shadow Palace, the time has finally come to settle the grudge with the elves that has lasted hundreds of years."
    },

    {
        productId: "manga_35",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-23-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-23-back.jpg",
        name: "Black Clover - Volume 23",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 23 features story and art by Yuki Tabata.",
        descr2: "With the devil finally defeated, the Magic Knights are working hard to rebuild the damage done to the Clover Kingdom. Unfortunately for Asta, all the blame is being pinned on him and he’s set to be executed."
    },

    {
        productId: "manga_36",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-24-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-24-back.jpg",
        name: "Black Clover - Volume 24",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 24 features story and art by Yuki Tabata.",
        descr2: "After six months of training in the Heart Kingdom, Asta and his fellow magic knights are ready to show off their improvements. Will Asta’s muscles be enough when the devil-powered Spade Kingdom begins their invasion, or will he need some new tricks?"
    },

    {
        productId: "manga_37",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-25-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-7-back.jpg",
        name: "Black Clover - Volume 25",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 25 features story and art by Yuki Tabata.",
        descr2: "The Spade Kingdom’s Dark Triad has launched an all-out attack on the Heart Kingdom and the Black Bulls. While Asta and company have gotten stronger, can they stand up to these new devil-possessed mages? This might be the perfect time for Yami to save the day!"
    },

    {
        productId: "manga_38",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-32-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-32-back.jpg",
        name: "Black Clover - Volume 32",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 32 features story and art by Yuki Tabata.",
        descr2: "To save Yami, the Black Bulls storm their way into enemy territory. And with a powered-up Asta joining the fight, the battle may be going their way. But when the most powerful devil in the underworld finally makes his appeareance."
    },

    {
        productId: "manga_39",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        img1: "../img/books/black clover/black-clover-volume-33-primary.jpg",
        img2: "../img/books/black clover/black-clover-volume-33-back.jpg",
        name: "Black Clover - Volume 33",
        price: 11.99,
        stock: 150,
        descr1: "Black Clover manga volume 33 features story and art by Yuki Tabata.",
        descr2: "In the battle for humanity, Yami, Nacht, and Yuno give it their all against the king of devils, but it may not be enough. It’ll be up to Asta and Leibe to surpass their limits together and finally avenge their mother!"
    },

    {
        productId: "manga_40",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-1-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-1-back.jpg",
        name: "Tokyo Ghoul - Volume 01",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 1 features story and art by Sui Ishida.",
        descr2: "Ghouls live among us, the same as normal people in every way - except their craving for human flesh. Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize."
    },

    {
        productId: "manga_41",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-2-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-2-back.jpg",
        name: "Tokyo Ghoul - Volume 02",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 02 features story and art by Sui Ishida.",
        descr2: "Unable to discard his humanity but equally unable to suppress his Ghoul hunger, Ken finds salvation in the kindness of friendly Ghouls who teach him how to pass as human and eat flesh humanely."
    },

    {
        productId: "manga_42",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-3-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-3-back.jpg",
        name: "Tokyo Ghoul - Volume 03",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 3 features story and art by Sui Ishida.",
        descr2: "Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize."
    },

    {
        productId: "manga_43",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-5-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-5-back.jpg",
        name: "Tokyo Ghoul - Volume 05",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 05 features story and art by Sui Ishida.",
        descr2: "Kaneki, Nishio, and Touka struggle to work together to rescue their human friend Kimi while Ghoul Investigator deaths skyrocket in Wards 9 through 12. When reinforcements are called in on both sides."
    },

    {
        productId: "manga_44",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-7-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-7-back.jpg",
        name: "Tokyo Ghoul - Volume 07",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 7 features story and art by Sui Ishida.",
        descr2: "Kaneki is captured and then tortured by Yamori, one of Aogiri Tree organization's most sadistic members. To survive the interrogation, Kaneki will have to finally surrender to the Ghoul inside him."
    },

    {
        productId: "manga_45",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-9-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-9-back.jpg",
        name: "Tokyo Ghoul - Volume 09",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 09 features story and art by Sui Ishida.",
        descr2: "Ghouls live among us, the same as normal people in every way—except their craving for human flesh. Ken Kaneki is an ordinary college student until a violent encounter turns him into the first half-human half-ghoul hybrid."
    },

    {
        productId: "manga_46",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-11-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-11-back.jpg",
        name: "Tokyo Ghoul - Volume 11",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 11 features story and art by Sui Ishida.",
        descr2: "Amid clashes between Ghouls and the Commission of Counter Ghoul investigators at Doctor Kano’s underground facility, Kaneki finds himself locked in battle with Special Class Ghoul investigator Yukinori Shinohara."
    },

    {
        productId: "manga_47",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-14-primary.jpg",
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-14-back.jpg",
        name: "Tokyo Ghoul - Volume 14",
        price: 14.39,
        stock: 150,
        descr1: "Tokyo Ghoul Volume 14 features story and art by Sui Ishida.",
        descr2: "As Kaneki and the fiercest fighter in the CCG, Arima, finally face off, several investigators launch an assault on Yoshimura, unaware of the danger that awaits them. The massive battle takes a turn for the worse when the One-Eyed Owl appears."
    },

    {
        productId: "manga_48",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-1-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-1-back.jpg",
        name: "One Punch Man - Volume 01",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 1 features story by ONE and art by Yusuke Murata.",
        descr2: "Nothing about Saitama passes the eyeball test when it comes to superheroes, from his lifeless expression to his bald head to his unimpressive physique."
    },

    {
        productId: "manga_49",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-5-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-5-back.jpg",
        name: "One Punch Man - Volume 05",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 5 features story by ONE and art by Yusuke Murata.",
        descr2: "To stop a Demon-level crisis, Saitama and company head toward the action. However, even Class S heroes prove to be no match for the Deep Sea King!"
    },

    {
        productId: "manga_50",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-9-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-9-back.jpg",
        name: "One Punch Man - Volume 09",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 9 features story by ONE and art by Yusuke Murata.",
        descr2: "Garo, a man who admires monsters, attacks the Hero Association! But after pulverizing the heroes there, he just leaves. What the heck does this guy want?! Meanwhile, Class-B, Rank-1 Miss Blizzard visits Saitama at his apartment."
    },

    {
        productId: "manga_51",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-18-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-18-back.jpg",
        name: "One Punch Man - Volume 18",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 18 features story by ONE and art by Yusuke Murata.",
        descr2: "Garo has just left the Monster Association’s hideout when he crosses paths with Saitama, who’s in quite a pinch, but Saitama still doesn't know Garo is the Hero Hunter. Later, King the Ripper can no longer hold back his murderous urges and confronts Garo himself!"
    },

    {
        productId: "manga_52",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-25-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-25-back.jpg",
        name: "One Punch Man - Volume 25",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 25 features story by ONE and art by Yusuke Murata.",
        descr2: "In an underground labyrinth, Puri-Puri Prisoner encounters Garo, who is now stronger than ever! Meanwhile, Saitama teams up with the hero Flash while both are lost underground."
    },
    
    {
        productId: "manga_53",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-26-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-26-back.jpg",
        name: "One Punch Man - Volume 26",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 26 features story by ONE and art by Yusuke Murata.",
        descr2: "As the fight against the Monster Association big shots heats up, Class-S heroes find themselves locked in a desperate struggle, but Tornado is closing in on Gyoro-Gyoro’s main body!"
    },

    {
        productId: "manga_54",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-27-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-27-back.jpg",
        name: "One Punch Man - Volume 27",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 27 features story by ONE and art by Yusuke Murata.",
        descr2: "Psychos intends to fuse with Orochi, the Monster King, which would give them immense power against Tornado. Superalloy confronts Garo and experiences fear of his opponent’s strength… Meanwhile, Saitama gets caught up in a cave-in in the underground labyrinth!"
    },

    {
        productId: "manga_55",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        img1: "../img/books/one punch man/one-punch-man-volume-28-primary.jpg",
        img2: "../img/books/one punch man/one-punch-man-volume-28-back.jpg",
        name: "One Punch Man - Volume 28",
        price: 15.59,
        stock: 150,
        descr1: "One-Punch Man manga volume 28 features story by ONE and art by Yusuke Murata.",
        descr2: "Psychos and Tornado’s psychic battle rages on! With Genos’s help, Tornado succeeds in rescuing the scattered heroes from their fight against the monsters, allowing her to unleash a devastating attack that warps the city…"
    },

    {
        productId: "manga_56",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-1-primary.jpg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-1-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 01",
        price: 17.39,
        stock: 150,
        descr1: "Mashle Magic and Muscles manga volume 1 features story and art by Hajime Komoto.",
        descr2: "Mash just wants to live in peace with his father in the forest. But the only way he'll ever be accepted in the magic realm is by attending magic school and becoming a Divine Visionary."
    },

    {
        productId: "manga_57",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-3-primary.jpg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-3-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 03",
        price: 17.39,
        stock: 150,
        descr1: "Mashle Magic and Muscles manga volume 3 features story and art by Hajime Komoto.",
        descr2: "Lang’s vicious hunt for coins is in full swing! To stop them from monopolizing the chance to earn a Divine Visionary position, Mash teams up with his Adler compatriots. Afterwards, the Sixth and Seventh Fangs of the Magia Lupus swoop in to attack Mash while he’s cleaning the owl huts."
    },

    {
        productId: "manga_58",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-9-primary.jpg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-9-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 09",
        price: 17.39,
        stock: 150,
        descr1: "Mashle Magic and Muscles manga volume 9 features story and art by Hajime Komoto.",
        descr2: "Mash has narrowly avoided Innocent Zero’s attack, but more danger is soon to come as Mash faces his most loathsome foe yet - the end-of-semester test! Will his friends be able to save him from a failing mark and subsequent expulsion?"
    },

    {
        productId: "manga_59",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-14-primary.jpg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-14-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 14",
        price: 17.39,
        stock: 150,
        descr1: "Mashle: Magic and Muscles manga volume 14 features story and art by Hajime Komoto.",
        descr2: "Rayne is driven into a corner by Innocent Zero’s fourth son, Delisaster. Finn tries to jump in to help, but Rayne stubbornly refuses his brother’s aid. Meanwhile, Lance and Dot run into the third son, Epidem."
    },

    {
        productId: "manga_60",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-15-primary.jpg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-15-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 15",
        price: 17.39,
        stock: 150,
        descr1: "Mashle: Magic and Muscles manga volume 15 features story and art by Hajime Komoto.",
        descr2: "Orter, Rayne, and the others join forces to try and take down Innocent Zero’s eldest son, Doom. But Doom overwhelms them all, and according to him, he’s still holding back. With Doom unaffected by their attacks, the situation seems desperate."
    },

    {
        productId: "manga_61",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-16-primary.jpeg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-16-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 16",
        price: 17.39,
        stock: 150,
        descr1: "Mashle Magic and Muscles manga volume 16 features story and art by Hajime Komoto.",
        descr2: "Mash shows off the hard-won results of his strenuous training against his greatest and final obstacle before confronting Innocent Zero—Doom! Now that he knows the extent of his body’s capabilities and how to control them, Mash’s strength has grown to an unimaginable level!"
    },

    {
        productId: "manga_62",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-17-primary.jpeg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-17-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 17",
        price: 17.39,
        stock: 150,
        descr1: "Mashle Magic and Muscles manga volume 17 features story and art by Hajime Komoto.",
        descr2: "Innocent Zero’s youngest child, Domina, steps in to put a stop to his father’s pursuit of Mash. Using the reprieve afforded them, Mash’s friends race against the clock in hopes of getting him to Meliadoul."
    },

    {
        productId: "manga_63",
        series: "Mashle Magic And Muscles",
        author: "Hajime Komoto",
        category: "Comedy",
        img1: "../img/books/mashle/mashle-magic-and-muscles-volume-18-primary.jpg",
        img2: "../img/books/mashle/mashle-magic-and-muscles-volume-18-back.jpg",
        name: "Mashle Magic And Muscles - Volume 18",
        price: 17.39,
        stock: 150,
        descr1: "Mashle: Magic and Muscles manga volume 18 features story and art by Hajime Komoto.",
        descr2: "Innocent Zero has exceeded the limits of human existence and become a god! Humanity has no choice but to bow down before his awe-inspiring divinity. Except for Mash, whose muscles have unlocked an unimaginable power to give Innocent Zero a flick to the forehead he won’t soon forget!"
    },
]

//search
function convert(e){
    return (e.replaceAll("-", " ")).toLowerCase()
}

function searchProductByURL(){
    const urlSearchIndex = window.location.search
    console.log(urlSearchIndex)

    const urlSearch = new URLSearchParams(urlSearchIndex)

    if(urlSearch.get("series")){
        console.log("1")
        const seriesSearch = urlSearch.get("series")
        renderViewSearchProductByURL(convert(seriesSearch), "Series")
    }

    else if(urlSearch.get("category")){
        console.log("2")
        const categorySearch = urlSearch.get("category")
        renderViewSearchProductByURL(convert(categorySearch), "Category")
    }


    else if(urlSearch.get("author")){
        console.log("3")
        const authorSearch = urlSearch.get("author")
        renderViewSearchProductByURL(convert(authorSearch), "Author")
    }


    else if(urlSearch.get("price")){
        console.log("4")
        const priceSearch = urlSearch.get("price")
        renderViewSearchProductByURL(convert(priceSearch), "Price")
    }
}

searchProductByURL()

function searchProduct(){
    productSearch = search__input.value.toLowerCase()
    document.getElementById("main__page").style.display = "none"
    document.getElementById("search__page").style.display = "inline"
    let searchPage = document.querySelector(".search__page__list");
    searchPage.innerHTML = ""
    if(document.getElementById("filter").className == ""){
        for(let i = 0; i < productArray.length; i++){
            if(((productArray[i].name.toLowerCase().search(productSearch) != -1) ||
                (productArray[i].series.toLowerCase().search(productSearch) != -1) ||
                (productArray[i].category.toLowerCase().search(productSearch) != -1) ||
                (productArray[i].author.toLowerCase().search(productSearch) != -1)) && 
                productSearch != ''){
                searchPage.innerHTML += `
                <div class="search__page__item">
                    <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                        <img src="${productArray[i].img1}" alt="">
                        <img src="${productArray[i].img2}" alt="">
                    </a>
                    <h4>${productArray[i].name}</h4>
                    <p>$${productArray[i].price}</p>
                    <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                </div>
                ` 
            }
        }
    }

    else{
        let filter__series = document.getElementById("filter__series")
        let filter__min = document.getElementById("filter__min").value
        let filter__max = document.getElementById("filter__max").value

        if(filter__series.value == "all"){
			for(let i = 0; i<productArray.length; i++){
				if (productArray[i].series.toLowerCase().search(productSearch) != -1 && productArray[i].price >= filter__min && productArray[i].price <= filter__max){
                    searchPage.innerHTML += `
                    <div class="search__page__item">
                        <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                            <img src="${productArray[i].img1}" alt="">
                            <img src="${productArray[i].img2}" alt="">
                        </a>
                        <h4>${productArray[i].name}</h4>
                        <p>$${productArray[i].price}</p>
                        <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                    </div>
                    ` 
				}
			}
		}

		else{
            productSearchFilter = convert(filter__series.value)
            console.log(productSearchFilter)
			for(let i = 0; i < productArray.length; i++){
				if (productArray[i].series.toLowerCase().search(productSearchFilter) != -1 && productArray[i].price >= filter__min && productArray[i].price <= filter__max){
                    searchPage.innerHTML += `
                    <div class="search__page__item">
                        <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                            <img src="${productArray[i].img1}" alt="">
                            <img src="${productArray[i].img2}" alt="">
                        </a>
                        <h4>${productArray[i].name}</h4>
                        <p>$${productArray[i].price}</p>
                        <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
                    </div>
                    ` 
				}
			}
		}
    }
    search__input.value = ""
}

document.addEventListener("DOMContentLoaded", function(){
    var search__input = document.getElementById("search__input")
    //var filter__series = document.getElementById("filter__series")
    search__input.addEventListener("keydown", (e) =>{
        if(e.key == "Enter"){
            console.log("Hi")
            searchProduct()
        }
    })
})

function capitalizeAllWords(str){
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

function renderViewSearchProduct(renderProduct, renderBy){
    document.getElementById("main__page").style.display = "none"
    document.getElementById("search__page").style.display = "inline"
    let searchPage = document.querySelector(".search__page__list");
    searchPage.innerHTML = ""
    document.querySelector(".search__page__lists h1").innerText = "Search by " + capitalizeAllWords(renderBy) + " : " + capitalizeAllWords(renderProduct) 
    
    for(let i = 0; i < productArray.length; i++){
        if(renderProduct == productArray[i].series.toLowerCase() || 
            renderProduct == productArray[i].category.toLowerCase() ||
            renderProduct == productArray[i].author.toLowerCase()
        )
        searchPage.innerHTML += `
        <div class="search__page__item">
            <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                <img src="${productArray[i].img1}" alt="">
                <img src="${productArray[i].img2}" alt="">
            </a>
            <h4>${productArray[i].name}</h4>
            <p>$${productArray[i].price}</p>
            <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `   
    }
}

function renderViewSearchProductByURL(renderProduct, renderBy){
    document.getElementById("main__page").style.display = "none"
    document.getElementById("search__page").style.display = "inline"
    let searchPage = document.querySelector(".search__page__list");
    searchPage.innerHTML = ""
    document.querySelector(".search__page__lists h1").innerText = "Search by " + capitalizeAllWords(renderBy) + " : " + capitalizeAllWords(renderProduct) 
    
    for(let i = 0; i < productArray.length; i++){
        if(renderProduct == productArray[i].series.toLowerCase() || 
            renderProduct == productArray[i].category.toLowerCase() ||
            renderProduct == productArray[i].author.toLowerCase()
        )
        searchPage.innerHTML += `
        <div class="search__page__item">
            <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                <img src="${productArray[i].img1}" alt="">
                <img src="${productArray[i].img2}" alt="">
            </a>
            <h4>${productArray[i].name}</h4>
            <p>$${productArray[i].price}</p>
            <button id="${productArray[i].productId}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `   
    }
}

showSlider()

function showSlider(){
    for (let i = 0; i < productArray.length; i += 5) {
        document.querySelector(".best__slider__list").innerHTML += `
        <div class="best__slider__item">
            <a id="${productArray[i].productId}" onclick="showProductInfo(this)">
                <img src="${productArray[i].img1}" alt="">
                <img src="${productArray[i].img2}" alt="">
            </a>
            <h4>${productArray[i].name}</h4>
            <p>$${productArray[i].price}</p>
            <button id="${productArray[i].id}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `

        document.querySelector(".book__slider__list").innerHTML += `
        <div class="book__slider__item">
            <a id="${productArray[i + 1].productId}" onclick="showProductInfo(this)">
                <img src="${productArray[i + 1].img1}" alt="">
                <img src="${productArray[i + 1].img2}" alt="">
            </a>
            <h4>${productArray[i + 1].name}</h4>
            <p>$${productArray[i + 1].price}</p>
            <button id="${productArray[i+1].id}" onclick="Cart.addToCart(this)">+ Add to cart</button>
        </div>
        `
    }
}

function showProductInfo(e){
    document.querySelector(".product__page").style.display = "inline"
    document.querySelector(".product").style.animationName = "topDown"
    const productInfo = document.querySelector(".product__page")
    const p = productArray.find(product => product.productId === e.id)

    if (!p){
        console.error("Product not found")
        return
    }

    productInfo.innerHTML = `
                <div class="product">
                    <a id="product__close" onclick="closeProduct()"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
                    <div class="product__img">
                        <img id="product__img1" src="${p.img1}">
                        <img id="product__img2" src="${p.img2}">

                        <a id="product__view1" onclick="changeProductView(this)"><img src="${p.img1}"></a>
                        <a id="product__view2" onclick="changeProductView(this)"><img src="${p.img2}"></a>
                    </div>

                    <div class="product__info">
                        <h1>${p.name}</h1>
                        <div class="product__info--rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>Price: ${p.price}$</p>
                        <p>Author:</p>
                        <h2>${p.author}</h2>
                        <p>${p.category}</p>
                        <p>Quantity: </p>

                        <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
                        <button id="${p.productId}" onclick="Cart.addToCart(this)">Add to cart</button>

                        <p>Availability: ${p.stock}</p><br>
                        <h4>Description</h4>
                        <p>${p.descr1}</p><br>
                        <p>${p.descr2}</p>
                    </div>
                </div>
    `
}

function changeProductView(e) {
    if (e.id == "product__view1")
        document.getElementById("product__img1").style.opacity = 1;
    else
        document.getElementById("product__img1").style.opacity = 0;
}

function closeProduct() {
    document.querySelector(".product").style.animationName = "bottomUp"
    setTimeout(function () {
        document.querySelector(".product__page").style.display = "none"
    }, 365)
}

//best slider

let best_list = document.querySelector(".best__slider .best__slider__list");
let best_items = document.querySelectorAll(".best__slider .best__slider__list .best__slider__item");
let best_dots = document.querySelectorAll(".best__slider .best__slider__dots li");
let best_next = document.getElementById("best__slider__next");
let best_prev = document.getElementById("best__slider__prev");

let best_active = 0;
let best_lengthItems = best_items.length - 4;

best_next.onclick = function () {
    if (best_active + 1 <= best_lengthItems) {
        best_active++;
        best_ReloadSlider();
        best_AddSlider();
    }
}

best_prev.onclick = function () {
    if (best_active - 1 >= 0) {
        best_active--;
        best_ReloadSlider();
        best_RemoveSlider();
    }
}

function best_ReloadSlider() {
    let best_checkLeft = best_items[best_active].offsetLeft;
    best_list.style.left = -best_checkLeft + "px";
}

function best_AddSlider() {
    best_dots[best_active].classList.add("best__active");
}

function best_RemoveSlider() {
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

book_next.onclick = function () {
    if (book_active + 1 <= book_lengthItems) {
        book_active++;
        book_ReloadSlider();
        book_AddSlider();
    }
}

book_prev.onclick = function () {
    if (book_active - 1 >= 0) {
        book_active--;
        book_ReloadSlider();
        book_RemoveSlider();
    }
}

function book_ReloadSlider() {
    let book_checkLeft = book_items[book_active].offsetLeft;
    book_list.style.left = -book_checkLeft + "px";
}

function book_AddSlider() {
    book_dots[book_active].classList.add("book__active");
}

function book_RemoveSlider() {
    book_dots[book_active + 1].classList.remove("book__active");
}



























