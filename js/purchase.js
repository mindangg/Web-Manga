let cartTable = JSON.parse(localStorage.getItem('cart')) || []
let orderTable = JSON.parse(localStorage.getItem('order')) || []

const productContainer = document.querySelector(".product__container")
const cartItemContainer = document.querySelector(".cart-items")
const orderContainer = document.querySelector(".order");
const cartSummary = document.querySelector(".cart-summary")

function renderViewIndex(renderProduct) {
    productContainer.innerHTML = ""
    renderProduct.forEach(p => {
        productContainer.innerHTML += `
            <div id="${p.productId}" class="product__item">
                <a>
                    <img src="${p.cover1}" alt="">
                </a>
                <h4>${p.series}</h4>
                <p>$${p.price}</p>
                <button id=${p.productId} onclick="Cart.addToCart(this)">+ Add to cart</button>
                <p>Stock: ${p.stock}</p>
            </div>
        `
    });
}

class Cart {
    static addToCart(e) {
        console.log(e.id)
        const cartItem = JSON.parse(localStorage.getItem('productTable')).find(item => item.productId === `${e.id}`)
        const quantityInput = document.querySelector(`input[data-product-id="${e.id}"]`);
        const quantity = quantityInput ? (quantityInput.value) : 1;

        if (cartItem.stock === 0) {
            alert("Hết hàng");
            return;
        }

        if (!cartItem) {
            alert("Sản phẩm này không tồn tại");
            return;
        }

        const alreadyInCart = cartTable.find(item => item.productId === `${e.id}`);
        if (alreadyInCart) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        } else {
            cartTable.push({ ...cartItem, quantity })
        }

        localStorage.setItem('cart', JSON.stringify(cartTable))
        Cart.renderCartPreview(cartTable)
    }

    static renderCartPreview(cartItem) {
        cartItemContainer.innerHTML = ""
        cartItem.forEach(p => {
            cartItemContainer.innerHTML += `
            <tr class="cart-item">
                <td>
                    <img src="${p.cover1}"
                        alt="Product Image">
                    <div class="product-info">
                        <p class="product-title">${p.series}</p>
                        <p class="product-price">$${p.price}</p>
                    </div>
                </td>
                <td>
                    <input
                    class="cart__quantity" 
                    type="number" 
                    value="${p.quantity}" 
                    min="1"
                    max="${p.stock}"
                    data-product-id="${p.productId}"
                    >
                    <button id="${p.productId}"class="remove-button" onclick="Cart.removeFromCart(this)">Remove</button>
                </td>
                <td>
                    <p>$${p.price * p.quantity}</p>
                </td>
            </tr>
        `

            cartSummary.innerHTML = ""
            cartSummary.innerHTML = `
            <h3>Total of order: ${cartTable.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            <button class="checkout-button">Checkout</button>
        `
        });

        const quantityInputs = document.querySelectorAll(".cart__quantity");
        quantityInputs.forEach(input => {
            input.addEventListener("change", (e) => {
                const newQuantity = parseInt(e.target.value);
                const productId = e.target.getAttribute("data-product-id");
                const itemInCart = cartTable.find(item => item.productId === productId);

                if (itemInCart) {
                    itemInCart.quantity = newQuantity;
                    localStorage.setItem("cart", JSON.stringify(cartTable));
                    Cart.renderCartPreview(cartTable);
                }
            });
        });
    }

    static removeFromCart(e) {
        console.log(e.id)
        const deleteItemInCart = cartTable.filter(item => item.productId !== e.id)
        cartTable = deleteItemInCart
        localStorage.setItem('cart', JSON.stringify(cartTable))
        Cart.renderCartPreview(cartTable)
        Cart.renderCartSummary()
    }

    static renderCartSummary() {
        cartSummary.innerHTML = ""
        cartSummary.innerHTML = `
            <h3> Total of order: ${cartTable.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            <button class="checkout-button">Checkout</button>
        `
    }
}

class Order {
    constructor(orderId, userId, orderDate, orderStatus, orderItems, orderPrice, userFullname, orderAddrress) {
        this.orderId = orderId
        this.userId = userId
        this.orderDate = orderDate
        this.orderStatus = orderStatus
        this.orderItems = orderItems
        this.orderPrice = orderPrice
        this.userFullname = userFullname
        this.orderAddrress = orderAddrress
    }

    static insert(orderId, userId, orderDate, orderStatus, orderItems, orderPrice, userFullname, orderAddrress) {
        const newOrder = new Order(
            orderId, // `order_${ Order.generateId(orderTable) } `
            userId,
            orderDate, // new Date()
            orderStatus,
            orderItems,
            orderPrice,
            userFullname,
            orderAddrress
        )
        Order.updateStockForOrder(newOrder, 'decrease');
        orderTable.push(newOrder);
    }

    static generateId = (data) => {
        if (data.length === 0) {
            return 0;
        } else {
            const index = data[data.length - 1].orderId.split("_")[1];
            return parseInt(index) + 1;
        }
    };
    //
    static handlePayNow() {
        console.log("Handling pay now...")

        Order.addToOrder('Pending');

        Cart.renderCartSummary();
    }
    //
    static addToOrder(status = "Pending") {
        console.log("Adding to order...")
        console.log(orderTable)
        Order.insert(
            `order_${Order.generateId(orderTable)} `,
            `user_1`,
            new Date().toISOString().split('T')[0],
            status,
            cartTable.map(item => ({
                productId: item.productId,
                series: item.series,
                category: item.category,
                author: item.author,
                quantity: item.quantity,
                totalPrice: item.price * item.quantity
            })),
            cartTable.reduce((total, item) => total + item.price * item.quantity, 0),
            "Tu Anh Phu",
            "Quan 8"
        );
        localStorage.setItem("order", JSON.stringify(orderTable))

        alert("Your order has been successfully placed!");

        cartTable = [];
        localStorage.setItem("cart", JSON.stringify(cartTable));

        Cart.renderCartPreview(cartTable);
        Order.renderOrderView(orderTable);
    }

    static updateStockForOrder(order, action) {
        console.log("Updating stock for order...")
        console.log("Order:", order);
        order.orderItems.forEach(item => {
            const product = productTable.find(p => p.productId === item.productId);
            if (product) {
                if (action === "decrease") {
                    product.stock -= item.quantity;
                } else if (action === "increase") {
                    product.stock += item.quantity;
                }
            }
        });

        // Save the updated product data back to localStorage
        localStorage.setItem("productTable", JSON.stringify(productTable));

        renderViewIndex(JSON.parse(localStorage.getItem("productTable")))
    }

    static renderOrderView(renderOrder) {
        orderContainer.innerHTML = ""

        renderOrder.forEach(o => {
            orderContainer.innerHTML += `
                <div style="display: flex;">
                    <div>
                        <div class="order__id">Order ID: ${o.orderId}</div>
                        <div class="order__date">Date: ${o.orderDate}</div>
                        <div class="order__status ${Order.getStatus(o.orderStatus)}">Status: ${o.orderStatus}</div>
                        <span class="show__details" onclick="Order.toggleDetails(this)">View Details</span>
                    </div>
                    <div style="margin-left: 100px;">
                        <div class="order__items__details">
                            <strong>Items:</strong>
                            <ul>
                                ${o.orderItems.map(item => `
                                    <li>Series: ${item.series}</li>
                                    <li>Quantity: ${item.quantity}</li>
                                    <li>Price: $${item.totalPrice}</li>
                                    <hr>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr>
            `
        })
    }

    static getStatus(status) {
        if (status === "Pending") {
            return "status--pending"
        }
        if (status === "Completed") {
            return "status--complte"
        }
        if (status === "Canceled") {
            return "status--cancel"
        }
    }

    static toggleDetails(e) {
        const details = e.parentElement.nextElementSibling.children[0];
        if (details.style.display === "none") {
            details.style.display = "block";
            e.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            e.textContent = "View Details";
        }
    }
}