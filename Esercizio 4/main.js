console.log("script JS caricato");

let temperatures = [34, 34, 34, 31, 32, 32, 36];

let maxTemperatures = temperatures[0];
let minTemperatures = temperatures[0];
let sum = 0;
for (let i = 0; i < temperatures.length; i++) {
    sum = sum + temperatures[i];

    if (temperatures[i] > maxTemperatures) {
        maxTemperatures = temperatures[i];
    }
    if (temperatures[i] < minTemperatures) {
        minTemperatures = temperatures[i];
    }
}

const average = sum / temperatures.length;

console.log("La massima temperatura registrata nella settimana è: " + maxTemperatures + "°");
console.log("La temperatura minima registrata nella settimana è: " + minTemperatures + "°");
console.log("La temperatura media della settimana è:" + average + "°");