var lang = prompt()

var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
var arr2 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']

switch (lang) {
    case 'ru':
        console.log(arr)
        break
    case 'en':
        console.log(arr2)
        break
    default:
        alert('ERROR')
}