var home_sec = document.querySelector("#home");
var skills_sec = document.querySelector("#skills");
var potrait_img = document.querySelector(".potrait-img");
var skill_circles = document.querySelectorAll(".skill-circle"); 
var skill_texts = document.getElementsByClassName("skill-text"); 
var cards = document.querySelectorAll(".card");
var exp_cards = document.querySelectorAll(".exp-card");
var disappear_appear = document.querySelectorAll(".disappear");


home_sec.addEventListener("mousemove", (e)=>{

    potrait_img.style.transform = `translate(${e.offsetX/25}%,${e.offsetY/25}%)`

})

var delay = 100;

skill_circles.forEach((skill_circle, i) => {
    skill_circle.addEventListener("mousemove", (e)=>{
        skill_circle.style.transform = `translate(${-e.offsetX/25}%,${-e.offsetY/25}%)`
        skill_texts[i].style.transform = `translate(${e.offsetX/25}%,${e.offsetY}%)`
    })
    skill_circle.addEventListener("mouseleave", (e)=>{
        skill_circle.style.transform = `translate(0%,0%)`
        skill_texts[i].style.transform = `translate(0%,0%)` 
    })

    skill_circle.style.transitionDelay = delay * i + "ms";
    
});


cards.forEach((card,i) => {
    i++;
    card.style.top = 2*i +"%"
});


 
var appear_elements = document.querySelectorAll(".disappear");

const appear_observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            entry.target.classList.add("appear")
        }
})},{threshold:0.1})

const skill_circle_increase = new IntersectionObserver((entries)=>{
   
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            skill_circles.forEach(skill_circle => {
                skill_circle.classList.add("bubble-up")
            });
        } 
        
})},{threshold:1})

const active_observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            entry.target.classList.remove("exp-card-fadded")
        }else{
            entry.target.classList.add("exp-card-fadded")

        }
})},{threshold:0.3})


disappear_appear.forEach(el => {
    appear_observer.observe(el) 

});
  
exp_cards.forEach(el => {  
    active_observer.observe(el) 
});

skill_circle_increase.observe(skills_sec)