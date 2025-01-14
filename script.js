document.addEventListener("DOMContentLoaded", () => {
    const formAgenda = document.getElementById("form-agenda");
    const nomeInput = document.getElementById("nome");
    const telefoneInput = document.getElementById("telefone");
    const tabelaContatos = document.getElementById("tabela-contatos").querySelector("tbody");

    const btnCadastrar = document.getElementById("btn-cadastrar");
    
    btnCadastrar.addEventListener("click", () => {
        const nome = nomeInput.value.trim();
        const telefone = telefoneInput.value.trim();

        if (!nome || !telefone) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
        `;

        tabelaContatos.appendChild(novaLinha);

        nomeInput.value = "";
        telefoneInput.value = "";
    });
});
