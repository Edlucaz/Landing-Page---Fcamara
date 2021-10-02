var Joao = {
  nome: "João da Silva",
  escritorio: "Santos",
  dataRetorno: "11/15/2021",
  estacao: "https://i.imgur.com/fE1MCfZ.png",
  sintoma: "Não"
};

var colaboradores = [Joao];

console.log(colaboradores.length);

function mudaTema() {
  var temaDark = document.body.classList.toggle("dark");
  var logoCabecalho = document.getElementById("logo-cabecalho");
  var botaoTema = document.getElementById("botaoTema");
  if (temaDark == true) {
    logoCabecalho.src = "https://i.imgur.com/pxSiSSI.png";
    botaoTema.textContent = "Modo Orange";
  } else {
    logoCabecalho.src = "https://i.imgur.com/IOsmk9A.png";
    botaoTema.textContent = "Modo Grape";
  }
}

var imgEstacao = document.getElementById("imgEscolhida");
var estacao1 = document.getElementById("estacaoUm");
var estacao2 = document.getElementById("estacaoDois");
var estacao3 = document.getElementById("estacaoTres");
var estacao4 = document.getElementById("estacaoQuatro");
var estacao5 = document.getElementById("estacaoCinco");

function escolherEstacao1() {
  imgEstacao.src = "https://i.imgur.com/bgo1Gtg.png";
}
function escolherEstacao2() {
  imgEstacao.src = "https://i.imgur.com/ZxojWJG.png";
}
function escolherEstacao3() {
  imgEstacao.src = "https://i.imgur.com/fE1MCfZ.png";
}
function escolherEstacao4() {
  imgEstacao.src = "https://i.imgur.com/ORj6UpC.png";
}
function escolherEstacao5() {
  imgEstacao.src = "https://i.imgur.com/6ANt4Ar.png";
}

function simAgendar() {
  var inpNome = document.getElementById("nome").value;
  var inpEscritorio = document.querySelector('input[name="cidade"]:checked')
    .value;
  var inpDataRetorno = document.getElementById("data").value;
  var inpEstacao = document.getElementById("imgEscolhida").src;
  var inpSintoma = document.querySelector('input[name="alternativa"]:checked')
    .value;

  var novoColaborador = {
    nome: inpNome,
    escritorio: inpEscritorio,
    dataRetorno: inpDataRetorno,
    estacao: inpEstacao,
    sintoma: inpSintoma
  };
  if (inpNome == "" || inpEstacao == "https://i.imgur.com/EQ2kuU8.png") {
    alert("Você deve preencher todos os campos e escolher a estação desejada.");
    return;
  } else if (inpSintoma == "Sim") {
    alert(
      "Você deve aguardar pelo menos 14 dias sem sintomas para fazer o agendamento."
    );
  } else {
    colaboradores.push(novoColaborador);
    console.log(novoColaborador);
    console.log(colaboradores.length);

    var elemento = "";
    elemento +=
      "Agendamento realizado com sucesso, confira os dados a seguir:<br><br>" +
      "<p><b>Nome:</b> " +
      inpNome +
      "<br>" +
      "<b>Cidade:</b> " +
      inpEscritorio +
      "<br>" +
      "<b>Data:</b> " +
      inpDataRetorno +
      "<br>" +
      "<b>Estação:</b> " +
      "<br>" +
      "<img class='imgEscolhida' src=" +
      inpEstacao +
      "><br>" +
      "<b>Sintoma Covid:</b> " +
      inpSintoma +
      "</p>" +
      "<button type='button' onclick='novoAgendamento()' class='btnNovoAgendamento' id='novoAgendamento' >" +
      "Novo Agendamento" +
      "</button>";
    var divContainer = document.getElementById("container");
    divContainer.innerHTML = elemento;
  }
}
function novoAgendamento() {
  window.location.reload(true);
}
