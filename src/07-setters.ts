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

    set month(newValue: number) {
        if (newValue < 1 || newValue > 12 ) {
            throw new Error('Value out of range.');
        }
        this._month = newValue;
    }
}

const myDate = new MyDate();
console.log('(1993,7)=>', myDate.printFormat());
myDate.month = 4;
console.log('(1993, 4)=>', myDate.printFormat());
myDate.month = 15;
console.log('(1993, 15)=>', myDate.printFormat());

