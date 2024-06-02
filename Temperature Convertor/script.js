document.getElementById("submitBtn").onclick = function(){
    let temp = document.getElementById("temp").value;
    temp = Number(temp);

    if(document.getElementById("celsius").checked)
    {
        document.getElementById("op").innerHTML = (temp-32)*(5/9)+" °C";
    }
    else if(document.getElementById("fahren").checked)
    {
        document.getElementById("op").innerHTML = ((temp*9/5)+32)+" °F";
    }
    else
    {
        document.getElementById("op").innerHTML = "Select a unit";
    }
}