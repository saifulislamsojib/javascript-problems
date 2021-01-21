function removeDuplicate(numbers) {
    const uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        const index = uniqueNumbers.indexOf(element);
        if (index == -1) {
            uniqueNumbers.push(element);
        }
    }
    return uniqueNumbers;
}
const numbers = [12, 14, 15, 16, 17, 54, 15, 14, 17, 12, 13, 54, 45, 54];
const result = removeDuplicate(numbers);
console.log(result);