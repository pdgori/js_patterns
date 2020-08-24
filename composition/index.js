function swimmer({name}){
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function flyer({name}){
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function walker({name}){
    return {
        walk: () => console.log(`${name} walk`)
    }
}

function attacker({name}){
    return {
        attack: () => console.log(`${name} attack!`)
    }
}

const wally = new swimmer({name: 'Wally'});

function swimmingBirdCreator(name){
    const bird = {name: name};

    return {
        ...bird,
        ...flyer(bird),
        ...swimmer(bird)
    }
}

function AlligatorAttackerSwimmerCreator(name){
    const alligator = {name: name};

    return {
        ...alligator,
        ...swimmer(alligator),
        ...walker(alligator),
        ...attacker(alligator)
    }
}

const alligatorAttackerSwimmerCreator = new AlligatorAttackerSwimmerCreator("Julept")
alligatorAttackerSwimmerCreator.attack();
alligatorAttackerSwimmerCreator.walk();
alligatorAttackerSwimmerCreator.swim();

function swimmingBirdCreator(name){
    const bird = {name: name};

    return {
        ...bird,
        ...flyer(bird),
        ...swimmer(bird)
    }
}

const swimmingBird = new swimmingBirdCreator("Eagle");
swimmingBird.fly();
swimmingBird.swim();
