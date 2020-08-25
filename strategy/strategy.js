function Visa()
{
  this.calculate = (price) =>
  {
    return 1.5 * price;
  }
}

function Mastercard()
{
  this.calculate = (price) =>
  {
    return 1.7 * price;
  }
}

function Amex()
{
  this.calculate = (price) =>
  {
    return 2.0 * price;
  }
}

function Cart()
{
  this.card = new Visa();
  this.setStrategy = card =>
  {
    this.card = card
  }
  this.calculate = price => {
    return this.card.calculate(price)
  }
}

const visa = new Visa()
const mastercard = new Mastercard()
const amex = new Amex()

const total = new Cart()

const item = { description: "TV", quantity: 1, price: 1.56, total: 1.56 } 

total.setStrategy(visa)
console.log("Visa: " + total.calculate(item.total))

total.setStrategy(mastercard)
console.log("Mastercard: " + total.calculate(item.total))

total.setStrategy(amex)
console.log("Amex: " + total.calculate(item.total))