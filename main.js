let container = document.querySelector('#container')

// function left(){
//     let block = document.querySelector("#block");

//     block.style.left = 0;
// }

// function right(){
//     let block = document.querySelector("#block");

//     block.style.left = "350px";
// }
let colors = ['#3e9696', '#ffea66', '#66d7f0', '#c184ee', '#ba6b47',]
function createBlock(blockNumber){
    for (let i = 0; i < blockNumber; i++){
        let block = document.createElement("div")

        console.log(block)
        block.id = 'block' + (i + 1)
        let colorIndex = Math.floor(Math.random() * colors.length)
        block.style.backgroundColor = colors[colorIndex]
        block.className = 'block'

        container.appendChild(block)
    }
}

function erase(){
    container.innerHTML = ''
}