class User {
    constructor(id, name, {
        isAdmin = false
    }) {
        this.id = id;
        this.name = name;
        this.isAdmin = isAdmin;
    }
    hasAccess() {
        return this.isAdmin;
    }
}

class NullUser {
    constructor() {
        this.name = 'Guest';
    }
    hasAccess() {
        return false;
    }
}

const users = [new User(1, 'Phillipe', {
    isAdmin: true
}), new User(2, 'Jhon', {
    isAdmin: true
})]

const getUser = (id) => {
    const user = users.find(u => u.id === id);
    if (!user)
        return new NullUser()

    return user
}

const printUser = (id) => {
    const user = getUser(id);

    console.log(`Hello ${user.name}`)
    if (user.hasAccess()) {
        console.log('You have access');
    } else {
        console.log('You are not allowed here');
    }

}

printUser(1)
printUser(2)
printUser(3)