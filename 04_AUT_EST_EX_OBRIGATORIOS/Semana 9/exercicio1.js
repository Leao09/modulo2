//Função que tranjsforma o numero em um decimal
function trans() {
  debugger;
  var numero = document.getElementById("numero").value;
  var div = document.getElementById("res");
  var text = "";
  // Parte que divide o numero por 100 e arredonda para baixo pegando o numero da centena como unidade
  var res = Math.floor(numero / 100);
  //Estrutura condicional para verificar se o numero é impar ou par
  if (res % 2 == 0) {
    text = "A centena é par";
  } else {
    text = "A centena é impar";
  }

  div.innerHTML = text;
}
