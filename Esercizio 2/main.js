console.log("script JS caricato");

let name = ["Maria", "Laura", "Ludovico", "Lorenzo", "Francesca"];
let vote = [5, 2, 8, 6, 9];

for (let i = 0; i < name.length; i++) {
    if (vote[i] < 6) {
        console.log(name[i] + ": Insufficiente");
    } else {
        console.log(name[i] + ": Sufficiente");
    }

}
