function insert(value){
    document.getElementById('display').value+=value;
}
function clearScreen(){
    document.getElementById('display').value='';
}
function calculate(){
    let result=document.getElementById('display').value;
    console.log(result);
    document.getElementById('display').value=eval(result);
}

// light mode dark mode animations

function backgroundTheme(){
    let mode=document.getElementById('switch').innerHTML;
//    console.log(mode);
    if(mode==="Dark-Mode"){
        document.body.style.backgroundColor = "black";
        document.getElementById('switch').innerHTML="light-Mode";
        
    }
    else if(mode==="light-Mode"){
        document.body.style.backgroundColor = "white";
        document.getElementById('switch').innerHTML="Dark-Mode";
    }
}