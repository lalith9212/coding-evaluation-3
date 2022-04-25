// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//  Api key =  b3278148
let movies_div=document.querySelector("#movies")
let id;
async function searchmovies()
{
   try{
   let Search=document.querySelector("#search").value
   //console.log(query)

const res= await fetch(`https://www.omdbapi.com/?apikey=b3278148&s=${Search}`)

const data=await res.json();
//console.log(data)
const movies=data.Search;

appendMoies(movies)
return movies
   }
   catch(err){
    console.log("err",err)
   }
}

 var cartdata = JSON.parse(localStorage.getItem("movie"))||[];
function appendMoies(data1)
{
   
   movies_div.innerText=null;
   data1.forEach(function(ele)
   {
    var box1= document.createElement("div")
    box1.setAttribute("class",box1)
   var img1= document.createElement("img")
   img1.src=ele.Poster;

   var p3= document.createElement("p")
   p3.innerText=ele.Title
   
   let booknow = document.createElement("button");
   booknow.innerText="Book Now";
   booknow.setAttribute("id","book_now")
   booknow.addEventListener("click",function(){
       additemtocart(ele);
   })
   
   box1.append(img1,p3,booknow)

   document.querySelector("#movies").append(box1)
   });
}

function additemtocart(ele){
cartdata.push(ele)
console.log(cartdata)
localStorage.setItem("movie",JSON.stringify(cartdata));
// window.location("checkout.html")
window.location.href = "checkout.html"
}

async function main()
{
let data=await searchmovies();
console.log(data)
    
if(data==undefined)
   {
       return false
   }
   appendMoies(data)   
}


//debouncing

function debounce(func,delay){
if(id)
{
    clearTimeout(id);

}

  id= setTimeout(function(){
       func();
   },delay);
}


function addbutton(ele)
{


}