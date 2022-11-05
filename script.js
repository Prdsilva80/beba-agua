const smallCups = document.querySelectorAll('.cup-small')
const litros = document.getElementById('litros')
const porcentagem = document.getElementById('porcentagem')
const falta = document.getElementById('falta')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        porcentagem.style.visibility = 'hidden'
        porcentagem.style.height = 0
    } else {
        porcentagem.style.visibility = 'visible'
        porcentagem.style.height = `${fullCups / totalCups * 330}px`
        porcentagem.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        falta.style.visibility = 'hidden'
        falta.style.height = 0
    } else {
        falta.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}