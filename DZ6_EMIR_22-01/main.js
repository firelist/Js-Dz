const text = document.querySelector('#reverse_text')

let str = prompt('Введите строку').split(' ')
function reverse (str, text) {
    let newStr = str.reverse()
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'text')
    text.append(h3)
    newStr.forEach(() => {
        h3.innerText = newStr.join(' ')
    })
}

reverse(str, text)