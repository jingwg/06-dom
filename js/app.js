'use strict';

/* your script goes here */
/* Timer 
console.log("wait for it");
window.setTimeout(function(){
console.log("Toast is done!!!")
},5000);

function doRepeatedly() { console.log("Are we there yet?"); }

//run every 1 second
var timerId = window.setInterval(doRepeatedly, 1000);

window.clearInterval(timerId); //to stop

/* Practice
var links = document.querySelectorAll('a').forEach(
func(item){
    item.setAttribute('target','_blank')
})



/*HTML set red class*/
/*function blink(){
var header = document.querySelector('header')
header.classList.toggle('red');
header.classList.toggle('white');
}

window.setInterval(blink,500);
*/

/*Sol 2 : Add two classes red + white */
function blink() {
var header = document.querySelector('header')
header.classList.toggle('red');
    
}
//window.setInterval(blink,500);

var np = document.createElement('p');
np.textContent = "Hello World"
var h = document.querySelector('header');
h.appendChild(np); 

/*Register */

var img = document.querySelector('img');
var clickCount = 0; 
function handleClick() {

if(clickCount > 3){
      console.log("I think you've had enough");
    img.setAttribute('src', 'img/husky.jpg');

   }
   else {
        console.log("Clicky,Clicky,Clicky");
   }
   
    

   

}
img.addEventListener('click',handleClick )

/* The event call back*/