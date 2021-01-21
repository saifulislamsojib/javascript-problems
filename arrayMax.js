function maximum(marks) {
    let max = [0];
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        if (element > max) {
            max = element;
        }

    }
    return max;
}
const marks = [70, 75, 65, 55, 47, 80, 90, 85, 45, 66, 87, 45, 47, 58, 80, 74, 99];
const result = maximum(marks);
console.log(result);