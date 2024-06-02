const answer = Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("submitBtn").onclick = function(){
    let inp = document.getElementById("guessField").value;

    if(inp>answer)
    {
        guesses++;
        document.getElementById("guess").innerHTML="Smaller number";
    }
    else if(inp<answer)
    {
        guesses++;
        document.getElementById("guess").innerHTML="Bigger number";
    }
    else if(inp == answer)
    {
        document.getElementById("guess").innerHTML=`Right ! The number is ${answer}. You took ${guesses} guesses.`;
    }   
    else
    {
        document.getElementById("guess").innerHTML="Wrong Input";
    }
}