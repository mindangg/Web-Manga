











//best slider popup

document.getElementById("best__item1").addEventListener("click", function(){
    document.querySelector(".product__page").style.display = "inline";
    document.querySelector(".product").style.animationName = "topDown";
    showBestInfo();
})

document.getElementById("product__view2").addEventListener("click", function(){
    document.getElementById("product__img1").style.opacity = 0;
})

document.getElementById("product__view1").addEventListener("click", function(){
    document.getElementById("product__img1").style.opacity = 1;
})

document.getElementById("product__close").addEventListener("click", function(){
    document.getElementById("product__img1").style.opacity = 1;
})


document.getElementById("product__close").addEventListener("click", function(){
    document.querySelector(".product").style.animationName = "bottomUp";
    setTimeout(function(){
        document.querySelector(".product__page").style.display = "none";
      }, 365);
})

// function showBestInfo(){
//     const productInfo = document.querySelector(".product__page")
//     productInfo.innerHTML = `
//             <div class="product">
//                 <a id="product__close"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
//                 <div class="product__img">
//                     <img id="product__img1" src="${p.img1}">
//                     <img id="product__img2" src="${p.img2}">

//                     <a id="product__view1"><img src="${p.img1}"></a>

//                     <a id="product__view2"><img src="${p.img2}"></a>

//                 </div>
    
//                 <div class="product__info">
//                     <h1></h1>
//                     <div class="product__info--rating">
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                     </div>
//                     <p>Author: ${p.author}</p>
//                     <h2></h2>
//                     <p></p>
//                     <p>Quantity: </p>
    
//                     <button id="product__quantitydown">-</button><input type="text" id="product__quantity" value="1"><button id="product__quantityup">+</button><br>
//                     <button id="product__add">Add to cart</button>
    
//                     <p>Availability: ${p.stock}</p><br>
//                     <h4>Description</h4>
//                     <p>${p.descr1}</p><br>
//                     <p>${p.descr2}</p>
//                 </div>
//                 </div>
//             </div>
// `
// }
































var productArray = [
    {
        productId:"manga_11", 
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
        productId: "manga_10", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Comedy", 
        img1: "../img/books/spy x family/spy-x-family-volume-2-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-2-back.jpg", 
        name: "Spy X Family - Volume 02", 
        price: 9.59, 
        stock: 100,
        descr1: "Spy x Family manga volume 2 features story and art by Tatsuya Endo.",
        descr2: "Twilight must infiltrate the prestigious Eden Academy to get close to his target Donovan Desmond, but does his daughter Anya even have the academic prowess to get in to the school? But perhaps the truly impossible mission is making sure Anya becomes a school scholar and befriends Donovan’s arrogant son, Damian!"
    },
    {
        productId: "manga_9", 
        series: "Spy X Family", 
        author: "Tatsuya Endo", 
        category: "Comedy", 
        img1: "../img/books/spy x family/spy-x-family-volume-1-primary.jpg", 
        img2: "../img/books/spy x family/spy-x-family-volume-1-back.jpg", 
        name: "Spy X Family - Volume 01", 
        price: 9.59, 
        stock: 100,
        descr1: "Spy x Family manga volume 1 features story and art by Tatsuya Endo.",
        descr2: "Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head!"
    },	

    {
        productId:"manga_8", 
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
        productId: "manga_7", 
        series: "My Dress Up Darling", 
        author: "Fukuda Shinichi", 
        category: "Rom-Com", 
        img1: "../img/books/my dress up darling/my-dress-up-darling-volume-6-primary.jpg", 
        img2: "../img/books/my dress up darling/my-dress-up-darling-volume-6-back.jpg", 
        name: "My Dress Up Darling - Volume 06", 
        price: 9.99, 
        stock: 150,
        descr1: "My Dress-Up Darling manga volume 6 features story and art by Shinichi Fukuda.",
        descr2: "Ever since he got roped into helping Marin, Wakana has had his world and perceptions expanded by cosplay. In fact, it’s even helped him find peace with himself!"
    },
    {
        productId: "manga_6", 
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
        productId: "manga_5", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Action", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        name: "Jujutsu Kaisen - Volume 04", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 4 features story and art by Gege Akutami.",
        descr2: "While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off. However, Junpei is also befriended by the culprit behind the bloody incidents—Mahito, a mischievous cursed spirit! Mahito sets in motion a devious plan involving Junpei, hoping to ensnare Itadori as well.",
    },
    {
        productId: "manga_4", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Action", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-14-primary.jpg", 
        name: "Jujutsu Kaisen - Volume 14", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 14 features story and art by Gege Akutami.",
        descr2: "Sukuna, unleashed, is wrecking Shibuya, and Fushiguro has suffered a serious injury from a curse user’s surprise attack. Fushiguro comes up with a desperate plan to deal with both the rampaging Sukuna and the curse user, but the cost will be grave…",
    },
    {
        productId: "manga_3", 
        series: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        category: "Action", 
        img1: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        img2: "../img/books/jujutsu kaisen/jujutsu-kaisen-volume-4-primary.jpg", 
        name: "Jujutsu Kaisen - Volume 04", 
        price: 7.99, 
        stock: 90,
        descr1: "Jujutsu Kaisen manga volume 04 features story and art by Gege Akutami.",
        descr2: "While investigating a strange set of mysterious deaths, Itadori meets Junpei, a troubled kid who is often bullied at school, and they immediately hit it off. However, Junpei is also befriended by the culprit behind the bloody incidents—Mahito, a mischievous cursed spirit! Mahito sets in motion a devious plan involving Junpei, hoping to ensnare Itadori as well.",
    },

    {
        productId: "manga_2", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action", 
        img1: "../img/books/sakamoto days/sakamoto-days-volume-10-primary.jpg", 
        img2: "..img/books/sakamoto days/sakamoto-days-volume-10-back.jpg", 
        name: "Sakamoto Days - Volume 10", 
        price: 9.99, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 10 features story and art by Yuto Suzuki.",
        descr2: "As Sakamoto and his friends hunt for the database at the JCC, Shin winds up in a serious duel with a teacher who might have information on what they want. Meanwhile, Sakamoto deals with Amane, a boy with a connection to X. Thanks to X's schemes, the JCC faces an unprecedented crisis!",
    },
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
        productId: "manga_0", 
        series: "Sakamoto Days", 
        author: "Suzuki Yuto", 
        category: "Action", 
        img1: "../img/books/sakamoto days/sakamoto-days-volume-5-primary.jpg", 
        img2: "img/books/sakamoto days/sakamoto-days-volume-5-back.jpg", 
        name: "Sakamoto Days - Volume 05", 
        price: 9.99, 
        stock: 120,
        descr1: "Sakamoto Days manga volume 5 features story and art by Yuto Suzuki.",
        descr2: "The situation is fraught during the casino battle between Sakamoto’s staff and the Chinese triad. Can they protect Lu and get info on the bounty?! To make matters worse, the very worst assassins from overseas are gunning for Sakamoto!",
    },	
];











