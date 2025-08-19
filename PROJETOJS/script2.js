let pessoa

pessoa = {
nome: prompt("Qual o seu nome? "),
peso: prompt("Qual o seu peso? "),
altura: prompt("Qual a sua altura? "),
temp: prompt("Qual a sua temperatura? "),
};

if (pessoa.temp <= 37) {
  console.log("Você não está com febre");
} else {
  console.log("Você está com febre");
}
