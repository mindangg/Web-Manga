class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
    <header>
        <nav class="navbar">
            <!-- logo -->
            <div class="navbar__logo">
                <a href="index.html"><img src="../img/WEBTOON_Logo.png" alt="website logo"></a>
            </div>
            <!-- links -->
            <ul class="navbar__links">
                <li class="navbar__link--home"><a href="#" class="navbar__link">Home</a></li>
                <li class="navbar__link--series">
                    <a href="#" class="navbar__link">Series</a>
                    <div class="navbar__series">
                        <ul>
                            <li><a href="">Sakamoto Days</a></li>
                            <li><a href="">My Dress Up Darling</a></li>
                            <li><a href="">One Punch Man</a></li>
                            <li><a href="">Naruto</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Black Clover</a></li>
                            <li><a href="">Conan</a></li>
                            <li><a href="">Doraemon</a></li>
                            <li><a href="">Chain Saw Man</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Demon Slayer</a></li>
                            <li><a href="">Jujutsu Kaisen</a></li>
                            <li><a href="">Black Clover</a></li>
                            <li><a href="">Mob Psycho 100</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Spy X Family</a></li>
                            <li><a href="">One Piece</a></li>
                            <li><a href="">Mashle: Magic And Muscles</a></li>
                            <li><a href="">My Hero Academia</a></li>
                        </ul>
                    </div>
                </li>

                <li class="navbar__link--category">
                    <a href="#" class="navbar__link">Category</a>
                    <div class="navbar__category">
                        <ul>
                            <li><a href="">Shounen</a></li>
                            <li><a href="">Slice Of Life</a></li>
                            <li><a href="">Psychology</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Rom-Com</a></li>
                            <li><a href="">Seinen</a></li>
                            <li><a href="">Horror</a></li>
            
                        </ul>
            
                        <ul>
                            <li><a href="">Family</a></li>
                            <li><a href="">Brain Rot</a></li>
                            <li><a href="">Shoujo</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Jousei</a></li>
                            <li><a href="">Drama</a></li>
                            <li><a href="">Action</a></li>
                        </ul>
                    </div>
                </li>
                
                <li class="navbar__link--author">
                    <a href="#" class="navbar__link">Author</a>
                    <div class="navbar__author">
                        <ul>
                            <li><a href="">Oda Eiichiro</a></li>
                            <li><a href="">Fukuda Shinichi</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Kishimoto Masashi</a></li>
                            <li><a href="">Aoyama Gōshō</a></li>
            
                        </ul>
            
                        <ul>
                            <li><a href="">Tabata Yūki</a></li>
                            <li><a href="">Isayama Hajime</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Horikoshi Kohei</a></li>
                            <li><a href="">Gege Akutami</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar__link--price">
                    <a href="#" class="navbar__link">Price</a>
                    <div class="navbar__price">
                        <ul>
                            <li><a href="">Under $10 Dollars</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">$10 To $20 Dollars</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">$20 To $50 dollars</a></li>
                        </ul>
            
                        <ul>
                            <li><a href="">Over $50 dollars</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar__link--about"><a href="#special-footer" class="navbar__link">About Us</a></li>
            </ul>

            <!-- nav bar icons -->
            <div class="navbar__home">
                <a id="search__icon"><i class="fa-solid fa-magnifying-glass" style="color:white;"></i></a>
                <a href="../html/login.html" id="login_icon"><i class="fa-regular fa-user" style="color:white;"></i></a>
                <a id="shopping__icon"><i class="fa-solid fa-cart-shopping" style="color:white;"></i></a>
            </div>
        </nav>

        <!-- searchbox -->
        <div class="search__popup">
            <div class="search">
                <div class="searchbox">
                    <input type="search" placeholder="Search for...">
                    <a id="search__close"><i class="fa-solid fa-xmark" style="color:white;"></i></a>
                </div> 
            </div>
        </div>

        <!-- shopping cart -->
        <div class="shopping__popup">
            <div class="shopping__container">
                <a id="shopping__close"><i class="fa-solid fa-xmark" style="color:white;"></i></a>     
                <div class="shopping">
                    <div class="shopping__icon">
                        <i class="fa-solid fa-cart-shopping" style="color:white;"></i>
                    </div>
                    <br>
                    <h2>Your cart is empty</h2>
                    <button class="shopping__btn">Continue shopping</button>
                </div>
            </div>
        </div>
    </header>
        `
    }
}

customElements.define(`special-header`, SpecialHeader);

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
                <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <a><img src="../img/WEBTOON_Logo.png" class="footer__logo"></a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt culpa porro earum dolores dolorem enim. Reprehenderit voluptates hic illo ipsa molestias odio, minima saepe recusandae illum quo dolor, impedit expedita?</p>
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
                <h3>Newsletter <div class="footer__underline"><span></span></div> </h3>
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
        </div><br><br><br>
        <hr>
        <p class="copyright">© 2024, Web Development, Powered by J97</p>
    </footer>
        `
    }
}

customElements.define(`special-footer`, SpecialFooter);

// search and shopping cart popup

document.getElementById("search__icon").addEventListener("click", function(){
    document.querySelector(".search__popup").style.display = "flex";
})

document.getElementById("shopping__icon").addEventListener("click", function(){
    document.querySelector(".shopping__popup").style.display = "flex";
})

document.getElementById("search__close").addEventListener("click", function(){
    document.querySelector(".search__popup").style.display = "none";
})

document.getElementById("shopping__close").addEventListener("click", function(){
    document.querySelector(".shopping__popup").style.display = "none";
})

