export class MyService {
    static instance: MyService | null = null;

    private constructor(private _name:string) {
        
    }

    get name() {
        return this._name;
    }

    static create(name: string) {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const myService1 = MyService.create('Royer');
const myService2 = MyService.create('Arevalo');

console.log(myService1.name);
console.log(myService2.name);

console.log(myService1 === myService2);