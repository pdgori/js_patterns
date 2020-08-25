// Using prototypes you don't create the login/logout function everytime that you create an instance of User.

function User(name, {isOnline = false, age, address, email} = {}){
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.isOnline = isOnline;
}

User.prototype.login = function(){
    this.isOnline = true;
    console.log(`${this.name} is online`);
}

User.prototype.logout = function(){
    this.isOnline = false;
    console.log(`${this.name} is offline`);
}

const Jhon = new User('Jhon');
Jhon.login();
Jhon.logout();