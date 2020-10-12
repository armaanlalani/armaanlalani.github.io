let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
if(navBarToggle){
    navBarToggle.addEventListener("click", function() {
        mainNav.classList.toggle("active");
      });
}

var slideIndex = 1;
showSlides(slideIndex);
var next = document.getElementsByClassName("next");
var prev = document.getElementsByClassName("prev");


var submit = document.getElementById("submit")
var morebutton = document.getElementById("mimore")
var utmist = document.getElementById("more1p")
var utmisti = document.getElementById("more1i")
var show = true;
morebutton.onclick = function(){
  if (!show){
    utmist.style.display = "contents";
    utmist.style.padding = "5px";
    utmist.style.textAlign = "justify";
    utmisti.style.display = "block";
    utmisti.style.float = "right";
    utmisti.style.margin = "10px";
    mimore.innerHTML = "--Show Less--"
    show = true;
  }
  else if(show){
    utmist.style.display = "none";
    utmisti.style.display = "none";
    mimore.innerHTML = "--Show More--"
    show = false;
  }
}

var morebutton1 = document.getElementById("nasdmore")
var nasd = document.getElementById("more2p")
var nasdi = document.getElementById("more2i")
var nasdl = document.getElementById("more2l")
var show1 = true;
morebutton1.onclick = function(){
  if (!show1){
    nasd.style.display = "contents";
    nasdi.style.display = "block";
    nasdi.style.float = "right";
    nasdi.style.margin = "10px";
    nasdl.style.display = "flex";
    nasdmore.innerHTML = "--Show Less--"
    show1 = true;
  }
  else if(show1){
    nasd.style.display = "none";
    nasdi.style.display = "none";
    nasdl.style.display = "none";
    nasdmore.innerHTML = "--Show More--"
    show1 = false;
  }
}

var morebutton2 = document.getElementById("tdmore")
var td = document.getElementById("more3p")
var tdi = document.getElementById("more3i")
var tdl = document.getElementById("more3l")
var show2 = true;
morebutton2.onclick = function(){
  if (!show2){
    td.style.display = "contents";
    tdi.style.display = "block";
    tdi.style.float = "right";
    tdi.style.margin = "10px";
    tdl.style.display = "flex";
    tdmore.innerHTML = "--Show Less--"
    show2 = true;
  }
  else if(show2){
    td.style.display = "none";
    tdi.style.display = "none";
    tdl.style.display = "none";
    tdmore.innerHTML = "--Show More--"
    show2 = false;
  }
}

// Get the modal
var modal = document.getElementById("mymodal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modbutton");

// Get the <span> element that closes the modal
var remove = document.getElementsByClassName("close")[0];
var mod = document.querySelector("#poptext");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Data Structures and Algorithms</h2><p class='paragraph'>An introduction to data structures and algorithms using both Python and C to create stacks, queues, binary search trees, trees, hash tables, graphs, etc. A few larger scale projects as well including: <ul><li><a href='https://github.com/armaanlalani/chessAI' target='_blank'>AI for Chess using Python</a></li><li><a href='https://github.com/armaanlalani/BurgerPDE' target='_blank'>Burger PDE</a></li></ul></p>";
}

btn[1].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Calculus I and II</h2><p class='paragraph'>A variety of advanced calculus concepts including delta-epsilon limit proofs, inverse functions, integration techniques (partial fractions, trig substitution), partial derivaties, etc.</p>";
}

btn[2].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Praxis I and II</h2><p class='paragraph'>Two courses that provide a strong foundation in engineering design. The first course focuses mainly on the theory behind engineering design such as the process of diverging, converging, effective methods of idea generation, leadership styles, and targeting various aspects of design. Completed the course by designing a prototype of a wearable pencil case to assist students working while commuting to school.</p><p class='paragraph'>The second course focused on applying the concepts taught during the first course. I had the opportunity to collaborate with three other students to design a mechanism or process to assist a local badminton club in collecting shuttlecocks after drills. This project consisted of applying various concepts taught earlier in the year through various brainstroming methods and utilizing comparison matrices and SCAMPER tools in order to converge towards an idea. We also had the opportunity to test our prototype at the badminton club to verify our solution and presented our innovative ideas at the annual University of Toronto's Praxis Showcase.</p><img src='praxis2.JPG' width=250px><img src='praxis3.JPG' width=250px><img src='praxis1.PNG' width=250px>"
}

btn[3].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Linear Algebra</h2><p class='paragraph'>A course with a very strong emphasis on formal proofs related to topics such as vector spaces, span, linear dependency, differential equations, etc.</p>";
}

btn[4].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Structures and Materials</h2><p class='paragraph'>A very unique course that focused on a number of topics related to structures and civil engineering including: stress-strain, the bending of beams, effective truss bridge design, flexural stresses, shear stress in beams, and design of reinforced concrete. The course also had two central projects including redesigning an existing bridge as a truss bridge using calculations and research and a hands on project where groups of students designed their own beam from matboard and glue. My team designed a beam that was able to withstand roughly 850 Newtons of force and placed within the top 20% in overall results and performance.</p><img src='civ1.JPG' width=250px><img src='civ2.JPG' width=250px><img src='civ3.JPG' width=250px>"
}

btn[5].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Fundamentals of Electric Circuits</h2><p class='paragraph'>An introduction to electrical circuits through a number of topics including: nodal and mesh analysis, solving phasor circuits, power fcators, input signals using filters, and inductance. The course also had labs which allowed for testing various concepts that were taught during lectures.</p>"
}

btn[6].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Vector Calculus and Fluid Mechanics</h2><p class='paragraph'>The first half of this course dealt with a variety of concepts relating to multivariable calculus including: tangent planes, integrals with parameters, change of variable with Jacobians, line integrals, Green's Theorem, divergence, curl, and Stoke's Theorem. The second half of the course was an application and extension of multivariable calculus through analysis of fluid motion. This half of the course focused on concepts such as body vs. surface forces, Newtonian fluids, hydrostatics, compressible vs. incompressible flow, open channel flow, differential analysis of fluid flow, etc.</p>"
}

btn[7].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Digital and Computer Systems</h2><p class='paragraph'>A course with a strong focus on a number of aspects relating to computer hardware. The first half of the coure dealt primarily with applying concepts that were taught in lecture to programming assignments in Verilog. Some of these concepts included: logic functions, multiplexers, k-maps, combinational vs. sequential circuits, gated latches, flip-flops with both synchronous and asynchronous resets, and finite state machines. The second half of the course dealt primarily with assembly language programming through concepts such as memory architecture, the background between ARM instructions, memory mapping, intercepts, IRQ handlers, subroutines, etc. <a href='https://github.com/armaanlalani/ARMassembly' target='_blank'>Click on this link</a> to view labs associated with both Verilog and Assembly Language Programming.</p>"
}

btn[8].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Ordinary Differential Equations</h2><p class='paragraph'>A course with a focus on solving ordinary differential equations using a variety of methods depending on the question presented. Some concepts taught included: method of integrating factors, the existence uniqueness theorem, systems of linear differential equations, stability of equilibrium points, fundamental matrices, nonhomogeneous linear systems, Laplace transforms, and convolution integrals. The course also had a strong focus on applying these concepts using MATLAB which can be found by <a href='https://github.com/armaanlalani/Ordinary-Differential-Equations_MATLAB' target='_blank'>clicking on this link</a>.</p>"
}

btn[9].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Probability and Statistics</h2><p class='paragraph'>An introduction to various concepts relating to probability and statistics. Course concepts include: conditional probability, Baye's Rule, probability functions, cumulative distribution functions, joint probability distribution, covariance, binomial distribution, hypergeometric distribution, normal distribution, exponential distribution, transformation of variables, moment generating functions, t-distribution, interval estimates, Cramer Rao lower bounds, and one and two sample tests of hypotheses.</p>"
}

btn[10].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Praxis III</h2><p class='paragraph'>Praxis III is probably one of the most important and interesting courses I have taken so far in my undergraduate degree. The basis of the course involved designing an autonomous mechanism that was able to deliver electric chargers to cars located in a parking lot. This task was to be completed in teams of three and could be tackled in any which way as long as a number of restraints were followed. Prior to engaging in the project, my team and I had to complete a number of workshops on topics in rover fabrication, digital modelling, circuits and microcontrollers, motors and drivers, and interfacing. <a href='#projects'>Visit the projects section of the page</a> to learn more about my team's solution or <a href='praxisIII.pdf' download target='_blank'>download the challenge rules</a> to learn more.</p><p class='paragraph'>Due to the COVID-19 outbreak, this project was not completed due to lack of access to building and testing facilities. As a result, I completed an individual project around the concept of PID control using MATLAB. PID control is an essential concept relating to robotics to ensure any robot with wheels is able to travel as straight as possible when required. I was able to successfully implement PID control to the motion of simulated robot while also incorporating compass control which had a very significant impact on the robot's motion. Run the main_script.m file accessible through <a href='https://github.com/armaanlalani/PID_Controller' target = '_blank'>this link</a> to view the robot simulation and <a href='3.1_Armaan Lalani_Closed-Loop Controller.pdf' download target='_blank'>click on this link</a> to view my report which explains the various decisions I made.</p>"
}

btn[11].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Quantum and Thermal Physics</h2><p class='paragraph'>The first half of this course dealt with quantum physics. Course topics included quantum harmonic oscillators, solving Schrodinger's Equation, particles in a box, transmission and reflection, potential steps and wells, electron spin, etc. The second half of the course dealt with topics relating to thermal physics inluding compression and expansion, heat capacity, microstates and macrostates of molecules, statistical mechanics, etc. I also had the opportunity to engage in a number of labs including the Millikan oil drop experiment and wave phenomena experiments.</p>"
}

btn[12].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Introduction to Machine Intelligence</h2><p>Not complete yet, more information coming...</p>"
}

btn[13].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Introduction to Image Analysis</h2><p>Not complete yet, more information coming...</p>"
}

btn[14].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Signal Analysis and Communication</h2><p>Not complete yet, more information coming...</p>"
}

btn[15].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Foundations of Computing</h2><p>Not complete yet, more information coming...</p>"
}

btn[16].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Computer Systems Programming</h2><p>Not complete yet, more information coming...</p>"
}

btn[17].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Systems Software</h2><p>Not complete yet, more information coming...</p>"
}

btn[18].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Probablistic Reasoning</h2><p>Not complete yet, more information coming...</p>"
}

btn[19].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Introduction to Machine Learning</h2><p>Not complete yet, more information coming...</p>"
}

btn[20].onclick = function(){
  modal.style.display = "block";
  mod.innerHTML = "<h2 class='titles'>Artificial Intelligence</h2><p>Not complete yet, more information coming...</p>"
}

remove.onclick = function() {
  modal.style.display = "none";
}

next[0].onclick = function(){
  showSlides(slideIndex += 1);
}

prev[0].onclick = function(){
  showSlides(slideIndex += -1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
