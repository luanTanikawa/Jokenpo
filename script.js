let botao = document.querySelector('button')
let campoJogador = document.querySelector('.seuCampo-img')
let campoComputador = document.querySelector('.campoComputador-img')
let contador = [...document.querySelectorAll('.contador-number')]
let resultado = document.querySelector('.resultado')

let contadorJogador = 0
let contadorComputador = 0

function computador() {
    let aleatorio = Math.floor(Math.random() * 100)
    let opcaoSelecionada = ''

    if (aleatorio <= 33) {
        opcaoSelecionada = 'pedra'
        campoComputador.innerHTML = '<img src="imagens/pedra.png" alt="">'

    } else if (aleatorio >= 34 && aleatorio <= 66) {
        opcaoSelecionada = 'papel'
        campoComputador.innerHTML = '<img src="imagens/papel.png" alt="">'

    } else if (aleatorio >= 67) {
        opcaoSelecionada = 'tesoura'
        campoComputador.innerHTML = '<img src="imagens/tesoura.png" alt="">'
    }

    return opcaoSelecionada
}

botao.addEventListener('click', () => {
    let opcaoSelecionada = document.querySelector('input[type="radio"]:checked')
    let opcaoComputador = computador()

    if (resultado.children.length == 1) {
        resultado.children[0].remove()
    }

    switch (opcaoSelecionada.value) {
        case 'pedra':
            campoJogador.innerHTML = '<img src="imagens/pedra.png" alt="">'
            if (opcaoComputador == 'pedra') {
                resultado.innerHTML = '<div>Empate</div>'

            } else if (opcaoComputador == 'papel') {
                contadorComputador++
                contador[1].innerHTML = contadorComputador
                resultado.innerHTML = '<div>O computador venceu</div>'

            } else if (opcaoComputador == 'tesoura') {
                contadorJogador++
                contador[0].innerHTML = contadorJogador
                resultado.innerHTML = '<div>O jogador venceu</div>'
            }
            break

        case 'papel':
            campoJogador.innerHTML = '<img src="imagens/papel.png" alt="">'

            if (opcaoComputador == 'pedra') {
                contadorJogador++
                contador[0].innerHTML = contadorJogador
                resultado.innerHTML = '<div>O jogador venceu</div>'

            } else if (opcaoComputador == 'papel') {
                resultado.innerHTML = '<div>Empate</div>'

            } else if (opcaoComputador == 'tesoura') {
                contadorComputador++
                contador[1].innerHTML = contadorComputador
                resultado.innerHTML = '<div>O computador venceu</div>'
            }
            break

        case 'tesoura':
            campoJogador.innerHTML = '<img src="imagens/tesoura.png" alt="">'

            if (opcaoComputador == 'pedra') {
                contadorComputador++
                contador[1].innerHTML = contadorComputador
                resultado.innerHTML = '<div>O computador venceu</div>'

            } else if (opcaoComputador == 'papel') {
                contadorJogador++
                contador[0].innerHTML = contadorJogador
                resultado.innerHTML = '<div>O jogador venceu</div>'

            } else if (opcaoComputador == 'tesoura') {
                resultado.innerHTML = '<div>Empate</div>'
            }
            break
    }
})

