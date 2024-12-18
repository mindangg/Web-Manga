class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header>
        <nav class="navbar">
            <!-- logo -->
            <div class="navbar__logo">
                <a onclick="viewHome()"><img src="../img/OnlyManga.png" alt="website logo"></a>
            </div>
            <!-- links -->
            <ul class="navbar__links">
                <li class="navbar__link--home"><a href="index.html" class="navbar__link">Home</a></li>
                <li class="navbar__link--product"><a class="navbar__link" onclick="viewAllProduct()">Product</a></li>
                <li class="navbar__link--series">
                    <a class="navbar__link">Series</a>
                    <div class="navbar__series">
                        <ul>
                            <li><a onclick="setURLForNavSearch('sakamoto-days')">Sakamoto Days</a></li>
                            <li><a onclick="setURLForNavSearch('my-dress-up-darling')">My Dress Up Darling</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('black-clover')">Black Clover</a></li>
                            <li><a onclick="setURLForNavSearch('tokyo-ghoul')">Tokyo Ghoul</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('jujutsu-kaisen')">Jujutsu Kaisen</a></li>
                            <li><a onclick="setURLForNavSearch('mashle-magic-and-muscles')">Mashle: Magic And Muscles</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('one-punch-man')">One Punch Man</a></li>
                            <li><a onclick="setURLForNavSearch('spy-x-family')">Spy X Family</a></li>
                        </ul>
                    </div>
                </li>

                <li class="navbar__link--category">
                    <a class="navbar__link">Category</a>
                    <div class="navbar__category">
                        <ul>
                            <li><a onclick="setURLForNavSearch('', 'shounen')">Shounen</a></li>
                            <li><a onclick="setURLForNavSearch('', 'seinen')">Seinen</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', 'rom-com')">Rom Com</a></li>
                            <li><a onclick="setURLForNavSearch('', 'action')">Action</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', 'family')">Family</a></li>
                            <li><a onclick="setURLForNavSearch('', 'comedy')">Comedy</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', 'fantasy')">Fantasy</a></li>
                            <li><a onclick="setURLForNavSearch('', 'dark-fantasy')">Dark Fantasy</a></li>
                        </ul>
                    </div>
                </li>

                <li class="navbar__link--author">
                    <a class="navbar__link">Author</a>
                    <div class="navbar__author">
                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', 'yusuke-murata')">Yusuke Murata</a></li>
                            <li><a onclick="setURLForNavSearch('', '', 'shinichi-fukuda')">Shinichi Fukuda</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', 'hajime-komoto')">Hajime Komoto</a></li>
                            <li><a onclick="setURLForNavSearch('', '', 'yuki-tabata')">Yuki Tabata</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', 'sui-ishida')">Sui Ishida</a></li>
                            <li><a onclick="setURLForNavSearch('', '', 'gege-akutami')">Gege Akutami</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', 'yuto-suzuki')">Yuto Suzuki</a></li>
                            <li><a onclick="setURLForNavSearch('', '', 'tatsuya-endo')">Tatsuya Endo</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar__link--price">
                    <a class="navbar__link">Price</a>
                    <div class="navbar__price">
                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', '','under-7-dollars')">Under $7 Dollars</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', '','7-to-12-dollars')">$7 To $12 Dollars</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', '','12-to-17-dollars')">$12 To $17 Dollars</a></li>
                        </ul>

                        <ul>
                            <li><a onclick="setURLForNavSearch('', '', '','over-17-dollars')">Over $17 Dollars</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar__link--about"><a href="#special-footer" class="navbar__link">About Us</a></li>
            </ul>

            <!-- nav bar icons -->
            <div class="navbar__home" id="navbar__home" style="display: flex">
                <a id="search__icon"><i class="fa-solid fa-magnifying-glass"></i></a>
                <div style="display: flex">
                    <a id="login__icon" onclick="viewUserInfo()">
                        <i class="fa-regular fa-user"></i>
                    </a>
                    <div></div>
                </div>
                <a id="shopping__icon" onclick="viewCart()"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div class="navbar__bar" id="navbar__bar">
                <a id="navbar__bar__icon"><i class="fa-solid fa-bars"></i></a>
                <div style="display: flex">
                    <a href="#" id="login__icon__responsive">
                        <i class="fa-regular fa-user"></i>
                    </a>
                    <div></div>
                </div>
            </div>

             <div class="navbar__responsive__popup">
                <div class="navbar__responsive">
                    <div class="navbar__responsive__close">
                        <a id="navbar__responsive__close__button"><i class="fa-solid fa-xmark"></i></a>
                    </div>
                    <ul class="navbar__responsive__links">
                        <li class="navbar__responsive--home">
                            <a href="index.html" class="navbar__responsive__link">Home</a>
                        </li>
                        <li class="navbar__responsive--product">
                            <a onclick="viewAllProduct()" class="navbar__responsive__link">Product</a>
                        </li>
                        <li class="navbar__responsive--series">
                            <a class="navbar__responsive__link">Series</a>
                            <button id="navbar__responsive--series__button">
                                <i class="fa-solid fa-angle-right" id="right__angle"></i>
                                <i class="fa-solid fa-arrow-right" id="right__arrow"></i>
                            </button>
                        </li>
                        <li class="navbar__responsive--category">
                            <a class="navbar__responsive__link">Category</a>
                            <button id="navbar__responsive--category__button">
                                <i class="fa-solid fa-angle-right" id="right__angle"></i>
                                <i class="fa-solid fa-arrow-right" id="right__arrow"></i>
                            </button>
                        </li>
                        <li class="navbar__responsive--author">
                            <a class="navbar__responsive__link">Author</a>
                            <button id="navbar__responsive--author__button">
                                <i class="fa-solid fa-angle-right" id="right__angle"></i>
                                <i class="fa-solid fa-arrow-right" id="right__arrow"></i>
                            </button>
                        </li>
                        <li class="navbar__responsive--price">
                            <a class="navbar__responsive__link">Price</a>
                            <button id="navbar__responsive--price__button">
                                <i class="fa-solid fa-angle-right" id="right__angle"></i>
                                <i class="fa-solid fa-arrow-right" id="right__arrow"></i>
                            </button>
                        </li>
                        <li class="navbar__responsive--about">
                            <a href="#special-footer" class="navbar__responsive__link">About Us</a>
                        </li>
                    </ul>

                    <ul class="navbar__responsive--series__drops">
                        <li id="navbar__responsive--series__back"><a><i class="fa-solid fa-angle-left"></i></a></li>
                        <li><a onclick="setURLForNavSearch('sakamoto-days')">Sakamoto Days</a></li>
                        <li><a onclick="setURLForNavSearch('my-dress-up-darling')">My Dress Up Darling</a></li>
                        <li><a onclick="setURLForNavSearch('black-clover')">Black Clover</a></li>
                        <li><a onclick="setURLForNavSearch('tokyo-ghoul')">Tokyo Ghoul</a></li>
                        <li><a onclick="setURLForNavSearch('jujutsu-kaisen')">Jujutsu Kaisen</a></li>
                        <li><a onclick="setURLForNavSearch('mashle-magic-and-muscles')">Mashle: Magic And Muscles</a></li>
                        <li><a onclick="setURLForNavSearch('one-punch-man')">One Punch Man</a></li>
                        <li><a onclick="setURLForNavSearch('spy-x-family')">Spy X Family</a></li>
                    </ul>
        
                    <ul class="navbar__responsive--category__drops">
                        <li id="navbar__responsive--category__back"><a><i class="fa-solid fa-angle-left"></i></a></li>
                        <li><a onclick="setURLForNavSearch('', 'shounen')">Shounen</a></li>
                        <li><a onclick="setURLForNavSearch('', 'seinen')">Seinen</a></li>
                        <li><a onclick="setURLForNavSearch('', 'rom-com')">Rom Com</a></li>
                        <li><a onclick="setURLForNavSearch('', 'action')">Action</a></li>
                        <li><a onclick="setURLForNavSearch('', 'family')">Family</a></li>
                        <li><a onclick="setURLForNavSearch('', 'comedy')">Comedy</a></li>
                        <li><a onclick="setURLForNavSearch('', 'fantasy')">Fantasy</a></li>
                        <li><a onclick="setURLForNavSearch('', 'dark-fantasy')">Dark Fantasy</a></li>
                    </ul>
    
                    <ul class="navbar__responsive--author__drops">
                        <li id="navbar__responsive--author__back"><a><i class="fa-solid fa-angle-left"></i></a></li>
                        <li><a onclick="setURLForNavSearch('', '', 'yusuke-murata')">Yusuke Murata</a></li>
                        <li><a onclick="setURLForNavSearch('', '', 'shinichi-fukuda')">Shinichi Fukuda</a></li>
                        <li><a onclick="setURLForNavSearch('', '', 'hajime-komoto')">Hajime Komoto</a></li>
                        <li><a onclick="setURLForNavSearch('', '', 'yuki-tabata')">Yuki Tabata</a></li>   
                        <li><a onclick="setURLForNavSearch('', '', 'sui-ishida')">Sui Ishida</a></li>
                        <li><a onclick="setURLForNavSearch('', '', 'gege-akutami')">Gege Akutami</a></li>    
                        <li><a onclick="setURLForNavSearch('', '', 'yuto-suzuki')">Yuto Suzuki</a></li>
                        <li><a onclick="setURLForNavSearch('', '', 'tatsuya-endo')">Tatsuya Endo</a></li>
                    </ul>
        
                    <ul class="navbar__responsive--price__drops">
                        <li id="navbar__responsive--price__back"><a><i class="fa-solid fa-angle-left"></i></a></li>
                        <li><a onclick="setURLForNavSearch('', '', '', 'under-7-dollars')">Under $7 Dollars</a></li>
                        <li><a onclick="setURLForNavSearch('', '', '', '7-to-12-dollars')">$7 To $12 Dollars</a></li>
                        <li><a onclick="setURLForNavSearch('', '', '', '12-to-17-dollars')">$12 To $17 Dollars</a></li>
                        <li><a onclick="setURLForNavSearch('', '', '', 'over-17-dollars')">Over $17 Dollars</a></li>
                    </ul>
                </div>
            </div>    

        </nav>

        <!-- searchbox -->
        <div class="search__popup">
            <div class="search">
                <div class="searchbox">
                    <input id="search__input" type="search" placeholder="Search for...">
                    <a id="search__close" onclick="closeSearch()"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
                </div>

                <a id="filter" onclick="showFilter()"><i class="fa-solid fa-filter" style="color:white"></i></a>

                <div class="filter__container">
                    <select id="filter__category">
                        <option value="">All</option>
                        <option value="shounen">Shounen</option>
                        <option value="seinen">Seinen</option>
                        <option value="rom-com">Rom Com</option>
                        <option value="action">Action</option>
                        <option value="family">Family</option>
                        <option value="comedy">Comedy</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="dark-fantasy">Dark Fantasy</option>
                    </select>

                    <span style="color:white">Price</span>
                    <input type="text" placeholder="Min" id="filter__min" onkeypress="return event.charCode>=48 && event.charCode<=57">
                    <span style="color:white">to</span>
                    <input type="text" placeholder="Max" id="filter__max" onkeypress="return event.charCode>=48 && event.charCode<=57">
                    <a style="color:white" onclick="searchProduct()"><i class="fa-solid fa-magnifying-glass-dollar"></i></a>
                </div>
            </div>
        </div>

        <!-- shopping cart -->
        <div class="shopping__popup">
            <div class="shopping__container">
                <a id="shopping__close" onclick="closeEmptyCart()"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
                <div class="shopping">
                    <div class="shopping__icon">
                        <i class="fa-solid fa-cart-shopping" style="color:white;"></i>
                    </div>
                    <br>
                    <h2>Your cart is empty</h2>
                    <button class="shopping__btn" onclick="closeEmptyCart()">Continue shopping</button>
                </div>
            </div>
        </div>
    </header>   
    `
    }
}

customElements.define(`special-header`, SpecialHeader);

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <a><img src="../img/OnlyManga.png"></a>
                <p>Address: 340 Đ. Hoang Van Thu, Ward 4, Tan Binh, Ho Chi Minh</p>
                <p>Web programming and its application</p>
            </div>

            <div class="footer__content">
                <h3>Customer Service <div class="footer__underline"><span></span></div> </h3>
                <p>FAQs</p>
                <p>Returns Policy</p>
                <p>Refund Policy</p>
                <p class="footer__email--id">thanhsang@sgu.edu.vn</p>
                <div style="display: flex";>
                    <i class="fa-solid fa-phone" style="margin-right: 10px;"></i>
                    <h4>076-302-0810</h4>
                </div>
            </div>

            <div class="footer__content">
                <h3>Legal <div class="footer__underline"><span></span></div> </h3>
                <p>Terms & Conditions</p>
                <p>Privacy Notice</p>
            </div>


            <div class="footer__content">
                <h3>Newsletter <div class="footer__underline"><span></span></div></h3>
                <form class="footer__form">
                    <i class="fa-regular fa-envelope" style="color:white;"></i>
                    <input type="email" placeholder="E-mail" required>
                    <button type="submit">></button>
                </form>

                <div class="footer__social--icons">
                    <a><i class="fa-brands fa-instagram" style="color:white;"></i></a>
                    <a href="https://www.tiktok.com/@_.mindang?_t=8qOahI38W4V&_r=1" target="_blank"><i class="fa-brands fa-tiktok" style="color:white;"></i></a>
                    <a><i class="fa-brands fa-facebook" style="color:white;"></i></a>
                    <a href="https://www.youtube.com/@dangkoo4896" target="_blank"><i class="fa-brands fa-youtube" style="color:white;"></i></a>
                </div>
            </div>
            <hr>
            <p class="copyright">© 2024, Web Development, Powered by J97</p>
        </div>
    </footer>
        `
    }
}

customElements.define(`special-footer`, SpecialFooter);

//navigation between pages


const loginPage = document.querySelector('.login__page')
const signUpPage = document.querySelector('.signup__page')

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("login__icon").addEventListener("click", viewUserInfo);

    document.getElementById("login__icon__responsive").addEventListener("click", viewUserInfo);
})


document.getElementById("login__signup--nav").addEventListener("click", function () {
    setURLForPage('signup')
    renderView(signUpPage);
    clearField(signUpPage)
})

document.getElementById("signup__login--nav").addEventListener("click", function () {
    setURLForPage('login')
    renderView(loginPage);
    clearField(loginPage)
})

// search, shopping cart, filter popup

document.getElementById("search__icon").addEventListener("click", function () {
    document.querySelector(".search__popup").style.display = "flex";
    document.querySelector(".search").style.animationName = "rightToLeft"
})

function closeSearch() {
    if (document.getElementById("filter").className == "filter__active") {
        document.getElementById("filter").classList.remove("filter__active")
        document.querySelector(".filter__container").style.display = "none"
        document.getElementById("filter__min").value = ""
        document.getElementById("filter__max").value = ""
    }

    document.querySelector(".search").style.animationName = "leftToRight"
    setTimeout(function () {
        document.querySelector(".search__popup").style.display = "none";
    }, 390);
}

function viewEmptyCart(){
    document.querySelector(".shopping__popup").style.display = "flex";
    document.querySelector(".shopping__container").style.animationName = "rightToLeft"
}

function closeEmptyCart(){
    document.querySelector(".shopping__container").style.animationName = "leftToRight"
    setTimeout(function () {
        document.querySelector(".shopping__popup").style.display = "none";
    }, 390);
}

function showFilter() {
    if (document.getElementById("filter").className == "") {
        document.getElementById("filter").classList.add("filter__active")
        document.querySelector(".filter__container").style.display = "inline"
    }

    else {
        document.getElementById("filter").classList.remove("filter__active")
        document.querySelector(".filter__container").style.display = "none"
        document.getElementById("filter__min").value = ""
        document.getElementById("filter__max").value = ""
    }
}

//responsive
document.getElementById("navbar__bar__icon").addEventListener("click", function () {
    document.querySelector(".navbar__responsive__popup").style.display = "inline"
    document.querySelector(".navbar__responsive").style.animationName = "bottomUp"
})

document.getElementById("navbar__responsive__close__button").addEventListener("click", function () {
    document.querySelector(".navbar__responsive").style.animationName = "topDown";
    setTimeout(function () {
        document.querySelector(".navbar__responsive--series__drops").style.display = "none"
        document.querySelector(".navbar__responsive--category__drops").style.display = "none"
        document.querySelector(".navbar__responsive--author__drops").style.display = "none"
        document.querySelector(".navbar__responsive--price__drops").style.display = "none"

        document.querySelector(".navbar__responsive__links").style.display = "inline"
        document.querySelector(".navbar__responsive__popup").style.display = "none"

    }, 300)
    console.log("hello")
})


window, onresize = function () {
    if (window.innerWidth > 619) {
        document.querySelector(".navbar__responsive__popup").style.display = "none";
    }
}

document.querySelector(".navbar__responsive--series").addEventListener("click", function () {
    document.querySelector(".navbar__responsive__links").style.display = "none"
    document.querySelector(".navbar__responsive--series__drops").style.display = "inline"
})

document.getElementById("navbar__responsive--series__back").addEventListener("click", function () {
    document.querySelector(".navbar__responsive--series__drops").style.display = "none"
    document.querySelector(".navbar__responsive__links").style.display = "inline"
})

document.querySelector(".navbar__responsive--category").addEventListener("click", function () {
    document.querySelector(".navbar__responsive__links").style.display = "none"
    document.querySelector(".navbar__responsive--category__drops").style.display = "inline"
})

document.getElementById("navbar__responsive--category__back").addEventListener("click", function () {
    document.querySelector(".navbar__responsive--category__drops").style.display = "none"
    document.querySelector(".navbar__responsive__links").style.display = "inline"
})

document.querySelector(".navbar__responsive--author").addEventListener("click", function () {
    document.querySelector(".navbar__responsive__links").style.display = "none"
    document.querySelector(".navbar__responsive--author__drops").style.display = "inline"
})

document.getElementById("navbar__responsive--author__back").addEventListener("click", function () {
    document.querySelector(".navbar__responsive--author__drops").style.display = "none"
    document.querySelector(".navbar__responsive__links").style.display = "inline"
})

document.querySelector(".navbar__responsive--price").addEventListener("click", function () {
    document.querySelector(".navbar__responsive__links").style.display = "none"
    document.querySelector(".navbar__responsive--price__drops").style.display = "inline"
})

document.getElementById("navbar__responsive--price__back").addEventListener("click", function () {
    document.querySelector(".navbar__responsive--price__drops").style.display = "none"
    document.querySelector(".navbar__responsive__links").style.display = "inline"
})