// Seleção dos elementos do DOM
const form = document.querySelector("#form-agenda");
const tabelaCorpo = document.querySelector("#tabela-corpo");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");

// Evento para o botão cadastrar
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página

  // Captura dos valores dos inputs
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const telefone = telefoneInput.value.trim();

  // Validação dos campos
  if (nome === "" || email === "" || telefone === "") {
    alert("Por favor, preencha todos os campos antes de cadastrar um contato.");
    return;
  }

  // Adiciona os dados na tabela
  adicionarContato(nome, email, telefone);

  // Limpa os campos do formulário
  nomeInput.value = "";
  emailInput.value = "";
  telefoneInput.value = "";
});

// Função para adicionar contato na tabela
definirContato(tabelaCorpo);
function adicionarContato(nome, email, telefone) {
  // Criação de uma nova linha na tabela
  const novaLinha = document.createElement("tr");

  // Inserção dos dados na nova linha
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${email}</td>
    <td>${telefone}</td>
  `;

  // Adiciona a nova linha na tabela
  tabelaCorpo.appendChild(novaLinha);
}

// Função para limpar tabela de contatos (caso seja necessário no futuro)
function limparTabela() {
  tabelaCorpo.innerHTML = "";
}
