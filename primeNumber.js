function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'Not A Prime Number';
        }
    }
    return 'Prime Number';
}
const result = isPrime(15);
console.log(result);