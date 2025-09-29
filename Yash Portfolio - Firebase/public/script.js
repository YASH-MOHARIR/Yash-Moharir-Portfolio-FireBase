/// Cursor Info Div
var cursor_info_div = document.getElementById("cursor_info_div");

document.addEventListener("mousemove", (event) => {
  const y = event.pageY + 15;
  const x = event.pageX + 15;

  const scrollLeft =
    window.scrollX !== undefined
      ? window.scrollX
      : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  const scrollTop =
    window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  cursor_info_div.animate(
    {
      left: x - scrollLeft + "px",
      top: y - scrollTop + "px",
    },
    { duration: 2000, fill: "forwards" }
  );

  cursor_info_div.classList.add("cursor_start");
});

//////// Smooth Scroll Control with Fixed Height System
const body = document.body,
  scrollWrap = document.querySelector(".smooth-scroll-wrapper"),
  speed = 0.1;

var footer_height = 0;
var offset = 0;
let totalHeight = 0;
let isAnimating = false;

// Height calculation cache to prevent unnecessary updates
let lastCalculatedHeight = 0;
let isInitialized = false;
let contentObserver = null;

// Simple height calculation without observer triggers
function recalcLayoutHeights() {
  // Prevent calculation during animations
  if (isAnimating) return;

  try {
    const footer = document.querySelector(".footer");
    if (footer) {
      footer_height = footer.getBoundingClientRect().height;
    }

    // Use scrollHeight for accurate content measurement
    const contentHeight = scrollWrap.scrollHeight;
    
    // Calculate experiences section separately if it exists
    const experiencesSection = document.querySelector(".experiences-section");
    let experiencesBuffer = 0;
    if (experiencesSection) {
      const experiencesHeight = experiencesSection.scrollHeight;
      experiencesBuffer = Math.max(0, experiencesHeight - experiencesSection.clientHeight);
    }

    // Add dynamic buffer based on viewport
    const dynamicBuffer = window.innerHeight * 0.1;
    
    // Calculate final height
    const finalHeight = Math.ceil(contentHeight + footer_height + experiencesBuffer + dynamicBuffer);
    
    // Only update if height changed significantly (more than 50px difference)
    if (Math.abs(lastCalculatedHeight - finalHeight) > 50) {
      body.style.height = finalHeight + "px";
      lastCalculatedHeight = finalHeight;
      
      // Update total height for scroll calculations
      totalHeight = contentHeight + footer_height - window.innerHeight;
      
      // Update scroll bar
      updateScrollBar();
      
      // Only log during development
      if (!isInitialized) {
        console.log('Initial layout calculated:', {
          contentHeight,
          footer_height,
          experiencesBuffer,
          finalHeight
        });
      }
    }
  } catch (error) {
    console.error('Error recalculating layout:', error);
  }
}

// Fixed scroll bar update function
function updateScrollBar() {
  const scroller_parent = document.querySelector(".scroller-parent");
  const scroller_thumb = document.querySelector(".scroller-thumb");
  
  if (!scroller_parent || !scroller_thumb) return;
  
  // Calculate viewport ratio to total scrollable height
  const viewportRatio = window.innerHeight / document.body.scrollHeight;
  
  // Set thumb height proportionally (min 5vh, max based on ratio)
  const thumbHeight = Math.max(5, viewportRatio * 35); // 35vh is parent height
  scroller_thumb.style.height = thumbHeight + "vh";
  
  // Update parent height if needed
  const parentHeight = 35; // vh
  scroller_parent.style.height = parentHeight + "vh";
}

// Initial setup only - no continuous monitoring
function initialLayoutSetup() {
  // Calculate immediately
  recalcLayoutHeights();
  
  // A few retries for late-loading content
  setTimeout(recalcLayoutHeights, 500);
  setTimeout(recalcLayoutHeights, 1000);
  setTimeout(() => {
    recalcLayoutHeights();
    isInitialized = true; // Mark as initialized after final calculation
  }, 2000);
}

// Manual recalculation for specific events only
function manualRecalc() {
  if (!isAnimating && isInitialized) {
    recalcLayoutHeights();
  }
}

// Set up minimal event listeners
function setupEventListeners() {
  // Window resize only
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      recalcLayoutHeights();
    }, 250);
  });

  // Critical images only
  const criticalImages = document.querySelectorAll('.home-image, .image');
  criticalImages.forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', () => {
        if (!isInitialized) {
          recalcLayoutHeights();
        }
      }, { once: true });
    }
  });

  // Font loading
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (!isInitialized) {
        recalcLayoutHeights();
      }
    });
  }
}

// Initialize layout system
document.addEventListener("DOMContentLoaded", () => {
  initialLayoutSetup();
  setupEventListeners();
});

// Additional initialization on full page load
window.addEventListener("load", () => {
  setTimeout(() => {
    recalcLayoutHeights();
    isInitialized = true;
  }, 100);
});

// Expose global recalculation function for manual triggers
window.recalculateLayout = function() {
  console.log('Manual layout recalculation triggered');
  recalcLayoutHeights();
};

// Smooth scroll animation function
function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;
  scrollWrap.style.transform = "translateY(-" + offset + "px)";
  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

//Scroll Navigator
function scrollto(i) {
  let scrollPosition;
  switch(i) {
    case 0: scrollPosition = 0; break; // Home
    case 1: scrollPosition = window.innerHeight; break; // About
    case 2: scrollPosition = window.innerHeight * 2; break; // Projects
    case 3: scrollPosition = window.innerHeight * 3; break; // Skills
    case 4: scrollPosition = window.innerHeight * 4; break; // Experience
    default: scrollPosition = 0;
  }
  window.scrollTo(0, scrollPosition);
  nav_overlay.click();
}

function scrollToFooter() {
  window.scrollTo(0, document.documentElement.scrollHeight);
  nav_overlay.click();
}

/// Scroll Bar with fixed proportions
const scroller_parent = document.querySelector(".scroller-parent");
const scroller_thumb = document.querySelector(".scroller-thumb");
var timer = null;

// Update scroll bar on scroll
document.addEventListener("scroll", () => {
  // Calculate progress based on scroll position
  const scrollTop = window.pageYOffset;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  
  // Position thumb based on scroll percentage
  const maxThumbTravel = 85; // Maximum travel in %
  const thumbPosition = (scrollPercent / 100) * maxThumbTravel;
  scroller_thumb.style.top = thumbPosition + "%";
  
  // Update footer position
  const footer = document.querySelector(".footer");
  if (footer) {
    footer.style.bottom = `${thumbPosition - 84}%`;
  }

  // Show/hide scroll bar with timer
  if (timer !== null) {
    scroller_parent.animate(
      { opacity: 1 },
      { duration: 300, fill: "forwards" }
    );
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    scroller_parent.animate(
      { opacity: 0 },
      { duration: 300, fill: "forwards" }
    );
  }, 2000);
});

//Navbar Text-Switch On Hover
var nav_menu_texts = document.querySelectorAll(".menu-item");
var switch_text1 = document.querySelectorAll("#switch_text1");
var switch_text2 = document.querySelectorAll("#switch_text2");
var nav_menu_img = document.querySelectorAll(".nav-menu-img");

nav_menu_texts.forEach((nav_menu_text, i) => {
  nav_menu_text.addEventListener("mouseenter", () => text_switch(switch_text1[i], switch_text2[i], nav_menu_img[i]));
  nav_menu_text.addEventListener("mouseleave", () => text_switch(switch_text1[i], switch_text2[i], nav_menu_img[i]));
});

function text_switch(switch_t1, switch_t2, nav_menu_img) {
  switch_t1.classList.toggle("switch-text-toggle");
  switch_t2.classList.toggle("switch-text-toggle");
  nav_menu_img.classList.toggle("switch-text-img-toggle");
}

////// Nav Bar
document.querySelector(".logo").animate(
  { top: 0 },
  { duration: 1000, easing: "ease", fill: "forwards" }
);

document.querySelector(".nav").style.top = `10px`;

var nav_menu = document.getElementById("nav_menu");
var nav_btn = document.getElementById("nav_btn");
var nav_overlay = document.getElementById("nav_overlay");
var contact_menu = document.getElementById("contact_menu");
var dots = document.getElementById("dots");

var nav_btn_text1 = document.getElementById("nav_text1");
var nav_btn_text2 = document.getElementById("nav_text2");

nav_btn.addEventListener("mouseenter", () => {
  dots.classList.toggle("dot-rotate");
  nav_btn.classList.toggle("nav-btn-hover");
});
nav_btn.addEventListener("mouseleave", () => {
  dots.classList.toggle("dot-rotate");
  nav_btn.classList.toggle("nav-btn-hover");
});

nav_btn.addEventListener("click", () => {
  dots.classList.toggle("dot-rotate");
  nav_btn_text1.classList.toggle("nav-menu-text-toggle");
  nav_btn_text2.classList.toggle("nav-menu-text-toggle");

  nav_overlay.animate(
    {
      display: "inline-block",
      background: "linear-gradient(90deg, rgba(242, 242, 242, 0) 0%, rgba(0, 0, 0, 0) 50% , rgba(0, 0, 0, 0.2) 100%)",
    },
    { duration: 1200, fill: "forwards" }
  );

  navOverlayToggle();
});

nav_overlay.addEventListener("click", () => {
  navOverlayToggle();
  dots.classList.toggle("dot-rotate");
  nav_btn_text1.classList.toggle("nav-menu-text-toggle");
  nav_btn_text2.classList.toggle("nav-menu-text-toggle");
});

function navOverlayToggle() {
  nav_overlay.classList.toggle("overlay-show");

  //Overlay Toggle
  nav_overlay.style.display = nav_overlay.classList.contains("overlay-show") ? "block" : "none";

  //Menus Toggle
  if (window.getComputedStyle(nav_menu, null).display == "none") {
    nav_menu.animate(
      {
        marginTop: "20px",
        transform: "rotate(0deg)",
        opacity: "1",
        display: "block",
      },
      { duration: 600, easing: "cubic-bezier(.4,0,.1,1)", fill: "forwards" }
    );

    contact_menu.animate(
      {
        marginTop: "5px",
        transform: "rotate(0deg)",
        opacity: "1",
        display: "flex",
      },
      { duration: 600, easing: "cubic-bezier(.4,0,.1,1)", fill: "forwards" }
    );

    nav_menu.style.display = "block";
    contact_menu.style.display = "block";
  } else {
    nav_menu.animate(
      {
        marginTop: "50px",
        transform: "rotate(5deg)",
        opacity: "0",
        display: "none",
      },
      { duration: 600, easing: "cubic-bezier(.4,0,.1,1)", fill: "forwards" }
    );

    contact_menu.animate(
      {
        marginTop: "50px",
        transform: "rotate(-5deg)",
        opacity: "0",
        display: "none ",
      },
      { duration: 600, easing: "cubic-bezier(.4,0,.1,1)", fill: "forwards" }
    );

    nav_menu.style.display = "none";
    contact_menu.style.display = "none";
  }
}

/// HOME
var texts = document.querySelectorAll(".text");
var home_img_bg = document.querySelector(".home-img-bg");
var backdrop = document.querySelector(".backdrop");
var home_image = document.querySelector(".home-image");
var delay = 300;

texts.forEach((text) => {
  text.style.transitionDuration = 200 + delay + "ms";
  text.style.transitionDelay = delay + "ms";
  delay += 200;
  text.classList.add("text-appear");
});

backdrop.style.height = "80%";
home_image.style.transform = "translateY(0%)";

//-- Text animation//
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

var random_text = document.querySelector(".randomCharText");
random_text.click(); // TRIGGER ON LOAD

function randomCharTextAnimation(event) {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 20);
}

// QUOTE SECTION
var about_btn = document.querySelector("#about_btn");
var about_info_close_btn = document.querySelector(".about-info-close-btn");
var about_info_container = document.querySelector(".about-info");
var about_heading = document.querySelector(".about-heading");
var about_text_content = document.querySelector(".about-text-content");

about_btn.addEventListener("click", () => {
  about_heading.style.opacity = 1;
  about_text_content.style.opacity = 1;
  about_info_container.classList.add("about-info-show");
});

about_info_close_btn.addEventListener("click", () => {
  about_heading.style.opacity = 0;
  about_text_content.style.opacity = 0;
  about_info_container.classList.remove("about-info-show");
});

// PROJECT SECTION - IMAGE PARALLAX CAROUSEL
const main_section = document.querySelector("#main_section");

const overlay = document.querySelector(".overlay");
const t_overlay = document.querySelector("#t_overlay");

const track = document.querySelector(".img-track");
const images = document.querySelectorAll(".image");

const overlay_text_BGcolors = [
  "#DAD4FF",
  "#f0f0f0",
  "#a9a9a9",
  "#DAD4FF",
  "#91C9B0",
  "#98DFFF",
  "#EBEBEB",
  "#EDB694",
  "#DEEDFF",
  "#90D3DA",
];
const overlay_text_colors = [
  "#695CE1",
  "#000000",
  "#ff8888",
  "#695CE1",
  "#000000",
  "#66B2D4",
  "#333333",
  "#FFFFFF",
  "#010511",
  "#FFFFFF",
];

const overlay_project_titles = [
  ["Swipe", "Sample", "Product"],
  ["Parie", "Doe", "Portfolio"],
  ["DetectD", "Deepfake", "Detection"],
  ["BrandLn", "Landing", "Page"],
  ["Yash", "", "Incubators"],
  ["Pixops", "AI-Image", "Manipulator"],
  ["Syngen", "Synthetic Data", "Generator"],
  ["Medscan", "", "AI Bot"],
  ["Tile", "Slide", "Game"],
  ["Kanbas", "Uni Course", "System"],
];

images.forEach((projectImage) => {
  projectImage.addEventListener("mouseenter", () => {
    cursor_info_div.classList.toggle("cursor-div-action");
    cursor_info_div.textContent = "Click";
  });
  projectImage.addEventListener("mouseleave", () => {
    cursor_info_div.classList.toggle("cursor-div-action");
    cursor_info_div.textContent = "Scroll";
  });
});

var overlay_text_contents = document.querySelectorAll("#overlay_text_content");
var ghost_texts = document.querySelectorAll(".ghost_text");
var goto_project_btn = document.querySelector(".goto-project");
var goto_project_btn_svg = document.querySelector(".goto-project svg");
var goto_project_btn_img = document.querySelector(".goto-project img");
var rotText = document.querySelector("#rotatingText");

// Goto Btn Hover
rotText.addEventListener("mouseenter", goto_btn_hover);
rotText.addEventListener("mouseleave", goto_btn_hover);
goto_project_btn_img.addEventListener("mouseenter", goto_btn_hover);
goto_project_btn_img.addEventListener("mouseleave", goto_btn_hover);

function goto_btn_hover() {
  rotText.classList.toggle("goto-project-hover");
}

//Goto Btn Link Setting
var goto_btn_anchor = document.querySelector("#project_know_more");
var projectPageIndex_global;
function setProjectGotoLink(projectPageIndex) {
  projectPageIndex_global = projectPageIndex;
  goto_btn_anchor.setAttribute(
    "href",
    `../Project Page/project_page_index.html?active_project_index_param=${projectPageIndex}`
  );
}

// image-track parallax movement logic
let nextPercentage = 0;

main_section.onmousedown = (e) => {
  track.dataset.mousedown = e.clientX;
};

main_section.onmousemove = (e) => {
  if (track.dataset.mousedown == "0") return;

  const mouseDelta = parseFloat(track.dataset.mousedown) - e.clientX,
    maxDelta = window.innerWidth / 2;

  let percentage = (mouseDelta / maxDelta) * -100;

  let nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of images) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

main_section.onmouseup = (e) => {
  track.dataset.mousedown = 0;
  track.dataset.prevPercentage = track.dataset.percentage;
};

images.forEach((image) =>
  image.animate(
    {
      height: "56vmin",
    },
    { duration: 100, fill: "forwards", easing: "ease-in" }
  )
);

// TOUCH CONTROL PARALLAX
main_section.addEventListener("touchstart", (e) => {
  track.dataset.mousedown = e.touches[0].clientX;
});

main_section.addEventListener("touchmove", (e) => {
  if (track.dataset.mousedown == "0") return;
  const mouseDelta = parseFloat(track.dataset.mousedown) - e.touches[0].clientX,
    maxDelta = window.innerWidth / 2;
  let percentage = (mouseDelta / maxDelta) * -100;
  let nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 20000, fill: "forwards" }
  );

  for (const image of images) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 20000, fill: "forwards" }
    );
  }
});

main_section.addEventListener("touchend", (e) => {
  track.dataset.mousedown = 0;
  track.dataset.prevPercentage = track.dataset.percentage;
});

// Image Hover - Text Parallax
main_section.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".overlay_text").forEach((overlayText) => {
    const parallaxSpeed = overlayText.getAttribute("data-parallax-speed");
    const x = -(window.innerWidth - e.pageX * parallaxSpeed) / 90;
    const y = -(window.innerHeight - e.pageY * parallaxSpeed) / 90;

    overlayText.animate(
      {
        transform: `translateX(${x}px) translateY(${y}px)`,
      },
      { duration: 1000, fill: "forwards" }
    );
  });
});

// Image-open ON-Click logic with animation lock
images.forEach((image, i) =>
  image.addEventListener("click", (e) => {
    // Set animation lock
    isAnimating = true;
    
    ghost_texts.forEach((ghost_text) => (ghost_text.style.display = "block"));
    
    // Setting Overlay Project Title
    overlay_text_contents.forEach((overlay_text_content, i) => {
      overlay_text_content.textContent = overlay_project_titles[projectPageIndex_global][i];
      ghost_texts[i].textContent = overlay_project_titles[projectPageIndex_global][i];
    });

    // Defer text reveal to prevent jitter
    requestAnimationFrame(() => {
      overlay_text_contents.forEach((overlay_text_content) => {
        overlay_text_content.classList.toggle("text-reveal");
        overlay_text_content.style.color = overlay_text_colors[i];
        overlay_text_content.style.backgroundColor = overlay_text_BGcolors[i] + "80";
      });

      goto_project_btn.style.transform = "scale(1)";
      goto_project_btn.style.fill = overlay_text_colors[i];
      goto_project_btn_svg.style.backgroundColor = overlay_text_BGcolors[i] + "4D";

      goto_project_btn_img.style.transform = "scale(1)";
      goto_project_btn_img.style.color = overlay_text_colors[i];
    });

    e.target.classList.add("image-expand");

    track.animate(
      {
        transform: `translate(${0}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
    track.style.left = `3vw`;

    overlay.animate(
      {
        display: "block",
        backgroundColor: overlay_text_BGcolors[i] + "4D",
      },
      { duration: 300, fill: "forwards" }
    );

    t_overlay.animate(
      {
        display: "block",
        opacity: 1,
      },
      { duration: 100, fill: "forwards" }
    );
    t_overlay.style.display = "block";

    track.style.left = `3vw`;
    
    // Release animation lock after animations complete
    setTimeout(() => {
      isAnimating = false;
    }, 1500);
  })
);

// Project Image Close
t_overlay.addEventListener("click", () => {
  // Set animation lock
  isAnimating = true;
  
  overlay_text_contents.forEach((overlay_text_content) => {
    overlay_text_content.classList.toggle("text-reveal");
  });
  
  setTimeout(() => {
    ghost_texts.forEach((ghost_text) => (ghost_text.style.display = "none"));
  }, 1000);

  goto_project_btn.style.transform = "scale(0)";
  goto_project_btn_img.style.transform = "scale(0)";

  images.forEach((image) => {
    image.classList.remove("image-expand");

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
  });

  track.style.left = "50%";

  t_overlay.animate(
    {
      display: "none",
      opacity: 0,
    },
    { duration: 1200, fill: "forwards" }
  );
  t_overlay.style.display = "none";

  overlay.animate(
    {
      display: "none",
      backgroundColor: "transparent",
    },
    { duration: 500, fill: "forwards" }
  );
  
  // Release animation lock after close animations
  setTimeout(() => {
    isAnimating = false;
    // Manual recalc after animation if needed
    if (isInitialized) {
      manualRecalc();
    }
  }, 1500);
});

// Skills Section
var skills_heading_chars = document.querySelectorAll(".skills-heading-char");
var experiences_heading_chars = document.querySelectorAll(".experiences-heading-char");
var project_heading_char = document.querySelectorAll(".project-heading-char");
var skills_cards = document.querySelectorAll(".skills-card");

// Optimized staggered animations
var delay = 200;
skills_heading_chars.forEach((char, index) => {
  char.style.transitionDelay = `${delay + (index * 25)}ms`;
});

// Optimized experiences heading animation
delay = 150;
experiences_heading_chars.forEach((char, index) => {
  // Custom easing for longer text
  const customDelay = delay + (index * 20) + (Math.sin(index * 0.5) * 10);
  char.style.transitionDelay = `${customDelay}ms`;
  char.style.transitionTimingFunction = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
});

delay = 100;
project_heading_char.forEach((char, index) => {
  char.style.transitionDelay = `${delay + (index * 25)}ms`;
});

// Disappear - appear observer
skills_cards.forEach((skills_card, i) => {
  skills_card.style.transitionDelay = 100 * i + "ms";
});

var appear_elements = document.querySelectorAll(".disappear");

const appear_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      }
    });
  },
  { threshold: 0.1 }
);

skills_cards.forEach((skills_card) => {
  appear_observer.observe(skills_card);
});

// Observe all generic disappearing elements
appear_elements.forEach((el) => appear_observer.observe(el));

// Experience Cards Manual Toggle Only (No Auto-Expand)
let manuallyToggledExp = new Set();

function toggleExpCard(card) {
  const cardId = card.dataset.expId;
  
  // Prevent button click from triggering card click
  if (event && event.target.closest('.exp-details-btn')) {
    return;
  }
  
  card.classList.toggle('expanded');
  
  if (card.classList.contains('expanded')) {
    // Update button text
    const btn = card.querySelector('.exp-details-btn span');
    if (btn) btn.textContent = 'Show Less';
  } else {
    // Reset button text
    const btn = card.querySelector('.exp-details-btn span');
    if (btn) btn.textContent = 'Details';
  }
}

// Add click event to all experience cards
document.addEventListener('DOMContentLoaded', function() {
  const expCards = document.querySelectorAll('.exp-card');
  
  expCards.forEach(card => {
    // Set initial button text for expanded cards
    if (card.classList.contains('expanded')) {
      const btn = card.querySelector('.exp-details-btn span');
      if (btn) btn.textContent = 'Show Less';
    }
    
    card.addEventListener('click', function() {
      toggleExpCard(this);
    });
  });
});

// Footer Animation
var footer = document.querySelector(".footer");
var mssg_form = document.querySelector(".mssg-form");
var form_btn = document.querySelector(".form-btn");
var form_elements = document.querySelectorAll(".form-control");
var form_heading = document.querySelector(".form-heading h1");
var social_links = document.querySelectorAll(".social-link");
var contact_email_heading = document.querySelector(".contact-heading h6");
var contact_email = document.querySelector(".contact-email");
var aurora_circles = document.querySelectorAll(".bg");

var form_t_delay = 300;
form_elements.forEach((e) => {
  e.style.transitionDelay = `${form_t_delay}ms`;
  form_t_delay += 200;
});
form_btn.style.transitionDelay = `${form_t_delay}ms`;

// Viewport-Responsive Footer Animation Trigger
window.onscroll = function (ev) {
  // Viewport-responsive trigger: animations start when footer is 80% of viewport height away
  const triggerOffset = window.innerHeight * 0.8;
  
  if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - triggerOffset) {
    // When reaching the trigger point
    aurora_circles.forEach((circle) => {
      circle.style.opacity = 0.2;
    });

    contact_email_heading.classList.add("text-reveal");
    contact_email.style.cssText = `opacity: 1; transform: scaleX(1);`;

    form_heading.classList.add("text-reveal");
    social_links.forEach((link) => {
      link.classList.add("text-reveal");
    });

    mssg_form.style.opacity = "1";
    footer.classList.add("footer-visible");
    form_btn.style.opacity = "1";

    form_elements.forEach((e) => {
      e.style.transform = "scaleX(1)";
    });

    setTimeout(() => {
      form_elements.forEach((e) => {
        e.classList.add("placeholder-visible");
      });
    }, 1200);
  } else {
    // Not at trigger point
    aurora_circles.forEach((circle) => {
      circle.style.opacity = 0.5;
    });

    contact_email_heading.classList.remove("text-reveal");
    contact_email.style.cssText = `opacity: 0; transform: scaleX(0);`;

    form_heading.classList.remove("text-reveal");
    social_links.forEach((link) => {
      link.classList.remove("text-reveal");
    });
    mssg_form.style.opacity = "0";
    footer.classList.remove("footer-visible");
    form_btn.style.opacity = "0";

    form_elements.forEach((e) => {
      e.style.transform = "scaleX(0)";
    });
    setTimeout(() => {
      form_elements.forEach((e) => {
        e.classList.remove("placeholder-visible");
      });
    }, 1200);
  }
};

// Footer Form Submit Button
var dot_btns = document.querySelectorAll(".dot-btn");
var dot_btn_dots = document.querySelectorAll(".dot");
var dot_btn_spans = document.querySelectorAll(".btn-text");
var dot_btn_arrows = document.querySelectorAll(".arrow");

dot_btns.forEach((dot_btn, i) => {
  dot_btn.addEventListener("mouseover", () => {
    dot_btn_dots[i].classList.add("expand");
    dot_btn_spans[i].classList.add("text-on-hover");
    dot_btn_arrows[i].classList.add("arrow-on-hover");
  });

  dot_btn.addEventListener("mouseleave", () => {
    dot_btn_dots[i].classList.remove("expand");
    dot_btn_spans[i].classList.remove("text-on-hover");
    dot_btn_arrows[i].classList.remove("arrow-on-hover");
  });
});

var project_sec = document.querySelector(".project-sec");
var skills_sec = document.querySelector("#skills_section");
var experiences_sec = document.querySelector("#experiences_section");
var logo = document.querySelector(".logo");

logo_width = logo.offsetWidth + 10;

// Quote section margin left
var quote_sec = document.querySelector(".quote");
var quote_lines = document.querySelectorAll(".quote-line");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("project-sec")) {
          project_heading_char.forEach((char) => {
            char.style.transform = `translate(${logo_width}px,0)`;
          });
        } else if (entry.target.classList.contains("skills-section")) {
          skills_heading_chars.forEach((char) => {
            char.style.transform = `translate(${logo_width}px,0)`;
          });
        } else if (entry.target.classList.contains("experiences-section")) {
          experiences_heading_chars.forEach((char) => {
            char.style.transform = `translate(${logo_width}px,0)`;
          });
          // Single manual recalc when section becomes visible
          if (isInitialized) {
            setTimeout(manualRecalc, 1000);
          }
        } else if (entry.target.classList.contains("quote")) {
          quote_lines.forEach((quote_line) => {
            quote_line.style.transform = `translate(0,0)`;
            setTimeout(() => {
              quote_line.style.marginLeft = logo_width + "px";
            }, 1000);
          });
        }
      } else {
        // If not intersecting
        if (entry.target.classList.contains("project-sec")) {
          project_heading_char.forEach((char) => {
            char.style.transform = "translateY(100%) rotate(10deg)";
          });
        } else if (entry.target.classList.contains("skills-section")) {
          skills_heading_chars.forEach((char) => {
            char.style.transform = "translateY(100%) rotate(10deg)";
          });
        } else if (entry.target.classList.contains("experiences-section")) {
          experiences_heading_chars.forEach((char) => {
            char.style.transform = "translateY(100%) rotate(10deg)";
          });
        }
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(skills_sec);
observer.observe(experiences_sec);
observer.observe(project_sec);
observer.observe(quote_sec);

// Contact Form Handle
var contact_form = document.querySelector("#contact_form");
var sender_Name = document.querySelector("#Sender_Name");
var sender_Email = document.querySelector("#Sender_Email");
var sender_Message = document.querySelector("#Sender_Message");
var form_mssg = document.querySelector(".form-mssg");

const public_key = "WgzrhyPshQ_AFxpMT";
const service_id = "service_y846wyc";
const template_id = "template_tw58ohh";

(function () {
  emailjs.init({
    publicKey: public_key,
  });
})();

contact_form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const sender_Data = {
    senderName: sender_Name.value,
    senderEmail: sender_Email.value,
    senderMessage: sender_Message.value,
  };

  form_mssg.innerText = "Sending...";
  
  emailjs.send(service_id, template_id, sender_Data).then(
    () => {
      console.log("SUCCESS!");
      form_mssg.innerText = "Message Sent! Thank You For Contacting Me :D";
      contact_form.reset();
    },
    (error) => {
      console.log("FAILED...", error);
      form_mssg.innerText = "Oops! Something went wrong. Please try again.";
    }
  );
});

// Cursor Info update
project_sec.addEventListener("mouseenter", () => mouseInfoUpdate("Drag"));
project_sec.addEventListener("mouseleave", () => mouseInfoUpdate("Scroll"));
footer.addEventListener("mouseenter", () => mouseInfoUpdate(":D"));
footer.addEventListener("mouseleave", () => mouseInfoUpdate("Scroll"));

function mouseInfoUpdate(infoText) {
  cursor_info_div.animate(
    {
      filter: "blur(10px)",
      opacity: 0.1,
    },
    { duration: 500, fill: "forwards" }
  );

  cursor_info_div.textContent = infoText;

  cursor_info_div.animate(
    {
      filter: "blur(0px)",
      opacity: 1,
    },
    { duration: 500, fill: "forwards" }
  );
}

// Sound on hover
var snapAudio = document.querySelector("#snapAudio");
var btns = document.getElementsByTagName("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseover", () => {
    snapAudio.play().catch(e => console.log('Audio play failed:', e));
  });
}