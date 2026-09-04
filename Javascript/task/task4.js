class Product {
    constructor(id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotalPrice = () => {
        return this.price * this.quantity;
    }

    updateQuantity = (qty) => {
        this.quantity = qty
    }

    getProductDetails = () => {
        return `id=${this.id}\nname:${this.name}\nprice:${this.price}\nquantity:${this.quantity}\ntotalprice:${this.getTotalPrice()} \n--------------------`;
    }
}

const ob = new Product(101, "laptop", 5000, 2)

console.log(ob.getProductDetails())
ob.updateQuantity(3)
console.log(ob.getProductDetails())


