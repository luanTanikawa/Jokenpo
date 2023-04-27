    
function reset () {
    computador = Math.floor(Math.random() * 100)
        if (computador <= 33) {
            escolhaC = 'PEDRA'
            document.querySelector('.campoComputador-img').innerHTML = "<img src='imagens/pedra.png'>"

        } else if (computador > 33 && computador <= 66) {
            escolhaC = 'PAPEL'
            document.querySelector('.campoComputador-img').innerHTML = "<img src='imagens/papel.png'>"

        } else if (computador > 66) {
            escolhaC = 'TESOURA'
            document.querySelector('.campoComputador-img').innerHTML = "<img src='imagens/tesoura.png'>"
        }


        console.log('O computador escolheu:' + escolhaC)
        return escolhaC
}

let j = 0
let c = 0

function jogar () {
    let escolhaC = reset()
    

    if (document.querySelectorAll("input:checked")[0].value == 'pedra') {
        escolhaJ = document.querySelectorAll("input:checked")[0].value == 'pedra'
        document.querySelector('.seuCampo-img').innerHTML = "<img src='imagens/pedra.png'>"

        if (escolhaC == 'PEDRA') {
            console.log('EMPATE')
            document.querySelector('.resultado div').innerHTML = 'EMPATE'

        } else if (escolhaC == 'PAPEL') {
            console.log('O COMPUTADOR VENCEU')
            document.querySelector('.resultado div').innerHTML = 'O COMPUTADOR VENCEU'
            c += 1
            document.querySelector('.campoComputador .contador-number').innerHTML = c


        } else if (escolhaC == 'TESOURA') {
            console.log('O JOGADOR VENCEU')
            document.querySelector('.resultado div').innerHTML = 'O JOGADOR VENCEU'
            j += 1
            document.querySelector('.seuCampo .contador-number').innerHTML = j

        }

    } else if (document.querySelectorAll("input:checked")[0].value == 'papel') {
        escolhaJ = document.querySelectorAll("input:checked")[0].value == 'papel'
        document.querySelector('.seuCampo-img').innerHTML = "<img src='imagens/papel.png'>"
        if (escolhaC == 'PEDRA') {
            console.log('O JOGADOR VENCEU')
            document.querySelector('.resultado div').innerHTML = 'O JOGADOR VENCEU'
            j += 1
            document.querySelector('.seuCampo .contador-number').innerHTML = j


        } else if (escolhaC == 'PAPEL') {
            console.log('EMPATE')
            document.querySelector('.resultado div').innerHTML = 'EMPATE'

        } else if (escolhaC == 'TESOURA') {
            console.log('O COMPUTADOR VENCEU')
            document.querySelector('.resultado div').innerHTML = 'O COMPUTADOR VENCEU'
            c += 1
            document.querySelector('.campoComputador .contador-number').innerHTML = c

        }

    } else if (document.querySelectorAll("input:checked")[0].value == 'tesoura') {
        escolhaJ = document.querySelectorAll("input:checked")[0].value == 'tesoura'
        document.querySelector('.seuCampo-img').innerHTML = "<img src='imagens/tesoura.png'>"

        if (escolhaC == 'PEDRA') {
            console.log('O COMPUTADOR VENCEU')
            document.querySelector('.resultado div').innerHTML = 'O COMPUTADOR VENCEU'
            c += 1
            document.querySelector('.campoComputador .contador-number').innerHTML = c


        } else if (escolhaC == 'PAPEL') {
            console.log('O JOGADOR VENCEU')
            document.querySelector('.resultado div').innerHTML = 'O JOGADOR VENCEU'
            j += 1
            document.querySelector('.seuCampo .contador-number').innerHTML = j


        } else if (escolhaC == 'TESOURA') {
            console.log('EMPATE')
            document.querySelector('.resultado div').innerHTML = 'EMPATE'
        }
    }
}