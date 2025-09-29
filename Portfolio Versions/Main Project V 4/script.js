



/// Cursor Info Div

var cursor_info_div = document.getElementById("cursor_info_div")
document.addEventListener('mousemove',(e)=>{
 
  cursor_info_div.animate({
    left: e.pageX +15 +"px" ,
    top:e.pageY+15 + "px"
  },               { duration: 2000, fill: "forwards" });
 
  cursor_info_div.classList.add("cursor_start")
})
 
document.addEventListener('scroll',(e)=>{
 
  cursor_info_div.animate({
    left: e.pageX +15 +"px" ,
    top:e.pageY+15 + "px"
  },               { duration: 100, fill: "forwards" });
 
  cursor_info_div.classList.add("cursor_start")
})
 
//////// Smooth Scroll Control
const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
offset += (window.pageYOffset - offset) * speed;

var scroll = "translateY(-" + offset + "px) translateZ(0)";
scrollWrap.style.transform = scroll;

callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

////// Nav Bar 
var nav_menu = document.getElementById("nav_menu");
var nav_btn = document.getElementById("nav_btn");
var nav_overlay = document.getElementById("nav_overlay");
var contact_menu = document.getElementById("contact_menu");
var dots = document.getElementById("dots");

var nav_switch_texts = document.getElementById("nav_switch_texts");
var nav_text1 = document.getElementById("nav_text1");
var nav_text2 = document.getElementById("nav_text2");

nav_btn.addEventListener('mouseenter', ()=>{

  dots.classList.toggle("dot-rotate") 
  nav_btn.classList.toggle('nav-btn-hover')
})
nav_btn.addEventListener('mouseleave', ()=>{
  dots.classList.toggle("dot-rotate") 
  nav_btn.classList.toggle('nav-btn-hover')
})

nav_btn.addEventListener('click', ()=>{ 
  
  navToggle()
  dots.classList.toggle("dot-rotate") 
  nav_text2.classList.toggle("nav-menu-text-toggle")
  nav_text1.classList.toggle("nav-menu-text-toggle")
 
  nav_overlay.animate({
    display: "inline-block",
    background :  'linear-gradient(90deg, rgba(242, 242, 242, 0) 0%, rgba(0, 0, 0, 0) 50% , rgba(0, 0, 0, 0.2) 100%)'
  }, { duration: 1200, fill: "forwards" })

    
})

nav_overlay.addEventListener('click', ()=>{  
  navToggle()  
  dots.classList.toggle("dot-rotate") 
  nav_text2.classList.toggle("nav-menu-text-toggle")
  nav_text1.classList.toggle("nav-menu-text-toggle")
 
})

function navToggle(params) {
  nav_menu.classList.toggle("menu-show")
  contact_menu.classList.toggle("contact-show")
  nav_overlay.classList.toggle('overlay-show')
  nav_overlay.classList.toggle("display-none-ib")
  if (nav_menu.classList.contains("menu-show")) {
    nav_overlay.style.display ="inline-block"
  }else{
    nav_overlay.style.display ="none"
  }
}

/// HOME
var texts = document.querySelectorAll('.text')
var home_img_bg = document.querySelector(".home-img-bg")
var backdrop = document.querySelector(".backdrop")
var home_image = document.querySelector(".home-image")
var delay = 300;

texts.forEach(text => {
 
   text.style.transitionDuration = 200+ delay + "ms";
   text.style.transitionDelay = delay + "ms";
   delay+=200;
   text.classList.add("text-appear")
});

backdrop.style.height = "80%" 
home_image.style.transform = "translateY(0%)"

//-- Text animation//
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

var random_text = document.querySelector(".randomCharText");
// random_text.addEventListener("mouseenter", e => randomCharTextAnimation(e))
random_text.click() // TRIGGER ON LOAD
 
function randomCharTextAnimation(event) {

    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }  
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 20);
}

// PROJECT SECTION - IMAGE PARALLAX CAROUSEL
const main_section = document.querySelector('#main_section');

const overlay = document.querySelector('.overlay');
const t_overlay = document.querySelector('#t_overlay');
const overlay_close_btn = document.querySelector('#overlay_close_btn');

const track = document.querySelector('.img-track');
const images = document.querySelectorAll('.image');

const overlay_text_BGcolors =['#DAD4FF','#EDEAF5','#9CB6F5',"#AFD135"]
const overlay_text_colors =['#7962C2','#434039','#FFF9BD', "#3978CB"]


var overlay_text_contents = document.querySelectorAll('#overlay_text_content'); 
var ghost_texts = document.querySelectorAll('#ghost_text'); 

// image-track parallax movement logic
main_section.onmousedown = e =>{
    track.dataset.mousedown = e.clientX;  
}

main_section.onmousemove = e =>{
cursor_info_div.textContent= "Drag"
    if(track.dataset.mousedown == "0") return ;

    const mouseDelta = parseFloat(track.dataset.mousedown) -  e.clientX,
    maxDelta = window.innerWidth/2;

    let percentage = (mouseDelta/maxDelta)*-100;

    let nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained,0),-100)

    track.dataset.percentage = nextPercentage; 

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of images) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

main_section.onmouseup = e =>{
    track.dataset.mousedown = 0;
    track.dataset.prevPercentage=track.dataset.percentage;
} 

images.forEach(image => image.animate({
    height : "56vmin"
  }, { duration: 100, fill: "forwards", easing: 'ease-in' })
);

 
//Image Hover - shutter audio
var audio = new Audio("./Resources/cameraFocus.wav");
var music_trigger = document.getElementById('music_trigger');

images.forEach(image =>image.addEventListener('mouseenter',()=>{ music_trigger.click();  }))


//Image ON-Click logic
images.forEach((image,i) => image.addEventListener('click' , (e)=>{
 
  ghost_texts.forEach(ghost_text=>
    ghost_text.style.display = "block"
  )

  overlay_text_contents.forEach( overlay_text_content =>{

    overlay_text_content.classList.toggle('text-reveal') ;
    overlay_text_content.style.color = overlay_text_colors[i];
     
    overlay_text_content.style.backgroundColor = overlay_text_BGcolors[i] +"80" 
  })
    
  overlay_close_btn.style.backgroundColor = overlay_text_BGcolors[i] + "80"  ;
  overlay_close_btn.style.color = overlay_text_colors[i]  +"80";

  e.target.classList.add('image-expand')

  track.animate({
    transform: `translate(${0}%, -50%)`
  },            { duration: 1200, fill: "forwards" });
  track.style.left = `3vw`;

  overlay.animate({
    display:'block', 
    backgroundColor : overlay_text_BGcolors[i] + "4D"
  },               { duration: 300, fill: "forwards" });

  t_overlay.animate({
    display:'block',
    opacity: 1 
  },                    { duration: 100, fill: "forwards" });
  t_overlay.style.display = 'block';

  track.style.left = `3vw`;  
 
}));


// Project Image Close
t_overlay.addEventListener('click',()=>{
  
  overlay_text_contents.forEach( overlay_text_content =>{
    overlay_text_content.classList.toggle('text-reveal')  
    // overlay_text_content.style.backgroundColor = "transparent"  
  })
  setTimeout(() => {
    ghost_texts.forEach(ghost_text=>
      ghost_text.style.display = "none"
    ) 
  }, 1000);
  
  images.forEach(image => {

    image.classList.remove('image-expand');

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    },            { duration: 1200, fill: "forwards" });
    
  });

  track.style.left = "50%"

  t_overlay.animate({
    display:'none',
    opacity: 0 
  },                    { duration: 1200, fill: "forwards" }); 
  t_overlay.style.display = 'none';

  overlay.animate({
    display:'none', 
    backgroundColor : 'transparent'
  },               { duration: 500, fill: "forwards" });
 

})
   