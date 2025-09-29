
 

////// Nav Bar 


var nav_menu_texts = document.querySelectorAll(".menu-item")
var switch_text1 = document.querySelectorAll("#switch_text1")
var switch_text2 = document.querySelectorAll("#switch_text2")
var nav_menu_img = document.querySelectorAll(".nav-menu-img")
 

nav_menu_texts.forEach((nav_menu_text,i) => {
  
  nav_menu_text.addEventListener("mouseenter",()=> text_switch(switch_text1[i],switch_text2[i],nav_menu_img[i]))
  nav_menu_text.addEventListener("mouseleave",()=> text_switch(switch_text1[i],switch_text2[i],nav_menu_img[i]))

});

function text_switch(switch_t1,switch_t2,nav_menu_img) { 
  switch_t1.classList.toggle("switch-text-toggle")
  switch_t2.classList.toggle("switch-text-toggle")
  nav_menu_img.classList.toggle("switch-text-img-toggle")

}

document.querySelector('.logo').animate({
  top : 0
}, { duration: 1000, easing: "ease" , fill: "forwards" })

document.querySelector('.nav').style.top = `10px`;

var nav_menu = document.getElementById("nav_menu");
var nav_btn = document.getElementById("nav_btn");
var nav_overlay = document.getElementById("nav_overlay");
var contact_menu = document.getElementById("contact_menu");
var dots = document.getElementById("dots");

var nav_btn_text1 = document.getElementById("nav_text1");
var nav_btn_text2 = document.getElementById("nav_text2");

nav_btn.addEventListener('mouseenter', ()=>{

  dots.classList.toggle("dot-rotate") 
  nav_btn.classList.toggle('nav-btn-hover')
})
nav_btn.addEventListener('mouseleave', ()=>{
  dots.classList.toggle("dot-rotate") 
  nav_btn.classList.toggle('nav-btn-hover')
})

nav_btn.addEventListener('click', ()=>{ 

  dots.classList.toggle("dot-rotate") 
  nav_btn_text1.classList.toggle("nav-menu-text-toggle")
  nav_btn_text2.classList.toggle("nav-menu-text-toggle")
  
  nav_overlay.animate({
    display: "inline-block",
    background :  'linear-gradient(90deg, rgba(242, 242, 242, 0) 0%, rgba(0, 0, 0, 0) 50% , rgba(0, 0, 0, 0.2) 100%)'
  }, { duration: 1200, fill: "forwards" })
   
  navOverlayToggle()
})

nav_overlay.addEventListener('click', ()=>{  
  navOverlayToggle()  
  dots.classList.toggle("dot-rotate") 
  nav_btn_text1.classList.toggle("nav-menu-text-toggle")
  nav_btn_text2.classList.toggle("nav-menu-text-toggle")
 
})

function navOverlayToggle() {  
 nav_overlay.classList.toggle('overlay-show')
 
 //Overlay Toggle
  nav_overlay.style.display = (nav_overlay.classList.contains("overlay-show")) ? "block" : "none"

//Menus Toggle
  if(window.getComputedStyle(nav_menu, null).display == "none" ){

    nav_menu.animate({
      marginTop: "20px",
      transform: "rotate(0deg)",
      opacity: "1", 
      display: "block",
    }, { duration: 600,easing:"cubic-bezier(.4,0,.1,1)", fill: "forwards" })
   

    contact_menu.animate({
      marginTop: "5px",
      transform: "rotate(0deg)",
      opacity: "1", 
      display: "flex",
    }, { duration: 600, easing:"cubic-bezier(.4,0,.1,1)", fill: "forwards" })
      
    nav_menu.style.display = "block"
    contact_menu.style.display = "block"

  }else{ 
    nav_menu.animate({
      marginTop:"50px",
      transform: "rotate(5deg)",
      opacity: "0",
      display: "none",
    }, { duration: 600,easing:"cubic-bezier(.4,0,.1,1)", fill: "forwards" })

    contact_menu.animate({
      marginTop: "50px",
      transform: "rotate(-5deg)",
      opacity: "0", 
      display: "none ",
    }, { duration: 600,easing:"cubic-bezier(.4,0,.1,1)", fill: "forwards" })
  

    nav_menu.style.display = "none"
    contact_menu.style.display = "none"
  }
}

// Smooth Scroll COntrol
const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
width = scrollWrap.getBoundingClientRect().width ,
speed = 0.1;

var offset = 0;

body.style.height = Math.floor(width) + "px";

function smoothScroll() {
offset += (window.scrollY - offset) * speed;

var scroll = "translateX(-" + offset + "px) translateZ(0)";
scrollWrap.style.transform = scroll;

callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

//// BTN

var btn = document.getElementById("btn");
var dot = document.getElementById("dot");
var span = document.getElementById("btn-text");
var arrow = document.getElementById("arrow");
 
btn.addEventListener('mouseover',()=>{
    
    dot.classList.add("expand");
    span.classList.add('text-on-hover');
    arrow.classList.add("arrow-on-hover");
})
btn.addEventListener('mouseleave',()=>{
    
    span.classList.remove('text-on-hover')
    dot.classList.remove("expand");
    arrow.classList.remove("arrow-on-hover");
})

/////////////// ON-SCROLL ANIMATIONS 

var main_container = document.getElementById("smooth-scroll-wrapper")

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry =>{
        
    if(entry.isIntersecting){
        
        // if(entry.target.classList.contains('project-title'))
            entry.target.classList.add('element-show');
            // else
            entry.target.classList.add('show'); 
            btn.style.opacity = '1';
        }else{
            entry.target.classList.remove('element-show');
            entry.target.classList.remove('show')

        }
    })

})

document.querySelectorAll('.image')
.forEach(el => observer.observe(el) )
 
const project_text_div = document.querySelector('.project-title-text')
const project_description_div = document.querySelector('.project-description')
const tech_div = document.querySelector('.tech h6')

var asd = document.querySelectorAll('.tech>p')
.forEach(el => observer.observe(el) )

const recognitions_div = document.querySelector('.recognitions h6')

var asd = document.querySelectorAll('.recognitions>p')
.forEach(el => observer.observe(el) )
 
observer.observe(project_text_div)
observer.observe(project_description_div)
observer.observe(tech_div)
observer.observe(recognitions_div) 

