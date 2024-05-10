var leo = window.document.getElementById("leo")
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var Setadireita = window.document.getElementById("proximo")
var Setaesquerda = window.document.getElementById("voltar")

function rolarparadireita() {
    leo.style = "display:none"
    samanta.style = "display:flex"
    Setadireita.style = "display:none"
    Setaesquerda.style = "display:flex; margin-top:60px;"
}

function rolarparaesquerda() {
    leo.style = "display:flex"
    samanta.style = "display:none"
    Setadireita.style = "display:flex"
    Setaesquerda.style = "display:none"
}

