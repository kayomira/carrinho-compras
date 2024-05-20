let valorSomado = document.getElementById("valor-total");
let carrinho = document.getElementById("lista-produtos");
valorTotal = 0;


function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    if (quantidade < 1){
        alert("Insira uma quantidade válida")
        exit()
    }

    let sectionProduto = produto.split(" ")[0];
    let subTotal = quantidade * valorUnitario
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto ${sectionProduto.toLowerCase()}"><span class="texto-azul">${parseInt(quantidade)}x</span>${nomeProduto}<span class="texto-azul">R$${subTotal}</span></section>`

    valorTotal = valorTotal + subTotal;
    valorSomado.innerHTML = `R$${valorTotal}`;
    document.getElementById("quantidade").value = "";

}

function limpar() {
    valorTotal = 0;
    valorSomado.innerHTML = `R$${valorTotal}`;
    carrinho.innerHTML = " "
}