let container = document.querySelector('#container')
console.log(container)

// function left(){
//     let block = document.querySelector("#block");

//     block.style.left = 0;
// }

// function right(){
//     let block = document.querySelector("#block");

//     block.style.left = "350px";
// }

function createBlock(blockNumber){
    for (let i = 0; i < blockNumber; i++){
        let block = document.createElement("div")

        console.log(block)
        block.id = 'block' + (i + 1)
        block.className = 'block'

        container.appendChild(block)
    }
}