function somarAl() {
  var valor = document.getElementById("num").value;
  var lista = valor.split("");
  var lista2 = lista.map(Number);
  var div = document.getElementById("res");
  var res = 0;
  for (let i = 0; i < lista2.length; i++) {
    res += lista2[i];
  }
  div.innerHTML = res;
}
