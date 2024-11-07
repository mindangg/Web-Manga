// =================================================
// Class nay dung de xu ly cac chuc nang phu
// =================================================
class Helper {
    static clearForm(e) {
        const queryProductInput = e.querySelectorAll("input, select");
        queryProductInput.forEach((input) => {
            document.getElementById(input.id).value = "";
        });
    }
}
// =================================================
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

const productSearchName = document.getElementById(
    "product-table__search-input--name"
);
const productSearchCategory = document.getElementById(
    "product-table__search-input--category"
);
const productSearchPriceMin = document.getElementById(
    "product-table__search-price--min"
);
const productSliderPriceMin = document.querySelector(".min");
const sortIdProduct = document.querySelector(".product-table__cell--id");

// Product table
let productTable = [
    {
        author: "Suzuki Yuto",
        productId: "manga_0",
        cover1: "../img/books/sakamoto days/sakamoto-days-volume-6-primary.jpg",
        cover2: "../img/books/sakamoto days/sakamoto-days-volume-6-back.jpg",
        series: "Sakamoto Days",
        category: "Action",
        stock: 150,
        price: 9.99,
        description: "Sakamoto Days manga volume 6 features story and art by Yuto Suzuki.",
    },
];
// ========================================================================
// PRODUCT TABLE
// ========================================================================
// class san pham
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
    // INSERT
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
    // ADD EVENT
    // ======================================================================== 
    // khi an vao nut add thi se insert san pham
    static add() {
        console.log("Adding product...");
        Product.insert(
            `manga_${Product.generateId(productTable)}`,
            `../img/banner/${productInputCover1.value.split("\\")[2]}`,
            `../img/banner/${productInputCover2.value.split("\\")[2]}`,
            productInputSeries.value,
            productInputCategory.value,
            productInputAuthor.value,
            productInputStock.value,
            parseFloat(productInputPrice.value),
            productInputDescription.value
        );

        localStorage.setItem("productTable", JSON.stringify(productTable));
        console.log("* Insert product to table: ", productTable);
        console.log(
            "* Insert product from table to local storage: ",
            JSON.parse(localStorage.getItem("product table"))
        );

        let renderProduct = JSON.parse(
            localStorage.getItem("productTable")
        );
        Product.render(renderProduct);
    }
    // ========================================================================
    // RENDER 
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
        if (renderProduct.length > 5) {
            start = (productCurrentPage - 1) * productPerPage;
        } else {
            start = (1 - 1) * productPerPage;
        }
        end = start + productPerPage;
        productList = renderProduct.slice(start, end);

        // renderProduct truyen vao co so luong thi render
        if (productList.length > 0) {
            productList.map((p, index) => {
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
                console.log("Render product table succesfully ✓");
                Product.renderPagination(renderProduct);
                Helper.clearForm(productMenuBody);
            });
        }
    }
    // ========================================================================
    // RENDER PAGI FOR PRODUCT
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
            inputPagi.value = productIndex;

            document
                .getElementById("button__product__prev-pagi")
                .addEventListener("click", () => {
                    console.log("Go to previous page");
                    if (productIndex > 1) {
                        productIndex--;
                        productCurrentPage = productIndex;
                        Product.render(renderProduct);
                    } else {
                        console.error("Error");
                    }
                });

            document
                .getElementById("button__next-pagi")
                .addEventListener("click", () => {
                    console.log("Go to next page");
                    if (productIndex < productTotalPages) {
                        productIndex++;
                        productCurrentPage = productIndex;
                        Product.render(renderProduct);
                    } else {
                        console.error("Error");
                    }
                });
        } else {
            console.log("Error")
        }
    }
    // ========================================================================
    // EDIT PRODUCT
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
    // UPDATE PRODUCT
    // ========================================================================
    // update san pham
    static update() {
        console.log("-> Time to update product...");

        const queryProductInput = productMenuBody.querySelectorAll("input, select");
        queryProductInput.forEach((productInput) => {
            const metadata = productInput.id.split("--")[1];
            if (productInput.type === "file") {
                productTable[currentEditIndex][metadata] = `../img/banner/${productInput.value.split("\\")[2]
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
    }
    // ========================================================================
    // DELETE PRODUCT
    // ========================================================================
    // delete san pham
    static delete(e) {
        console.log("-> Delete product...");

        const deleteProductRow = e.parentElement.parentElement;

        productTable = productTable.filter((p) => p.productId !== deleteProductRow.id)
        console.log(productTable)

        localStorage.setItem("productTable", JSON.stringify(productTable));
        productTable = JSON.parse(localStorage.getItem("productTable"));
        console.log(productTable)
        Product.render(productTable);

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
    // SEARCH
    // ==================================================================================
    static search() {
        productSearchName.addEventListener("keyup", () => {
            console.log("-> search by name...");
            Product.applyFilters();
        });

        productSearchCategory.addEventListener("change", () => {
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
    // APPLY FILTER
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

        if (
            productSearchPriceMin.value > 0
        ) {
            filteredProduct = filteredProduct.filter(
                (item) => parseFloat(productSearchPriceMin.value) <= item.price
            );
        }

        if (filteredProduct.length === 0) {
            let empty = [];
            Product.render(empty);
        } else {
            Product.render(filteredProduct);
        }
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
    static onloadViewAdmin() {
        (() => {
            if (!localStorage.getItem("productTable")) {
                console.log("-> get product table...");
                productTable = JSON.parse(localStorage.getItem("productTable"));
                console.log(productTable);
                Product.render(productTable);
            } else {
                console.log("-> set product table...");
                localStorage.setItem("productTable", JSON.stringify(productTable));
                Product.render(productTable);
            }
        })();
    }
    static onloadViewIndex() {
        (() => {
            if (localStorage.getItem("productTable")) {
                console.log("-> get product table...");
                productTable = JSON.parse(localStorage.getItem("productTable"));
                console.log(productTable);
            } else {
                console.log("-> set product table...");
                localStorage.setItem("productTable", JSON.stringify(productTable));
            }
        })();
    }
}
