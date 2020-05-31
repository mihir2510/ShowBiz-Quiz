function clickAnswer(){
    
var a1=document.forms.a1.value;    
var a2=document.forms.a2.value;    
var a3=document.forms.a3.value;   
var a4=document.forms.a4.value;      
var score=0;    
 
if(a1=="d"){
    score++;
    
}    
    
if(a2=="c"){
    
    score++;
}    
if(a3=="no idea"){
    
    score++;
}
if(a4=="a"){    
    score++;
}    


alert("you got "+score+" marks");
window.location = 'am1.html';
    
       
}    
    
    
 var image_tracker = 'f';   
function change(){
	var image = document.getElementById('social')
	if(image_tracker=='f'){
	image.src = "https://nyoobserver.files.wordpress.com/2018/06/59542417c9e04.jpg?quality=80&w=970"
    image_tracker = 't';
    }
    else if(image_tracker=='t'){
    	image.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2013/06/Disney-logo.jpg"
 		image_tracker = 'k' ;  
    } 
    else if(image_tracker == 'k'){
    	image.src = "http://1000logos.net/wp-content/uploads/2017/10/Harry-Potter-logo-png.png"
    	image_tracker = 'm'	;
    }
    else{
    	image.src = "https://cdn.mos.cms.futurecdn.net/7d2485cc5f7e38a024fbcb48854d89b1.jpg"
    	image_tracker = 'f'	;
    }

}    
 var timer = setInterval('change()',1000);
