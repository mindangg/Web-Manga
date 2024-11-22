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

let refreshSlider = setInterval(() => {
    next.click()
}, 5000);

function ReloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .slider__dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click()
    }, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        ReloadSlider();
    })
})

// var productTable = JSON.parse(localStorage.getItem('productTable')) || [
//     {
//         productId: "manga_0",
//         series: "Sakamoto Days",
//         author: "Suzuki Yuto",
//         category: "Action",
//         cover1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg",
//         cover2: "../img/books/sakamoto days/sakamoto-days-volume-6-back.jpg",
//         name: "Sakamoto Days - Volume 06",
//         price: 9.59,
//         stock: 120,
//         description: " Sakamoto Days manga volume 6 features story and art by Yuto Suzuki." +
//             " Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
//     },
//
//     {
//         productId: "manga_1",
//         series: "Sakamoto Days",
//         author: "Suzuki Yuto",
//         category: "Action",
//         cover1: "../img/books/sakamoto days/sakamoto-days-volume-10-primary.jpg",
//         cover2: "../img/books/sakamoto days/sakamoto-days-volume-10-back.jpg",
//         name: "Sakamoto Days - Volume 10",
//         price: 9.99,
//         stock: 120,
//         description: "Sakamoto Days manga volume 10 features story and art by Yuto Suzuki." +
//             " As Sakamoto and his friends hunt for the database at the JCC, Shin winds up in a serious duel with a teacher who might have information on what they want. Meanwhile, Sakamoto deals with Amane, a boy with a connection to X. Thanks to X's schemes, the JCC faces an unprecedented crisis!",
//     },
//
//     {
//         productId: "manga_2",
//         series: "Sakamoto Days",
//         author: "Suzuki Yuto",
//         category: "Action",
//         cover1: "../img/books/sakamoto days/sakamoto-days-volume-1-primary.jpg",
//         cover2: "../img/books/sakamoto days/sakamoto-days-volume-1-back.jpg",
//         name: "Sakamoto Days - Volume 01",
//         price: 9.59,
//         stock: 120,
//         description: "Sakamoto Days manga volume 1 features story and art by Yuto Suzuki." +
//             " Taro Sakamoto was once a legendary hit man considered the greatest of all time. Bad guys feared him! Assassins revered him! But then one day he quit, got married, and had a baby. He’s now living the quiet life as the owner of a neighborhood store, but how long can Sakamoto enjoy his days of retirement before his past catches up to him?!",
//     },
//
//     {
//         productId: "manga_3",
//         series: "Sakamoto Days",
//         author: "Suzuki Yuto",
//         category: "Action",
//         cover1: "../img/books/sakamoto days/sakamoto-days-volume-5-primary.jpg",
//         cover2: "../img/books/sakamoto days/sakamoto-days-volume-5-back.jpg",
//         name: "Sakamoto Days - Volume 05",
//         price: 9.59,
//         stock: 120,
//         description: "Sakamoto Days manga volume 5 features story and art by Yuto Suzuki." +
//             " Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
//     },
//
//     {
//         productId: "manga_4",
//         series: "Sakamoto Days",
//         author: "Suzuki Yuto",
//         category: "Action",
//         cover1: "../img/books/sakamoto days/sakamoto-days-volume-15-primary.jpeg",
//         cover2: "../img/books/sakamoto days/sakamoto-days-volume-15-back.jpeg",
//         name: "Sakamoto Days - Volume 15",
//         price: 9.99,
//         stock: 120,
//         description: "Sakamoto Days manga volume 15 features story and art by Yuto Suzuki." +
//             " It’s the legendary fighter Hyo and sniper Heisuke versus the magnetic Kumanomi! Who will emerge victorious in the fierce battle between three assassins with different styles of killing? Meanwhile, at the abandoned warehouse where Slur is hiding out, Akao confronts the man who murdered her aunt!",
//     },
//
//
//     {
//         productId: "manga_5",
//         series: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//         category: "Dark Fantasy",
//         cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg",
//         cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-back.jpg",
//         name: "Jujutsu Kaisen - Volume 04",
//         price: 7.99,
//         stock: 90,
//         description: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami." +
//             " While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off.",
//     },
//
//     {
//         productId: "manga_6",
//         series: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//         category: "Dark Fantasy",
//         cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-manga-volume-22-primary.jpeg",
//         cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-manga-volume-22-back.jpg",
//         name: "Jujutsu Kaisen - Volume 22",
//         price: 7.99,
//         stock: 90,
//         description: "Jujutsu Kaisen manga volume 22 features story and art by Gege Akutami." +
//             " A mysterious cursed spirit suddenly flies into Sakurajima Colony. It’s someone who became a curse after death and bears a grudge against Maki! The cursed spirit evolves with incredible speed from cursed womb to adult form and threatens to overcome Maki and Noritoshi. Just then, two other combatants join the battle...",
//     },
//
//     {
//         productId: "manga_7",
//         series: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//         category: "Dark Fantasy",
//         cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-primary.jpg",
//         cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-back.jpg",
//         name: "Jujutsu Kaisen - Volume 1",
//         price: 9.59,
//         stock: 90,
//         description: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami." +
//             " In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoma Sukuna were lost and scattered about. Should any demon consume Sukuna’s body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural!",
//     },
//
//     {
//         productId: "manga_8",
//         series: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//         category: "Dark Fantasy",
//         cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg",
//         cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-back.jpg",
//         name: "Jujutsu Kaisen - Volume 14",
//         price: 7.99,
//         stock: 90,
//         description: "Jujutsu Kaisen manga volume 14 features story and art by Gege Akutami." +
//             " Sukuna, unleashed, is wrecking Shibuya, and Fushiguro has suffered a serious injury from a curse user’s surprise attack. Fushiguro comes up with a desperate plan to deal with both the rampaging Sukuna and the curse user, but the cost will be grave…",
//     },
//
//     {
//         productId: "manga_9",
//         series: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//         category: "Dark Fantasy",
//         cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-primary.jpeg",
//         cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-back.jpeg",
//         name: "Jujutsu Kaisen - Volume 23",
//         price: 9.59,
//         stock: 90,
//         description: "Jujutsu Kaisen manga volume 23 features story and art by Gege Akutami." +
//             " Sukuna reveals that he is the Disgraced One whom the Angel wants to kill. While Itadori grapples with that realization, Kenjaku sets in motion plans involving various nations, throwing the culling game into further confusion! To make matters worse, Kenjaku then shows up at the Tombs of the Star Corridor where Master Tengen exists in seclusion!",
//     },
//
//     {
//         productId: "manga_10",
//         series: "Spy X Family",
//         author: "Tatsuya Endo",
//         category: "Family",
//         cover1: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg",
//         cover2: "../img/books/spy x family/spy-x-family-volume-3-back.jpg",
//         name: "Spy X Family - Volume 03",
//         price: 7.99,
//         stock: 100,
//         description: "Spy x Family manga volume 3 features story and art by Tatsuya Endo." +
//             " Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
//     },
//
//     {
//         productId: "manga_11",
//         series: "Spy X Family",
//         author: "Tatsuya Endo",
//         category: "Family",
//         cover1: "../img/books/spy x family/spy-x-family-volume-1-primary.jpg",
//         cover2: "../img/books/spy x family/spy-x-family-volume-1-back.jpg",
//         name: "Spy X Family - Volume 01",
//         price: 7.99,
//         stock: 100,
//         description: "Spy x Family manga volume 1 features story and art by Tatsuya Endo." +
//             " Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
//     },
//
//     {
//         productId: "manga_12",
//         series: "Spy X Family",
//         author: "Tatsuya Endo",
//         category: "Family",
//         cover1: "../img/books/spy x family/spy-x-family-volume-2-primary.jpg",
//         cover2: "../img/books/spy x family/spy-x-family-volume-2-back.jpg",
//         name: "Spy X Family - Volume 02",
//         price: 7.99,
//         stock: 100,
//         description: "Spy x Family manga volume 2 features story and art by Tatsuya Endo." +
//             " Twilight must infiltrate the prestigious Eden Academy to get close to his target Donovan Desmond, but does his daughter Anya even have the academic prowess to get in to the school? But perhaps the truly impossible mission is making sure Anya becomes a school scholar and befriends Donovan’s arrogant son, Damian!"
//     },
//
//     {
//         productId: "manga_13",
//         series: "Spy X Family",
//         author: "Tatsuya Endo",
//         category: "Family",
//         cover1: "../img/books/spy x family/spy-x-family-volume-4-primary.jpg",
//         cover2: "../img/books/spy x family/spy-x-family-volume-4-back.jpg",
//         name: "Spy X Family - Volume 04",
//         price: 7.99,
//         stock: 100,
//         description: "Spy x Family manga volume 4 features story and art by Tatsuya Endo." +
//             " The Forgers look into adding a dog to their family, but this is no easy task—especially when Twilight has to simultaneously foil an assassination plot against a foreign minister! The perpetrators plan to use specially trained dogs for the attack, but Twilight gets some unexpected help to stop these terrorists."
//     },
//
//     {
//         productId: "manga_14",
//         series: "Spy X Family",
//         author: "Tatsuya Endo",
//         category: "Family",
//         cover1: "../img/books/spy x family/spy-x-family-volume-6-primary.jpg",
//         cover2: "../img/books/spy x family/spy-x-family-volume-6-back.jpg",
//         name: "Spy X Family - Volume 06",
//         price: 7.99,
//         stock: 100,
//         description: "Spy x Family manga volume 6 features story and art by Tatsuya Endo." +
//             " Twilight and Nightfall enter an underground tennis tournament, hoping for an opportunity to obtain an intelligence document that threatens to bring the world to the brink of war! But will their mission be compromised by Nightfall’s secret crush on Twilight?!"
//     },
//
//     {
//         productId: "manga_15",
//         series: "My Dress Up Darling",
//         author: "Fukuda Shinichi",
//         category: "Rom-Com",
//         cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-7-primary.jpg",
//         cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-7-back.jpg",
//         name: "My Dress Up Darling - Volume 07",
//         price: 9.99,
//         stock: 150,
//         description: "My Dress-Up Darling manga volume 7 features story and art by Shinichi Fukuda." +
//             " Marin's bestie and Wakana's classmate Nowa might seem a little flaky, but the girl has some serious instinct when love is in the air! When she tosses out a bombshell at karaoke by flatly asking Marin and Wakana if they're an item, it sends the two running!"
//     },
//
//     {
//         productId: "manga_16",
//         series: "My Dress Up Darling",
//         author: "Fukuda Shinichi",
//         category: "Rom-Com",
//         cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-1-primary.jpg",
//         cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-1-back.jpg",
//         name: "My Dress Up Darling - Volume 01",
//         price: 9.99,
//         stock: 150,
//         description: "My Dress-Up Darling manga volume 1 features story and art by Shinichi Fukuda." +
//             " Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner, finding solace in the home ec room at his high school."
//     },
//
//     {
//         productId: "manga_17",
//         series: "My Dress Up Darling",
//         author: "Fukuda Shinichi",
//         category: "Rom-Com",
//         cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-3-primary.jpg",
//         cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-3-back.jpg",
//         name: "My Dress Up Darling - Volume 03",
//         price: 9.99,
//         stock: 150,
//         description: "My Dress-Up Darling manga volume 3 features story and art by Shinichi Fukuda." +
//             " Wakana and Marin make it through their very first cosplay event, and not long after, Marin’s heart undergoes a change…?! But that’s not going to stop her cosplaying! To research their next project, the duo decide to watch the anime it’s based on…but on screening night, they wind up alone together…?! And with JuJu, another gorgeous cosplayer, dropping by Wakana’s house…it seems like a love triangle is abrew!"
//     },
//
//     {
//         productId: "manga_18",
//         series: "My Dress Up Darling",
//         author: "Fukuda Shinichi",
//         category: "Rom-Com",
//         cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-6-primary.jpg",
//         cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-6-back.jpg",
//         name: "My Dress Up Darling - Volume 06",
//         price: 9.99,
//         stock: 150,
//         description: "My Dress-Up Darling manga volume 6 features story and art by Shinichi Fukuda." +
//             " And that seems to be one of cosplay’s superpowers, as Wakana and Marin discover at an Ikebukuro event. There, they meet crossplayer Amane and hear their cosplay origin story, which gives Marin the push she needs to decide on her next costume! Unfortunately for Wakana, getting the new outfit ready is going to be anything but easy…"
//     },
//
//     {
//         productId: "manga_19",
//         series: "My Dress Up Darling",
//         author: "Fukuda Shinichi",
//         category: "Rom-Com",
//         cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-9-primary.jpg",
//         cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-9-back.jpg",
//         name: "My Dress Up Darling - Volume 09",
//         price: 9.99,
//         stock: 150,
//         description: "My Dress-Up Darling manga volume 9 features story and art by Shinichi Fukuda." +
//             " To get the swanky DSLR camera of her dreams, Marin picks up more part-time work! And once she’s scraped up the cash to buy her shiny new gadget, she attends a cosplay event...this time, as a photographer!"
//     },
//
//     {
//         productId: "manga_20",
//         series: "Black Clover",
//         author: "Yuki Tabata",
//         category: "Fantasy",
//         cover1: "../img/books/black clover/black-clover-volume-23-primary.jpg",
//         cover2: "../img/books/black clover/black-clover-volume-23-back.jpg",
//         name: "Black Clover - Volume 23",
//         price: 9.99,
//         stock: 150,
//         description: "Black Clover manga volume 23 features story and art by Yuki Tabata." +
//             " With the devil finally defeated, the Magic Knights are working hard to rebuild the damage done to the Clover Kingdom. Unfortunately for Asta, all the blame is being pinned on him and he’s set to be executed. He’s in the most trouble he’s ever been in, but you never count out a Black Bull!"
//     },
//
//     {
//         productId: "manga_21",
//         series: "Black Clover",
//         author: "Yuki Tabata",
//         category: "Fantasy",
//         cover1: "../img/books/black clover/black-clover-volume-7-primary.jpg",
//         cover2: "../img/books/black clover/black-clover-volume-7-back.jpg",
//         name: "Black Clover - Volume 07",
//         price: 9.99,
//         stock: 150,
//         description: "Black Clover manga volume 7 features story and art by Yuki Tabata." +
//             " After the battle with the Eye of the Midnight Sun, the Wizard King suspects that there might be a traitor among the Magic Knights. But who is it, and how can Asta help expose the crooked knight?"
//     },
//
//     {
//         productId: "manga_22",
//         series: "Black Clover",
//         author: "Yuki Tabata",
//         category: "Fantasy",
//         cover1: "../img/books/black clover/black-clover-volume-24-primary.jpg",
//         cover2: "../img/books/black clover/black-clover-volume-24-back.jpg",
//         name: "Black Clover - Volume 24",
//         price: 9.99,
//         stock: 150,
//         description: "Black Clover manga volume 24 features story and art by Yuki Tabata." +
//             " After six months of training in the Heart Kingdom, Asta and his fellow magic knights are ready to show off their improvements. Will Asta’s muscles be enough when the devil-powered Spade Kingdom begins their invasion, or will he need some new tricks?"
//     },
//
//     {
//         productId: "manga_23",
//         series: "Black Clover",
//         author: "Yuki Tabata",
//         category: "Fantasy",
//         cover1: "../img/books/black clover/black-clover-volume-25-primary.jpg",
//         cover2: "../img/books/black clover/black-clover-volume-7-back.jpg",
//         name: "Black Clover - Volume 25",
//         price: 7.99,
//         stock: 150,
//         description: "Black Clover manga volume 25 features story and art by Yuki Tabata." +
//             " The Spade Kingdom’s Dark Triad has launched an all-out attack on the Heart Kingdom and the Black Bulls. While Asta and company have gotten stronger, can they stand up to these new devil-possessed mages? This might be the perfect time for Yami to save the day!"
//     },
//
//     {
//         productId: "manga_24",
//         series: "Black Clover",
//         author: "Yuki Tabata",
//         category: "Fantasy",
//         cover1: "../img/books/black clover/black-clover-volume-32-primary.jpg",
//         cover2: "../img/books/black clover/black-clover-volume-32-back.jpg",
//         name: "Black Clover - Volume 32",
//         price: 9.99,
//         stock: 150,
//         description: "Black Clover manga volume 32 features story and art by Yuki Tabata." +
//             " To save Yami, the Black Bulls storm their way into enemy territory. And with a powered-up Asta joining the fight, the battle may be going their way. But when the most powerful devil in the underworld finally makes his appeareance, the entire world may be on the verge of destruction."
//     },
//
//     {
//         productId: "manga_25",
//         series: "Tokyo Ghoul",
//         author: "Sui Ishida",
//         category: "Seinen",
//         cover1: "../img/books/tokyo ghoul/tokyo-ghoul-manga-volume-14-primary.jpg",
//         cover2: "../img/books/tokyo ghoul/tokyo-ghoul-manga-volume-14-back.jpg",
//         name: "Tokyo Ghoul - Volume 14",
//         price: 7.99,
//         stock: 150,
//         description: "Tokyo Ghoul Volume 14 features story and art by Sui Ishida." +
//             " As Kaneki and the fiercest fighter in the CCG, Arima, finally face off, several investigators launch an assault on Yoshimura, unaware of the danger that awaits them. The massive battle takes a turn for the worse when the One-Eyed Owl appears, leaving the fate of Kaneki and the CCG hanging in the balance."
//     },
//
//     {
//         productId: "manga_26",
//         series: "Tokyo Ghoul",
//         author: "Sui Ishida",
//         category: "Seinen",
//         cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-2-primary.jpg",
//         cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-2-back.jpg",
//         name: "Tokyo Ghoul - Volume 02",
//         price: 7.99,
//         stock: 150,
//         description: "Tokyo Ghoul Volume 02 features story and art by Sui Ishida." +
//             " Unable to discard his humanity but equally unable to suppress his Ghoul hunger, Ken finds salvation in the kindness of friendly Ghouls who teach him how to pass as human and eat flesh humanely."
//     },
//
//     {
//         productId: "manga_27",
//         series: "Tokyo Ghoul",
//         author: "Sui Ishida",
//         category: "Seinen",
//         cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-5-primary.jpg",
//         cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-5-back.jpg",
//         name: "Tokyo Ghoul - Volume 05",
//         price: 7.99,
//         stock: 150,
//         description: "Tokyo Ghoul Volume 05 features story and art by Sui Ishida." +
//             " Kaneki, Nishio, and Touka struggle to work together to rescue their human friend Kimi while Ghoul Investigator deaths skyrocket in Wards 9 through 12. When reinforcements are called in on both sides, the stakes are suddenly higher than ever in volume 5 of Tokyo Ghoul!"
//     },
//
//     {
//         productId: "manga_28",
//         series: "Tokyo Ghoul",
//         author: "Sui Ishida",
//         category: "Seinen",
//         cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-9-primary.jpg",
//         cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-9-back.jpg",
//         name: "Tokyo Ghoul - Volume 09",
//         price: 10.39,
//         stock: 150,
//         description: "Tokyo Ghoul Volume 09 features story and art by Sui Ishida." +
//             " Ghouls live among us, the same as normal people in every way—except their craving for human flesh. Ken Kaneki is an ordinary college student until a violent encounter turns him into the first half-human half-ghoul hybrid. Trapped between two worlds, he must survive Ghoul turf wars, learn more about Ghoul society and master his new powers."
//     },
//
//     {
//         productId: "manga_29",
//         series: "Tokyo Ghoul",
//         author: "Sui Ishida",
//         category: "Seinen",
//         cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-11-primary.jpg",
//         cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-11-back.jpg",
//         name: "Tokyo Ghoul - Volume 11",
//         price: 10.39,
//         stock: 150,
//         description: "Tokyo Ghoul Volume 11 features story and art by Sui Ishida." +
//             " Amid clashes between Ghouls and the Commission of Counter Ghoul investigators at Doctor Kano’s underground facility, Kaneki finds himself locked in battle with Special Class Ghoul investigator Yukinori Shinohara. When the battle subsides, the CCG discovers shocking evidence that leads them closer to discovering the truth behind Kano’s sinister plans."
//     },
//
//     {
//         productId: "manga_30",
//         series: "One Punch Man",
//         author: "Yusuke Murata",
//         category: "Shounen",
//         cover1: "../img/books/one punch man/one-punch-man-volume-26-primary.jpg",
//         cover2: "../img/books/one punch man/one-punch-man-volume-26-back.jpg",
//         name: "One Punch Man - Volume 26",
//         price: 7.99,
//         stock: 150,
//         description: "One-Punch Man manga volume 26 features story by ONE and art by Yusuke Murata." +
//             " As the fight against the Monster Association big shots heats up, Class-S heroes find themselves locked in a desperate struggle, but Tornado is closing in on Gyoro-Gyoro’s main body!"
//     },
//
//     {
//         productId: "manga_31",
//         series: "One Punch Man",
//         author: "Yusuke Murata",
//         category: "Shounen",
//         cover1: "../img/books/one punch man/one-punch-man-volume-18-primary.jpg",
//         cover2: "../img/books/one punch man/one-punch-man-volume-18-back.jpg",
//         name: "One Punch Man - Volume 18",
//         price: 7.99,
//         stock: 150,
//         description: "One-Punch Man manga volume 18 features story by ONE and art by Yusuke Murata." +
//             " Garo has just left the Monster Association’s hideout when he crosses paths with Saitama, who’s in quite a pinch, but Saitama still doesn't know Garo is the Hero Hunter. Later, King the Ripper can no longer hold back his murderous urges and confronts Garo himself!"
//     },
//
//     {
//         productId: "manga_32",
//         series: "One Punch Man",
//         author: "Yusuke Murata",
//         category: "Shounen",
//         cover1: "../img/books/one punch man/one-punch-man-volume-9-primary.jpg",
//         cover2: "../img/books/one punch man/one-punch-man-volume-9-back.jpg",
//         name: "One Punch Man - Volume 09",
//         price: 7.99,
//         stock: 150,
//         description: "One-Punch Man manga volume 9 features story by ONE and art by Yusuke Murata." +
//             " Garo, a man who admires monsters, attacks the Hero Association! But after pulverizing the heroes there, he just leaves. What the heck does this guy want?! Meanwhile, Class-B, Rank-1 Miss Blizzard visits Saitama at his apartment. Since he’s just a low-ranking hero, she thinks she can make him one of her subordinates, but as always, Saitama has other plans!"
//     },
//
//     {
//         productId: "manga_33",
//         series: "One Punch Man",
//         author: "Yusuke Murata",
//         category: "Shounen",
//         cover1: "../img/books/one punch man/one-punch-man-volume-27-primary.jpg",
//         cover2: "../img/books/one punch man/one-punch-man-volume-27-back.jpg",
//         name: "One Punch Man - Volume 27",
//         price: 7.99,
//         stock: 150,
//         description: "One-Punch Man manga volume 27 features story by ONE and art by Yusuke Murata." +
//             " Psychos intends to fuse with Orochi, the Monster King, which would give them immense power against Tornado. Superalloy confronts Garo and experiences fear of his opponent’s strength… Meanwhile, Saitama gets caught up in a cave-in in the underground labyrinth!"
//     },
//
//     {
//         productId: "manga_34",
//         series: "One Punch Man",
//         author: "Yusuke Murata",
//         category: "Shounen",
//         cover1: "../img/books/one punch man/one-punch-man-volume-28-primary.jpg",
//         cover2: "../img/books/one punch man/one-punch-man-volume-28-back.jpg",
//         name: "One Punch Man - Volume 28",
//         price: 7.99,
//         stock: 150,
//         description: "One-Punch Man manga volume 28 features story by ONE and art by Yusuke Murata." +
//             " Psychos and Tornado’s psychic battle rages on! With Genos’s help, Tornado succeeds in rescuing the scattered heroes from their fight against the monsters, allowing her to unleash a devastating attack that warps the city… And although the outlook appears grim, a group of S-class heroes finds the inspiration to turn the tide of battle!"
//     },
//
//     {
//         productId: "manga_35",
//         series: "Mashle: Magic And Muscles",
//         author: "Komoto Hajime",
//         category: "Comedy",
//         cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-primary.jpeg",
//         cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-back.jpeg",
//         name: "Mashle: Magic And Muscles - Volume 17",
//         price: 9.59,
//         stock: 150,
//         description: "Mashle: Magic and Muscles manga volume 17 features story and art by Hajime Komoto." +
//             " Innocent Zero’s youngest child, Domina, steps in to put a stop to his father’s pursuit of Mash. Using the reprieve afforded them, Mash’s friends race against the clock in hopes of getting him to Meliadoul."
//     },
//
//     {
//         productId: "manga_36",
//         series: "Mashle: Magic And Muscles",
//         author: "Komoto Hajime",
//         category: "Comedy",
//         cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-16-primary.jpeg",
//         cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-16-back.jpeg",
//         name: "Mashle: Magic And Muscles - Volume 16",
//         price: 9.59,
//         stock: 150,
//         description: "Mashle: Magic and Muscles manga volume 16 features story and art by Hajime Komoto." +
//             " Mash shows off the hard-won results of his strenuous training against his greatest and final obstacle before confronting Innocent Zero—Doom! Now that he knows the extent of his body’s capabilities and how to control them, Mash’s strength has grown to an unimaginable level!"
//     },
//
//     {
//         productId: "manga_37",
//         series: "Mashle: Magic And Muscles",
//         author: "Komoto Hajime",
//         category: "Comedy",
//         cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-3-primary.jpeg",
//         cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-3-back.jpeg",
//         name: "Mashle: Magic And Muscles - Volume 03",
//         price: 9.59,
//         stock: 150,
//         description: "Mashle: Magic and Muscles manga volume 3 features story and art by Hajime Komoto." +
//             " Lang’s vicious hunt for coins is in full swing! To stop them from monopolizing the chance to earn a Divine Visionary position, Mash teams up with his Adler compatriots. Afterwards, the Sixth and Seventh Fangs of the Magia Lupus swoop in to attack Mash while he’s cleaning the owl huts."
//     },
//
//     {
//         productId: "manga_38",
//         series: "Mashle: Magic And Muscles",
//         author: "Komoto Hajime",
//         category: "Comedy",
//         cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-15-primary.jpeg",
//         cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-15-back.jpeg",
//         name: "Mashle: Magic And Muscles - Volume 15",
//         price: 9.59,
//         stock: 150,
//         description: "Mashle: Magic and Muscles manga volume 15 features story and art by Hajime Komoto." +
//             " Orter, Rayne, and the others join forces to try and take down Innocent Zero’s eldest son, Doom. But Doom overwhelms them all, and according to him, he’s still holding back. With Doom unaffected by their attacks, the situation seems desperate. That is, until their ace in the hole arrives. Will humanity’s greatest creation be the light it needs in its darkest hour?"
//     },
//
//     {
//         productId: "manga_39",
//         series: "Mashle: Magic And Muscles",
//         author: "Komoto Hajime",
//         category: "Comedy",
//         cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-18-primary.jpeg",
//         cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-18-back.jpeg",
//         name: "Mashle: Magic And Muscles - Volume 18",
//         price: 9.59,
//         stock: 150,
//         description: "Mashle: Magic and Muscles manga volume 18 features story and art by Hajime Komoto." +
//             " Innocent Zero has exceeded the limits of human existence and become a god! Humanity has no choice but to bow down before his awe-inspiring divinity. Except for Mash, whose muscles have unlocked an unimaginable power to give Innocent Zero a flick to the forehead he won’t soon forget!"
//     },
// ]

// showSlider()
//
// function showSlider() {
//     for (var i = 0; i < productTable.length; i += 5) {
//         document.querySelector(".best__slider__list").innerHTML += `
//         <div class="best__slider__item">
//             <a id="${productTable[i].productId}" onclick="showProductInfo(this)">
//                 <img src="${productTable[i].cover1}" alt="">
//                 <img src="${productTable[i].cover2}" alt="">
//             </a>
//             <h4>${productTable[i].name}</h4>
//             <p>$${productTable[i].price}</p>
//             <button>+ Add to cart</button>
//         </div>
//         `
//
//         document.querySelector(".book__slider__list").innerHTML += `
//         <div class="book__slider__item">
//             <a id="${productTable[i + 1].productId}" onclick="showProductInfo(this)">
//                 <img src="${productTable[i + 1].cover1}" alt="">
//                 <img src="${productTable[i + 1].cover2}" alt="">
//             </a>
//             <h4>${productTable[i + 1].name}</h4>
//             <p>$${productTable[i + 1].price}</p>
//             <button>+ Add to cart</button>
//         </div>
//         `
//     }
// }

// function showProductInfo(e) {
//     document.querySelector(".product__page").style.display = "inline"
//     document.querySelector(".product").style.animationName = "topDown"
//     const productInfo = document.querySelector(".product__page")
//     const p = productTable.find(product => product.productId === e.id)
//
//     if (!p) {
//         console.error("Product not found")
//         return
//     }
//
//     productInfo.innerHTML = `
//                 <div class="product">
//                     <a id="product__close" onclick="closeProduct()"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
//                     <div class="product__img">
//                         <img id="product__cover1" src="${p.cover1}">
//                         <img id="product__cover2" src="${p.cover2}">
//
//                         <a id="product__view1" onclick="changeProductView(this)"><img src="${p.cover1}"></a>
//                         <a id="product__view2" onclick="changeProductView(this)"><img src="${p.cover2}"></a>
//                     </div>
//
//                     <div class="product__info">
//                         <h1>${p.name}</h1>
//                         <div class="product__info--rating">
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                         </div>
//                         <p>Author:</p>
//                         <h2>${p.author}</h2>
//                         <p>${p.category}</p>
//                         <p>Quantity: </p>
//
//                         <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
//                         <button id="product__add">Add to cart</button>
//
//                         <p>Availability: ${p.stock}</p><br>
//                         <h4>Description</h4>
//                         <p>${p.description}</p><br>
//                         <p>${p.descr2}</p>
//                     </div>
//                 </div>
//     `
// }

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

const URLOfWebpage = new URL(window.location)
const URLOfIndex = window.location.href
const URLToAdmin = URLOfIndex.split("html")
const layerOfView = document.querySelectorAll('.layer')
const page = URLOfWebpage.searchParams.get('page')
const home = "index.html"

function setURLForPage(page) {
    const urlParams = new URLSearchParams(window.location.search);
    if (page === "home") {
        window.history.replaceState({}, '', home);
    } else {
        urlParams.set('page', page);
        window.history.replaceState({}, '', '?' + urlParams.toString());
    }
}


























