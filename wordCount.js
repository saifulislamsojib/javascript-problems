function wordCount() {
    let count = 0;
    for (let i = 0; i < speech.length; i++) {
        const element = speech[i];
        if (element == ' ' && speech[i - 1] != ' ') {
            count++;
        }
    }
    count++;
    return count;
}
const speech = 'My name is Saiful Islam Sojib. I am a good person';
const result = wordCount(speech);
console.log(result);
const word = speech.split(' ').length;
console.log(word);