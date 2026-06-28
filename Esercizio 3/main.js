console.log("script JS caricato");

let carriage = [1, 2, 3, 4, 5, 6];
let vacancies = [2, 0, 4, 7, 12, 8];
let passengers = Number(prompt("Inserire il numero di passeggeri del gruppo"))

for (let i = 0; i < carriage.length; i++) {
    if (passengers <= vacancies[i]) {

        console.log("Carrozza n." + carriage[i]);
        break;
    }
}