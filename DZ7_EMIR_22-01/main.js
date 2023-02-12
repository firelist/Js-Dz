const color = prompt('Введите цвет')

class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}

class Circle extends Component{
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
        this.$element.style.borderRadius = '50%'
    }
}
const block1 = new Circle({
    selector: '#block1',
    size: 200,
    color: 'silver'
})
const block2 = new Circle({
    selector: '#block2',
    size: 200,
    color: 'silver'
})

const block3 = new Circle({
    selector: '#block3',
    size: 200,
    color: 'silver'
})

if (color === 'зеленый') {
    block1.$element.style.background = 'green'
} else if (color === 'желтый') {
    block2.$element.style.background = 'yellow'
} else if (color === 'красный') {
    block3.$element.style.background = 'red'
}
