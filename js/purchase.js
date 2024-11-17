let cartTable = JSON.parse(localStorage.getItem('cart')) || []
let orderTable = JSON.parse(localStorage.getItem('order')) || [
    {
        orderId: "orderTesting_1",
        userId: "user_1",
        orderDate: "16/11/2024",
        orderStatus: "Cancelled",
        orderItems: [
            {
                productId: "manga_1",
                series: "Item 1",
                quantity: 2,
                price: 9.0,
                totalPrice: 18.0,
            },
            {
                productId: "manga_2",
                series: "Item 2",
                quantity: 3,
                price: 10.0,
                totalPrice: 300.0,
            },
        ],
        orderPrice: 600.0,
        userFullName: "John Doe",
        userPhoneNumber: "0123456789",
        orderAddress: {
            houseNumber: "123",
            street: "Main Street",
            ward: "Ward 1",
            district: "District 1",
            city: "City 1",
        }
    },
    {
        orderId: "orderTesting_2",
        userId: "user_1",
        orderDate: "16/11/2024",
        orderStatus: "Cancelled",
        orderItems: [
            {
                productId: "manga_1",
                series: "Item 1",
                quantity: 2,
                price: 9.0,
            },
            {
                productId: "manga_2",
                series: "Item 2",
                quantity: 1,
                price: 300.0,
            },
        ],
        orderPrice: 600.0,
        userFullName: "John Doe",
        userPhoneNumber: "0123456789",
        orderAddress: {
            houseNumber: "123",
            street: "Main Street",
            ward: "Ward 1",
            district: "District 1",
            city: "City 1",
        }
    },
]

class Cart {
    static addToCart(e) {
        if (!localStorage.getItem('accountLogin')) {
            alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
            return;
        }

        const cartItem = JSON.parse(localStorage.getItem('productTable')).find(item => item.productId === `${e.id}`)
        const quantityInput = document.querySelector(`input[data-product-id="${e.id}"]`);
        const quantity = quantityInput ? (quantityInput.value) : 1;
        const alreadyInCart = cartTable.find(item => item.productId === `${e.id}`);

        // Check if the product is out of stock
        if (cartItem.stock === 0) {
            alert("Hết hàng");
            return;
        }
        // Check if the product is existed in productTable
        if (!cartItem) {
            alert("Sản phẩm này không tồn tại");
            return;
        }
        // Check if the product is already in the cart
        if (alreadyInCart) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        } else {
            cartTable.push({ ...cartItem, quantity: quantity })
            println(cartTable)
        }
        localStorage.setItem('cart', JSON.stringify(cartTable))
        Cart.renderCartPreview(cartTable)
        alert("Thêm vào giỏ hàng thành công");
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
            <button class="checkout-button" onclick="viewBill()">
                Checkout
            </button>
        `
    }
}

class Order {
    constructor(orderId, userId, orderDate, orderStatus, orderItems, orderPrice, userFullName, userPhoneNumber, orderAddrress) {
        this.orderId = orderId
        this.userId = userId
        this.orderDate = orderDate
        this.orderStatus = orderStatus
        this.orderItems = orderItems
        this.orderPrice = orderPrice
        this.userFullName = userFullName
        this.userPhoneNumber = userPhoneNumber
        this.orderAddrress = orderAddrress
    }
    // Insert new order  
    static insert(orderId, userId, orderDate, orderStatus, orderItems, orderPrice, userFullName, userPhoneNumber, orderAddrress) {
        const newOrder = new Order(
            orderId,
            userId,
            orderDate,
            orderStatus,
            orderItems,
            orderPrice,
            userFullName,
            userPhoneNumber,
            orderAddrress
        )
        Order.updateStockForOrder(newOrder, 'decrease');
        orderTable.push(newOrder);
    }
    // Generate ID for new order
    static generateId = (data) => {
        if (data.length === 0) {
            return 0;
        } else {
            const index = data[data.length - 1].orderId.split("_")[1];
            return parseInt(index) + 1;
        }
    };
    // handle logic of payment
    static handlePayNow() {
        console.log("Handling pay now...")
        Validation.checkBlankField(billingInfo)
        Order.addToOrder('Pending')
        Cart.renderCartSummary();
    }
    // 
    static addToOrder(status = "Pending") {
        console.log("Adding to order...")
        console.log(orderTable)
        Order.insert(
            `order_${Order.generateId(orderTable)}`,
            localStorage.getItem('accountLogin'),
            new Date().toISOString().split('T')[0].split('-').reverse().join('/'),
            status,
            cartTable.map(item => ({
                productId: item.productId,
                series: item.series,
                category: item.category,
                author: item.author,
                quantity: item.quantity,
                price: item.price,
                totalPrice: item.price * item.quantity
            })),
            cartTable.reduce((total, item) => total + item.price * item.quantity, 0),
            billingFullName.value,
            billingPhoneNumber.value,
            {
                houseNumber: billingHouseNumber.value,
                street: billingStreet.value,
                ward: billingWard.value,
                district: billingDistrict.value,
                city: billingCity.value,
            }
        );
        localStorage.setItem("order", JSON.stringify(orderTable))

        alert("Đặt hàng thành công!")

        cartTable = [];
        localStorage.setItem("cart", JSON.stringify(cartTable));

        Cart.renderCartPreview(cartTable);
        Order.renderOrderView();
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
    static renderOrderView() {
        const orderOfUser = orderTable.filter(o => o.userId === localStorage.getItem('accountLogin'));
        println(orderOfUser)

        if (orderOfUser) {
            orderContainer.innerHTML = ""

            orderOfUser.forEach(o => {
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
                            - Price: $${item.price}
                            - Total price: $${item.totalPrice}
                        `).join('')}
                    </td>
                    <td style="text-align: center;">
                        ${o.orderPrice}
                    </td>
                    <td style="text-align: center;">
                        ${o.orderDate}
                    </td>
                    <td style="text-align: center;">
                        <select class="order-status" data-order-id="${o.orderId}" onchange="Order.handleStatusChange(this)" ${o.orderStatus !== "Pending" && o.orderStatus !== "Confirmed" ? "disabled" : ""}>
                            <option value="Pending" ${o.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
                            <option value="Completed" ${o.orderStatus === "Completed" ? "selected" : ""}>Completed</option>
                            <option value="Confirmed" ${o.orderStatus === "Confirmed" ? "selected" : ""}>Confirmed</option>
                            <option value="Cancelled" ${o.orderStatus === "Cancelled" ? "selected" : ""}>Cancelled</option>
                        </select>
                    </td>
                </tr>
            `
        })
    }
    // 
    static showDetailOrder(orderId) {
        const order = orderTable.find(o => o.orderId === orderId);

        if (!order) {
            alert("Order not found.");
            return;
        }

        
    }
    // 
    // 
    // 
    static applyFilters() {
        let filteredOrder = JSON.parse(localStorage.getItem("orderTable"));

        if (formatDate(orderSearchDate.value) !== "") {
            filteredOrder = filteredOrder.filter(o => o.orderDate === formatDate(orderSearchDate.value));
        }
    }
    // 
    // 
    // 
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
        if (newStatus === "Confirmed" && order.orderStatus !== "Confirmed") {
            order.orderStatus = "Confirmed";
            localStorage.setItem("order", JSON.stringify(orderTable));

            Order.renderOrderAdmin(orderTable);
            alert("Đơn hàng đã được xử lý");
            selectElement.disabled = false;
        }
    }
    //  
    static getStatus(status) {
        if (status === "Pending") {
            return "status--pending"
        }
        if (status === "Confirmed") {
            return "status--confirmed"
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
        if (status === "Confirmed") {
            return "Đã xử lý đơn hàng"
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
    // clear form Bill
    static clearFormBillInfo(e) {
        e.querySelectorAll("input").forEach(input => {
            if (!input.id.includes("fullName") && !input.id.includes("phoneNumber")) {
                document.getElementById(input.id).value = "";
                document.getElementById(input.id).disabled = false;
            }
            document.getElementById(input.id).disabled = false;
        });
    }
    static renderBillingForm() {
        const accoutLoginInfo = userList.find(u => u.userId === JSON.parse(localStorage.getItem('accountLogin')));
        billingFullName.value = accoutLoginInfo.fullName;
        billingPhoneNumber.value = accoutLoginInfo.phoneNumber;
        billingHouseNumber.value = accoutLoginInfo.address.houseNumber;
        billingStreet.value = accoutLoginInfo.address.street;
        billingWard.value = accoutLoginInfo.address.ward;
        billingDistrict.value = accoutLoginInfo.address.district;
        billingCity.value = accoutLoginInfo.address.city;
        document.getElementById("billing-info").querySelectorAll("input").forEach(input => {
            document.getElementById(input.id).disabled = true;
        });
    }
    // toggle order form input address
    static toggleAddressOrder(e) {
        if (e.value === 'userAddress') {
            Order.renderBillingForm();
        }
        if (e.value === 'newAddress') {
            println("dia chi moi")
            Order.clearFormBillInfo(billingInfo)
        }
    }
}