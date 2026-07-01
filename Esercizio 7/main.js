console.log("script JS caricato");

let athletes = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
let scores = [78, 93, 86, 91, 82];
let ranking = [];
let positions = ["Oro", "Argento", "Bronzo", "4°", "5°"];

for (let i = 0; i < scores.length; i++) {

    ranking.push({ name: athletes[i], score: scores[i] });

}
ranking.sort((a, b) => b.score - a.score);

for (let i = 0; i < ranking.length; i++) {

    console.log(positions[i] + ": " + ranking[i].name);

}


