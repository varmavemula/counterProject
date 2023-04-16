var current = document.querySelector('.current');
var next = document.querySelector('.next');
var button = document.getElementsById('submit');




function startCounter(){
    var interval = setInterval(animate,1000);
    
}

function animate(){
    
    next.classList.add('animate');
    window.alert=""
    
  var timing = setTimeout(function(){
        next.classList.remove('animate');
    },500);
    current.innerHTML=next.innerHTML;
    if(current.innerHTML==("8")){
        
    }
    next.innerHTML= current.innerHTML*1+1;
    
    
    console.log(current.innerHTML);
    
    
}