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
 
if(a1=="b"){
    score++;    
}    
    
if(a2=="c"){
    score++;
}

if(a3=="a"){    
    score++;
}

if(a4=="Pascal"||a4=="pascal"){    
    score++;
}

if(a5=="a"){    
    score++;
}

if(a6=="Horsemen"||a6=="horsemen"){    
    score++;
}

if(a7=="Mr.Smee"||a7=="mr.smee"){    
    score++;
}

if(a8=="b"){    
    score++;
}

if(a9=="d"){    
    score++;
}

if(a10=="c"){    
    score++;
}


alert("you got "+score+" marks");
window.location = 'disney1.html';
        
     
}    
    
    
    
    