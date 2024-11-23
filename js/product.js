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
    }
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
        // if (!Product.checkIsImg()) {
        //     return
        // }
        // if (Product.checkIsBlank() ||
        //     !Product.checkIsStock() ||
        //     !Product.checkIsPrice()) {
        //     return
        // } else {
        //     handleAdd()
        // }

        handleAdd();

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
