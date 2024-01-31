const dataActual = new Date();

console.log(dataActual);

let day = dataActual.getDate();
let month = dataActual.getMonth() +1;
let year = dataActual.getFullYear();
let hour = dataActual.getHours();
let minute = dataActual.getMinutes();

let dataActualFormatada = day + '/0' + month + '/' + year + '   ' + hour + ':' + minute;

console.log(dataActualFormatada);

document.getElementById("CurrentDateTime").innerHTML = dataActualFormatada;

