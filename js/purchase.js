let cart = []
let orderTable = []

class Order {
    constructor(orderId, userId, orderDate, items, orderPrice, status) {
        this.orderId = orderId,
            this.userId = userId,
            this.orderDate = orderDate,
            this.items = items,
            this.orderPrice = orderPrice,
            this.status = status
    }

    static insert(orderId, userId, orderDate, items, orderPrice, status) {
        let order = new Order(
            orderId,
            userId,
            orderDate,
            items,
            orderPrice,
            status);
        orderTable.push(order);
    }

    static addToCart(productId){
        console.log(productId)
    }
}