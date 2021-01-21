function reverseStr(string){
    let reverse = "";
    for (let i = 0; i < string.length; i++){
        const char = string[i];
        reverse = char + reverse;
    }
    return reverse;
}
const string = "I Love You Very Much";
const output = reverseStr(string);
//console.log(output);

function reverse(str){
    return str.split("").reverse().join("");
  }
const str = "Sojib Saiful";
const output2 = reverse(str);
console.log(output2);