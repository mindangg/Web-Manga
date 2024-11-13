let cartTable = JSON.parse(localStorage.getItem('cart')) || []
let orderTable = JSON.parse(localStorage.getItem('order')) || []

const productContainer = document.querySelector(".product__container")
const cartItemContainer = document.querySelector(".cart-items")
const orderContainer = document.querySelector(".order");
const cartSummary = document.querySelector(".cart-summary")
const orderTableContainer = document.getElementById("order-table__body-content")
const paymentInfoContainer = document.querySelector(".payment-info__container")
const paymentInfoSummary = document.querySelector(".payment-info__summary")

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
        console.log(alreadyInCart)
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
        });

        Cart.renderCartSummary()

        paymentInfoContainer.innerHTML = ""
        cartItem.forEach(p => {
            paymentInfoContainer.innerHTML += `
                <div class="payment-info__item">
                    <img src="${p.cover1}" alt="Item Image">
                    <div class="quantity-circle">${p.quantity}</div>
                    <div class="payment-info__item-details">
                        <p>${p.series}</p>
                    </div>
                    <div class="payment-info__item-price">$${p.price * p.quantity}</div>
                </div>
            `
        })

        paymentInfoSummary.innerHTML = ""
        paymentInfoSummary.innerHTML = `
            <div class="subtotal">
                <span>Subtotal • ${cartTable.length} items</span>
                <span>$${cartTable.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
            <div class="total">
                <span>Total</span>
                <span class="order-price">$${cartTable.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
        `


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
            `order_${Order.generateId(orderTable)}`,
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
            {
                street: "123 Main St",
                district: "Quan 1",
                city: "TPHCM",
                province: ""
            }
        );
        localStorage.setItem("order", JSON.stringify(orderTable))

        alert("Dặt hàng thành công!")

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

        if (productContainer) {
            fetchPropertyProduct(URLOfWebpage);
        }
    }
    // 
    static renderOrderView(renderOrder) {
        orderContainer.innerHTML = ""

        renderOrder.forEach(o => {
            orderContainer.innerHTML += `
                <hr>
                <div style="display: flex;">
                    <div>
                        <div class="order__id">Order ID: ${o.orderId}</div>
                        <div class="order__date">Date: ${o.orderDate}</div>
                        <div class="order__status ${Order.getStatus(o.orderStatus)}">Status: ${Order.setStatus(o.orderStatus)}</div>
                        <span class="show__details" onclick="Order.toggleDetails(this)">View Details</span>
                    </div>
                    <div style="margin-left: 100px;">
                        <div class="order__items__details" style="display: none">
                            ${o.orderItems.map(item => `
                                <div style="white-space: pre;">${item.series} - ${item.quantity} - $${item.totalPrice}</div>
                            `).join('')}
                            <div class="order__price">Order Price: $${o.orderPrice}</div>
                        </div>
                    </div>
                </div>
            `
        })
    }
    // 
    static renderOrderAdmin(renderOrder) {
        orderTableContainer.innerHTML = ""
        renderOrder.forEach(o => {
            orderTableContainer.innerHTML += `
                <tr style="max-width: 1px; overflow-x: auto;">
                    <td style="text-align: center;">
                        ${o.orderId}
                    </td>
                    <td style="text-align: center;">
                        ${o.userId}
                    </td>
                    <td style="text-align: center;">
                        ${o.orderItems.map(item => `
                            <p>Series: ${item.series}</p>
                            Quantity: ${item.quantity}
                            Price: $${item.totalPrice}
                        `).join('')}
                        <hr>
                    </td>
                    <td style="text-align: center;">
                        ${o.orderPrice}
                    </td>
                    <td style="text-align: center;">
                        ${o.orderDate}
                    </td>
                    <td style="text-align: center;">
                        <select class="order-status" data-order-id="${o.orderId}" onchange="Order.handleStatusChange(this)" ${o.orderStatus !== "Pending" ? "disabled" : ""}>
                            <option value="Pending" ${o.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
                            <option value="Completed" ${o.orderStatus === "Completed" ? "selected" : ""}>Completed</option>
                            <option value="Cancelled" ${o.orderStatus === "Cancelled" ? "selected" : ""}>Cancelled</option>
                        </select>
                    </td>
                </tr>
            `
        })
    }
    static handleStatusChange(selectElement) {
        const orderId = selectElement.getAttribute("data-order-id");
        const newStatus = selectElement.value;

        const order = orderTable.find(o => o.orderId === orderId);
        if (!order) {
            alert("Order not found.");
            return;
        }

        selectElement.disabled = true;

        if (newStatus === "Cancelled" && order.status !== "Cancelled") {
            const confirmCancel = confirm("Bạn muốn hủy đơn hàng này không ?");
            if (!confirmCancel) {
                selectElement.disabled = false;
                selectElement.value = "Pending";
                return;
            }

            Order.updateStockForOrder(order, "increase");

            order.orderStatus = "Cancelled";
            console.log(order.orderStatus);
            localStorage.setItem("order", JSON.stringify(orderTable));

            Order.renderOrderAdmin(orderTable);
            alert("Đơn hàng đã được hủy thành công");
        }
        if (newStatus === "Completed" && order.orderStatus !== "Completed") {
            order.orderStatus = "Completed";
            localStorage.setItem("order", JSON.stringify(orderTable));

            Order.renderOrderAdmin(orderTable);
            alert("Đơn hàng đã được giao");
        }
    }
    //  
    static getStatus(status) {
        if (status === "Pending") {
            return "status--pending"
        }
        if (status === "Completed") {
            return "status--completed"
        }
        if (status === "Cancelled") {
            return "status--cancelled"
        }
    }
    static setStatus(status) {
        if (status === "Pending") {
            return "Đang xử lý đơn hàng"
        }
        if (status === "Completed") {
            return "Đã giao hàng"
        }
        if (status === "Cancelled") {
            return "Hủy đơn hàng"
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