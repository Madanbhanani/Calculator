function funclu(e){
    document.getElementById('display').value +=e;
}
function equ(){
    let a= document.getElementById('display')
    a.value= eval(a.value);
}
function full(){
    document.getElementById('display').value = '';
    
}

function clearOn(){
    let val= document.getElementById('display').value;
    document.getElementById('display').value = val.slice(0,val.length-1);
}
