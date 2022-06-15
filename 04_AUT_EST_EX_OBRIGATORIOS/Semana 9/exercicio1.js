function trans() {
  debugger;
  var numero = document.getElementById("numero").value;
  var div = document.getElementById("res");
  var text = "";
  var res = Math.floor(numero / 100);
  if (res % 2 == 0) {
    text = "A centena é par";
  } else {
    text = "A centena é impar";
  }

  div.innerHTML = text;
}
