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
let productIdIndex = 0;
let currentEditIndex;
let productCurrentPage = 1;
let productPerPage = 5;

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
        series: "Sakamoto Days - Volume 1",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-1-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-1-back.jpg",
        name: "Sakamoto Days - Volume 01",
        price: 5.36,
        stock: 120,
        description: "Taro Sakamoto was once a legendary hit man considered the greatest of all time. Bad guys feared him! Assassins revered him! But then one day he quit, got married, and had a baby.",
    },

    {
        productId: "manga_1",
        series: "Sakamoto Days - Volume 5",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-5-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-5-back.jpg",
        name: "Sakamoto Days - Volume 05",
        price: 11.95,
        stock: 120,
        description: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation.",
    },

    {
        productId: "manga_2",
        series: "Sakamoto Days - Volume 6",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-6-back.jpg",
        name: "Sakamoto Days - Volume 06",
        price: 6.23,
        stock: 120,
        description: "Dangerous serial killers clash with the Order and Sakamoto’s crew! As the battles rage on, Sakamoto undergoes an unexpected transformation.",
    },

    {
        productId: "manga_3",
        series: "Sakamoto Days - Volume 7",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-7-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-7-back.jpg",
        name: "Sakamoto Days - Volume 07",
        price: 12.18,
        stock: 120,
        description: "Sakamoto and X finally face off! Although Sakamoto has vowed not to kill, X shakes him up by threatening his family.",
    },

    {
        productId: "manga_4",
        series: "Sakamoto Days - Volume 8",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-8-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-8-back.jpg",
        name: "Sakamoto Days - Volume 08",
        price: 9.12,
        stock: 120,
        description: "In the third stage of the JCC transfer test, the participants are divided into multiple teams for a deadly game of “tail tag.",
    },

    {
        productId: "manga_5",
        series: "Sakamoto Days - Volume 10",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-10-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-10-back.jpg",
        name: "Sakamoto Days - Volume 10",
        price: 6.46,
        stock: 120,
        description: "As Sakamoto and his friends hunt for the database at the JCC, Shin winds up in a serious duel with a teacher who might have information on what they want.",
    },

    {
        productId: "manga_6",
        series: "Sakamoto Days  - Volume 12",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-12-primary.jpeg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-12-back.jpeg",
        name: "Sakamoto Days - Volume 12",
        price: 12.21,
        stock: 120,
        description: "It's an assassin showdown! Shishiba and Osaragi take on Yotsumura and his geisha on the streets of Kyoto.",
    },


    {
        productId: "manga_7",
        series: "Sakamoto Days - Volume 15",
        author: "Yuto Suzuki",
        category: "Action",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-15-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-15-back.jpg",
        name: "Sakamoto Days - Volume 15",
        price: 4.27,
        stock: 120,
        description: "It’s the legendary fighter Hyo and sniper Heisuke versus the magnetic Kumanomi! Who will emerge victorious in the fierce battle between three assassins with different styles of killing?",
    },

    {
        productId: "manga_8",
        series: "Jujutsu Kaisen - Volume 1",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-1-back.jpg",
        name: "Jujutsu Kaisen - Volume 01",
        price: 4.57,
        stock: 90,
        description: "In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoma Sukuna were lost and scattered about.",
    },


    {
        productId: "manga_9",
        series: "Jujutsu Kaisen - Volume 4",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-back.jpg",
        name: "Jujutsu Kaisen - Volume 04",
        price: 19.48,
        stock: 90,
        description: "While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off.",
    },

    {
        productId: "manga_10",
        series: "Jujutsu Kaisen - Volume 11",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-11-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-11-back.jpg",
        name: "Jujutsu Kaisen - Volume 11",
        price: 19.99,
        stock: 90,
        description: "Despite the crowd of civilians and transfigured humans, Satoru Gojo is able to defeat the cursed spirits at Shibuya Station. But it’s a trap!",
    },

    {
        productId: "manga_11",
        series: "Jujutsu Kaisen - Volume 14",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-back.jpg",
        name: "Jujutsu Kaisen - Volume 14",
        price: 4.22,
        stock: 90,
        description: "Sukuna, unleashed, is wrecking Shibuya, and Fushiguro has suffered a serious injury from a curse user’s surprise attack.",
    },

    {
        productId: "manga_12",
        series: "Jujutsu Kaisen - Volume 15",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-15-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-15-back.jpg",
        name: "Jujutsu Kaisen - Volume 15",
        price: 10.95,
        stock: 90,
        description: "Sukuna is on a murderous rampage. Meanwhile, invaluabe Jujutsu Sorcerers have been taken down, and even Kugisaki falls into Mahito’s trap!",
    },

    {
        productId: "manga_13",
        series: "Jujutsu Kaisen - Volume 17",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-17-primary.jpg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-17-back.jpg",
        name: "Jujutsu Kaisen - Volume 17",
        price: 18.50,
        stock: 90,
        description: "Hunted down by Okkotsu and on the brink of death, Itadori recalls a troubling family scene from his past. But why is the former form of Noritoshi Kamo there?",
    },

    {
        productId: "manga_14",
        series: "Jujutsu Kaisen - Volume 22",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-22-primary.jpeg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-22-back.jpg",
        name: "Jujutsu Kaisen - Volume 22",
        price: 14.06,
        stock: 90,
        description: "A mysterious cursed spirit suddenly flies into Sakurajima Colony. It’s someone who became a curse after death and bears a grudge against Maki!",
    },

    {
        productId: "manga_15",
        series: "Jujutsu Kaisen - Volume 23",
        author: "Gege Akutami",
        category: "Dark Fantasy",
        cover1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-primary.jpeg",
        cover2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-23-back.jpeg",
        name: "Jujutsu Kaisen - Volume 23",
        price: 18.26,
        stock: 90,
        description: "Sukuna reveals that he is the Disgraced One whom the Angel wants to kill. While Itadori grapples with that realization, Kenjaku sets in motion plans involving various nations.",
    },

    {
        productId: "manga_16",
        series: "Spy X Family - Volume 1",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-1-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-1-back.jpg",
        name: "Spy X Family - Volume 01",
        price: 12.84,
        stock: 100,
        description: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit!"
    },

    {
        productId: "manga_17",
        series: "Spy X Family - Volume 2",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-2-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-2-back.jpg",
        name: "Spy X Family - Volume 02",
        price: 14.43,
        stock: 100,
        description: "Twilight must infiltrate the prestigious Eden Academy to get close to his target Donovan Desmond, but does his daughter Anya even have the academic prowess to get in to the school?"
    },

    {
        productId: "manga_18",
        series: "Spy X Family - Volume 3",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-3-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-3-back.jpg",
        name: "Spy X Family - Volume 03",
        price: 5.88,
        stock: 100,
        description: "Twilight has overcome many challenges in putting together the Forger family, but now all his hard work might come undone when Yor’s younger brother Yuri pops in for a surprise visit!"
    },

    {
        productId: "manga_19",
        series: "Spy X Family - Volume 4",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-4-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-4-back.jpg",
        name: "Spy X Family - Volume 04",
        price: 18.78,
        stock: 100,
        description: "The Forgers look into adding a dog to their family, but this is no easy task—especially when Twilight has to simultaneously foil an assassination plot against a foreign minister!"
    },

    {
        productId: "manga_20",
        series: "Spy X Family - Volume 5",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-5-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-5-back.jpg",
        name: "Spy X Family - Volume 05",
        price: 14.51,
        stock: 100,
        description: "Anya Forger has been trying her best to befriend Damian Desmond, the son of the powerful Ostanian political leader Donovan Desmond, but her attempts have been constantly rebuffed."
    },

    {
        productId: "manga_21",
        series: "Spy X Family - Volume 6",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-6-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-6-back.jpg",
        name: "Spy X Family - Volume 06",
        price: 12.84,
        stock: 100,
        description: "Twilight and Nightfall enter an underground tennis tournament, hoping for an opportunity to obtain an intelligence document that threatens to bring the world to the brink of war!"
    },

    {
        productId: "manga_22",
        series: "Spy X Family - Volume 7",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-7-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-7-back.jpg",
        name: "Spy X Family - Volume 07",
        price: 8.76,
        stock: 100,
        description: "As Donovan Desmond is about to share a rare family moment with his son Damian, Twilight cuts in to meet his target face-to-face for the first time."
    },

    {
        productId: "manga_23",
        series: "Spy X Family - Volume 10",
        author: "Tatsuya Endo",
        category: "Family",
        cover1: "../img/books/spy x family/spy-x-family-volume-10-primary.jpg",
        cover2: "../img/books/spy x family/spy-x-family-volume-10-back.jpg",
        name: "Spy X Family - Volume 10",
        price: 10.38,
        stock: 100,
        description: "As a child, [REDACTED] lived a peaceful life with his parents, playing war games with his friends and having minor quarrels with his father."
    },

    {
        productId: "manga_24",
        series: "My Dress Up Darling - Volume 1",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-1-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-1-back.jpg",
        name: "My Dress Up Darling - Volume 01",
        price: 18.60,
        stock: 150,
        description: "Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner."
    },

    {
        productId: "manga_25",
        series: "My Dress Up Darling - Volume 2",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-2-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-2-back.jpg",
        name: "My Dress Up Darling - Volume 02",
        price: 6.32,
        stock: 150,
        description: "Though training to become an artisan who makes Hina doll heads, Wakana Gojo is instead making cosplay costumes for Marin Kitagawa, one of the most popular girls in the class."
    },

    {
        productId: "manga_26",
        series: "My Dress Up Darling - Volume 3",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-3-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-3-back.jpg",
        name: "My Dress Up Darling - Volume 03",
        price: 21.03,
        stock: 150,
        description: "Wakana and Marin make it through their very first cosplay event, and not long after, Marin’s heart undergoes a change…?!"
    },

    {
        productId: "manga_27",
        series: "My Dress Up Darling - Volume 6",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-6-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-6-back.jpg",
        name: "My Dress Up Darling - Volume 06",
        price: 17.69,
        stock: 150,
        description: "And that seems to be one of cosplay’s superpowers, as Wakana and Marin discover at an Ikebukuro event."
    },

    {
        productId: "manga_28",
        series: "My Dress Up Darling - Volume 7",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-7-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-7-back.jpg",
        name: "My Dress Up Darling - Volume 07",
        price: 11.22,
        stock: 150,
        description: "Marin's bestie and Wakana's classmate Nowa might seem a little flaky, but the girl has some serious instinct when love is in the air!"
    },

    {
        productId: "manga_29",
        series: "My Dress Up Darling - Volume 9",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-9-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-9-back.jpg",
        name: "My Dress Up Darling - Volume 09",
        price: 4.00,
        stock: 150,
        description: "To get the swanky DSLR camera of her dreams, Marin picks up more part-time work! And once she’s scraped up the cash to buy her shiny new gadget."
    },

    {
        productId: "manga_30",
        series: "My Dress Up Darling - Volume 10",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-10-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-10-back.jpg",
        name: "My Dress Up Darling - Volume 10",
        price: 21.69,
        stock: 150,
        description: "Cue Marin and her ever proactive mind! She rings up a certain someone to see if they’d be game for an impromptu cosplay collaboration, but it’s going to be a hard sell!"
    },
    {
        productId: "manga_31",
        series: "My Dress Up Darling - Volume 12",
        author: "Shinichi Fukuda",
        category: "Rom Com",
        cover1: "../img/books/my dress up darling/my-dress-up-darling-volume-12-primary.jpg",
        cover2: "../img/books/my dress up darling/my-dress-up-darling-volume-12-back.jpg",
        name: "My Dress Up Darling - Volume 12",
        price: 10.56,
        stock: 150,
        description: "Although the impromptu horror-game group cosplay came with a whole bunch of twists, from JuJu’s surprise costume to Akira’s rowdy outburst."
    },

    {
        productId: "manga_32",
        series: "Black Clover - Volume 7",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-7-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-7-back.jpg",
        name: "Black Clover - Volume 07",
        price: 15.64,
        stock: 150,
        description: "After the battle with the Eye of the Midnight Sun, the Wizard King suspects that there might be a traitor among the Magic Knights."
    },

    {
        productId: "manga_33",
        series: "Black Clover - Volume 15",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-15-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-15-back.jpg",
        name: "Black Clover - Volume 15",
        price: 20.27,
        stock: 150,
        description: "As the Royal Knights selection test enters its final stage, a surprising team is still in contention! Can Asta or Yuno take the crown?"
    },

    {
        productId: "manga_34",
        series: "Black Clover - Volume 21",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-21-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-21-back.jpg",
        name: "Black Clover - Volume 21",
        price: 14.79,
        stock: 150,
        description: "With Asta and Yuno now in the Shadow Palace, the time has finally come to settle the grudge with the elves that has lasted hundreds of years."
    },

    {
        productId: "manga_35",
        series: "Black Clover - Volume 23",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-23-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-23-back.jpg",
        name: "Black Clover - Volume 23",
        price: 17.09,
        stock: 150,
        description: "With the devil finally defeated, the Magic Knights are working hard to rebuild the damage done to the Clover Kingdom. Unfortunately for Asta, all the blame is being pinned on him and he’s set to be executed."
    },

    {
        productId: "manga_36",
        series: "Black Clover - Volume 24",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-24-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-24-back.jpg",
        name: "Black Clover - Volume 24",
        price: 7.02,
        stock: 150,
        description: "After six months of training in the Heart Kingdom, Asta and his fellow magic knights are ready to show off their improvements. Will Asta’s muscles be enough when the devil-powered Spade Kingdom begins their invasion, or will he need some new tricks?"
    },

    {
        productId: "manga_37",
        series: "Black Clover - Volume 25",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-25-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-7-back.jpg",
        name: "Black Clover - Volume 25",
        price: 13.31,
        stock: 150,
        description: "The Spade Kingdom’s Dark Triad has launched an all-out attack on the Heart Kingdom and the Black Bulls. While Asta and company have gotten stronger, can they stand up to these new devil-possessed mages? This might be the perfect time for Yami to save the day!"
    },

    {
        productId: "manga_38",
        series: "Black Clover - Volume 32",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-32-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-32-back.jpg",
        name: "Black Clover - Volume 32",
        price: 14.91,
        stock: 150,
        description: "To save Yami, the Black Bulls storm their way into enemy territory. And with a powered-up Asta joining the fight, the battle may be going their way. But when the most powerful devil in the underworld finally makes his appeareance."
    },

    {
        productId: "manga_39",
        series: "Black Clover - Volume 33",
        author: "Yuki Tabata",
        category: "Fantasy",
        cover1: "../img/books/black clover/black-clover-volume-33-primary.jpg",
        cover2: "../img/books/black clover/black-clover-volume-33-back.jpg",
        name: "Black Clover - Volume 33",
        price: 5.18,
        stock: 150,
        description: "In the battle for humanity, Yami, Nacht, and Yuno give it their all against the king of devils, but it may not be enough. It’ll be up to Asta and Leibe to surpass their limits together and finally avenge their mother!"
    },

    {
        productId: "manga_40",
        series: "Tokyo Ghoul - Volume 1",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-1-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-1-back.jpg",
        name: "Tokyo Ghoul - Volume 01",
        price: 20.39,
        stock: 150,
        description: "Ghouls live among us, the same as normal people in every way - except their craving for human flesh. Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize."
    },

    {
        productId: "manga_41",
        series: "Tokyo Ghoul - Volume 2",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-2-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-2-back.jpg",
        name: "Tokyo Ghoul - Volume 02",
        price: 20.73,
        stock: 150,
        description: "Unable to discard his humanity but equally unable to suppress his Ghoul hunger, Ken finds salvation in the kindness of friendly Ghouls who teach him how to pass as human and eat flesh humanely."
    },

    {
        productId: "manga_42",
        series: "Tokyo Ghoul - Volume 3",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-3-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-3-back.jpg",
        name: "Tokyo Ghoul - Volume 03",
        price: 20.09,
        stock: 150,
        description: "Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize."
    },

    {
        productId: "manga_43",
        series: "Tokyo Ghoul - Volume 5",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-5-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-5-back.jpg",
        name: "Tokyo Ghoul - Volume 05",
        price: 13.79,
        stock: 150,
        description: "Kaneki, Nishio, and Touka struggle to work together to rescue their human friend Kimi while Ghoul Investigator deaths skyrocket in Wards 9 through 12. When reinforcements are called in on both sides."
    },

    {
        productId: "manga_44",
        series: "Tokyo Ghoul - Volume 7",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-7-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-7-back.jpg",
        name: "Tokyo Ghoul - Volume 07",
        price: 9.99,
        stock: 150,
        description: "Kaneki is captured and then tortured by Yamori, one of Aogiri Tree organization's most sadistic members. To survive the interrogation, Kaneki will have to finally surrender to the Ghoul inside him."
    },

    {
        productId: "manga_45",
        series: "Tokyo Ghoul - Volume 9",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-9-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-9-back.jpg",
        name: "Tokyo Ghoul - Volume 09",
        price: 7.27,
        stock: 150,
        description: "Ghouls live among us, the same as normal people in every way—except their craving for human flesh. Ken Kaneki is an ordinary college student until a violent encounter turns him into the first half-human half-ghoul hybrid."
    },

    {
        productId: "manga_46",
        series: "Tokyo Ghoul - Volume 11",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-11-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-11-back.jpg",
        name: "Tokyo Ghoul - Volume 11",
        price: 21.00,
        stock: 150,
        description: "Amid clashes between Ghouls and the Commission of Counter Ghoul investigators at Doctor Kano’s underground facility, Kaneki finds himself locked in battle with Special Class Ghoul investigator Yukinori Shinohara."
    },

    {
        productId: "manga_47",
        series: "Tokyo Ghoul - Volume 14",
        author: "Sui Ishida",
        category: "Seinen",
        cover1: "../img/books/tokyo ghoul/tokyo-ghoul-volume-14-primary.jpg",
        cover2: "../img/books/tokyo ghoul/tokyo-ghoul-volume-14-back.jpg",
        name: "Tokyo Ghoul - Volume 14",
        price: 5.32,
        stock: 150,
        description: "As Kaneki and the fiercest fighter in the CCG, Arima, finally face off, several investigators launch an assault on Yoshimura, unaware of the danger that awaits them. The massive battle takes a turn for the worse when the One-Eyed Owl appears."
    },

    {
        productId: "manga_48",
        series: "One Punch Man - Volume 1",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-1-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-1-back.jpg",
        name: "One Punch Man - Volume 01",
        price: 16.8,
        stock: 150,
        description: "Nothing about Saitama passes the eyeball test when it comes to superheroes, from his lifeless expression to his bald head to his unimpressive physique."
    },

    {
        productId: "manga_49",
        series: "One Punch Man - Volume 5",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-5-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-5-back.jpg",
        name: "One Punch Man - Volume 05",
        price: 16.72,
        stock: 150,
        description: "To stop a Demon-level crisis, Saitama and company head toward the action. However, even Class S heroes prove to be no match for the Deep Sea King!"
    },

    {
        productId: "manga_50",
        series: "One Punch Man - Volume 9",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-9-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-9-back.jpg",
        name: "One Punch Man - Volume 09",
        price: 16.57,
        stock: 150,
        description: "Garo, a man who admires monsters, attacks the Hero Association! But after pulverizing the heroes there, he just leaves. What the heck does this guy want?! Meanwhile, Class-B, Rank-1 Miss Blizzard visits Saitama at his apartment."
    },

    {
        productId: "manga_51",
        series: "One Punch Man - Volume 18",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-18-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-18-back.jpg",
        name: "One Punch Man - Volume 18",
        price: 7.78,
        stock: 150,
        description: "Garo has just left the Monster Association’s hideout when he crosses paths with Saitama, who’s in quite a pinch, but Saitama still doesn't know Garo is the Hero Hunter. Later, King the Ripper can no longer hold back his murderous urges and confronts Garo himself!"
    },

    {
        productId: "manga_52",
        series: "One Punch Man - Volume 25",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-25-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-25-back.jpg",
        name: "One Punch Man - Volume 25",
        price: 18.68,
        stock: 150,
        description: "In an underground labyrinth, Puri-Puri Prisoner encounters Garo, who is now stronger than ever! Meanwhile, Saitama teams up with the hero Flash while both are lost underground."
    },

    {
        productId: "manga_53",
        series: "One Punch Man - Volume 26",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-26-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-26-back.jpg",
        name: "One Punch Man - Volume 26",
        price: 11.33,
        stock: 150,
        description: "As the fight against the Monster Association big shots heats up, Class-S heroes find themselves locked in a desperate struggle, but Tornado is closing in on Gyoro-Gyoro’s main body!"
    },

    {
        productId: "manga_54",
        series: "One Punch Man - Volume 27",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-27-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-27-back.jpg",
        name: "One Punch Man - Volume 27",
        price: 15.54,
        stock: 150,
        description: "Psychos intends to fuse with Orochi, the Monster King, which would give them immense power against Tornado. Superalloy confronts Garo and experiences fear of his opponent’s strength… Meanwhile, Saitama gets caught up in a cave-in in the underground labyrinth!"
    },

    {
        productId: "manga_55",
        series: "One Punch Man - Volume 28",
        author: "Yusuke Murata",
        category: "Shounen",
        cover1: "../img/books/one punch man/one-punch-man-volume-28-primary.jpg",
        cover2: "../img/books/one punch man/one-punch-man-volume-28-back.jpg",
        name: "One Punch Man - Volume 28",
        price: 18.65,
        stock: 150,
        description: "Psychos and Tornado’s psychic battle rages on! With Genos’s help, Tornado succeeds in rescuing the scattered heroes from their fight against the monsters, allowing her to unleash a devastating attack that warps the city…"
    },

    {
        productId: "manga_56",
        series: "Mashle Magic And Muscles - Volume 1",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-1-primary.jpg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-1-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 01",
        price: 5.55,
        stock: 150,
        description: "Mash just wants to live in peace with his father in the forest. But the only way he'll ever be accepted in the magic realm is by attending magic school and becoming a Divine Visionary."
    },

    {
        productId: "manga_57",
        series: "Mashle Magic And Muscles - Volume 3",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-3-primary.jpg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-3-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 03",
        price: 4.36,
        stock: 150,
        description: "Lang’s vicious hunt for coins is in full swing! To stop them from monopolizing the chance to earn a Divine Visionary position, Mash teams up with his Adler compatriots. Afterwards, the Sixth and Seventh Fangs of the Magia Lupus swoop in to attack Mash while he’s cleaning the owl huts."
    },

    {
        productId: "manga_58",
        series: "Mashle Magic And Muscles - Volume 9",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-9-primary.jpg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-9-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 09",
        price: 15.85,
        stock: 150,
        description: "Mash has narrowly avoided Innocent Zero’s attack, but more danger is soon to come as Mash faces his most loathsome foe yet - the end-of-semester test! Will his friends be able to save him from a failing mark and subsequent expulsion?"
    },

    {
        productId: "manga_59",
        series: "Mashle Magic And Muscles - Volume 14",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-14-primary.jpg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-14-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 14",
        price: 19.53,
        stock: 150,
        description: "Rayne is driven into a corner by Innocent Zero’s fourth son, Delisaster. Finn tries to jump in to help, but Rayne stubbornly refuses his brother’s aid. Meanwhile, Lance and Dot run into the third son, Epidem."
    },

    {
        productId: "manga_60",
        series: "Mashle Magic And Muscles - Volume 15",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-15-primary.jpg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-15-back.jpg",
        name: "Mashle: Magic And Muscles - Volume 15",
        price: 12.41,
        stock: 150,
        description: "Orter, Rayne, and the others join forces to try and take down Innocent Zero’s eldest son, Doom. But Doom overwhelms them all, and according to him, he’s still holding back. With Doom unaffected by their attacks, the situation seems desperate."
    },

    {
        productId: "manga_61",
        series: "Mashle Magic And Muscles - Volume 16",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-16-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-16-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 16",
        price: 11.45,
        stock: 150,
        description: "Mash shows off the hard-won results of his strenuous training against his greatest and final obstacle before confronting Innocent Zero—Doom! Now that he knows the extent of his body’s capabilities and how to control them, Mash’s strength has grown to an unimaginable level!"
    },

    {
        productId: "manga_62",
        series: "Mashle Magic And Muscles - Volume 17",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-17-primary.jpeg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-17-back.jpeg",
        name: "Mashle: Magic And Muscles - Volume 17",
        price: 9.56,
        stock: 150,
        description: "Innocent Zero’s youngest child, Domina, steps in to put a stop to his father’s pursuit of Mash. Using the reprieve afforded them, Mash’s friends race against the clock in hopes of getting him to Meliadoul."
    },

    {
        productId: "manga_63",
        series: "Mashle Magic And Muscles - Volume 18",
        author: "Hajime Komoto",
        category: "Comedy",
        cover1: "../img/books/mashle/mashle-magic-and-muscles-volume-18-primary.jpg",
        cover2: "../img/books/mashle/mashle-magic-and-muscles-volume-18-back.jpg",
        name: "Mashle Magic And Muscles - Volume 18",
        price: 15.41,
        stock: 150,
        description: "Innocent Zero has exceeded the limits of human existence and become a god! Humanity has no choice but to bow down before his awe-inspiring divinity. Except for Mash, whose muscles have unlocked an unimaginable power to give Innocent Zero a flick to the forehead he won’t soon forget!"
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
                parseInt(productInputStock.value),
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
                        <img src="${p.cover1}" alt="product-cover" id="product-img">
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
                        $${p.price}
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

                <input type="text" class="input input__pagi" id="input-product__pagi" > / ${productTotalPages}
                
                <button class="button button__product__next-pagi" style="margin-left: 15px"
                id="button__product__next-pagi"> >> </button>
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
                .getElementById("button__product__next-pagi")
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

        const confirmToDelete = confirm("Are you sure you want to delete this product?");
        if (!confirmToDelete) return

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
        localStorage.setItem('productTable', JSON.stringify(productTable));
    }
}


