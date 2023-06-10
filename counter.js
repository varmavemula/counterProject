var current = document.querySelector('.current');
var next = document.querySelector('.next');
var button = document.getElementById('submit');


//we can initiate the counter by using below command 
//or we can directly add the attribute onclick="startCounter()" in the submit button tag in html
button.addEventListener("click", startCounter);
var interval;

//this is the function initiate when the submit button is clicked
function startCounter(){

    //using below line, input value is gathered from the input box
    //for input type, we use .value and for p tags and text related, we use .innerHTML or .innerText
    const target = document.getElementsByClassName('counter-input')[0].value;

    //animate function is called in intervals
    interval = setInterval(()=>{
        animate(Number.parseInt(target, 10))
    },1000);
}

function animate(target){
    
    //count is increased until it reach the target value
    const count = Number.parseInt(current.innerText, 10)+1;

    //next innerText of change div is changed to count value.
    next.innerText= count;

    //next is added with animate class
    next.classList.add('animate');
    
    if (count === target) clearInterval(interval);

    //the both removing animate class and changing current innertext should be done simultaneously.
    setTimeout(function(){
        next.classList.remove('animate');
        current.innerHTML=count;
    },500);
    
    
    // console.log(current.innerHTML);
}