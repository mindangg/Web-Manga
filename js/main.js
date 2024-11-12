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
        productId: "manga_0", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg", 
        img2: "../img/books/sakamoto days/sakamoto-days-volume-6-back.jpg", 
        name: "Sakamoto Days - Volume 06", 
        price: 9.59, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 6 features story and art by Yuto Suzuki.",
        descr2: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
    },

    {
        productId: "manga_1", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action", 
        img1: "../img/books/sakamoto days/sakamoto-days-volume-10-primary.jpg", 
        img2: "../img/books/sakamoto days/sakamoto-days-volume-10-back.jpg", 
        name: "Sakamoto Days - Volume 10", 
        price: 9.99, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 10 features story and art by Yuto Suzuki.",
        descr2: "As Sakamoto and his friends hunt for the database at the JCC, Shin winds up in a serious duel with a teacher who might have information on what they want. Meanwhile, Sakamoto deals with Amane, a boy with a connection to X. Thanks to X's schemes, the JCC faces an unprecedented crisis!",
    },

    {
        productId: "manga_2", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-1-primary.jpg", 
        img2: "../img/books/sakamoto days/sakamoto-days-volume-1-back.jpg", 
        name: "Sakamoto Days - Volume 01", 
        price: 9.59, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 1 features story and art by Yuto Suzuki.",
        descr2: "Taro Sakamoto was once a legendary hit man considered the greatest of all time. Bad guys feared him! Assassins revered him! But then one day he quit, got married, and had a baby. He’s now living the quiet life as the owner of a neighborhood store, but how long can Sakamoto enjoy his days of retirement before his past catches up to him?!",
    },

    {
        productId: "manga_3", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-5-primary.jpg", 
        img2: "../img/books/sakamoto days/sakamoto-days-volume-5-back.jpg", 
        name: "Sakamoto Days - Volume 05", 
        price: 9.59, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 5 features story and art by Yuto Suzuki.",
        descr2: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
    },

    {
        productId: "manga_4", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action",
        img1: "../img/books/sakamoto days/sakamoto-days-volume-15-primary.jpeg", 
        img2: "../img/books/sakamoto days/sakamoto-days-volume-15-back.jpeg", 
        name: "Sakamoto Days - Volume 15", 
        price: 9.99, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 15 features story and art by Yuto Suzuki.",
        descr2: "It’s the legendary fighter Hyo and sniper Heisuke versus the magnetic Kumanomi! Who will emerge victorious in the fierce battle between three assassins with different styles of killing? Meanwhile, at the abandoned warehouse where Slur is hiding out, Akao confronts the man who murdered her aunt!",
    },


    {
        productId: "manga_5", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Dark Fantasy", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-back.jpg", 
        name: "Jujutsu Kaisen - Volume 04", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami.",
        descr2: "While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off.",
    },

    {
        productId: "manga_6", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Dark Fantasy", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-manga-volume-22-primary.jpeg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-manga-volume-22-back.jpg", 
        name: "Jujutsu Kaisen - Volume 22", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 22 features story and art by Gege Akutami.",
        descr2: "A mysterious cursed spirit suddenly flies into Sakurajima Colony. It’s someone who became a curse after death and bears a grudge against Maki! The cursed spirit evolves with incredible speed from cursed womb to adult form and threatens to overcome Maki and Noritoshi. Just then, two other combatants join the battle...",
    },
    
    {
        productId: "manga_7", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Dark Fantasy", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-back.jpg", 
        name: "Jujutsu Kaisen - Volume 1", 
        price: 9.59, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami.",
        descr2: "In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoma Sukuna were lost and scattered about. Should any demon consume Sukuna’s body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural!",
    },

    {
        productId: "manga_8", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Dark Fantasy", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-back.jpg", 
        name: "Jujutsu Kaisen - Volume 14", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 14 features story and art by Gege Akutami.",
        descr2: "Sukuna, unleashed, is wrecking Shibuya, and Fushiguro has suffered a serious injury from a curse user’s surprise attack. Fushiguro comes up with a desperate plan to deal with both the rampaging Sukuna and the curse user, but the cost will be grave…",
    },

    {
        productId: "manga_9", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Dark Fantasy", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-primary.jpeg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-back.jpeg", 
        name: "Jujutsu Kaisen - Volume 23", 
        price: 9.59, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 23 features story and art by Gege Akutami.",
        descr2: "Sukuna reveals that he is the Disgraced One whom the Angel wants to kill. While Itadori grapples with that realization, Kenjaku sets in motion plans involving various nations, throwing the culling game into further confusion! To make matters worse, Kenjaku then shows up at the Tombs of the Star Corridor where Master Tengen exists in seclusion!",
    },

    {
        productId:"manga_10", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Family", 
        img1: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-3-back.jpg", 
        name: "Spy X Family - Volume 03", 
        price: 7.99, 
        stock: 100,
        descr1: "Spy x Family manga volume 3 features story and art by Tatsuya Endo.",
        descr2: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
    },

    {
        productId:"manga_11", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Family", 
        img1: "../img/books/spy x family/spy-x-family-volume-1-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-1-back.jpg", 
        name: "Spy X Family - Volume 01", 
        price: 7.99, 
        stock: 100,
        descr1: "Spy x Family manga volume 1 features story and art by Tatsuya Endo.",
        descr2: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
    },

    {
        productId:"manga_12", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Family", 
        img1: "../img/books/spy x family/spy-x-family-volume-2-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-2-back.jpg", 
        name: "Spy X Family - Volume 02", 
        price: 7.99, 
        stock: 100,
        descr1: "Spy x Family manga volume 2 features story and art by Tatsuya Endo.",
        descr2: "Twilight must infiltrate the prestigious Eden Academy to get close to his target Donovan Desmond, but does his daughter Anya even have the academic prowess to get in to the school? But perhaps the truly impossible mission is making sure Anya becomes a school scholar and befriends Donovan’s arrogant son, Damian!"
    },

    {
        productId:"manga_13", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Family", 
        img1: "../img/books/spy x family/spy-x-family-volume-4-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-4-back.jpg", 
        name: "Spy X Family - Volume 04", 
        price: 7.99, 
        stock: 100,
        descr1: "Spy x Family manga volume 4 features story and art by Tatsuya Endo.",
        descr2: "The Forgers look into adding a dog to their family, but this is no easy task—especially when Twilight has to simultaneously foil an assassination plot against a foreign minister! The perpetrators plan to use specially trained dogs for the attack, but Twilight gets some unexpected help to stop these terrorists."
    },

    {
        productId:"manga_14", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Family", 
        img1: "../img/books/spy x family/spy-x-family-volume-6-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-6-back.jpg", 
        name: "Spy X Family - Volume 06", 
        price: 7.99, 
        stock: 100,
        descr1: "Spy x Family manga volume 6 features story and art by Tatsuya Endo.",
        descr2: "Twilight and Nightfall enter an underground tennis tournament, hoping for an opportunity to obtain an intelligence document that threatens to bring the world to the brink of war! But will their mission be compromised by Nightfall’s secret crush on Twilight?!"
    },

    {
        productId:"manga_15", 
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
        productId:"manga_16", 
        series: "My Dress Up Darling", 
        author: "Fukuda Shinichi", 
        category: "Rom-Com", 
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-1-primary.jpg", 
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-1-back.jpg", 
        name: "My Dress Up Darling - Volume 01", 
        price: 9.99, 
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 1 features story and art by Shinichi Fukuda.",
        descr2: "Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner, finding solace in the home ec room at his high school."
    },

    {
        productId:"manga_17", 
        series: "My Dress Up Darling", 
        author: "Fukuda Shinichi", 
        category: "Rom-Com", 
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-3-primary.jpg", 
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-3-back.jpg", 
        name: "My Dress Up Darling - Volume 03", 
        price: 9.99, 
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 3 features story and art by Shinichi Fukuda.",
        descr2: "Wakana and Marin make it through their very first cosplay event, and not long after, Marin’s heart undergoes a change…?! But that’s not going to stop her cosplaying! To research their next project, the duo decide to watch the anime it’s based on…but on screening night, they wind up alone together…?! And with JuJu, another gorgeous cosplayer, dropping by Wakana’s house…it seems like a love triangle is abrew!"
    },

    {
        productId:"manga_18", 
        series: "My Dress Up Darling", 
        author: "Fukuda Shinichi", 
        category: "Rom-Com", 
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-6-primary.jpg", 
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-6-back.jpg", 
        name: "My Dress Up Darling - Volume 06", 
        price: 9.99, 
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 6 features story and art by Shinichi Fukuda.",
        descr2: "And that seems to be one of cosplay’s superpowers, as Wakana and Marin discover at an Ikebukuro event. There, they meet crossplayer Amane and hear their cosplay origin story, which gives Marin the push she needs to decide on her next costume! Unfortunately for Wakana, getting the new outfit ready is going to be anything but easy…"
    },

    {
        productId:"manga_19", 
        series: "My Dress Up Darling", 
        author: "Fukuda Shinichi", 
        category: "Rom-Com", 
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-9-primary.jpg", 
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-9-back.jpg", 
        name: "My Dress Up Darling - Volume 09", 
        price: 9.99, 
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 9 features story and art by Shinichi Fukuda.",
        descr2: "To get the swanky DSLR camera of her dreams, Marin picks up more part-time work! And once she’s scraped up the cash to buy her shiny new gadget, she attends a cosplay event...this time, as a photographer!"
    },

    {
        productId:"manga_20", 
        series: "Black Clover", 
        author: "Yuki Tabata", 
        category: "Fantasy", 
        img1: "../img/books/black clover/black-clover-volume-23-primary.jpg", 
        img2: "../img/books/black clover/black-clover-volume-23-back.jpg", 
        name: "Black Clover - Volume 23", 
        price: 9.99, 
        stock: 150,
        descr1: "Black Clover manga volume 23 features story and art by Yuki Tabata.",
        descr2: "With the devil finally defeated, the Magic Knights are working hard to rebuild the damage done to the Clover Kingdom. Unfortunately for Asta, all the blame is being pinned on him and he’s set to be executed. He’s in the most trouble he’s ever been in, but you never count out a Black Bull!"
    },

    {
        productId:"manga_21", 
        series: "Black Clover", 
        author: "Yuki Tabata", 
        category: "Fantasy", 
        img1: "../img/books/black clover/black-clover-volume-7-primary.jpg", 
        img2: "../img/books/black clover/black-clover-volume-7-back.jpg", 
        name: "Black Clover - Volume 07", 
        price: 9.99, 
        stock: 150,
        descr1: "Black Clover manga volume 7 features story and art by Yuki Tabata.",
        descr2: "After the battle with the Eye of the Midnight Sun, the Wizard King suspects that there might be a traitor among the Magic Knights. But who is it, and how can Asta help expose the crooked knight?"
    },

    {
        productId:"manga_22", 
        series: "Black Clover", 
        author: "Yuki Tabata", 
        category: "Fantasy", 
        img1: "../img/books/black clover/black-clover-volume-24-primary.jpg", 
        img2: "../img/books/black clover/black-clover-volume-24-back.jpg", 
        name: "Black Clover - Volume 24", 
        price: 9.99, 
        stock: 150,
        descr1: "Black Clover manga volume 24 features story and art by Yuki Tabata.",
        descr2: "After six months of training in the Heart Kingdom, Asta and his fellow magic knights are ready to show off their improvements. Will Asta’s muscles be enough when the devil-powered Spade Kingdom begins their invasion, or will he need some new tricks?"
    },

    {
        productId:"manga_23", 
        series: "Black Clover", 
        author: "Yuki Tabata", 
        category: "Fantasy", 
        img1: "../img/books/black clover/black-clover-volume-25-primary.jpg", 
        img2: "../img/books/black clover/black-clover-volume-7-back.jpg", 
        name: "Black Clover - Volume 25", 
        price: 7.99, 
        stock: 150,
        descr1: "Black Clover manga volume 25 features story and art by Yuki Tabata.",
        descr2: "The Spade Kingdom’s Dark Triad has launched an all-out attack on the Heart Kingdom and the Black Bulls. While Asta and company have gotten stronger, can they stand up to these new devil-possessed mages? This might be the perfect time for Yami to save the day!"
    },

    {
        productId:"manga_24", 
        series: "Black Clover", 
        author: "Yuki Tabata", 
        category: "Fantasy", 
        img1: "../img/books/black clover/black-clover-volume-32-primary.jpg", 
        img2: "../img/books/black clover/black-clover-volume-32-back.jpg", 
        name: "Black Clover - Volume 32", 
        price: 9.99, 
        stock: 150,
        descr1: "Black Clover manga volume 32 features story and art by Yuki Tabata.",
        descr2: "To save Yami, the Black Bulls storm their way into enemy territory. And with a powered-up Asta joining the fight, the battle may be going their way. But when the most powerful devil in the underworld finally makes his appeareance, the entire world may be on the verge of destruction."
    },

    {
        productId:"manga_5", 
        series: "Tokyo Ghoul", 
        author: "Sui Ishida", 
        category: "Seinen", 
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-manga-volume-14-primary.jpg", 
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-manga-volume-14-back.jpg", 
        name: "Tokyo Ghoul - Volume 14", 
        price: 7.99, 
        stock: 150,
        descr1: "Tokyo Ghoul Volume 14 features story and art by Sui Ishida.",
        descr2: "As Kaneki and the fiercest fighter in the CCG, Arima, finally face off, several investigators launch an assault on Yoshimura, unaware of the danger that awaits them. The massive battle takes a turn for the worse when the One-Eyed Owl appears, leaving the fate of Kaneki and the CCG hanging in the balance."
    },

    {
        productId:"manga_6", 
        series: "One Punch Man", 
        author: "Yusuke Murata", 
        category: "Shounen", 
        img1: "../img/books/one punch man/one-punch-man-volume-26-primary.jpg", 
        img2: "../img/books/one punch man/one-punch-man-volume-26-back.jpg", 
        name: "One Punch Man - Volume 26", 
        price: 7.99, 
        stock: 150,
        descr1: "One-Punch Man manga volume 26 features story by ONE and art by Yusuke Murata.",
        descr2: "As the fight against the Monster Association big shots heats up, Class-S heroes find themselves locked in a desperate struggle, but Tornado is closing in on Gyoro-Gyoro’s main body!"
    },

    {
        productId:"manga_7", 
        series: "Mashle: Magic And Muscles", 
        author: "Komoto Hajime", 
        category: "Comedy", 
        img1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-primary.jpeg", 
        img2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-back.jpeg", 
        name: "Mashle: Magic And Muscles - Volume 17", 
        price: 9.59, 
        stock: 150,
        descr1: "Mashle: Magic and Muscles manga volume 17 features story and art by Hajime Komoto.",
        descr2: "Innocent Zero’s youngest child, Domina, steps in to put a stop to his father’s pursuit of Mash. Using the reprieve afforded them, Mash’s friends race against the clock in hopes of getting him to Meliadoul."
    },
]







bestSellingProduct.forEach(p => {
    document.querySelector(".best__slider__list").innerHTML += `
                <div class="best__slider__item">
                    <a id="${p.productId}" onclick="showBestInfo(this)">
                        <img src="${p.img1}" alt="">
                        <img src="${p.img2}" alt="">
                    </a>
                    <h4>${p.name}</h4>
                    <p>$${p.price}</p>
                    <button>+ Add to cart</button>
                </div>
    `
})

//best slider popup

function showBestInfo(e){
    document.querySelector(".product__page").style.display = "inline";
    document.querySelector(".product").style.animationName = "topDown";
    const productInfo = document.querySelector(".product__page");
    const p = bestSellingProduct.find(product => product.productId === e.id);

    if(!p){
        console.error("Product not found");
        return;
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
                        <p>Author:</p>
                        <h2>${p.author}</h2>
                        <p>${p.category}</p>
                        <p>Quantity: </p>

                        <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
                        <button id="product__add">Add to cart</button>

                        <p>Availability: ${p.stock}</p><br>
                        <h4>Description</h4>
                        <p>${p.descr1}</p><br>
                        <p>${p.descr2}</p>
                    </div>
                </div>
    `
}

function changeProductView(e){
    if(e.id == "product__view1")
        document.getElementById("product__img1").style.opacity = 1;
    else    
        document.getElementById("product__img1").style.opacity = 0;
}

function closeProduct(){
    document.querySelector(".product").style.animationName = "bottomUp";
    setTimeout(function(){
        document.querySelector(".product__page").style.display = "none";
      }, 365);
}

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

var bookProduct = [
    {
        productId:"manga_8", 
        series: "One Punch Man", 
        author: "Yusuke Murata", 
        category: "Shounen", 
        img1: "../img/books/one punch man/one-punch-man-volume-18-primary.jpg", 
        img2: "../img/books/one punch man/one-punch-man-volume-18-back.jpg", 
        name: "One Punch Man - Volume 18", 
        price: 7.99, 
        stock: 150,
        descr1: "One-Punch Man manga volume 18 features story by ONE and art by Yusuke Murata.",
        descr2: "Garo has just left the Monster Association’s hideout when he crosses paths with Saitama, who’s in quite a pinch, but Saitama still doesn't know Garo is the Hero Hunter. Later, King the Ripper can no longer hold back his murderous urges and confronts Garo himself!"
    },



    {
        productId:"manga_10", 
        series: "Tokyo Ghoul", 
        author: "Sui Ishida", 
        category: "Seinen", 
        img1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-2-primary.jpg", 
        img2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-2-back.jpg", 
        name: "Tokyo Ghoul - Volume 02", 
        price: 7.99, 
        stock: 150,
        descr1: "Tokyo Ghoul Volume 02 features story and art by Sui Ishida.",
        descr2: "Unable to discard his humanity but equally unable to suppress his Ghoul hunger, Ken finds salvation in the kindness of friendly Ghouls who teach him how to pass as human and eat flesh humanely."
    },

    {
        productId:"manga_11", 
        series: "Mashle: Magic And Muscles", 
        author: "Komoto Hajime", 
        category: "Comedy", 
        img1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-16-primary.jpeg", 
        img2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-16-back.jpeg", 
        name: "Mashle: Magic And Muscles - Volume 16", 
        price: 9.59, 
        stock: 150,
        descr1: "Mashle: Magic and Muscles manga volume 16 features story and art by Hajime Komoto.",
        descr2: "Mash shows off the hard-won results of his strenuous training against his greatest and final obstacle before confronting Innocent Zero—Doom! Now that he knows the extent of his body’s capabilities and how to control them, Mash’s strength has grown to an unimaginable level!"
    },





]

bookProduct.forEach(p => {
    document.querySelector(".book__slider__list").innerHTML += `
                <div class="book__slider__item">
                    <a id="${p.productId}" onclick="showBookInfo(this)">
                        <img src="${p.img1}" alt="">
                        <img src="${p.img2}" alt="">
                    </a>
                    <h4>${p.name}</h4>
                    <p>$${p.price}</p>
                    <button>+ Add to cart</button>
                </div>
    `
})

function showBookInfo(e) {
    document.querySelector(".product__page").style.display = "inline";
    document.querySelector(".product").style.animationName = "topDown";
    const productInfo = document.querySelector(".product__page");
    const p = bookProduct.find(product => product.productId === e.id);

    if(!p){
        console.error("Product not found");
        return;
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
                        <p>Author:</p>
                        <h2>${p.author}</h2>
                        <p>${p.category}</p>
                        <p>Quantity: </p>

                        <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
                        <button id="product__add">Add to cart</button>

                        <p>Availability: ${p.stock}</p><br>
                        <h4>Description</h4>
                        <p>${p.descr1}</p><br>
                        <p>${p.descr2}</p>
                    </div>
                </div>
    `
}

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



























