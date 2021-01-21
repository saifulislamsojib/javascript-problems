function fibonacci(num) {
    if (num == 0) {
        return [0];
    }
    else if (num == 1) {
        return [0, 1];
    }
    else {
        const fibo = fibonacci(num - 1);
        nextElement = fibo[num - 1] + fibo[num - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
const result = fibonacci(12);
console.log(result);