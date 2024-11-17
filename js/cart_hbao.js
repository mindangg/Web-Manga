let cartTable = JSON.parse(localStorage.getItem('cart')) || []
let orderTable = JSON.parse(localStorage.getItem('order')) || []

const productContainer = document.querySelector(".product__container")
const cartItemContainer = document.querySelector(".cart-items") // ds sản phẩm mua
const orderContainer = document.querySelector(".order");  //ls mua hàng
const cartSummary = document.querySelector(".cart-summary")  // hoa don
const orderTableContainer = document.getElementById("order-table__body-content") // trang admin
const paymentInfoContainer = document.querySelector(".payment-info__container") //xem lai hang mua
const paymentInfoSummary = document.querySelector(".payment-info__summary") // Tong


const billingInfo = document.getElementById("billing-info")
const billingFullName = document.getElementById("billing-info__fullName")
const billingPhoneNumber = document.getElementById("billing-info__phoneNumber")
const billingHouseNumber = document.getElementById("billing-info__houseNumber")
const billingStreet = document.getElementById("billing-info__street")
const billingWard = document.getElementById("billing-info__ward")
const billingDistrict = document.getElementById("billing-info__district")
const billingCity = document.getElementById("billing-info__city")

// TODO: move to user.js
const userInfo = document.getElementById("user-info")
const userFullname = document.getElementById("user-info__fullName")
const userphoneNumber = document.getElementById("user-info__phoneNumber")
const userHouseNumber = document.getElementById("user-info__houseNumber")
const userStreet = document.getElementById("user-info__street")
const userWard = document.getElementById("user-info__ward")
const userDistrict = document.getElementById("user-info__district")
const userCity = document.getElementById("user-info__city")

function clearForm(e) {
    e.querySelectorAll("input").forEach(input => {
        document.getElementById(input.id).value = "";
    });
}

const accoutLoginInfo = userList.find(u => u.userId === JSON.parse(localStorage.getItem('accountLogin')))

function renderUserInfo() {
    // clearForm(userInfo)
    userFullname.value = accoutLoginInfo.fullName;
    userphoneNumber.value = accoutLoginInfo.phoneNumber;
    userHouseNumber.value = accoutLoginInfo.address.houseNumber;
    userStreet.value = accoutLoginInfo.address.street;
    userWard.value = accoutLoginInfo.address.ward;
    userDistrict.value = accoutLoginInfo.address.district;
    userCity.value = accoutLoginInfo.address.city;
}

function editUserInfo() {
    if (!Validation.checkBlankField(userInfo)) {
        const currentEditUserIndex = userList.findIndex(user => user.userId === JSON.parse(localStorage.getItem('accountLogin')))
        const queryUserInfoInput = document.querySelector(".edit-user__form").querySelectorAll("input");
        for (const userInfoInput of queryUserInfoInput) {
            const metadata = userInfoInput.id.split("__")[1];
            if (metadata === "fullName" || metadata === "phoneNumber") {
                userList[currentEditUserIndex][metadata] = userInfoInput.value;
            } else {
                userList[currentEditUserIndex]["address"][metadata] = userInfoInput.value;
            }
        }

        localStorage.setItem('users', JSON.stringify(userList));
        alert("Cập nhật thông tin thành công");
        window.location.reload();
    }
}

class Cart{
    static addToCart(e) {
        console.log(e.id)
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
            cartTable.push({ ...cartItem, quantity })
        }
        localStorage.setItem('cart', JSON.stringify(cartTable))
        Cart.renderCartPreview(cartTable)
        alert("Thêm vào giỏ hàng thành công");
    }
    static renderCartPreview(cartItem) {
        cartItemContainer.innerHTML = ""
        cartItem.forEach(p => {
            cartItemContainer.innerHTML += `
                <tr>
                    <td class="table__td__img">
                        <img src="${p.cover1}" alt="Product Image" ></td>
                    <td class="table__td__name">
                        <p>${p.series}</p>
                    </td>
                    <td class="table__td__quantity">
                        <input type="number" name="Quantity" class="cart__quantity"
                        value="${p.quantity}"
                        min="1"
                        max="${p.stock}"
                        data-product-id="${p.productId}" ><br>
                    <input id="${p.productId}" type="button" value="Remove" class="reMove" onclick="Cart.removeFromCart(this)">
                    
                    </td>
                    <td class="table__td__total">
                        <p>$${p.price * p.quantity}</p>
                    </td>
                </tr>
                `
            });
            // chưa thêm vào
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
                <h3> $${cartTable.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            `
        }
        
        //BILL INFORMATION
        static renderBill(){
            const addressInfo = document.getElementById("address__info");
            if (accountLoginInfo?.address) {
                addressInfo.innerHTML = "";
                addressInfo.innerHTML = `
                <p>${accountLoginInfo.address.houseNumber} 
                ${accountLoginInfo.address.street}, 
                ${accountLoginInfo.address.ward},
                ${accountLoginInfo.address.district},
                ${accountLoginInfo.address.city}</p>
                `;
            }            
        }
}
window.onload = function(){
    Cart.renderBill();
};
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
function renderViewEditAddress() {
    const cart = document.querySelector(".cart");
    cart.style.display = "none";
}
function renderViewTransfer(){
    const cart = document.querySelector(".cart");
    const address=document.querySelector(".billing-form");
    const payment=document.querySelector(".transfer-form");
    cart.style.display = "none";
    address.style.display="none";
    payment.style.display="block";
}