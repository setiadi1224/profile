// =========================
// TYPING EFFECT
// =========================

const words = [
  "Backend Developer",
  "Laravel Developer",
  "PHP Developer",
  "Golang Enthusiast",
  "Cybersecurity Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target =
+counter.getAttribute("data-target");

let current = 0;

const updateCounter = ()=>{

const increment =
target / 60;

if(current < target){

current += increment;

counter.innerText =
Math.ceil(current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},
{
threshold:.5
});

counters.forEach(counter=>{
counterObserver.observe(counter);
});


// =========================
// REVEAL ON SCROLL
// =========================

const revealElements = document.querySelectorAll(
".glass,.skill-card,.project-card,.stat-card"
);

const revealObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0px)";

}

});

},
{
threshold:.15
});

revealElements.forEach(el=>{

el.style.opacity = "0";
el.style.transform =
"translateY(60px)";

el.style.transition =
"all .8s ease";

revealObserver.observe(el);

});


// =========================
// PROFILE CARD 3D
// =========================

const card =
document.querySelector(".profile-card");

if(card){

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
(y - centerY) / 20;

const rotateY =
(centerX - x) / 20;

card.style.transform =
`
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
`
rotateX(0deg)
rotateY(0deg)
scale(1)
`;

});

}


// =========================
// HEADER SCROLL EFFECT
// =========================

const header =
document.querySelector("header");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

header.style.background =
"rgba(0,0,0,.55)";

header.style.backdropFilter =
"blur(25px)";

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background =
"rgba(0,0,0,.2)";

header.style.boxShadow =
"none";

}

});


// =========================
// CURSOR GLOW EFFECT
// =========================

const glow =
document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";

glow.style.pointerEvents = "none";

glow.style.background =
"radial-gradient(circle, rgba(0,229,255,.12), transparent 70%)";

glow.style.transform =
"translate(-50%, -50%)";

glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

});


// =========================
// FLOATING EFFECT
// =========================

const skills =
document.querySelectorAll(".skill-card");

skills.forEach((skill,index)=>{

skill.animate(

[
{
transform:"translateY(0px)"
},
{
transform:"translateY(-8px)"
},
{
transform:"translateY(0px)"
}
],

{
duration:
2500 + index * 300,

iterations:
Infinity

}

);

});
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});