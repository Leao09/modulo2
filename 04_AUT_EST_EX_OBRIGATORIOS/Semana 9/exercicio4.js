function calc() {
  var termos = document.getElementById("termos").value;
  var sequencia = [];
  sequencia[0] = 1;
  sequencia[1] = 1;

  var div = document.getElementById("main");
  //Laço de repetição para enquanto o numero do termo for maior que i ele executa a fórmula de fibonati dentro de um array
  for (i = 2; i < termos; i++) {
    sequencia[i] = sequencia[i - 2] + sequencia[i - 1];
  }

  div.innerHTML = sequencia;
}
