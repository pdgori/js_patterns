const PaypalPaymentProcessor = require('./Processors/PaypalProcessor');
const StripePaymentProcessor = require('./Processors/StripeProcessor');

class Store {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity){
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15 * quantity);
    }
}


const store = new Store(new PaypalPaymentProcessor('Phillipe'))
store.purchaseBike(2)
store.purchaseHelmet(1)

const store2 = new Store(new StripePaymentProcessor('Phillipe'))
store2.purchaseBike(1)
store2.purchaseHelmet(2)
