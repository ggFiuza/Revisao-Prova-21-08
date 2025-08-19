let livro1, livro2

livro1 = {
  nome: prompt("Qual nome do livro? "),
  data: prompt("Em que ano ele foi lançado? "),
  pag: prompt("Em que ano ele foi lançado? "),
  autor: prompt("O autor é brasileiro?\n1. Sim\n2.Não "),
};

livro2 = {
  nome2: prompt("Qual nome do livro? "),
  data2: prompt("Em que ano ele foi lançado? "),
  pag2: prompt("Em que ano ele foi lançado? "),
  autor2: prompt("O autor é brasileiro?\n1. Sim\n2.Não "),
};

if (livro1.data < livro2.data2) {
  console.log("O primeiro livro é mais antigo");
} else if (livro2.data2 < livro1.data) {
  console.log("O segundo livro é mais antigo");
}



if (livro1.pag > livro2.pag) {
  console.log("O primeiro livro tem mais páginas");
} else if (livro2.data2 > livro1.data) {
  console.log("O segundo livro tem mais páginas");
}



if (livro1.autor == 1) {
  console.log("O autor do primeiro livro é brasileiro");
} else if (livro2.autor2 == 1) {
  console.log("O autor do segundo livro é brasileiro");
}
else if (livro2.autor2 == 2 && livro1.autor == 2) {
  console.log("Os dois autores não são do Brasil");
}
else if (livro2.autor2 == 1 && livro1.autor == 1) {
  console.log("Os dois autores são do Brasil");
}