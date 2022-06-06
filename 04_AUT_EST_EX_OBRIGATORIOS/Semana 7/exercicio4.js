var quantP = 0;
var quantP_F = 0;

function valcalc() {
  quantP = document.getElementById("quant").value;
  console.log(quantP);
  select = document.getElementById("select");
  option = select.options[select.selectedIndex].value;
  if (quantP > 50 && option == "diurno") {
    quantP_F = quantP * 200 * 0.6;
  } else if (quantP <= 50 && option == "diurno") {
    quantP_F = quantP * 200;
  } else if (quantP > 50 && option == "noturno") {
    quantP_F = quantP * 100 * 0.8;
  } else {
    quantP_F = quantP * 100;
  }
  document.getElementById("valor").innerHTML += `<br/>${quantP_F}`;
}
