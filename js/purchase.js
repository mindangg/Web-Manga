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
            ward: "X.Binh Hung",
            district: "H.Bình Chanh",
            city: "TP.HCM",
        }
    },
    {
        orderId: "orderTesting_2",
        userId: "user_1",
        orderDate: "16/12/2024",
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
            {
                productId: "manga_3",
                series: "Item 1",
                quantity: 2,
                price: 9.0,
            },
            {
                productId: "manga_4",
                series: "Item 2",
                quantity: 1,
                price: 300.0,
            },
            {
                productId: "manga_5",
                series: "Item 1",
                quantity: 2,
                price: 9.0,
            },
            {
                productId: "manga_6",
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
            street: "123",
            ward: "Tan Dinh",
            district: "1",
            city: "TPHCM",
        }
    },
]

// Payment information field
const productContainer = document.querySelector(".product__container")
const cartItemContainer = document.querySelector(".cart-items")
const orderContainer = document.querySelector(".order");
const cartSummary = document.querySelector(".cart-summary")
const orderTableContainer = document.getElementById("order-table__body-content")
const paymentInfoContainer = document.querySelector(".payment-info__container")
const paymentInfoSummary = document.querySelector(".payment-info__summary")

// Billing information field
const billingInfo = document.getElementById("billing-info")
const billingFullName = document.getElementById("billing-info__fullName")
const billingPhoneNumber = document.getElementById("billing-info__phoneNumber")
const billingHouseNumber = document.getElementById("billing-info__houseNumber")
const billingStreet = document.getElementById("billing-info__street")
const billingWard = document.getElementById("billing-info__ward")
const billingDistrict = document.getElementById("billing-info__district")
const billingCity = document.getElementById("billing-info__city")

// Search order table in admin page
const orderSearchDate = document.getElementById("order-table__search-input--date");
const orderSearchDistrict = document.getElementById("order-table__search-input--district");

class Cart {
    // 
    // ADD TO CART
    // 
    static addToCart(e) {
        // Nếu user chưa đăng nhập thì báo cần đăng nhập
        if (!localStorage.getItem('accountLogin')) {
            alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
            return;
        }

        // Khởi tạo biến để lấy sp cho giỏ hàng
        const cartItem = JSON.parse(localStorage.getItem('productTable')).find(item => item.productId === `${e.id}`)
        // Khởi toại biến để lấy giá trị số lượng từ input
        const quantityInput = document.querySelector(`input[data-product-id="${e.id}"]`);
        // Khởi tạo biến để lấy giá trị số lượng từ input
        const quantity = quantityInput ? (quantityInput.value) : 1;
        // Khởi tạo biến để kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
        const alreadyInCart = cartTable.find(item => item.productId === `${e.id}`);

        // Nếu sp có số lượng tồn là 0 thì báo hết hàng
        if (cartItem.stock === 0) {
            alert("Hết hàng");
            return;
        }

        // Nếu sp không tồn tại thì báo sản phẩm không tồn tại
        if (!cartItem) {
            alert("Sản phẩm này không tồn tại");
            return;
        }

        // Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
        if (alreadyInCart) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        } else {
            // Nếu sản phẩm chưa có trong giỏ hàng thì thêm vào giỏ hàng
            cartTable.push({ ...cartItem, quantity: quantity })
            println(cartTable)
        }

        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cartTable))
        Cart.renderCartPreview(cartTable)
        alert("Thêm vào giỏ hàng thành công");
    }
    //
    // RENDER CART PREVIEW
    //
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
                        <p class="product-price">$${item.price}</p>
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
                    <p>$${item.price * item.quantity}</p>
                </td>
            </tr>
        `
        });

        // Tính tổng giá trị của giỏ hàng
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
                    <div class="payment-info__item-price">$${item.price * item.quantity}</div>
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
        Validation.checkBlankField(billingInfo)
        Order.addToOrder('Pending')
        Cart.renderCartSummary();
    }
    // 
    // ADD TO ORDER
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
                        ${o.orderDate}
                    </td>
                    <td style="text-align: center;">
                        ${o.orderAddress.houseNumber} ${o.orderAddress.street}, ${o.orderAddress.ward}, ${o.orderAddress.district}, ${o.orderAddress.city} 
                    </td>
                    <td style="text-align: center;">
                        ${o.orderPrice}
                    </td>
                    <td style="text-align: center;">
                        <select class="order-status" data-order-id="${o.orderId}" onchange="Order.handleStatusChange(this)" ${o.orderStatus !== "Pending" && o.orderStatus !== "Confirmed" ? "disabled" : ""}>
                            <option value="Pending" ${o.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
                            <option value="Completed" ${o.orderStatus === "Completed" ? "selected" : ""}>Completed</option>
                            <option value="Confirmed" ${o.orderStatus === "Confirmed" ? "selected" : ""}>Confirmed</option>
                            <option value="Cancelled" ${o.orderStatus === "Cancelled" ? "selected" : ""}>Cancelled</option>
                        </select>
                    </td>
                    <td style="text-align: center;">
                        <div id="${o.orderId}" class="admin__oderview" onclick="displayOrderDetail(this)">Click to view order detail</div>
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
                <button class="order-detail__button" onclick="displayOrderDetail()">X</button>
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
        `
    }
    //
    //
    //
    static search() {
        orderSearchDate.addEventListener("input", () => {
            Order.applyFilters();
        });

        orderSearchDistrict.addEventListener("keyup", () => {
            Order.applyFilters();
        });
    }
    // 
    // 
    // 
    static applyFilters() {
        let filteredOrder = JSON.parse(localStorage.getItem("order"));

        if (orderSearchDate.value !== "") {
            filteredOrder = filteredOrder.filter(o => o.orderDate === formatDate(orderSearchDate.value));
        }

        if (orderSearchDistrict.value !== "") {
            const regex = RegExp(orderSearchDistrict.value, "i");
            filteredOrder = filteredOrder.filter(item => regex.test(removeDiaritics(item.orderAddress.district)));
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
    //
    // toggle order form input address
    //
    static toggleAddressOrder(e) {
        if (e.value === 'userAddress') {
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
        const paymentByCardDiv = document.getElementById("paymentByCard");
        
        if (selectElement.value === "transferPayment") {
            paymentByCardDiv.style.display = "block"; // Hiển thị các input
        } else {
            paymentByCardDiv.style.display = "none"; // Ẩn các input
        }
    }
}