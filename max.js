const sojib = 400;
const saiful = 450;
const faysal = 500;
const max = Math.max(sojib, saiful, faysal);
console.log(max);
if (sojib > saiful) {
    if (sojib > faysal) {
        console.log("Sojib is bigger", sojib);
    }
    else {
        console.log("Faysal is bigger", faysal);
    }
}
else {
    if (saiful > faysal) {
        console.log("Saiful is bigger", saiful)
    } else {
        console.log("Faysal is bigger", faysal);
    }
}

if (sojib > saiful && sojib > faysal) {
    console.log("Sojib is bigger.", sojib);
}
else if (saiful > sojib && saiful > faysal) {
    console.log("Saiful is bigger.", saiful);
}
else {
    console.log("Faysal is bigger.", faysal);
}