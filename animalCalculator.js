// 1-10d = 50/d
// 11-20d = 100/d
// 21-30d = 300/d

function animalCalculator(depth) {
    let animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        const firstPart = 10 * 50;
        const remaining = depth - 10;
        const secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }
    else {
        const firstPart = 10 * 50;
        const secondPart = 10 * 100;
        const remaining = depth - 20;
        const thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
const result = animalCalculator(32);
console.log(result);