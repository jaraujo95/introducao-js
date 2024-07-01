var peso = parseFloat(prompt("Qual é o peso em kg?"))
var altura = parseFloat(prompt("Qual a sua altura?"))

var imc = peso / (altura**altura)

alert("Seu Imc é: " + imc.toFixed(2))

if(imc < 18.5) {
    alert("O  Imc indica baixo peso");
} else if(imc >= 18.5 && imc <= 24.9) {
    alert("O Imc indica peso normal.");
} else if (imc >=25 && imc <= 29.9) {
    alert("O IMC indica sobrepeso");
} else {
    alert("O imc indica obesidade");
}

