/*El acceso protegido establece que solo puede ser accedido y manipulado en la clase padre e hijos que lo implementan
más no desde afuera
*/ 

export class Animal {
    constructor(protected name:string) {
    }

    move(){
        console.log('Moving along!');
    }

    greeting() {
        return `Hello, I am ${this.name}`;
    }

    protected doSomething() {
        console.log('Doing something!!!');
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
        super.doSomething();
    }
    
    //override method from parent
    move() {
        console.log('Preparing for moving');
        super.move();
    }
}

const fifi = new Animal('fifi');
fifi.move();
fifi.greeting();

const boby = new Dog('boby', 'Rayben');
boby.move();
console.log(boby.greeting());
boby.woof(5);
console.log(boby.owner);

