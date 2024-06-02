document.getElementById("submitButton").onclick = function(){
    let a = Number(document.getElementById("sideA").value);
    let b = Number(document.getElementById("sideB").value);
    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "Side C : " + c;
}