const btnEmpresa = document.getElementById("btn_empresa");
const btnCooperativa = document.getElementById("btn_cooperativa");

btnEmpresa.addEventListener("click", () => {
    window.location.href = "tela_empresa.html";
});

btnCooperativa.addEventListener("click", () => {
    window.location.href = "tela_cooperativa.html";
});