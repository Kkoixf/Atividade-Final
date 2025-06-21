// Função que será executada quando o botão for clicado
function mostrarOla() {
  // Pega o valor digitado no input com id="nome"
  var nome = document.getElementById("nome").value;

  // Altera o conteúdo do elemento com id="resposta" para exibir a saudação
  document.getElementById("resposta").innerHTML = "Olá " + nome;
}

// Seleciona o botão com id="mostrar"
var mostrar = document.getElementById("mostrar");

// Adiciona um ouvinte de evento que, ao clicar no botão, executa a função mostrarOla
mostrar.addEventListener("click", mostrarOla);
