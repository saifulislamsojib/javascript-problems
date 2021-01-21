function add(numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const numbers = [45, 25, 15, 85, 95, 65, 55, 75];
const result = add(numbers);
console.log( "Summation Of The Array Is:",result);
const numbers2 = [5, 10, 60, 40, 54, 50];
const result2 = add(numbers2);
console.log( "Summation Of The Array Is:",result2);