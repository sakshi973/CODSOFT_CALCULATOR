function clearScreen(){
    document.getElementById("result").value = "";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}