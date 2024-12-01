let cartTable = JSON.parse(localStorage.getItem('cart')) || []
let orderTable = JSON.parse(localStorage.getItem('order')) || []

// Payment information field
const productContainer = document.querySelector(".product__container")
const cartItemContainer = document.querySelector(".cart-items")
const orderContainer = document.querySelector(".order");
const cartSummary = document.querySelector(".cart-summary")
const orderTableContainer = document.getElementById("order-table__body-content")
const paymentInfoContainer = document.querySelector(".payment-info__container")
const paymentInfoSummary = document.querySelector(".payment-info__summary")

// Billing information field
const billingInfo = document.getElementById("billing-form")
const billingFullName = document.getElementById("billing-info__fullName")
const billingPhoneNumber = document.getElementById("billing-info__phoneNumber")
const billingHouseNumber = document.getElementById("billing-info__houseNumber")
const billingStreet = document.getElementById("billing-info__street")
const billingWard = document.getElementById("billing-info__ward")
const billingDistrict = document.getElementById("billing-info__district")
const billingCity = document.getElementById("billing-info__city")
// Payment infotmation field
const billingPayment = document.getElementById("selectPaymentOrder")

// Search order table in admin page
const orderSearchDateStart = document.getElementById("order-table__search-input--dateStart");
const orderSearchDateEnd = document.getElementById("order-table__search-input--dateEnd");
const orderSearchDistrict = document.getElementById("order-table__search-input--district");
const orderSearchSelection = document.getElementById('order__filter-status--select')

// function displayPaymentChoice(){
//     if(document.getElementById("paymentMethod").value == "none"){
//         document.getElementById("bankQR").style.display = "none"
//         document.getElementById("momoQR").style.display = "none"
//     }

//     else if(document.getElementById("paymentMethod").value == "internetBanking"){
//         document.getElementById("bankQR").style.display = "inline"
//         document.getElementById("momoQR").style.display = "none"
//     }

//     else if(document.getElementById("paymentMethod").value == "momoBanking"){
//         document.getElementById("momoQR").style.display = "inline"
//         document.getElementById("bankQR").style.display = "none"
//     }
// }

// function handlePaymentMethod(){
//     if(document.getElementById("paymentMethod").value == "none"){
//         showNotification("Choose payment method")
//         document.getElementById("paymentMethod").focus()
//     }

//     else{
//         Order.handlePayNow()
//     }
// }

class Cart {
    // ==================================================================================
    // ADD TO CART
    // ==================================================================================
    static addToCart(e) {
        // If user is not logged in, alert and return
        if (!localStorage.getItem('accountLogin')) {
            showNotification("Please log in to add products to cart")
            //alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
            return;
        }

        const cartItem = JSON.parse(localStorage.getItem('productTable')).find(item => item.productId === `${e.id}`)
        const quantityInput = document.querySelector(`input[data-product-id="${e.id}"]`);
        const quantity = quantityInput ? (quantityInput.value) : 1;
        const alreadyInCart = cartTable.find(item => item.productId === `${e.id}`);

        // If product is out of stock, alert and return
        if (cartItem.stock === 0) {
            showNotification("Out of stock")
            //alert("Hết hàng");
            return;
        }

        // If there is not product in cart table, alert and return
        if (!cartItem) {
            showNotification("This product does not exist")
            //alert("Sản phẩm này không tồn tại");
            return;
        }

        // If product is already in cart, alert and return
        if (alreadyInCart) {
            showNotification("The product is already in the cart")
            //alert("Sản phẩm đã có trong giỏ hàng");
            return;
        }

        // Push product to cart table
        cartTable.push({ ...cartItem, quantity: quantity })
        println(cartTable)

        // Set cart table to local storage
        localStorage.setItem('cart', JSON.stringify(cartTable))
        Cart.renderCartPreview(cartTable)
        showNotification("Added to cart successfully")
        //alert("Thêm vào giỏ hàng thành công");
    }
    // ==================================================================================
    // RENDER CART PREVIEW
    // ==================================================================================
    static renderCartPreview(cartItem) {
        cartItemContainer.innerHTML = ""
        cartItem.forEach(item => {
            cartItemContainer.innerHTML += `
            <tr class="cart-item">
                <td>
                    <img src="${item.cover1}"
                        alt="Product Image">
                    <div class="product-info">
                        <p class="product-title">${item.series}</p>
                        <p class="product-price">$${(item.price).toFixed(2)}</p>
                    </div>
                </td>
                <td>
                    <input
                    class="cart__quantity" 
                    type="number" 
                    value="${item.quantity}" 
                    min="1"
                    max="${item.stock}"
                    data-product-id="${item.productId}"
                    >
                    <button id="${item.productId}"class="remove-button" onclick="Cart.removeFromCart(this)">Remove</button>
                </td>
                <td>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                </td>
            </tr>
        `
        });
        // render cart summary
        Cart.renderCartSummary()
        paymentInfoContainer.innerHTML = ""
        cartItem.forEach(item => {
            paymentInfoContainer.innerHTML += `
                <div class="payment-info__item">
                    <img src="${item.cover1}" alt="Item Image">
                    <div class="quantity-circle">${item.quantity}</div>
                    <div class="payment-info__item-details">
                        <p>${item.series}</p>
                    </div>
                    <div class="payment-info__item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `
        })
        paymentInfoSummary.innerHTML = ""
        paymentInfoSummary.innerHTML = `
            <div class="subtotal">
                <span>Subtotal • ${cartTable.length} items</span>
                <span>$${(cartTable.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</span>
            </div>
            <div class="total">
                <span>Total</span>
                <span class="order-price">$${(cartTable.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</span>
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

    // =====================================
    // REMOVE FROM CART~
    // =====================================
    static removeFromCart(e) {
        // println(e.id)

        // xoa sp trong cart neu khac id
        const deleteItemInCart = cartTable.filter(item => item.productId !== e.id)
        // gan lai list sp con trong cart  
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
    constructor(orderId, userId, orderDate, orderStatus, orderItems, orderPrice, userFullName, userPhoneNumber, orderAddress, paymentDetails) {
        this.orderId = orderId
        this.userId = userId
        this.orderDate = orderDate
        this.orderStatus = orderStatus
        this.orderItems = orderItems
        this.orderPrice = orderPrice
        this.userFullName = userFullName
        this.userPhoneNumber = userPhoneNumber
        this.orderAddress = orderAddress
        //hbao them
        this.paymentDetails = paymentDetails
    }
    // Insert new order  
    static insert(orderId, userId, orderDate, orderStatus, orderItems, orderPrice, userFullName, userPhoneNumber, orderAddress ,paymentDetails) {
        const newOrder = new Order(
            orderId,
            userId,
            orderDate,
            orderStatus,
            orderItems,
            orderPrice,
            userFullName,
            userPhoneNumber,
            orderAddress,
            //hbao them
            paymentDetails
        )
        Order.updateStockForOrder(newOrder, 'decrease');
        orderTable.push(newOrder);
    }
    // 
    // Generate ID for new order
    //
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
        if(billingPayment.value==="cashPayment" ){
            if (Validation.checkBlankField(document.getElementById("billing-form")) === false) {
                Order.addToOrder('Pending')
                Cart.renderCartSummary();
            } else {
                showNotification('Failed to create order !!!');
            }
        }
        if(billingPayment.value==="creditCard"){
            if (Validation.checkBlankField(billingInfo) === false && 
                Validation.checkBlankField(document.getElementById("Payment-form"))=== false) {
                if(!Validation.checkCardNumber("billing-info__cardnumber")){
                    Order.addToOrder('Pending')
                    Cart.renderCartSummary();
                } 
                else {
                    showNotification('Failed to create order');}
            } else {
                showNotification('Failed to create order');
            }
        }
    }
    // 
    // ADD TO ORDER
    // 
    static addToOrder(status = "Pending") {
        console.log("Adding to order...")
        if (cartTable.length === 0) {
            showNotification("Your cart is empty. ")
            return;
        }
        console.log(orderTable)
        if (!Validation.isBlank(billingPhoneNumber.value)){
            User.validatePhoneNumber(billingPhoneNumber)
            if(!Validation.phoneIsValid(billingPhoneNumber))
                return
        }
        let paymentDetails = {
            method: "Cash On Delivery",
            bank: 'None',
            cardNumber: 'None',
            cardName: 'None'
        };

        if (billingPayment.value === "creditCard") {
            const paymentBank = document.getElementById('selectBankOrder').value;
            const cardNumber = document.getElementById('billing-info__cardnumber').value;
            const cardName = document.getElementById('billing-info__nameoncard').value;
            console.log(paymentBank)
            paymentDetails = {
                method: "Payment By Transfer.",
                bank: paymentBank,
                cardNumber: cardNumber,
                cardName: cardName
            };
        }
        Order.insert(
            `order_${Order.generateId(orderTable)}`,
            JSON.parse(localStorage.getItem('accountLogin')).userId,
            new Date().toISOString().split('T')[0].split('-').reverse().join('/'),
            status,
            cartTable.map(item => ({
                productId: item.productId,
                series: item.series,
                category: item.category,
                author: item.author,
                quantity: item.quantity,
                price: (item.price).toFixed(2),
                totalPrice: (item.price * item.quantity).toFixed(2)
            })),
            (cartTable.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2),
            billingFullName.value,
            billingPhoneNumber.value,
            {
                houseNumber: billingHouseNumber.value,
                street: billingStreet.value,
                ward: billingWard.value,
                district: billingDistrict.value,
                city: billingCity.value,
            },
            paymentDetails
        );
        localStorage.setItem("order", JSON.stringify(orderTable))

        showNotification("Order successful")
        //alert("Đặt hàng thành công!")

        cartTable = [];
        localStorage.setItem("cart", JSON.stringify(cartTable));

        Cart.renderCartPreview(cartTable);
        Order.renderOrderView();
    }
    static updateStockForOrder(order, action) {
        let productTable = JSON.parse(localStorage.getItem('productTable'))
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
    static displayOrderDetail(e) {
        const orderDetail = document.querySelector('.order-detail__page');

        // Hiển thị hoặc ẩn order detail
        if (orderDetail.style.display === 'none') {
            orderDetail.style.display = 'inherit';
        } else {
            orderDetail.style.display = 'none';
        }

        // Nếu truyền tham số e thì render ra chi tiết thanh toán
        if (e) {
            Order.renderOrderDetail(e.id);
        }
    }
    // 
    static renderOrderView() {
        // If there is no account login, return
        if (!localStorage.getItem('accountLogin')) {
            return
        }
        // Get order of user from localStorage
        const orderOfUser = orderTable.filter(o => o.userId === JSON.parse(localStorage.getItem('accountLogin')).userId);
        // Render order
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
                        <button id="${o.orderId}-status" class="order__cancel-btn" onclick="Order.handleCancelOrder(this)">Cancel this order</button>
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
            if (o.orderStatus === 'Cancelled') {
                const btn = document.getElementById(`${o.orderId}-status`)
                btn.disabled = true;
                btn.style.background = 'red'
                btn.style.opacity = '0.5'
            }
        })
    }

    static handleCancelOrder(order) {
        console.log(order)
        const confirmCancel = confirm("Do you really want to cancel this order?");
        if (!confirmCancel) {
            return
        }
        let orders = JSON.parse(localStorage.getItem('order'))
        let orderId = order.id.split('-')[0]
        let thisOrder = orders.find(o => o.orderId === orderId)

        Order.updateStockForOrder(thisOrder, "increase");
        thisOrder.orderStatus = "Cancelled";
        localStorage.setItem("order", JSON.stringify(orders))
        console.log(thisOrder)

        alert("Order has been cancelled successfully");
        Order.renderOrderView()
        location.reload()
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
                        ${o.orderDate}
                    </td>
                    <td style="text-align: center;">
                        ${o.orderAddress.houseNumber} ${o.orderAddress.street}, ${o.orderAddress.ward}, ${o.orderAddress.district}, ${o.orderAddress.city} 
                    </td>
                    <td style="text-align: center;">
                        $${o.orderPrice}
                    </td>
                    <td style="text-align: center;">
                        <select class="order-status" data-order-id="${o.orderId}" onchange="Order.handleStatusChange(this)" ${(o.orderStatus === "Completed" || o.orderStatus === "Cancelled")? "disabled" : ""}>
                            <option value="Cancelled" ${o.orderStatus === "Cancelled" ? "selected" : ""}>Cancelled</option>
                            <option value="Pending" ${o.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
                            <option value="Confirmed" ${o.orderStatus === "Confirmed" ? "selected" : ""}>Confirmed</option>
                            <option value="Completed" ${o.orderStatus === "Completed" ? "selected" : ""}>Completed</option>
                        </select>
                    </td>
                    <td style="text-align: center;">
                        <div id="${o.orderId}" style="cursor: pointer" onclick="Order.displayOrderDetail(this)">Click to view order detail</div>
                    </td>
                </tr>
            `
        })
    }
    // Render order detail
    static renderOrderDetail(id) {
        const orderDetail = document.querySelector(".order-detail");
        const order = JSON.parse(localStorage.getItem("order")).find(o => o.orderId === id);
        const user = JSON.parse(localStorage.getItem("users")).find(u => u.userId === order.userId);

        // Nếu order hoặc user không tồn tại, hiển thị thông báo và thoát khỏi hàm
        if (!order) {
            alert("Order not found.");
            return;
        }
        if (!user) {
            alert("User not found.");
            return;
        }

        // Clear nội dung hiện tại của chi tiết hóa đơn
        orderDetail.innerHTML = ``
        // Render lại nội dung chi tiết của hóa đơn
        orderDetail.innerHTML = `
            <div>
                <button class="order-detail__button" onclick="Order.displayOrderDetail()">X</button>
            </div>
            <div class="order-detail__summary">
                <h1>Order Details</h1>
                <p><strong>Order ID:</strong> ${order.orderId}</p>
                <p><strong>Order Date:</strong> ${order.orderDate}</p>
                <p><strong>Status:</strong> ${order.orderStatus} </p>
            </div>

            <h2>List items</h2>
            <div class="order-detail__items">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            ${order.orderItems.map(item => `
                                <tr>
                                <td>${item.series}</td>
                                <td>${item.quantity}</td>
                                <td>$${item.totalPrice}</td>
                                </tr>
                            `).join('')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" style="text-align: left;font-weight: bold; font-size: 1.2em;">
                                Total:
                            </td>
                            <td>$${order.orderPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="order-detail__customer-info">
                <h2>Customer info</h2>
                <p><strong>Name:</strong> ${user.username} </p>
                <p><strong>Email:</strong> ${user.email} </p>
                <p><strong>Phone:</strong> ${user.phoneNumber} </p>
            </div>
            <div class="order-detail__payment-info">
                <h2>Payment Details</h2>
                <p><strong>Payment Method:</strong> ${order.paymentDetails.method}</p>
            </div>
            <div id="card__Detail">
                <p><strong>Bank:</strong> ${order.paymentDetails.bank}</p>
                <p><strong>Name On Card:</strong> ${order.paymentDetails.cardName}</p>
                <p><strong>Card Number:</strong> ${order.paymentDetails.cardNumber}</p>   
            </div>            
            
        `
        const cardDetail = document.getElementById("card__Detail")
        if (order.paymentDetails.method==="Payment By Transfer.") {
            cardDetail.style.display = "block";
        } else {
            cardDetail.style.display = "none";
        }
    }
    //
    //
    //
    static search() {
        this.applyFilters()
    }

    //
    // 
    // 
    static applyFilters() {
        let filteredOrder = JSON.parse(localStorage.getItem("order"));
        let dateStart = orderSearchDateStart.value
        let dateEnd = orderSearchDateEnd.value
        let selection = orderSearchSelection.value
        let dateStartParts = dateStart.split('-')

        dateStart = (dateStart === '')? new Date(0) : new Date(parseInt(dateStartParts[0]), parseInt(dateStartParts[1]) - 1, parseInt(dateStartParts[2]))
        dateEnd = (dateEnd === '')? new Date() : new Date(dateEnd)

        if (dateStart > dateEnd) {
            alert('End date must be after start date')
            orderSearchDateStart.value = '';
            orderSearchDateEnd.value = '';
            return
        }

        filteredOrder = filteredOrder.filter(o => {
            let parts = o.orderDate.split('/')
            let date = new Date(parts[2], parts[1] - 1, parts[0])
            return date >= dateStart && date <= dateEnd
        });

        if (orderSearchDistrict.value !== "") {
            const regex = RegExp(orderSearchDistrict.value, "i");
            filteredOrder = filteredOrder.filter(item => regex.test(removeDiaritics(item.orderAddress.district)));
        }

        switch (selection) {
            case '':
                break;
            case 'Cancelled':
                filteredOrder = filteredOrder.filter(o => o.orderStatus === 'Cancelled');
                break;
            case 'Pending':
                filteredOrder = filteredOrder.filter(o => o.orderStatus === 'Pending');
                break;
            case 'Confirmed':
                filteredOrder = filteredOrder.filter(o => o.orderStatus === 'Confirmed')
                break;
            case 'Completed':
                filteredOrder = filteredOrder.filter(o => o.orderStatus === 'Completed')
                break;
        }

        Order.renderOrderAdmin(filteredOrder);
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

        if (newStatus === "Cancelled" && order.status !== "Cancelled") {
            const confirmCancel = confirm("Do you really want to cancel this order?");
            if (!confirmCancel) {
                selectElement.disabled = false;
                selectElement.value = "Pending";
                return;
            }
            Order.updateStockForOrder(order, "increase");

            order.orderStatus = "Cancelled";
            selectElement.disabled = true;
            console.log(order.orderStatus);
            localStorage.setItem("order", JSON.stringify(orderTable));

            Order.renderOrderAdmin(orderTable);
            alert("Order has been cancelled successfully");
        }
        if (newStatus === "Completed" && order.orderStatus !== "Completed") {
            order.orderStatus = "Completed";
            localStorage.setItem("order", JSON.stringify(orderTable));
            selectElement.disabled = true;
            Order.renderOrderAdmin(orderTable);
            alert("Order has been delivered");
        }
        if (newStatus === "Confirmed" && order.orderStatus !== "Confirmed") {
            order.orderStatus = "Confirmed";
            localStorage.setItem("order", JSON.stringify(orderTable));

            Order.renderOrderAdmin(orderTable);
            alert("Order has been processed");
            selectElement.disabled = false;
        }
        localStorage.setItem("order", JSON.stringify(orderTable));
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
            return "Processing order"
        }
        if (status === "Confirmed") {
            return "Order has been processed"
        }
        if (status === "Completed") {
            return "Delivered"
        }
        if (status === "Cancelled") {
            return "Order has been cancelled"
        }
    }

    //
    //
    //
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

    //
    // clear form Bill
    //
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
        const accountLoginInfo = JSON.parse(localStorage.getItem('accountLogin'));
        billingFullName.value = accountLoginInfo.fullName;
        billingPhoneNumber.value = accountLoginInfo.phoneNumber;
        billingHouseNumber.value = accountLoginInfo.address.houseNumber;
        billingStreet.value = accountLoginInfo.address.street;
        billingWard.value = accountLoginInfo.address.ward;
        billingDistrict.value = accountLoginInfo.address.district;
        billingCity.value = accountLoginInfo.address.city;
        document.getElementById("billing-info").querySelectorAll("input").forEach(input => {
            document.getElementById(input.id).disabled = true;
        });
    }
    //
    // toggle order form input address
    //
    static toggleAddressOrder(e) {
        if (e.value === 'userAddress') {
            console.log("Render billing form")
            Order.renderBillingForm();
        }
        if (e.value === 'newAddress') {
            println("dia chi moi")
            Order.clearFormBillInfo(billingInfo)
        }
    }
    //
    //
    //
    static onloadFilterOrder() {
        Order.renderOrderAdmin(orderTable);
        Order.search();
        document.addEventListener("DOMContentLoaded", () => {
            Order.applyFilters()
        });
    }
    static onload() {
        localStorage.setItem("order", JSON.stringify(orderTable));
    }

    //Payment:hbao
    static togglePaymentOrder (selectElement) {
        const paymentByCard = document.getElementById("paymentByCard");
        if (selectElement.value === "creditCard") {
            paymentByCard.style.display = "block";
            let inputs = paymentByCard.querySelectorAll('input')
            inputs.forEach(input => {
                input.disabled = false
            })
        }
        else{
            paymentByCard.style.display="none";
        }
    }
    // static toggleAddressOrder(e) {
    //     if (e.value === 'userAddress') {
    //         console.log("Render billing form")
    //         Order.renderBillingForm();
    //     }
    //     if (e.value === 'newAddress') {
    //         println("dia chi moi")
    //         Order.clearFormBillInfo(billingInfo)
    //     }
    // }
}
// function  handlePayNow() {
//     console.log("Handling pay now...")
//     if (Validation.checkBlankField(document.getElementById("billing-form")) === false) {
//         Order.addToOrder('Pending')
//         Cart.renderCartSummary();
//     } else {
//         alert('Failed to create order');
//     }
// }