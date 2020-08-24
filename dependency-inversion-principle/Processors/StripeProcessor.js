class StripePaymentProcessor{
    constructor(user){
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class Stripe{
    constructor(user){
        this.user = user;
    }
    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents/100} with Stripe`);
    }
}

module.exports = StripePaymentProcessor;