class Animal {
    eat() {
        console.log("Animal eats");
    }
}

const Flying = {
    fly() {
        console.log("Animal can fly");
    }
};

const Swimming = {
    swim() {
        console.log("Animal can swim");
    }
};

class Duck extends Animal {}

Object.assign(Duck.prototype, Flying, Swimming);

let duck = new Duck();

duck.eat();
duck.fly();
duck.swim();