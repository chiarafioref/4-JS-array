console.log("script JS caricato");

const vipList = ["Antonio", "Giovanna", "Simona", "Ludovico"];
const standardList = ["Francesco", "Caterina", "Michela", "Giuseppe", "Rebecca"];
let guest = prompt("Inserisci il tuo nome");

if (vipList.includes(guest)) {
    console.log("VIP");

} else if (standardList.includes(guest)) {
    console.log("Standard");
}