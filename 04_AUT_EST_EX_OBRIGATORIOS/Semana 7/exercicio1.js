debugger;
var quantProdI;
var quantProdF;

function soma() {
  quantProdI = document.querySelector("#prod1").value;
  quantProdF = document.querySelector("span");
  quantProdF.innerHTML = parseInt(quantProdI) + 1;
}

function subtrai() {
  quantProdI = document.querySelector("#prod1").value;
  quantProdF = document.querySelector("span");
  quantProdF.innerHTML = parseInt(quantProdI) - 1;
}
