const num1 = prompt('Введите первое число')
const num2 = prompt('Введите второе число')

var minimum = (first, second) => {
    if (first > second) {
        console.log(second)
    } else {
        console.log(first)
    }
}

minimum(num1, num2)


var string = prompt('Введите строку')

var length = (parameter) => {
    console.log(parameter.length)
}

length(string)

const x = prompt('Введите первое число')
const y = prompt('Введите второе число')
const z = prompt('Введите елемент "+, -, *, /"')

var calculation = (x, y, z) => {
    if (z === '+') {
        console.log(x + y)
    } else if (z === '-') {
        console.log(x - y)
    } else if (z === '*') {
        console.log(x * y)
    } else {
        console.log(x / y)
    }
}

calculation(x, y, z)