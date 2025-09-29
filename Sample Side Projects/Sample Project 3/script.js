var appear_elements = document.querySelectorAll(".disappear");


const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach(entry => {
  
        if(entry.isIntersecting){ 
            entry.target.classList.add("appear")
        }
        
})
  
  },{threshold:0.1})
  

  appear_elements.forEach(el => {
    
      observer.observe(el) 
  });
