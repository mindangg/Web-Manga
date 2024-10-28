class Product {
    constructor(product_id, product_name, price, img1, img2, serie, quantity, describe, rating, number_of_rating) {
        this._product_id = product_id;
        this._product_name = product_name;
        this._price = price;
        this._img1 = img1;
        this._img2 = img2;
        this._serie = serie;
        this._quantity = quantity;
        this._describe = describe;
        this._rating = rating;
        this._number_of_rating = number_of_rating;
    }

    get product_id() {
        return this._product_id;
    }

    set product_id(value) {
        this._product_id = value;
    }

    get product_name() {
        return this._product_name;
    }

    set product_name(value) {
        this._product_name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get img1() {
        return this._img1;
    }

    set img1(value) {
        this._img1 = value;
    }

    get img2() {
        return this._img2;
    }

    set img2(value) {
        this._img2 = value;
    }

    get serie() {
        return this._serie;
    }

    set serie(value) {
        this._serie = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get describe() {
        return this._describe;
    }

    set describe(value) {
        this._describe = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get number_of_rating() {
        return this._number_of_rating;
    }

    set number_of_rating(value) {
        this._number_of_rating = value;
    }
}