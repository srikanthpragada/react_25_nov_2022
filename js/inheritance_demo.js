// Superclass 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    sellingPrice() {
        return this.price * 1.08; // 8% tax 
    }
}

// Subclass 
class DiscountedProduct extends Product  {
    constructor(name, price, discountRate) {
        super(name, price)    // call superclass's constructor 
        this.discountRate = discountRate;
    }
    // Override method in super class 
    sellingPrice() {
        let discount = this.price * this.discountRate / 100;
        let before_tax = this.price - discount;
        let after_tax = before_tax * 1.08; // 8% tax
        return after_tax;
    }
}

p = new Product("Dell XPS 9500", 200000);
console.log(p.sellingPrice())

dp = new DiscountedProduct("Mac Pro", 200000, 15);
console.log(dp.sellingPrice().toFixed(2))

