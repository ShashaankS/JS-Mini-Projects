let count = 0;

document.getElementById("minus").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
    console.log(count);
}

document.getElementById("plus").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
    console.log(count);
}

document.getElementById("reset").onclick = function(){
    // let a = document.getElementById("counter").value;
    count=0;
    document.getElementById("counter").innerHTML = count;
    console.log(count);
}