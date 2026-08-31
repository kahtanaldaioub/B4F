const { createElement } = require("react");



function genrate(){
    event.preventDefault();
let firstName=document.getElementById("fname").value;
let last=document.getElementById("lname").value;
let age=document.getElementById("age").value;
let jobt=document.getElementById("jobt").value;
let email=document.getElementById("email").value;
let city=document.getElementById("city").value;
let genrate=document.getElementById("card");


let initials= (firstName[0]+last[0]).toUpperCase() ;
let fullMame= firstName + " "+ last;

let card =`
<div class="card">
<h1> card</h1>
<p>initials : ${initials}</p>
<p>full name : ${fullMame}</p>
<p> age: ${age}</p>
<p>email:${email} </p>
<p>city: ${city}</p>
<p>job title : ${jobt}</p>
</div>

`
 genrate.innerHTML= card;

} 

