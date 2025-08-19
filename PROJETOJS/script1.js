let produto

produto = {
  nome: "Celular",
  preco: 200,
  emEstoque: true
};

if (produto.emEstoque) {
  console.log("Produto disponível");
} else {
  console.log("Produto indisponível");
}