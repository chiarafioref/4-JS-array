console.log("script JS caricato");

let workHours = [40, 35, 45, 38, 42];
let hourSalary = 15;
let overtime = 5;

for (let i = 0; i < workHours.length; i++) {

    let totalSalary = (hourSalary * workHours[i]);

    if (workHours[i] > 40) {

        totalSalary = totalSalary + (overtime * (workHours[i] - 40));
    }

    console.log("Stipendio settimanale: " + totalSalary + "€");
}

