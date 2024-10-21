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
let productIdIndex = 0;
let currentEditIndex;
let productCurrentPage = 1;
let productPerPage = 5;
let productIndex = productCurrentPage

const addProductEvent = document.getElementById("product-menu__button--add")
const productMenuBody = document.getElementById("product-menu__body")
const productTableFooter = document.getElementById("product-table__footer")

// Product input
const productInputCover = document.getElementById("product-menu__input--cover")
const productInputSeries = document.getElementById("product-menu__input--series")
const productInputCategory = document.getElementById("product-menu__input--category")
const productInputAuthor = document.getElementById("product-menu__input--author")
const productInputStock = document.getElementById("product-menu__input--stock")
const productInputPrice = document.getElementById("product-menu__input--price")

// Product table
var productTable = []
// ========================================================================
// PRODUCT TABLE
// ========================================================================
class Product {
    constructor(productId, cover, series, category, author, stock, price) {
        this.productId = productId
        this.cover = cover
        this.series = series
        this.category = category
        this.author = author
        this.stock = stock
        this.price = price
    }

    static insert(productId, cover, series, category, author, stock, price) {
        console.log("Inserting product...")
        const newProduct = new Product(productId, cover, series, category, author, stock, price);
        productTable.push(newProduct);
    }

    static renderProduct() {
        console.log('-> Render product...');
        const productTableBody = document.getElementById("product-table__body-content")
        productTableBody.innerHTML = ""

        let renderProductTable = JSON.parse(localStorage.getItem("renderProductTable"))
        const start = (productCurrentPage - 1) * productPerPage;
        const end = start + productPerPage;
        const productList = renderProductTable.slice(start, end);

        productList.map((p, index) => {
            const row = document.createElement("tr");
            row.id = `product_${start + index}`;
            row.innerHTML += `
                <td style="text-align: center;">
                    ${p.productId}
                </td>
                <td style="width: 50px; height: 50px; text-align: center;">
                    <img src="${p.cover}" alt="product-cover" style="width: 100px; height: 100px;">
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
                        id="product-table__button--edit" onclick="Product.editProduct(this);">Edit</button>
                </th>
                <th style="text-align: center;">
                    <button class="product-table__button product-table__button--delete"
                        id="product-table__button--delete" onclick="Product.deleteProduct(this);">Delete</button>
                </th>
                `;
            productTableBody.append(row)
            console.log("Render product table succesfully ✓");
            Product.productRenderPagination();
        });
    }

    static productRenderPagination() {
        console.log('-> Render product pagination...');
        productTableFooter.innerHTML = ""

        const productTotalPages = Math.ceil(
            JSON.parse(localStorage.getItem("renderProductTable")).length / productPerPage
        )
        console.log(productTotalPages)

        productTableFooter.innerHTML = `
            <button class="button button__product__prev-pagi" 
            id="button__product__prev-pagi"> << </button>

            <input type="text" class="input input__pagi" id="input-product__pagi" style="width: 2%;"> / ${productTotalPages}
            
            <button class="button button__product__next-pagi" 
            id="button__next-pagi"> >> </button>
        `
        const inputPagi = document.getElementById("input-product__pagi")
        inputPagi.value = productIndex

        document.getElementById("button__product__prev-pagi").addEventListener('click', () => {
            console.log("Go to previous page")
            if (productIndex > 1) {
                productIndex--;
                productCurrentPage = productIndex;
                Product.renderProduct();
            } else {
                console.error("Error")
            }
        });

        document.getElementById("button__next-pagi").addEventListener('click', () => {
            console.log("Go to next page")
            if (productIndex < productTotalPages) {
                productIndex++;
                productCurrentPage = productIndex;
                Product.renderProduct();
            } else {
                console.error("Error")
            }
        });
    }

    static deleteProduct(e) {
        console.log('-> Delete product...');
        const row = e.parentElement.parentElement;
        const index = Array.from(row.parentNode.children).indexOf(row);

        if (productTable && index >= 0 && index < productTable.length) {
            productTable.splice(index, 1);
            localStorage.setItem("renderProductTable", JSON.stringify(productTable));
            Product.renderProduct()
            Container.renderProductList()
        } else {
            console.error("Index out of bounds or renderProduct is not defined.");
        }

        console.log({
            _1selectedIndex: index,
            _2renderProductAgain: JSON.parse(localStorage.getItem("renderProductTable")),
            _3description: "Deleting product",
        });

        console.log("Delete product from table succesfully ✓");
    }
}
// ========================================================================
// EVENT LISTENERS
// ========================================================================
addProductEvent.addEventListener("click", () => {
    console.log("Adding product...")
    Product.insert(
        `product_${productIdIndex++}`,
        `../img/banner/${productInputCover.value.split("\\")[2]}`,
        productInputSeries.value,
        productInputCategory.value,
        productInputAuthor.value,
        productInputStock.value,
        productInputPrice.value
    );

    localStorage.setItem("renderProductTable", JSON.stringify(productTable));
    console.log("* Insert product to table: ", productTable);
    console.log("* Insert product from table to local storage: ",
        JSON.parse(localStorage.getItem("renderProductTable")));

    Product.renderProduct();
})