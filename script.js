let botoes = document.querySelectorAll(".butoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)
}