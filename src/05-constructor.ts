export class MyDate {
    /*private year: number;
    private month: number;
    private day: number;*/
    //En typescript podemos declarar las propiedades y asignarlos directamente en el constructor, pero debemos utilizar si o si public o private

    constructor(
        private year: number = 1993, 
        private month: number = 7, 
        private day: number = 10) {
    }

    printFormat():string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }
    
    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount;     
        } 
        if (type === 'months'){
            this.month += amount;
        }
        if (type == 'years'){
            this.month += amount;
        }
    }

    private addPadding(value: number): string {
        return `${value < 10 ? '0' : ''}${value}`;
    }
}

const myDate = new MyDate();
console.log('()=>', myDate.printFormat());
const myDate2 = new MyDate(2022);
console.log('(2022)=>', myDate2.printFormat());
const myDate3 = new MyDate(2022,3);
console.log('(2022,3)=>', myDate3.printFormat());

