var project_data = [
  {
    project_title: "Swipe - Sample Brand Page",
    project_description:
      "Swipe is a sample landing page for a brand. Swipe has various UI components including a pricing page, a page to display brand stats, a reveal footer as well. The sections have subtle animations when scrolled to, delivering an interactive dyanmic user experiance.",
    tech_stack: ["HTML", "CSS", "SCSS", "JAVASCRIPT"],
    recognitions: ["Hosted on Firebase", "Modern Design with 3D Props"],
    img_count: 7,
    video_flag: true,
    img_window_status: [1, 1, 1, 1, 0, 1, 0],
    project_visit_link: "https://portfolio-project-3-58286.web.app/",
  },
  {
    project_title: "Parie Doe - Sample Portfolio Page",
    project_description:
      "This is a single page sample portfolio website, The website uses bold as well as modern font language. Subtle scroll based animations help keep the user tethered to the portfolio, while promoting interactivity.  ",
    tech_stack: ["HTML", "SCSS", "JAVASCRIPT"],
    recognitions: ["Single Page Portfolio"],
    img_count: 3,
    video_flag: true,
    img_window_status: [0, 1, 1],
    project_visit_link: "https://portfolio-project-4-a8d99.web.app/",
  },
  {
    project_title: "DetectD - Deepfake Detection Tool",
    project_description:
      "DetectD is a GAN based AI tool, to detect if the uploaded media is a deepfake. The user can upload a media file - a video or an image, and the platform will predict if the media shows signs of a deepfake and return a prediction as a percentage. ",
    tech_stack: ["HTML SCSS", "JAVASCRIPT", "FLASK", "MS AZURE"],
    recognitions: [
      "Microsoft Imagine Cup - National Winner",
      "Secured 97% Testing Accuracy ",
      "Indian Incubators - top 20 statrups",
    ],
    img_count: 5,
    video_flag: false,
    img_window_status: [1, 1, 0, 1, 0],
    project_visit_link: "https://detect-d.azurewebsites.net/",
  },
  {
    project_title: "BrandLn - Sample Landing Page",
    project_description:
      "BrandLn is another brand landing page built using moder bold and strong fonts. The small animated elements make the page more lively while the hover and scroll effects promotes user ineractivity. This is a sample page.",
    tech_stack: ["HTML SCSS", "JAVASCRIPT", "Bootstrap"],
    recognitions: ["Modern Design Langauge"],
    img_count: 5,
    video_flag: true,
    img_window_status: [1, 0, 0, 1, 0],
    project_visit_link: "https://portfolio-project-2-42ab0.web.app/",
  },
  {
    project_title: "Yash Investments",
    project_description:
      "This is a single static page with minimal effects and subtle animation. The website uses futurisitc elements and ecperiments with various layouts.",
    tech_stack: ["HTML", "SCSS", "JAVASCRIPT"],
    recognitions: ["Single Page", "Futuristic Design", "Minimal Design"],
    img_count: 5,
    video_flag: true,
    img_window_status: [1, 0, 1, 0, 1],
    project_visit_link: "https://portfolio-project-1-ef087.web.app/",
  },
  {
    project_title: "Pixops - Image Manipulation Using GANs",
    project_description:
      "Pixops is a web platform used to manipulate images. This platform uses the ML concept of GANs to manipulate images,like to colorise B/W images, fuse two images together, upscale image (increase the resolution by 4X), and also generate images by taking a prompt from user. ",
    tech_stack: ["HTML SCSS", " FLASK", "JAVASCRIPT"],
    recognitions: [
      "Colorise B/W images",
      "Upscale Images",
      " Generate Images",
      "Fuse Two Images",
      "Best Final Year Project",
    ],
    img_count: 2,
    video_flag: true,
    img_window_status: [1, 1],
    project_visit_link: "./maintainance-page.html",
  },
  {
    project_title: "Syngen - Synthetic Data Generation",
    project_description:
      "Syngen is an AI/ML web platform to generate huge synthetic datasets, meaning with dummy logical data. The platform can also be used to compare various machine learning algorithms on a dataset to predict the best algorithm for optimal results. ",
    tech_stack: ["HTML SCSS", " FLASK", "JAVASCRIPT", " Bootstrap"],
    recognitions: ["Generate Synthetic Datasets", "Compare Various Algorithms to Predict the optimal"],
    img_count: 5,
    video_flag: false,
    img_window_status: [1, 1, 0, 1, 0],
    project_visit_link: "./maintainance-page.html",
  },
  {
    project_title: "Medscan - Universal Health reccords",
    project_description:
      "Medscan is an universal medical reccord platform which is powered by AI. It has patient data for his appointments, vitals, medical history, and also has a chatbot to help the user with his queries. The platform also has a vision AI to detect the tumor from the uploaded MRI.",
    tech_stack: ["HTML SCSS", "JAVASCRIPT", "AZURE", "VISION AI"],
    recognitions: ["Connected Android App", "Medscan AI Chatbot", "Shared Database"],
    img_count: 8,
    video_flag: false,
    img_window_status: [1, 1, 0, 1, 0, 0, 1, 1],
    project_visit_link: "https://lemon-glacier-024d5470f.6.azurestaticapps.net/",
  },
  {
    project_title: "Tile Slide - Full Stack Puzzle Game",
    project_description:
      "Tile Slide is a puzzle game where you have to push arrow tiles to clear all tiles by pushing them in a target tile. The backend is power by AWS services like DynamoDB, Lambda, and API Gateway. The frontend is hosted on Amazon Amplify with assets in S3 Bucket.",
    tech_stack: ["HTML SCSS", "JAVASCRIPT", "AWS - AMPLIFY + S3", "DYNAMODB", "LAMBDA", "API GATEWAY"],
    recognitions: ["Submitted to AWS Game Builder Challenge", "AWS", "Shared Database"],
    img_count: 6,
    video_flag: false,
    img_window_status: [0, 1, 1, 1, 0, 1],
    project_visit_link: "https://final.d17rcucg91fyf4.amplifyapp.com/",
  },
  {
    project_title: "Kanbas - Canvas Clone",
    project_description:
      "Kanbas is a MERN-based Canvas clone for universities. It lets professors build and manage courses with modules, assignments, and quizzes (fill-in-the-blank, multiple-choice, and true/false). Students can enroll, submit work, take quizzes (with multiple attempts if allowed), view scores, and review answers.  ",
    tech_stack: ["HTML SCSS", "REACT", "TYPESCRIPT", "EXPRESS.JS + NODE.JS", "MONGODB"],
    recognitions: ["Hosted on Netlify", "AWS", "Shared Database"],
    img_count: 11,
    video_flag: false,
    img_window_status: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    project_visit_link: "https://kanbas-yash.netlify.app/",
  },
];

let params = new URLSearchParams(document.location.search);
var active_project_index = Number(params.get("active_project_index_param")); // is the string "Jonathan"

var project_title_text = document.querySelector(".project-title-text");
var project_description = document.querySelector(".project-description");
var navbar_btn_dots = document.querySelector(".dots");
var nav_switch_texts = document.querySelector(".nav-switch-texts");
var nav_btns = document.querySelector(".nav-btns");
var nav_arrow = document.querySelector(".nav-arrow");
var visit_project_link = document.querySelector("#visit_project_link");

var active_project = project_data[active_project_index];

project_title_text.textContent = active_project.project_title;
project_description.textContent = active_project.project_description;
visit_project_link.setAttribute("href", active_project.project_visit_link);
// Theme Control
const background_colors = [
  "#DAD4FF",
  "#91C9B0",
  "#98DFFF",
  "#EBEBEB",
  "#EDB694",
  "#DEEDFF",
  "#90D3DA",
  "#C2E3FC",
  "#f0f0f0",
  "#f0f0f0",
];
const text_colors = [
  "#695CE1",
  "#000000",
  "#66B2D4",
  "#333333",
  "#FFFFFF",
  "#010511",
  "#FFFFFF",
  "#66B2D4",
  "#000000",
  "#ff8888",
];

document.body.style.backgroundColor = background_colors[active_project_index] + "80";
document.body.style.color = text_colors[active_project_index];

navbar_btn_dots.style.fill = text_colors[active_project_index];
nav_btns.style.color = text_colors[active_project_index];

// Project tech
var project_tech = document.querySelector("#project-tech");

active_project.tech_stack.forEach((el) => {
  var project_technology = document.createElement("p");
  project_technology.textContent = el;
  project_tech.appendChild(project_technology);
});

// Project Recognitions
var project_recognition = document.querySelector("#project_recognitions");

active_project.recognitions.forEach((el) => {
  var project_recognition_tag = document.createElement("p");

  project_recognition_tag.textContent = el;
  project_recognition.appendChild(project_recognition_tag);
});

/// Project Screen Shots Add

var project_content = document.querySelector("#project_content");

for (let i = 0; i <= active_project.img_count; i++) {
  if (i == 0) {
    if (active_project.video_flag) {
      var div = document.createElement("div");
      div.classList.add("image-content");
      var video_tag = document.createElement("video");
      video_tag.setAttribute("loop", "");
      // video_tag.setAttribute("controls" , "")
      video_tag.setAttribute("autoplay", "autoplay");
      video_tag.setAttribute("playsinline", "");
      video_tag.setAttribute("muted", "");
      video_tag.classList.add("project_video", "image", "image-windowed", "element-expand", "show");
      var video_source = document.createElement("source");
      video_source.setAttribute(
        "src",
        `./Resources/Project Screenshots/P${active_project_index + 1}/p${active_project_index + 1}-video.mp4`
      );
      video_source.setAttribute("type", `video/mp4`);
      video_tag.setAttribute("alt", "Project Video");
      video_tag.appendChild(video_source);
      div.appendChild(video_tag);

      project_content.appendChild(div);

      project_content.addEventListener("mouseover", () => {
        document.querySelector(".project_video").play();
      });
    }
    continue;
  }

  var div = document.createElement("div");
  div.classList.add("image-content");
  var img_tag = document.createElement("img");

  img_tag.classList.add("image");
  if (active_project.img_window_status[i - 1]) {
    img_tag.classList.add("image-windowed");
  }

  img_tag.setAttribute(
    "src",
    `./Resources/Project Screenshots/P${active_project_index + 1}/p${active_project_index + 1}-${i}.webp`
  );
  img_tag.setAttribute("alt", "Project Image");
  div.appendChild(img_tag);

  project_content.appendChild(div);
}

////// Nav Bar

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

document.querySelector(".logo").animate(
  {
    top: 0,
  },
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

// Smooth Scroll Control
const body = document.body,
  scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  width = scrollWrap.getBoundingClientRect().width,
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

dot.style.backgroundColor = background_colors[active_project_index];
btn.addEventListener("mouseover", () => {
  dot.classList.add("expand");
  span.classList.add("text-on-hover");
  arrow.classList.add("arrow-on-hover");
});
btn.addEventListener("mouseleave", () => {
  span.classList.remove("text-on-hover");
  dot.classList.remove("expand");
  arrow.classList.remove("arrow-on-hover");
});

/////////////// ON-SCROLL ANIMATIONS

var main_container = document.getElementById("smooth-scroll-wrapper");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // if(entry.target.classList.contains('project-title'))
      entry.target.classList.add("element-show");
      // else
      entry.target.classList.add("show");
      btn.style.opacity = "1";
    } else {
      entry.target.classList.remove("element-show");
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".image").forEach((el) => observer.observe(el));

const project_text_div = document.querySelector(".project-title-text");
const project_description_div = document.querySelector(".project-description");
const tech_div = document.querySelector(".tech h6");

var asd = document.querySelectorAll(".tech>p").forEach((el) => observer.observe(el));

const recognitions_div = document.querySelector(".recognitions h6");

var asd = document.querySelectorAll(".recognitions>p").forEach((el) => observer.observe(el));

observer.observe(project_text_div);
observer.observe(project_description_div);
observer.observe(tech_div);
observer.observe(recognitions_div);

///
var snapAudio = document.querySelector("#snapAudio");
var btns = document.getElementsByTagName("button");

console.log(btns);
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseover", () => {
    snapAudio.play();
  });
}
