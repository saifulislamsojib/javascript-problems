function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return 'This Year Is Leap Year';
            }
            return 'This Year Is Not Leap Year';
        }
        return 'This Year Is Leap Year';
    }
    return 'This Year Is Not Leap Year';
}
const result = isLeapYear(2000);
console.log(result);