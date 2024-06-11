// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var numOutPut = document.getElementById("display");
var m50 = document.getElementById("minus50");
var m10 = document.getElementById("minus10");
var m1 = document.getElementById("minus1");
var p50 = document.getElementById("plus50");
var p10 = document.getElementById("plus10");
var p1 = document.getElementById("plus1");
var rand1btn = document.getElementById("rand1");
var rand1out = document.getElementById("rand1-out");
var rand2btn = document.getElementById("rand2");
var rand2out = document.getElementById("rand2-out");
var rand3btn = document.getElementById("rand3");
var rand3out = document.getElementById("rand3-out");
var rand4btn = document.getElementById("rand4");
var rand4out = document.getElementById("rand4-out");
var randIn1 = document.getElementById("rand-in1");
var randIn2 = document.getElementById("rand-in2");
var sizebtn = document.getElementById("random-size");
var body = document.getElementById("body");
var color = document.getElementById("random-rgb");
var html = document.getElementById("HTML");
var reset = document.getElementById("reset");

// Global variable (variable scope)
let num = 0;

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
p1.addEventListener("click", plus1);
p10.addEventListener("click", plus10);
p50.addEventListener("click", plus50);
m1.addEventListener("click", minus1);
m10.addEventListener("click", minus10);
m50.addEventListener("click", minus50);

function plus1() {
// num = num + 1;
// num++;
num += 1
numOutPut.innerHTML = num;
}

function plus10() {
  num = num + 10;
  numOutPut.innerHTML = num;
}

function plus50() {
  num = num + 50;
  numOutPut.innerHTML = num;
}

function minus50() {
  num = num - 50;
  numOutPut.innerHTML = num;
}

function minus10() {
// num = num - 10;
num -= 10;
numOutPut.innerHTML = num;
}

function minus1() {
num = num - 1;
numOutPut.innerHTML = num;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

var stringOutE1 = document.getElementById("strOut");
var stringInE1 = document.getElementById("strIn");

var story = "Once upon a time, ";

stringInE1.addEventListener("change", updateStory);

function updateStory() {
  // Input: read the word, store as variable
  var word = stringInE1.value;
  stringInE1.value = "";

  // Process: add word to story
story += word + " ";

  // Output: display story
  stringOutE1.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

rand1btn.addEventListener("click", random1);
rand2btn.addEventListener("click", random2);
rand3btn.addEventListener("click", random3);
rand4btn.addEventListener("click", random4);
sizebtn.addEventListener("click", randomSize);
color.addEventListener("click", randomColor);
reset.addEventListener("click", resetPage);
let button = document.querySelectorAll("button");

function random1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1out.innerHTML = rand;
}

function random2() {
  var rand = Math.random();
  rand = rand*4; // decimal 0 - 0.99999
  rand = Math.floor(rand); // integer 0 - 99
  rand2out.innerHTML = rand;
}

function random3() {
  var rand = Math.random() * 10;
  rand = Math.floor(rand);
  rand -= 5;
rand3out.innerHTML = rand;
}

function random4() {
  let val1 = +randIn1.value;
  let val2 = +randIn2.value;
  val2 = val2 - val1;
  let rand = Math.random();
  rand = rand * val2;
  rand = Math.floor(rand);
  rand = rand + val1;
  rand4out.innerHTML = rand;
}

function randomSize() {
  let rand = Math.random();
  rand = rand * 75;
  rand = Math.floor(rand);
  body.style.fontSize = `${rand}px`;
  for (let i = 0; i < button.length; i++) {
    button[i].style.fontSize = `${rand}px`;
  }
}

function randomColor() {
  let r1 = Math.floor(Math.random() * 255);
  let r2 = Math.floor(Math.random() * 255);
  let r3 = Math.floor(Math.random() * 255);
  let colour = `rgb(${r1}, ${r2}, ${r3})`;
  html.style.background = colour;
}

function resetPage() {
  body.style.fontSize = "16px";
  html.style.background = "#9ae4c8";
for (let i = 0; i < button.length; i++) {
  button[i].style.fontSize = "20px";
};
numOutPut.innerHTML = 0
}

// Check your understanding
  // 1. Complete the rest of the incrementing buttons.
  // 2. Complete the random __ to __ button.
  // 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
  // 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

  // i.e.  var rgbString = `rgb(34, 245, 128)`;
  //       document.getElementById('HTML').style.background = rgbString

  // Your job is to make the values random in the above code snippet.

  // 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.


 /* let x = 5;
  let Y = 9;
  let z = 3;

  x = 3;
  z = z + x;
  y =+ z;
  x --;
  y -= z;

  console.log(x, y, z) */