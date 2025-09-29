
var switch_texts = document.querySelectorAll("#switch_texts")
var switch_text1 = document.querySelectorAll("#switch_text1")
var switch_text2 = document.querySelectorAll("#switch_text2")
 

switch_texts.forEach((switch_text,i) => {
  
  switch_text.addEventListener("mouseenter",()=> text_switch(switch_text1[i],switch_text2[i]))
  switch_text.addEventListener("mouseleave",()=> text_switch(switch_text1[i],switch_text2[i]))

});

function text_switch(switch_t1,switch_t2) { 
  switch_t1.classList.toggle("switch-text-toggle")
  switch_t2.classList.toggle("switch-text-toggle")

}
/// Cursor Info Div

var cursor_info_div = document.getElementById("cursor_info_div")
var cursor_info_div = document.getElementById("cursor_info_div")
document.addEventListener('mousemove',(event)=>{

  const y = event.pageY + 15;
  const x = event.pageX + 15; 

  const scrollLeft = (window.scrollX !== undefined) ? window.scrollX : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  const scrollTop = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  cursor_info_div.animate({
    left: x - scrollLeft + 'px',
    top: y - scrollTop + 'px'

  },               { duration: 2000, fill: "forwards" });

  cursor_info_div.classList.add("cursor_start") 
})

/// ScrolL Bar
scroller_parent = document.querySelector('.scroller-parent');
scroller_thumb = document.querySelector('.scroller-thumb');
var timer = null;

document.addEventListener('scroll',()=>{
  
  scroller_thumb.style.top = `${(window.pageYOffset + 40)/100}vh` 
  
  if(timer !== null) {
      scroller_parent.animate({
        opacity:1
      }, { duration: 300, fill: "forwards" })
      clearTimeout(timer);        
  }
  timer = setTimeout(function() {
        scroller_parent.animate({
        opacity:0
        }, { duration: 300, fill: "forwards" })
  }, 2000); 
})
 

window.addEventListener('scroll', function() {
    
}, false);
 
//////// Smooth Scroll Control
const body = document.body,
scrollWrap = document.querySelector(".smooth-scroll-wrapper"),
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.1;

var footer_height = document.querySelector('.footer').getBoundingClientRect().height;

var offset = 0;

body.style.height = Math.floor(height) + footer_height + "px";
// body.style.height = Math.floor(height)  + "px";

function smoothScroll() {
offset += (window.pageYOffset - offset) * speed;
 
scrollWrap.style.transform = 
"translateY(-" + offset + "px)  ";

callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

////// Nav Bar 
document.querySelector('.logo').style.top = 0;
document.querySelector('.nav').style.top = `10px`;

var nav_menu = document.getElementById("nav_menu");
var nav_btn = document.getElementById("nav_btn");
var nav_overlay = document.getElementById("nav_overlay");
var contact_menu = document.getElementById("contact_menu");
var dots = document.getElementById("dots");

var nav_switch_texts = document.getElementById("nav_switch_texts");
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
      display: "block",
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

const track = document.querySelector('.img-track');
const images = document.querySelectorAll('.image');

const overlay_text_BGcolors =['#DAD4FF','#EDEAF5','#9CB6F5',"#AFD135"]
const overlay_text_colors =['#7962C2','#434039','#FFF9BD', "#3978CB"]


var overlay_text_contents = document.querySelectorAll('#overlay_text_content'); 
var ghost_texts = document.querySelectorAll('#ghost_text'); 
var goto_project_btn = document.querySelector(".goto-project");
var goto_project_btn_svg = document.querySelector(".goto-project svg");
var goto_project_btn_img = document.querySelector(".goto-project img");

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
// var audio = new Audio("./Resources/cameraFocus.wav");
// var music_trigger = document.getElementById('music_trigger');

// images.forEach(image =>image.addEventListener('mouseenter',()=>{ music_trigger.click();  }))

//Image Hover - Text Parallax

main_section.addEventListener('mousemove',(e)=>{
 
  document.querySelectorAll('.overlay_text').forEach(overlayText => {
 
    const parallaxSpeed = overlayText.getAttribute("data-parallax-speed");
    const x = -(window.innerWidth - e.pageX * parallaxSpeed) / 90;
    const y = -(window.innerHeight - e.pageY * parallaxSpeed) / 90;

    overlayText.animate({
      transform : `translateX(${x}px) translateY(${y}px)`
    },               { duration: 1000, fill: "forwards" });
    

  }); 
 
})

//Image-open ON-Click logic
images.forEach((image,i) => image.addEventListener('click' , (e)=>{
 
  ghost_texts.forEach(ghost_text=>
    ghost_text.style.display = "block"
  )

  overlay_text_contents.forEach( overlay_text_content =>{

    overlay_text_content.classList.toggle('text-reveal') ;
    overlay_text_content.style.color = overlay_text_colors[i];
     
    overlay_text_content.style.backgroundColor = overlay_text_BGcolors[i] +"80" 
  })

  goto_project_btn.style.transform = "scale(1)";
  goto_project_btn.style.fill = overlay_text_colors[i];
  goto_project_btn_svg.style.backgroundColor = overlay_text_BGcolors[i] +"4D";
  
  goto_project_btn_img.style.transform = "scale(1)";
  goto_project_btn_img.style.color = overlay_text_colors[i];
     
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
  })
  setTimeout(() => {
    ghost_texts.forEach(ghost_text=>
      ghost_text.style.display = "none"
    ) 
  }, 1000);
  
  goto_project_btn.style.transform = "scale(0)";
  goto_project_btn_img.style.transform = "scale(0)";
  
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

// Footer Animation
   
var footer = document.querySelector(".footer");
var mssg_form = document.querySelector(".mssg-form");
var form_btn = document.querySelector(".form-btn");
var form_elements = document.querySelectorAll('.form-control');
var form_heading = document.querySelector(".form-heading h1");
var social_links = document.querySelectorAll('.social-link');
var contact_email_heading = document.querySelector(".contact-heading h6");
var contact_email = document.querySelector(".contact-email");

var aurora_circles = document.querySelectorAll(".bg");

var form_t_delay = 300;
form_elements.forEach(e => {
  e.style.transitionDelay= `${form_t_delay}ms`
  form_t_delay+=200; 
});
form_btn.style.transitionDelay= `${form_t_delay}ms`

window.onscroll = function(ev) {
  if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight -300) {
    // when u reach the end of body - cannot scroll any further
  aurora_circles.forEach(circle => {
    circle.style.opacity=0.2
  });

    contact_email_heading.classList.add('text-reveal')
    contact_email.style.cssText = 
    ` opacity: 1 ; 
      transform: scaleX(1) ; `

    form_heading.classList.add('text-reveal')
    social_links.forEach(link =>{
      link.classList.add('text-reveal')
    })

    mssg_form.style.opacity= "1";
    footer.classList.add("footer-visible");
    form_btn.style.opacity = '1'

    form_elements.forEach(e => {  
      e.style.transform = "scaleX(1)"
    });
    
    setTimeout(() => {
      form_elements.forEach(e => {  
        e.classList.add("placeholder-visible")
      });  
    }, 1200);
  }
  else{
    //Not Bottom

    aurora_circles.forEach(circle => {
      circle.style.opacity=0.5
    });

    contact_email_heading.classList.remove('text-reveal')
    contact_email.style.cssText = 
    ` opacity: 0 ; 
      transform: scaleX(0) ; `

    form_heading.classList.remove('text-reveal')
    social_links.forEach(link =>{
      link.classList.remove('text-reveal')
    })
    mssg_form.style.opacity= "0";
    footer.classList.remove("footer-visible")
    form_btn.style.opacity = '0'
    
    form_elements.forEach(e => { 
      e.style.transform = "scaleX(0)"
    });
    setTimeout(() => {
      form_elements.forEach(e => {  
        e.classList.remove("placeholder-visible")
      });  
    }, 1200);
  }

};


 var skills_sec = document.querySelector("#skills_section")
 var resume_download_btn = document.querySelector("#resume_download_btn")

const observer = new IntersectionObserver((entries)=>{
    
  entries.forEach(entry => {

      if(entry.isIntersecting){ 
        resume_download_btn.animate({
          display:'flex', 
          opacity:1
        },               { duration: 300, fill: "forwards" });
       
      }else{ 
        resume_download_btn.animate({
          display:'none', 
          opacity:0
        },               { duration: 300, fill: "forwards" });
       
       
      }
    
    });

})

observer.observe(skills_sec)