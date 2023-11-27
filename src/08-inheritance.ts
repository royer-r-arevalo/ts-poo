export class Animal {
    constructor(public name:string) {
    }

    move(){
        console.log('Moving along!');
    }

    greeting() {
        return `Hello, I am ${this.name}`;
    }
}

export class Dog extends Animal {
    constructor(name: string, public owner: string) {
        super(name);
    }

    woof(times: number): void {
        for (let i = 1; i <= times; i++) {
            console.log('wau!!!');            
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
fifi.greeting();

const boby = new Dog('boby', 'Rayben');
boby.move();
boby.greeting();
boby.woof(5);
console.log(boby.owner);

