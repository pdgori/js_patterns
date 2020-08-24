function Counter() {
    let number = 0;

    function increment(){
        number++;
    }
    function decrement(){
        number--;
    }

    function getValue(){
        return number;
    }

    return {
        getValue,
        increment,
        decrement
    }
}

var counter = new Counter();

counter.increment()
counter.decrement()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getValue())
