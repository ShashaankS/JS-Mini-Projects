const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector("#restartBtn");

let current = "X";
let running = false;
let options=["","","","","","","","","",];

intializeGame();

function intializeGame(){
    current = "X";
    running = true;
    cells.forEach(cell => cell.addEventListener("click",cellClicked));
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent = `${current}'s Turn`;
    
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex]!="" || !running)
        return;
    updateCell(this,cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = current;
    cell.textContent = current;
}

function changePlayer(){
    if(current == "X")
        current="O";
    else
        current="X";
    statusText.textContent = `${current}'s Turn`
}

let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function checkWinner(){
    let win=false;
    for(let i=0;i<winConditions.length;i++)
        {
            const condition = winConditions[i];
            const cellA = options[condition[0]];
            const cellB = options[condition[1]];
            const cellC = options[condition[2]];

            if(cellA=="" || cellB=="" || cellC=="")
                continue;
            if(cellA == cellB && cellB == cellC)
                {
                    win=true;
                    break;
                }
        }
    if(win)
        {
            statusText.textContent = `${current} won!!`;
            running=false;
        }
    else if(!options.includes(""))
        {
            statusText.textContent = `Draw!!`;
            running=false;
        }
    else
    changePlayer();
}

function restartGame(){
    current="X";
    options=["","","","","","","","","",];
    statusText.textContent = `${current}'s Turn`;
    cells.forEach(cell => cell.textContent="");
    running = true
}