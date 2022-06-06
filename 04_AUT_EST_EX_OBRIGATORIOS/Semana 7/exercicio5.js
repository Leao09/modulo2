function mostraAlunos() {
  var quantAlu = document.getElementById("quantA").value;
  var i = 0;
  while (i < quantAlu) {
    document.getElementById("alunos").innerHTML += `<br> <label> aluno${
      i + 1
    } <input type="text" id="prova${i}" placeholder="nota da prova" > <input type="text" id="trabalho${i}" placeholder="nota do trabalho"><br></label><br><button onclick="calmedia(${i})">Calcula Media</button>`;
    i++;
  }
}

function calmedia(i) {
  var notaP = document.getElementById(String("prova" + String(i))).value;
  var notaT = document.getElementById(String("trabalho" + String(i))).value;
  var media = notaP * 2 + notaT * 3;
  document.getElementById("medAlun").innerHTML += `<br>${media}`;
}
