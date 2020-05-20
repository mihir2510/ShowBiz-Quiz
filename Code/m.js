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

if(a4=="d"){    
    score++;
}

if(a5=="b"){    
    score++;
}

if(a6=="The mind stone"||a6=="The Mind Stone"||a6=="Mind stone"||a6=="mind stone"){    
    score++;
}

if(a7=="loki"||a7=="Loki"){    
    score++;
}

if(a8=="d"){    
    score++;
}

if(a9=="b"){    
    score++;
}

if(a10=="b"){    
    score++;
}


alert("you got "+score+" marks");
  window.location = 'm1.html';   
     
}    
    
    
    
    