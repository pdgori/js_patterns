let personFactory = (function(){
    let personPrototype = {
        greet: function(person){
            return `Hello, ${person.firstName}`;
        }
    }

    return function(firstName, lastName){
        let person = Object.create(personPrototype, {
            firstName: {writable: false, value: firstName},
            lastName: {writable: false, value: lastName}
        })
        return person;
    }
})();

let johnDoe = personFactory("Jhon", "Doe");
let janeSmith = personFactory("Jane", "Smith");

console.log(johnDoe.greet === janeSmith.greet);
console.log(johnDoe.greet(janeSmith));
console.log(janeSmith.greet(johnDoe));

