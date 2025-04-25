var flag = 0;

function muda_cor(){
    let body = document.getElementById("bg");
   
    if(flag == 0){
    body.style.backgroundColor = "#4335a3";
    flag = 1
    }else{
        body.style.backgroundColor = "#312484";
        flag = 0;        
    }
}