const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const idade = Number(inputIdade.value.trim());

  resultado.classList.remove(
    "d-none",
    "alert-info",
    "alert-danger",
    "alert-success",
    "alert-warning"
  );

  if (nome === "" || inputIdade === "") {
    resultado.textContent = "Preencha todos os campos!";
    resultado.classList.add("alert-warning");
    return;
  }

  const mensagem = verificarIdade(idade);

  resultado.textContent = `Olá ${nome}! ${mensagem}`;
  resultado.classList.remove("d-none");
});

function verificarIdade(idade) {
  if (idade >= 18) {
    resultado.classList.add("alert-success");
    return "Você é maior de idade!";
  }
  resultado.classList.add("alert-danger");
  return "Você é menor de idade!";
}
