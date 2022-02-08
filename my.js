
var risultato;
var valore1;
var valore2;
var operatore;
var op;
var res;

function cifra(num){
        document.getElementById('counter').innerHTML+=num;
                                  
}
function operazione(operatore){
    valore1=document.getElementById('counter').textContent;
    document.getElementById('counter').innerHTML=" ";
    op=operatore;
    }

function uguale(){
    valore2=document.getElementById('counter').textContent;
  
    risultato = eval(valore1 + op + valore2);

    document.getElementById('counter').innerHTML=risultato;
}

function reset(){
    document.getElementById('counter').innerHTML=" ";
}


