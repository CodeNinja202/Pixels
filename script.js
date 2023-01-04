// Your code here
const table = document.getElementsByTagName("table")[0]
const button = document.getElementById ("add-row")
const select = document.getElementsByTagName('select')[0];

button.addEventListener('click', makeRow)
function makeRow () {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

makeRow()
makeRow()

let chosenColor = 'red'
table.addEventListener('click', colorize);

select.addEventListener('change', function (event){
    chosenColor = event.target.value
})
function colorize(event) {
    const target = event.target
    if (target.className.length) {
        target.className = ''
    } else {
        target.className = chosenColor
    }
}



select.addEventListener('change', colorSelect)
function colorSelect(event) {
    
   //console.log(event.target.value)
}


