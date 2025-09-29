var hamburger = document.getElementById("hamburger")
var nav_menu = document.getElementById("nav_menu")
var testimonials_sec = document.getElementById("testimonials")
var accordians = document.querySelectorAll(".accordians")
var project_imgs = document.querySelectorAll(".project-img")
var main = document.querySelector(".main")
 
var nav_links = document.querySelectorAll(".nav-link")

var head1 = document.querySelector(".head1")
var head2 = document.querySelector(".head2")

head1.classList.remove("text-hide")
head2.classList.remove("text-hide")
 
// navbar toggle
hamburger.addEventListener("click", ()=>{
    nav_menu.classList.toggle("nav-toggle")
})

//scroll animation testimonial
var testimonial_imgs = document.querySelectorAll(".testimonial-img")

window.addEventListener("scroll",(e)=>{
    testimonial_imgs.forEach(testimonial_img => {
        testimonial_img.transform = "translateY(10px)"
    });

})

nav_links.forEach((el, i) => {
    el.classList.add("hover-underline-animation")
});

const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach(entry => {
  
        if(entry.isIntersecting){ 
            main.style.backgroundColor ="#333"
            main.style.color ="#ebebeb"
            
        }else{
            main.style.backgroundColor ="#ebebeb"
            main.style.color ="#333"
        }
        
})
  
  },{threshold:0.3})
  
  observer.observe(testimonials_sec) 

  
const observer2 = new IntersectionObserver((entries)=>{
    
    entries.forEach(entry => {
  
        if(entry.isIntersecting){ 
            console.log(entry);
            entry.target.style.transform = "scaleY(1)"
        }
        
        
})
  
  },{threshold:0.3})

project_imgs.forEach(img => {
    observer2.observe(img)
});


 
var appear_elements = document.querySelectorAll(".disappear");

const appear_observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            entry.target.classList.add("appear")
        }
})},{threshold:0.1})
  
appear_elements.forEach(el => {  
    appear_observer.observe(el) 
});
