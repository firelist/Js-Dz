const arr =  [77, 11, 30, 202, 580, 25, 84]
console.log(arr)

for (let number of arr) {
     if (number.toString() [0] === '1' || number.toString() [0] === '2' || number.toString() [0] === '5') {
         console.log(number)
     }
}

for (let i = 20; i >= 0; i--) {
    console.log(i)
}

let color = prompt('зеленый, красный, желтый').toLowerCase()

const obj = {
    green: 'Вперед',
    red: 'Стоп',
    yellow: 'Приготовится'
}


switch (color) {
    case 'зеленый':
        alert(obj.green)
        break
    case 'красный':
        alert(obj.red)
        break
    case 'желтый':
        alert(obj.yellow)
        break
    default:
        alert('Вводите только название цветов!')
}
