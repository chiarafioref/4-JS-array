console.log("script JS caricato");

let flowers = ["Margherite", "Ranuncoli", "Peonie", "Tulipani", "Crisantemi"];
let quantityFlowers = [0, 7, 3, 0, 5];

for (let i = 0; i < flowers.length; i++) {

    if (quantityFlowers[i] === 0) {
        console.log(flowers[i] + ": Prodotto esaurito");
    } else if (quantityFlowers[i] < 5) {
        console.log(flowers[i] + ": Scorte basse");
    } else {
        console.log(flowers[i] + ": Prodotto disponibile");
    }
}