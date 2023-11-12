export class MyDate {
    constructor(
        private _year: number = 1993, 
        private _month: number = 7, 
        private _day: number = 10) {
    }

    printFormat():string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
        return `${day}/${month}/${this._year}`;
    }
    
    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this._day += amount;     
        } 
        if (type === 'months'){
            this._month += amount;
        }
        if (type == 'years'){
            this._month += amount;
        }
    }

    private addPadding(value: number): string {
        return `${value < 10 ? '0' : ''}${value}`;
    }

    get isLeapYear(): boolean {
        if(this._year % 400 === 0) return true;
        if(this._year % 100 === 0) return false;
        return this._year % 4 === 0; 
    }

    get day(): number {
        return this._day;
    }
    get month(): number{
        return this._month;
    }
    get year(): number {
        return this._year;
    }
}

const myDate = new MyDate();
console.log('(1993)=>', myDate.isLeapYear);
const myDate2 = new MyDate(2000,7,10);
console.log('(2000)=>', myDate2.isLeapYear);
const myDate3 = new MyDate(2001,7,10);
console.log('(2001)=>', myDate3.isLeapYear);

