const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('.todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement("h3")
        const innDiv = document.createElement('div')
        const edit = document.createElement('button')
        const del = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        innDiv.setAttribute('class', 'buttons_div')
        del.setAttribute('class', 'delete_button')
        edit.setAttribute('class', 'edit_button')
        console.dir(del)

        text.innerText = input.value
        del.innerText = 'DELETE'
        edit.innerText = 'EDIT'

        todoList.prepend(div)
        div.append(text)
        div.append(innDiv)
        innDiv.prepend(del)
        innDiv.prepend(edit)
        edit.addEventListener('click', () => {
            let newEdit = prompt(text.innerText)
            text.innerText = newEdit
        })
        del.addEventListener('click', () => {
            let answer = confirm('Вы уверены что хотите удалить этот заметок')
            if (answer === true) {
                todoList.removeChild(div)
            }
        })
    }
    input.value = ''


}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => {
    e.code === 'Enter' ? createTodo() : false
})
