const meaning = document.querySelector('#meaning')
const btn1 = document.querySelectorAll('#btn-1')
const btn2 = document.querySelectorAll('#btn-2')
const clear = document.querySelectorAll('#clear')
let block = document.querySelectorAll('.block')

let element = 0

for (let button of btn1) {

    button.onclick = () => {
        element++
        document.body.style.color = 'green'
        meaning.innerHTML = element
    }
}
for (let button of btn2) {
    button.onclick = () => {
        element--
        document.body.style.color = 'red'
        meaning.innerHTML = element
        if (element === 0) {
            element++
        }
    }
}
for (let button of clear) {
    button.onclick = () => {
        element = 0
        meaning.innerHTML = element
    }
}

const X = document.querySelector('#X')
const Y = document.querySelector('#Y')

window.block.addEventListener('mousemove', event => {
    X.innerText = event.screenX
    Y.innerText = event.screenY
})
