function somarAl() {
  var valor = document.getElementById("num").value;
  //Separação de cada numero com string
  var lista = valor.split("");
  //Conversão de todos os numeros de string para number
  var lista2 = lista.map(Number);
  var div = document.getElementById("res");
  //variável para manipular a soma
  var res = 0;
  //Laço de repetição para somar os algarismo
  for (let i = 0; i < lista2.length; i++) {
    res += lista2[i];
  }
  div.innerHTML = res;
}
