let salario = prompt('Inserte su salario');
let horas = prompt('Inserte las horas extra que realizo');
let categoria = prompt('Inserte su categoria');
let max = 30;
let categoria1 = (30 * horas);
let categoria2 = (38 * horas);
let categoria3 = (50 * horas);
if (categoria > 3) {
    console.log("No te pagaran horas extra, este es tu salario" + " " + salario);
}
if (horas > max) {
    ((categoria * max) + salario);
    console.log("Este es tu pago" + salario);
}
if (categoria === categoria1) {
    (categoria1 + salario);
    console.log('Este es tu pago, que incluye tu salario y horas extras');
}
if (categoria === categoria2) {
    (categoria2 + salario);
    console.log('Este es tu pago, que incluye tu salario y horas extras');
} else if (categoria === categoria3) {
    (categoria3 + salario);
    console.log('Este es tu pago, que incluye tu salario y horas extras');
}