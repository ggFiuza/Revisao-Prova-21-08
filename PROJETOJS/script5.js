let p1 = {
    nome: prompt("Nome do Primeiro Pokémon:"),
  
    tipo: prompt("Tipo (água, fogo, terra):").toLowerCase(),
  
    poder: Math.floor(Math.random() * 10) + 1
};

let p2 = {
    nome: prompt("Nome do Segundo Pokémon:"),
  
    tipo: prompt("Tipo (água, fogo, terra):").toLowerCase(),
  
    poder: Math.floor(Math.random() * 10) + 1
};


if ((p1.tipo === "água" && p2.tipo === "fogo") ||
    
    (p1.tipo === "fogo" && p2.tipo === "terra") ||
    
    (p1.tipo === "terra" && p2.tipo === "água")) {
  
    p1.poder += 3;
  
} else if ((p2.tipo === "água" && p1.tipo === "fogo") ||
           
           (p2.tipo === "fogo" && p1.tipo === "terra") ||
           
           (p2.tipo === "terra" && p1.tipo === "água")) {
  
    p2.poder += 3;
}


console.log(p1.nome + " vs " + p2.nome);

if (p1.poder > p2.poder) console.log(p1.nome + " venceu!");
  
else if (p2.poder > p1.poder) console.log(p2.nome + " venceu!");
  
else console.log("Empate!");

