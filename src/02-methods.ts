export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat():string {
        return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
myDate.add(5, 'days');
console.log(myDate.printFormat());
myDate.add(5, 'months');
console.log(myDate.printFormat());
myDate.add(5, 'years');
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);



