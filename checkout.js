// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// console.log("i am  working")

var moviesbooked = JSON.parse(localStorage.getItem("movie"))
console.log(moviesbooked);

moviesbooked.map(function(ele){

let box = document.createElement("div")
 
let tit = document.createElement("h1")
tit.innerText=ele.Title;

let image = document.createElement("img")
image.src = ele.Poster;


   box.append(image,tit);
   document.querySelector("#movie").append.box
})
alert("You have completed")