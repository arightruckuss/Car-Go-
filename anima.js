//Traffic light changes color
var light = "red";
function tlFunction(){
var tlFunction = document.getElementById("tlchange");
if(light == "red"){
tlFunction.src = "tlamber.png";
light = "amber";
} else if (light == "amber") {
tlFunction.src = "tlgreen.png";
light = "green";
} else {
tlFunction.src = "tlred.png";
light = "red";
}
}

//Change words on the start button when pressed
var words = "Ready";
function wordsFunction(){
var wordsFunction = document.getElementById("startbutton");
if(words == "Ready"){
wordsFunction.innerHTML = "Steady!";
words = "Steady";
} else if (words == "Steady") {
wordsFunction.innerHTML = "Go!!";
words = "Go";
} else {
wordsFunction.innerHTML = "Ready";
words = "Ready";
}
}

//Change the angle of gun when the button is pressed
var gun = "stopped";
function stop (){
var stop = document.getElementById("raceGun");
if(gun == "stopped"){
stop.style.transform = "rotate(-25deg)";
gun = "cock";
} else if (gun == "cock"){
stop.style.transform = "rotate(-45deg)";
gun = "cock1";
} else {
stop.style.transform = "rotate(0deg)";
gun = "stopped";   
}
}

//Diplays gun smoke when the traffice light is green
var gun1 = "cocked";
function fire(){
var fire = document.getElementById("gunSmoke");
if(gun1 == "cocked"){
fire.style.display = "none";
gun1 = "amber";
} else if (gun1 == "amber") {
fire.style.display = "block";
gun1 = "green";
} else {
fire.style.display = "none";
gun1 = "cocked";
}
}

//Diplays fire smoke when the traffice light is green
var gun2 = "stopped";
function cocked(){
var cocked = document.getElementById("gunFire");
if(gun2 == "stopped"){
cocked.style.display = "none";
gun2 = "amber";
} else if (gun2 == "amber") {
cocked.style.display = "block";
gun2 = "green";
} else {
cocked.style.display = "none";
gun2 = "stopped";
}
}

//Displays a frozen image of the car and hides the image when its moving
var carhide = "inView";
function hidden(){
var hidden = document.getElementById("carStop");
if (carhide == "inView"){
hidden.style.display = "block";
carhide = "set";
} else if (carhide == "set") {
hidden.style.display = "none";
carhide = "cleared";
} else {
hidden.style.display = "block";
carhide = "inView";
}
}

//Displays the moving image of the car 
var car = "stop";
function go(){
var go = document.getElementById("cargo");
if(car == "stop"){
go.style.display = "none";
car = "going";
} else if (car == "going"){
go.style.display = "block";
car = "gone";        
} else {
go.style.display = "none";
car = "stop"; 
}
}

//Displays constant image of the first flag
var flag3hide = "inView";
function flag3h(){
var flag3h = document.getElementById("flag3");
if (flag3hide == "inView"){
flag3h.style.display = "block";
flag3hide = "stillInView";
} else if (flag3hide == "stillInView") {
flag3h.style.display = "none";
flag3hide = "gone";
} else {
flag3h.style.display = "block";
flag3hide = "inView";    
}   
}

//Displays constant image of the secound flag
var flag4hide = "inView";
function flag4h(){
var flag4h = document.getElementById("flag4");
if (flag4hide == "inView"){
flag4h.style.display = "block";
flag4hide = "stillInView";
} else if (flag4hide == "stillInView") {
flag4h.style.display = "none";
flag4hide = "gone";
} else {
flag4h.style.display = "block";
flag4hide = "inView";    
}   
}

//Displays flashing image of the first flag
var flag1x = "nonflash";
function flag1f(){
var flag1f = document.getElementById("flag1");
if(flag1x == "nonflash"){
flag1f.style.display = "none";
flag1x = "flash";
} else if (flag1x == "flash"){
flag1f.style.display = "block";
flag1x = "flashing";        
} else {
flag1f.style.display = "none";
flag1x = "nonflash"; 
}
}

//Displays flashing image of the secound flag
var flag2x = "nonflash";
function flag2f(){
var flag2f = document.getElementById("flag2");
if(flag2x == "nonflash"){
flag2f.style.display = "none";
flag2x = "flash";
} else if (flag2x == "flash"){
flag2f.style.display = "block";
flag2x = "flashing";        
} else {
flag2f.style.display = "none";
flag2x = "nonflash"; 
}
}


//Excutes functions through onclick events 
var btn = document.getElementById("startbutton");
btn.addEventListener("click", tlFunction);
btn.addEventListener("click", wordsFunction);
btn.addEventListener("click", raceGun);
btn.addEventListener("click", stop);
btn.addEventListener("click", cocked);
btn.addEventListener("click", fire);
btn.addEventListener("click", go);
btn.addEventListener("click", hidden);
btn.addEventListener("click", flag1f);
btn.addEventListener("click", flag2f);
btn.addEventListener("click", flag3h);
btn.addEventListener("click", flag4h);

//Fades 'push button below' in and out
$("#startbutton").delay(1000).fadeIn(3000); 
$("#statement").fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400)
.fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300)
.fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200)
.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);