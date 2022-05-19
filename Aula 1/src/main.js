function calcularMedia() {
  var notaUm = parseFloat(document.getElementById("nota1").value);
  var notaDois = parseFloat(document.getElementById("nota2").value);
  var notaTres = parseFloat(document.getElementById("nota3").value);
  var notaQuatro = parseFloat(document.getElementById("nota4").value);

  var media = (notaUm + notaDois + notaTres + notaQuatro) / 4;
  var mediaFinal = media.toFixed(1);

  document.getElementById("media").value = mediaFinal;

  if (mediaFinal >= 6) {
    document.getElementById("resultado").value = ("Parabéns, Você Passou!");
  } else {
    document.getElementById("resultado").value = ("Não foi dessa vez!");
  }
}

function limparTudo() {
  document.getElementById("materia").value = "";

  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nota4").value = "";

  document.getElementById("media").value = "";
  document.getElementById("resultado").value = "";

}