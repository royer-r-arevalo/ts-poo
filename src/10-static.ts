console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,2,3,44,3,2,1,0));

class MyMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]) {
        return numbers.reduce(
            (max, item) =>
            max >= item ? max : item
        );
    }
}

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(12,12,58,56778,54,4));
console.log('MyMath.max', MyMath.max(-2,-1,-15));
