class PaypalPaymentProcessor{
    constructor(user){
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars){
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

class Paypal{
    makePayment(user, amountInDollars){
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

module.exports = PaypalPaymentProcessor;