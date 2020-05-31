function clickAnswer(){
    
var a1=document.forms.a1.value;    
var a2=document.forms.a2.value;    
var a3=document.forms.a3.value;  
var a4=document.forms.a4.value;   
var a5=document.forms.a5.value;   
var a6=document.forms.a6.value;     
var a7=document.forms.a7.value;   
var a8=document.forms.a8.value;   
var a9=document.forms.a9.value;
var a10=document.forms.a10.value;      
var score=0;    
 
if(a1=="d"){
    score++;    
}    
    
if(a2=="a"){
    score++;
}

if(a3=="c"){    
    score++;
}

if(a4=="a"){    
    score++;
}

if(a5=="a"){    
    score++;
}

if(a6=="jimmy"||a6=="Jimmy"){    
    score++;
}

if(a7=="c"){    
    score++;
}

if(a8=="a"){    
    score++;
}

if(a9=="b"){    
    score++;
}

if(a10=="Logan"||a10=="logan"){    
    score++;
}


alert("you got "+score+" marks");
 window.location = 'x1.html';
       
     
}    
    
    
    
    