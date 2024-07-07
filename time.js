let logo = document.querySelector(".logo");
let timeNow = new Date().getHours();
console.log(timeNow);
// timeNow = 1;

let greeting = 
timeNow >= 5 && timeNow < 12
? "Good Morning"
: timeNow < 12 && timeNow < 18
? "Good Evening"
: "Good Night"

console.log(greeting);
logo.innerHTML = `<span>${greeting}</span>`