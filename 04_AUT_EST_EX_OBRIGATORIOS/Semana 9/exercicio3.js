function ordena() {
  var div = document.getElementById("main");
  var lista = [];
  var nome1 = document.getElementById("name1").value;
  var nome2 = document.getElementById("name2").value;
  var nome3 = document.getElementById("name3").value;
  lista.push(nome1, nome2, nome3);
  //Função para a ordenação e a tranformação de todas as letras em minusculas
  lista.sort(function (a, b) {
    x = a.toLowerCase();
    y = b.toLowerCase();
    return x == y ? 0 : x > y ? 1 : -1;
  });
  div.innerHTML = lista;
  //variável para possibilitar ordenar novos nomes sem precisar reiniciar a página
  var lista = [];
}
