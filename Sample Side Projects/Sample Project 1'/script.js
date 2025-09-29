 
var cards = document.querySelectorAll(".card");   
var appear_elements = document.querySelectorAll(".disappear");
var cards = document.querySelectorAll(".card");

var delay = 100;

cards.forEach( (card, i) => {
  card.style.transitionDelay = i * delay + "ms";
});
 

const appear_observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            entry.target.classList.add("appear")
        }
})},{threshold:0.1})
  
appear_elements.forEach(el => {  
    appear_observer.observe(el) 
});

