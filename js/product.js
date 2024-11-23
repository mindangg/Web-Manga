// =======================================================================
// $$$$$$$\                            $$\                       $$\
// $$  __$$\                           $$ |                      $$ |
// $$ |  $$ | $$$$$$\   $$$$$$\   $$$$$$$ |$$\   $$\  $$$$$$$\ $$$$$$\
// $$$$$$$  |$$  __$$\ $$  __$$\ $$  __$$ |$$ |  $$ |$$  _____|\_$$  _|
// $$  ____/ $$ |  \__|$$ /  $$ |$$ /  $$ |$$ |  $$ |$$ /        $$ |
// $$ |      $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |        $$ |$$\
// $$ |      $$ |      \$$$$$$  |\$$$$$$$ |\$$$$$$  |\$$$$$$$\   \$$$$  |
// \__|      \__|       \______/  \_______| \______/  \_______|   \____/
// PRODUCT MODULE
// ========================================================================
//  INITIALIZE PPRODUCT
// ========================================================================
// Product variable
var productIdIndex = 0;
var currentEditIndex;
var productCurrentPage = 1;
var productPerPage = 5;
var productIndex = productCurrentPage;

// Product property
const productBtnAdd = document.getElementById("product-menu__button--add");
const productBtnSave = document.getElementById("product-menu__button--save");
const productBtnCancel = document.getElementById("product-menu__button--cancel");
const productMenuBody = document.getElementById("product-menu__body");
const productTableFooter = document.getElementById("product-table__footer");
const productRenderTable = document.getElementById("product-table");

// Product input
const productInputCover1 = document.getElementById("product-menu__input--cover1");
const productInputCover2 = document.getElementById("product-menu__input--cover2");
const productInputSeries = document.getElementById("product-menu__input--series");
const productInputCategory = document.getElementById("product-menu__input--category");
const productInputAuthor = document.getElementById("product-menu__input--author");
const productInputStock = document.getElementById("product-menu__input--stock");
const productInputPrice = document.getElementById("product-menu__input--price");
const productInputDescription = document.getElementById("product-menu__input--description")

// Search input
const productSearchName = document.getElementById("product-table__search-input--name");
const productSearchCategory = document.getElementById("product-table__search-input--category");
const productSearchPriceMin = document.getElementById("product-table__search-price--min");
const productSliderPriceMin = document.querySelector(".min");
const sortIdProduct = document.querySelector(".product-table__cell--id");

// Product table
let productTable = JSON.parse(localStorage.getItem('productTable')) || [
    {
        productId: "manga_0",
        series: "Sakamoto Days",
        author: "Suzuki Yuto",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-6-back.jpg",
        name: "Sakamoto Days - Volume 06",
        price: 9.59,
        stock: 120,
        description: " Sakamoto Days manga volume 6 features story and art by Yuto Suzuki." +
            " Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
    },

    {
        productId: "manga_1",
        series: "Sakamoto Days",
        author: "Suzuki Yuto",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-10-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-10-back.jpg",
        name: "Sakamoto Days - Volume 10",
        price: 9.99,
        stock: 120,
        description: "Sakamoto Days manga volume 10 features story and art by Yuto Suzuki." +
            " As Sakamoto and his friends hunt for the database at the JCC, Shin winds up in a serious duel with a teacher who might have information on what they want. Meanwhile, Sakamoto deals with Amane, a boy with a connection to X. Thanks to X's schemes, the JCC faces an unprecedented crisis!",
    },

    {
        productId: "manga_2",
        series: "Sakamoto Days",
        author: "Suzuki Yuto",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-1-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-1-back.jpg",
        name: "Sakamoto Days - Volume 01",
        price: 9.59,
        stock: 120,
        description: "Sakamoto Days manga volume 1 features story and art by Yuto Suzuki." +
            " Taro Sakamoto was once a legendary hit man considered the greatest of all time. Bad guys feared him! Assassins revered him! But then one day he quit, got married, and had a baby. He’s now living the quiet life as the owner of a neighborhood store, but how long can Sakamoto enjoy his days of retirement before his past catches up to him?!",
    },

    {
        productId: "manga_3",
        series: "Sakamoto Days",
        author: "Suzuki Yuto",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-5-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-5-back.jpg",
        name: "Sakamoto Days - Volume 05",
        price: 9.59,
        stock: 120,
        description: "Sakamoto Days manga volume 5 features story and art by Yuto Suzuki." +
            " Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation. Meanwhile, the evil mastermind X reveals his true intent, which sends shock waves through the assassin world!",
    },

    {
        productId: "manga_4",
        series: "Sakamoto Days",
        author: "Suzuki Yuto",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-15-primary.jpeg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-15-back.jpeg",
        name: "Sakamoto Days - Volume 15",
        price: 9.99,
        stock: 120,
        description: "Sakamoto Days manga volume 15 features story and art by Yuto Suzuki." +
            " It’s the legendary fighter Hyo and sniper Heisuke versus the magnetic Kumanomi! Who will emerge victorious in the fierce battle between three assassins with different styles of killing? Meanwhile, at the abandoned warehouse where Slur is hiding out, Akao confronts the man who murdered her aunt!",
    },


    {
        productId: "manga_5",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-back.jpg",
        name: "Jujutsu Kaisen - Volume 04",
        price: 7.99,
        stock: 90,
        description: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami." +
            " While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off.",
    },

    {
        productId: "manga_6",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-manga-volume-22-primary.jpeg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-manga-volume-22-back.jpg",
        name: "Jujutsu Kaisen - Volume 22",
        price: 7.99,
        stock: 90,
        description: "Jujutsu Kaisen manga volume 22 features story and art by Gege Akutami." +
            " A mysterious cursed spirit suddenly flies into Sakurajima Colony. It’s someone who became a curse after death and bears a grudge against Maki! The cursed spirit evolves with incredible speed from cursed womb to adult form and threatens to overcome Maki and Noritoshi. Just then, two other combatants join the battle...",
    },

    {
        productId: "manga_7",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-back.jpg",
        name: "Jujutsu Kaisen - Volume 1",
        price: 9.59,
        stock: 90,
        description: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami." +
            " In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoma Sukuna were lost and scattered about. Should any demon consume Sukuna’s body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural!",
    },

    {
        productId: "manga_8",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-back.jpg",
        name: "Jujutsu Kaisen - Volume 14",
        price: 7.99,
        stock: 90,
        description: "Jujutsu Kaisen manga volume 14 features story and art by Gege Akutami." +
            " Sukuna, unleashed, is wrecking Shibuya, and Fushiguro has suffered a serious injury from a curse user’s surprise attack. Fushiguro comes up with a desperate plan to deal with both the rampaging Sukuna and the curse user, but the cost will be grave…",
    },

    {
        productId: "manga_9",
        series: "Jujutsu Kaisen",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-primary.jpeg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-back.jpeg",
        name: "Jujutsu Kaisen - Volume 23",
        price: 9.59,
        stock: 90,
        description: "Jujutsu Kaisen manga volume 23 features story and art by Gege Akutami." +
            " Sukuna reveals that he is the Disgraced One whom the Angel wants to kill. While Itadori grapples with that realization, Kenjaku sets in motion plans involving various nations, throwing the culling game into further confusion! To make matters worse, Kenjaku then shows up at the Tombs of the Star Corridor where Master Tengen exists in seclusion!",
    },

    {
        productId: "manga_10",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-3-back.jpg",
        name: "Spy X Family - Volume 03",
        price: 7.99,
        stock: 100,
        description: "Spy x Family manga volume 3 features story and art by Tatsuya Endo." +
            " Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
    },

    {
        productId: "manga_11",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-1-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-1-back.jpg",
        name: "Spy X Family - Volume 01",
        price: 7.99,
        stock: 100,
        description: "Spy x Family manga volume 1 features story and art by Tatsuya Endo." +
            " Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit! Can Twilight outsmart Yuri when he finds out Yuri is actually a mortal enemy of his intelligence agency—an Ostanian Secret Service officer?"
    },

    {
        productId: "manga_12",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-2-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-2-back.jpg",
        name: "Spy X Family - Volume 02",
        price: 7.99,
        stock: 100,
        description: "Spy x Family manga volume 2 features story and art by Tatsuya Endo." +
            " Twilight must infiltrate the prestigious Eden Academy to get close to his target Donovan Desmond, but does his daughter Anya even have the academic prowess to get in to the school? But perhaps the truly impossible mission is making sure Anya becomes a school scholar and befriends Donovan’s arrogant son, Damian!"
    },

    {
        productId: "manga_13",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-4-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-4-back.jpg",
        name: "Spy X Family - Volume 04",
        price: 7.99,
        stock: 100,
        description: "Spy x Family manga volume 4 features story and art by Tatsuya Endo." +
            " The Forgers look into adding a dog to their family, but this is no easy task—especially when Twilight has to simultaneously foil an assassination plot against a foreign minister! The perpetrators plan to use specially trained dogs for the attack, but Twilight gets some unexpected help to stop these terrorists."
    },

    {
        productId: "manga_14",
        series: "Spy X Family",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-6-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-6-back.jpg",
        name: "Spy X Family - Volume 06",
        price: 7.99,
        stock: 100,
        description: "Spy x Family manga volume 6 features story and art by Tatsuya Endo." +
            " Twilight and Nightfall enter an underground tennis tournament, hoping for an opportunity to obtain an intelligence document that threatens to bring the world to the brink of war! But will their mission be compromised by Nightfall’s secret crush on Twilight?!"
    },

    {
        productId: "manga_15",
        series: "My Dress Up Darling",
        author: "Fukuda Shinichi",
        category: "Rom-Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-7-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-7-back.jpg",
        name: "My Dress Up Darling - Volume 07",
        price: 9.99,
        stock: 150,
        description: "My Dress-Up Darling manga volume 7 features story and art by Shinichi Fukuda." +
            " Marin's bestie and Wakana's classmate Nowa might seem a little flaky, but the girl has some serious instinct when love is in the air! When she tosses out a bombshell at karaoke by flatly asking Marin and Wakana if they're an item, it sends the two running!"
    },

    {
        productId: "manga_16",
        series: "My Dress Up Darling",
        author: "Fukuda Shinichi",
        category: "Rom-Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-1-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-1-back.jpg",
        name: "My Dress Up Darling - Volume 01",
        price: 9.99,
        stock: 150,
        description: "My Dress-Up Darling manga volume 1 features story and art by Shinichi Fukuda." +
            " Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner, finding solace in the home ec room at his high school."
    },

    {
        productId: "manga_17",
        series: "My Dress Up Darling",
        author: "Fukuda Shinichi",
        category: "Rom-Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-3-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-3-back.jpg",
        name: "My Dress Up Darling - Volume 03",
        price: 9.99,
        stock: 150,
        description: "My Dress-Up Darling manga volume 3 features story and art by Shinichi Fukuda." +
            " Wakana and Marin make it through their very first cosplay event, and not long after, Marin’s heart undergoes a change…?! But that’s not going to stop her cosplaying! To research their next project, the duo decide to watch the anime it’s based on…but on screening night, they wind up alone together…?! And with JuJu, another gorgeous cosplayer, dropping by Wakana’s house…it seems like a love triangle is abrew!"
    },

    {
        productId: "manga_18",
        series: "My Dress Up Darling",
        author: "Fukuda Shinichi",
        category: "Rom-Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-6-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-6-back.jpg",
        name: "My Dress Up Darling - Volume 06",
        price: 9.99,
        stock: 150,
        description: "My Dress-Up Darling manga volume 6 features story and art by Shinichi Fukuda." +
            " And that seems to be one of cosplay’s superpowers, as Wakana and Marin discover at an Ikebukuro event. There, they meet crossplayer Amane and hear their cosplay origin story, which gives Marin the push she needs to decide on her next costume! Unfortunately for Wakana, getting the new outfit ready is going to be anything but easy…"
    },

    {
        productId: "manga_19",
        series: "My Dress Up Darling",
        author: "Fukuda Shinichi",
        category: "Rom-Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-9-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-9-back.jpg",
        name: "My Dress Up Darling - Volume 09",
        price: 9.99,
        stock: 150,
        description: "My Dress-Up Darling manga volume 9 features story and art by Shinichi Fukuda." +
            " To get the swanky DSLR camera of her dreams, Marin picks up more part-time work! And once she’s scraped up the cash to buy her shiny new gadget, she attends a cosplay event...this time, as a photographer!"
    },

    {
        productId: "manga_20",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-23-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-23-back.jpg",
        name: "Black Clover - Volume 23",
        price: 9.99,
        stock: 150,
        description: "Black Clover manga volume 23 features story and art by Yuki Tabata." +
            " With the devil finally defeated, the Magic Knights are working hard to rebuild the damage done to the Clover Kingdom. Unfortunately for Asta, all the blame is being pinned on him and he’s set to be executed. He’s in the most trouble he’s ever been in, but you never count out a Black Bull!"
    },

    {
        productId: "manga_21",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-7-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-7-back.jpg",
        name: "Black Clover - Volume 07",
        price: 9.99,
        stock: 150,
        description: "Black Clover manga volume 7 features story and art by Yuki Tabata." +
            " After the battle with the Eye of the Midnight Sun, the Wizard King suspects that there might be a traitor among the Magic Knights. But who is it, and how can Asta help expose the crooked knight?"
    },

    {
        productId: "manga_22",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-24-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-24-back.jpg",
        name: "Black Clover - Volume 24",
        price: 9.99,
        stock: 150,
        description: "Black Clover manga volume 24 features story and art by Yuki Tabata." +
            " After six months of training in the Heart Kingdom, Asta and his fellow magic knights are ready to show off their improvements. Will Asta’s muscles be enough when the devil-powered Spade Kingdom begins their invasion, or will he need some new tricks?"
    },

    {
        productId: "manga_23",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-25-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-7-back.jpg",
        name: "Black Clover - Volume 25",
        price: 7.99,
        stock: 150,
        description: "Black Clover manga volume 25 features story and art by Yuki Tabata." +
            " The Spade Kingdom’s Dark Triad has launched an all-out attack on the Heart Kingdom and the Black Bulls. While Asta and company have gotten stronger, can they stand up to these new devil-possessed mages? This might be the perfect time for Yami to save the day!"
    },

    {
        productId: "manga_24",
        series: "Black Clover",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-32-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-32-back.jpg",
        name: "Black Clover - Volume 32",
        price: 9.99,
        stock: 150,
        description: "Black Clover manga volume 32 features story and art by Yuki Tabata." +
            " To save Yami, the Black Bulls storm their way into enemy territory. And with a powered-up Asta joining the fight, the battle may be going their way. But when the most powerful devil in the underworld finally makes his appeareance, the entire world may be on the verge of destruction."
    },

    {
        productId: "manga_25",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-manga-volume-14-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-manga-volume-14-back.jpg",
        name: "Tokyo Ghoul - Volume 14",
        price: 7.99,
        stock: 150,
        description: "Tokyo Ghoul Volume 14 features story and art by Sui Ishida." +
            " As Kaneki and the fiercest fighter in the CCG, Arima, finally face off, several investigators launch an assault on Yoshimura, unaware of the danger that awaits them. The massive battle takes a turn for the worse when the One-Eyed Owl appears, leaving the fate of Kaneki and the CCG hanging in the balance."
    },

    {
        productId: "manga_26",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-2-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-2-back.jpg",
        name: "Tokyo Ghoul - Volume 02",
        price: 7.99,
        stock: 150,
        description: "Tokyo Ghoul Volume 02 features story and art by Sui Ishida." +
            " Unable to discard his humanity but equally unable to suppress his Ghoul hunger, Ken finds salvation in the kindness of friendly Ghouls who teach him how to pass as human and eat flesh humanely."
    },

    {
        productId: "manga_27",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-5-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-5-back.jpg",
        name: "Tokyo Ghoul - Volume 05",
        price: 7.99,
        stock: 150,
        description: "Tokyo Ghoul Volume 05 features story and art by Sui Ishida." +
            " Kaneki, Nishio, and Touka struggle to work together to rescue their human friend Kimi while Ghoul Investigator deaths skyrocket in Wards 9 through 12. When reinforcements are called in on both sides, the stakes are suddenly higher than ever in volume 5 of Tokyo Ghoul!"
    },

    {
        productId: "manga_28",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-9-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-9-back.jpg",
        name: "Tokyo Ghoul - Volume 09",
        price: 10.39,
        stock: 150,
        description: "Tokyo Ghoul Volume 09 features story and art by Sui Ishida." +
            " Ghouls live among us, the same as normal people in every way—except their craving for human flesh. Ken Kaneki is an ordinary college student until a violent encounter turns him into the first half-human half-ghoul hybrid. Trapped between two worlds, he must survive Ghoul turf wars, learn more about Ghoul society and master his new powers."
    },

    {
        productId: "manga_29",
        series: "Tokyo Ghoul",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-11-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-graphic-novel-11-back.jpg",
        name: "Tokyo Ghoul - Volume 11",
        price: 10.39,
        stock: 150,
        description: "Tokyo Ghoul Volume 11 features story and art by Sui Ishida." +
            " Amid clashes between Ghouls and the Commission of Counter Ghoul investigators at Doctor Kano’s underground facility, Kaneki finds himself locked in battle with Special Class Ghoul investigator Yukinori Shinohara. When the battle subsides, the CCG discovers shocking evidence that leads them closer to discovering the truth behind Kano’s sinister plans."
    },

    {
        productId: "manga_30",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-26-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-26-back.jpg",
        name: "One Punch Man - Volume 26",
        price: 7.99,
        stock: 150,
        description: "One-Punch Man manga volume 26 features story by ONE and art by Yusuke Murata." +
            " As the fight against the Monster Association big shots heats up, Class-S heroes find themselves locked in a desperate struggle, but Tornado is closing in on Gyoro-Gyoro’s main body!"
    },

    {
        productId: "manga_31",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-18-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-18-back.jpg",
        name: "One Punch Man - Volume 18",
        price: 7.99,
        stock: 150,
        description: "One-Punch Man manga volume 18 features story by ONE and art by Yusuke Murata." +
            " Garo has just left the Monster Association’s hideout when he crosses paths with Saitama, who’s in quite a pinch, but Saitama still doesn't know Garo is the Hero Hunter. Later, King the Ripper can no longer hold back his murderous urges and confronts Garo himself!"
    },

    {
        productId: "manga_32",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-9-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-9-back.jpg",
        name: "One Punch Man - Volume 09",
        price: 7.99,
        stock: 150,
        description: "One-Punch Man manga volume 9 features story by ONE and art by Yusuke Murata." +
            " Garo, a man who admires monsters, attacks the Hero Association! But after pulverizing the heroes there, he just leaves. What the heck does this guy want?! Meanwhile, Class-B, Rank-1 Miss Blizzard visits Saitama at his apartment. Since he’s just a low-ranking hero, she thinks she can make him one of her subordinates, but as always, Saitama has other plans!"
    },

    {
        productId: "manga_33",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-27-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-27-back.jpg",
        name: "One Punch Man - Volume 27",
        price: 7.99,
        stock: 150,
        description: "One-Punch Man manga volume 27 features story by ONE and art by Yusuke Murata." +
            " Psychos intends to fuse with Orochi, the Monster King, which would give them immense power against Tornado. Superalloy confronts Garo and experiences fear of his opponent’s strength… Meanwhile, Saitama gets caught up in a cave-in in the underground labyrinth!"
    },

    {
        productId: "manga_34",
        series: "One Punch Man",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-28-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-28-back.jpg",
        name: "One Punch Man - Volume 28",
        price: 7.99,
        stock: 150,
        description: "One-Punch Man manga volume 28 features story by ONE and art by Yusuke Murata." +
            " Psychos and Tornado’s psychic battle rages on! With Genos’s help, Tornado succeeds in rescuing the scattered heroes from their fight against the monsters, allowing her to unleash a devastating attack that warps the city… And although the outlook appears grim, a group of S-class heroes finds the inspiration to turn the tide of battle!"
    },

    {
        productId: "manga_35",
        series: "Mashle: Magic And Muscles",
        author: "Komoto Hajime",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-17-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 17",
        price: 9.59,
        stock: 150,
        description: "Mashle: Magic and Muscles manga volume 17 features story and art by Hajime Komoto." +
            " Innocent Zero’s youngest child, Domina, steps in to put a stop to his father’s pursuit of Mash. Using the reprieve afforded them, Mash’s friends race against the clock in hopes of getting him to Meliadoul."
    },

    {
        productId: "manga_36",
        series: "Mashle: Magic And Muscles",
        author: "Komoto Hajime",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-16-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-16-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 16",
        price: 9.59,
        stock: 150,
        description: "Mashle: Magic and Muscles manga volume 16 features story and art by Hajime Komoto." +
            " Mash shows off the hard-won results of his strenuous training against his greatest and final obstacle before confronting Innocent Zero—Doom! Now that he knows the extent of his body’s capabilities and how to control them, Mash’s strength has grown to an unimaginable level!"
    },

    {
        productId: "manga_37",
        series: "Mashle: Magic And Muscles",
        author: "Komoto Hajime",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-3-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-3-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 03",
        price: 9.59,
        stock: 150,
        description: "Mashle: Magic and Muscles manga volume 3 features story and art by Hajime Komoto." +
            " Lang’s vicious hunt for coins is in full swing! To stop them from monopolizing the chance to earn a Divine Visionary position, Mash teams up with his Adler compatriots. Afterwards, the Sixth and Seventh Fangs of the Magia Lupus swoop in to attack Mash while he’s cleaning the owl huts."
    },

    {
        productId: "manga_38",
        series: "Mashle: Magic And Muscles",
        author: "Komoto Hajime",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-15-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-15-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 15",
        price: 9.59,
        stock: 150,
        description: "Mashle: Magic and Muscles manga volume 15 features story and art by Hajime Komoto." +
            " Orter, Rayne, and the others join forces to try and take down Innocent Zero’s eldest son, Doom. But Doom overwhelms them all, and according to him, he’s still holding back. With Doom unaffected by their attacks, the situation seems desperate. That is, until their ace in the hole arrives. Will humanity’s greatest creation be the light it needs in its darkest hour?"
    },

    {
        productId: "manga_39",
        series: "Mashle: Magic And Muscles",
        author: "Komoto Hajime",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-18-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-manga-volume-18-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 18",
        price: 9.59,
        stock: 150,
        description: "Mashle: Magic and Muscles manga volume 18 features story and art by Hajime Komoto." +
            " Innocent Zero has exceeded the limits of human existence and become a god! Humanity has no choice but to bow down before his awe-inspiring divinity. Except for Mash, whose muscles have unlocked an unimaginable power to give Innocent Zero a flick to the forehead he won’t soon forget!"
    },
]

// ========================================================================
// PRODUCT TABLE
// ========================================================================
class Product {
    constructor(productId, cover1, cover2, series, category, author, stock, price, description) {
        this.productId = productId;
        this.cover1 = cover1;
        this.cover2 = cover2;
        this.series = series;
        this.category = category;
        this.author = author;
        this.stock = stock;
        this.price = price;
        this.description = description
    }
    // ========================================================================
    // VALIDATION OF PRODUCT
    // ========================================================================
    // check is blank
    static checkIsBlank() {
        let isBlank = false
        const productInput = productMenuBody.querySelectorAll("input, select");
        for (const product of productInput) {
            if (product.value === "" && product.type !== "file") {
                product.labels[0].innerText = "This field cannot be empty"
                isBlank = true
            } else {
                product.labels[0].innerText = ""
            }
        }
        return isBlank
    }
    // ========================================================================
    // check is stock
    static checkIsStock() {
        let isNumber = true
        if (productInputStock.value === "") {
            productInputStock.labels[0].innerText = "This field cannot be empty"
            isNumber = false
        } else {
            if (!Validation.IsNumber(productInputStock.value)) {
                productInputStock.labels[0].innerText = "Stock must be a number"
                isNumber = false
            } else {
                productInputStock.labels[0].innerText = ""
            }
        }
        return isNumber
    }
    // ========================================================================
    // Check is price
    static checkIsPrice() {
        let isNumber = true
        if (productInputPrice.value === "") {
            productInputPrice.labels[0].innerText = "This field cannot be empty"
            isNumber = false
        } else {
            if (!Validation.IsNumber(productInputPrice.value)) {
                productInputPrice.labels[0].innerText = "Price must be a number"
                isNumber = false
            } else {
                productInputPrice.labels[0].innerText = ""
            }
        }
        return isNumber
    }
    // ========================================================================
    // check is image 
    static checkIsImg() {
        let isImage = true
        const file1 = productInputCover1.files[0];
        const file2 = productInputCover2.files[0];
        console.log(file1)

        if (!file1 || !file2) {
            alert("Please select both images.")
            return isImage = false
        }

        if (file1.type.startsWith("image/") && file2.type.startsWith("image/")) {
            console.log("Both files are images.")
            return isImage
        } else {
            alert("Files must be images.")
            return isImage = false
        }
    }
    // ========================================================================
    // INSERT PRODUCT
    // ========================================================================
    // dung de insert san pham
    static insert(productId, cover1, cover2, series, category, author, stock, price, description) {
        console.log("Inserting product...");
        const newProduct = new Product(
            productId,
            cover1,
            cover2,
            series,
            category,
            author,
            stock,
            price,
            description
        );
        productTable.push(newProduct);
    }
    // ========================================================================
    // GENERATE ID
    // ======================================================================== 
    // tao id cho san pham theo do dai cua mang
    static generateId = (data) => {
        if (data.length === 0) {
            return 0;
        } else {
            const index = data[data.length - 1].productId.split("_")[1];
            return parseInt(index) + 1;
        }
    };
    // ========================================================================
    // ADD PRODUCT
    // ======================================================================== 
    // khi an vao nut add thi se insert san pham
    static add() {
        if (!Product.checkIsImg()) {
            return
        }
        if (Product.checkIsBlank() ||
            !Product.checkIsStock() ||
            !Product.checkIsPrice()) {
            return
        } else {
            handleAdd()
        }

        function handleAdd() {
            console.log("Adding product...");
            const lowerStr = Helper.lowerStr(productInputSeries.value)
            const cover1 = productInputCover1.value.split("\\")[2]
            const cover2 = productInputCover2.value.split("\\")[2]

            Product.insert(
                `manga_${Product.generateId(productTable)}`,
                `../img/books/${lowerStr}/${cover1}`,
                `../img/books/${lowerStr}/${cover2}`,
                productInputSeries.value,
                productInputCategory.value,
                productInputAuthor.value,
                productInputStock.value,
                parseFloat(productInputPrice.value),
                productInputDescription.value
            )

            localStorage.setItem("productTable", JSON.stringify(productTable));
            productTable = JSON.parse(
                localStorage.getItem("productTable")
            );

            Product.render(productTable);
        }
    }
    // ========================================================================
    // RENDER PRODUCT
    // ======================================================================== 
    // dung de render san pham vao bang 
    static render(renderProduct) {
        console.log("-> Render product...");

        const productTableBody = document.getElementById(
            "product-table__body-content"
        );
        productTableBody.innerHTML = "";
        let start
        let end
        let productList

        // render theo so luong ma mot page co the chua duoc
        // neu san pham co hon 5 gia tri thi render theo trang hien tai
        // tranh loi khi xoa san pham khoi bang
        start = (productCurrentPage - 1) * productPerPage;
        end = start + productPerPage;
        productList = renderProduct.slice(start, end);

        // renderProduct truyen vao co so luong thi render
        if (productList.length > 0) {
            productList.map((p) => {
                const row = document.createElement("tr");
                row.id = `${p.productId}`;
                row.innerHTML += `
                    <td style="text-align: center;">
                        ${p.productId}
                    </td>
                    <td style="width: 50px; height: 50px; text-align: center;">
                        <img src="${p.cover1}" alt="product-cover" style="width: 100px; height: 100px;">
                    </td>
                    <td style="text-align: center;">
                        ${p.series}
                    </td>
                    <td style="text-align: center;">
                        ${p.category}
                    </td>
                    <td style="text-align: center;">
                        ${p.stock}
                    </td>
                    <td style="text-align: center;">
                        ${p.price}
                    </td>
                    <th style="text-align: center;">
                        <button class="product-table__button product-table__button--edit"
                            id="product-table__button--edit" onclick="Product.edit(this);">Edit</button>
                    </th>
                    <th style="text-align: center;">
                        <button class="product-table__button product-table__button--delete"
                            id="product-table__button--delete" onclick="Product.delete(this);">Delete</button>
                    </th>
                    `;
                productTableBody.append(row);
            });
            console.log("Render product table succesfully ✓");
            Product.renderPagination(renderProduct);
            Helper.clearForm(productMenuBody);
        }
    }
    // ========================================================================
    // RENDER PAGI PRODUCT
    // ========================================================================
    // render phan trang san pham
    static renderPagination(renderProduct) {
        console.log("-> Render product pagination...");
        productTableFooter.innerHTML = "";

        // tinh tong so trang san pham
        const productTotalPages = Math.ceil(renderProduct.length / productPerPage);

        // neu tong so trang san pham > 1 thi render
        if (productTotalPages > 1) {
            productTableFooter.innerHTML = `
                <button class="button button__product__prev-pagi" 
                id="button__product__prev-pagi"> << </button>

                <input type="text" class="input input__pagi" id="input-product__pagi" style="width: 2%;"> / ${productTotalPages}
                
                <button class="button button__product__next-pagi" 
                id="button__next-pagi"> >> </button>
            `;
            const inputPagi = document.getElementById("input-product__pagi");
            inputPagi.value = productCurrentPage;

            document
                .getElementById("button__product__prev-pagi")
                .addEventListener("click", () => {
                    console.log("Go to previous page");
                    if (productCurrentPage > 1) {
                        productCurrentPage--;
                        Product.render(renderProduct);
                    } else {
                        console.error("Error");
                    }
                });

            document
                .getElementById("button__next-pagi")
                .addEventListener("click", () => {
                    console.log("Go to next page");
                    if (productCurrentPage < productTotalPages) {
                        productCurrentPage++;
                        Product.render(renderProduct);
                    } else {
                        console.error("Error");
                    }
                });
        }
    }
    // ========================================================================
    // EDIT EVENT AND HANDLE UPDATE PRODUCT
    // ========================================================================
    // edit san pham
    static edit(e) {
        console.log("-> Edit product...");

        const editProductRow = e.parentElement.parentElement;

        currentEditIndex = productTable.findIndex((p) => p.productId === editProductRow.id)

        const queryProductInput = document
            .getElementById("product-menu__body")
            .querySelectorAll("input, select");
        queryProductInput.forEach((product) => {
            const metadata = product.id.split("--")[1];
            console.log(product.type);
            if (product.type !== "file") {
                document.getElementById(product.id).value =
                    productTable[currentEditIndex][metadata];
            }
        });

        // xu ly su kien show nut save che do edit
        productRenderTable.style.display = "none";
        productBtnAdd.style.display = "none";
        productBtnSave.style.display = "";
        productBtnCancel.style.display = "";
    }
    // ========================================================================
    // update san pham
    static update() {
        console.log("-> Time to update product...");

        const queryProductInput = productMenuBody.querySelectorAll("input, select");
        queryProductInput.forEach((productInput) => {
            const metadata = productInput.id.split("--")[1];
            if (productInput.type === "file") {
                productTable[currentEditIndex][metadata] = `../img/books/${productInput.value.split("\\")[2]
                    }`;
            } else {
                productTable[currentEditIndex][metadata] = productInput.value;
            }
        });

        localStorage.setItem("productTable", JSON.stringify(productTable));
        productTable = JSON.parse(
            localStorage.getItem("productTable")
        );

        Product.render(productTable);
        Product.applyFilters()
        Helper.clearForm(productMenuBody);

        productRenderTable.style.display = "";
        productBtnAdd.style.display = "";
        productBtnSave.style.display = "none";
        productBtnCancel.style.display = "none";

        console.log("Update product from table succesfully ✓");

        Product.applyFilters();
    }
    // ========================================================================
    // DELETE PRODUCT
    // ========================================================================
    // delete san pham
    static delete(e) {
        console.log("-> Delete product...");

        const deleteProductRow = e.parentElement.parentElement;

        const start = (productCurrentPage - 1) * productPerPage
        const end = start + productPerPage

        const currentPage = productTable.slice(start, end)

        if (currentPage.length === 1) {
            productCurrentPage = productCurrentPage - 1
        }

        productTable = productTable.filter((p) => p.productId !== deleteProductRow.id)

        localStorage.setItem("productTable", JSON.stringify(productTable));
        productTable = JSON.parse(
            localStorage.getItem("productTable")
        );

        Product.render(productTable);
        Product.applyFilters()

        console.log("Delete product from table succesfully ✓");

        Product.applyFilters();
    }
    // ==================================================================================
    // CANCEL BUTTON
    // ==================================================================================
    static cancel() {
        console.log("-> Cancel...");
        if (confirm("Bạn muốn thoát chỉnh sửa sản phẩm không?")) {
            currentEditIndex = -1;
            Helper.clearForm(productMenuBody);
            productRenderTable.style.display = "";
            productBtnAdd.style.display = "";
            productBtnSave.style.display = "none";
            productBtnCancel.style.display = "none";
        } else {
            console.log("tiếp tục...");
        }
    }
    // ==================================================================================
    // SEARCH PRODUCT
    // ==================================================================================
    static search() {
        productSearchName.addEventListener("keyup", () => {
            console.log("-> search by name...");
            Product.applyFilters();
        });

        productSearchCategory.addEventListener("change", () => {
            console.log(productSearchCategory.value)
            console.log("-> search by category...");
            Product.applyFilters();
        });

        productSliderPriceMin.addEventListener("input", () => {
            console.log("-> search by category...");
            Product.applyFilters();
        });

        sortIdProduct.addEventListener("click", () => {
            console.log("-> sort...");
            Product.applySort()
            Product.applyFilters();
            descending = !descending;
            console.log(`desc after sort: ${descending}`)
        });
    }
    // ==================================================================================
    // APPLY FILTER PRODUCT
    // ==================================================================================
    static applyFilters() {
        let filteredProduct = JSON.parse(
            localStorage.getItem("productTable")
        );

        if (productSearchName.value !== "") {
            const regex = new RegExp(productSearchName.value, "i");
            filteredProduct = filteredProduct.filter((item) =>
                regex.test(item.series)
            );
        }

        if (productSearchCategory.value !== "") {
            filteredProduct = filteredProduct.filter(
                (item) => item.category === productSearchCategory.value
            );
        }

        if (productSearchPriceMin.value > 0) {
            filteredProduct = filteredProduct.filter(
                (item) => parseFloat(productSearchPriceMin.value) <= item.price
            );
        }

        Product.render(filteredProduct);
    }

    // Chua tim ra phuong phap de sort ma khong anh huong den product table
    // static applySort() {
    //     renderProductTable = JSON.parse(localStorage.getItem("renderProductTable"));
    //     let sortProductTable = Product.sort(descending, renderProductTable)
    //     localStorage.setItem("renderProductTable", JSON.stringify(sortProductTable));
    // }
    // static sort(descending, data) {
    //     data.sort((a, b) => {
    //         if (descending) {
    //             return a.productId > b.productId ? 1 : (a.productId < b.productId ? -1 : 0); // Ascending
    //         } else {
    //             return a.productId > b.productId ? -1 : (a.productId < b.productId ? 1 : 0); // Descending
    //         }
    //     });
    //     return data;
    // }

    // ==================================================================================
    // ONLOAD PRODUCT
    // ==================================================================================
    // load san pham khi trang reload
    static onloadFilterProduct() {
        Product.render(productTable);
        Product.search();
        document.addEventListener("DOMContentLoaded", () => {
            Product.applyFilters()
        });
    }
    // load san pham khi trang load
    static onload() {
        if (JSON.parse(localStorage.getItem('productTable')) === null) {
            localStorage.setItem('productTable', JSON.stringify(productTable));
            console.log('Set products');
        } else {
            productTable = JSON.parse(localStorage.getItem('productTable'));
            console.log('Get products');
        }
    }
}
