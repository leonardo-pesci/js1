console.log('hello world!')

function left(){
    let block = document.querySelector("#block");

    block.style.left = 0;
}

function right(){
    let block = document.querySelector("#block");

    block.style.left = "350px";
}

function createBlock(blockNumber){
    for (let i = 0; i < blockNumber; i++){
        let block = document.createElement("div")

        block.id = "block" + (i + 1)
        block.class = 
        container.appendChild(block)
    }
}