function minusNum(){
    let value = Number(document.getElementById('num').value);
    if(value != 1){
        document.getElementById('num').value = value - 1;
    }
}

function addNum(){
    let value = Number(document.getElementById('num').value);
    if(value < 15){
    document.getElementById('num').value = value + 1;
    }
}