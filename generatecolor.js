
let d=document.querySelector("div");
let h=document.createElement("h1");
h.append("Generate a random color");
d.appendChild(h);

let btn=document.createElement("button");
btn.append("click to generate new color");
d.appendChild(btn);
 
let min=document.querySelector("#d");

btn.addEventListener("click",function(){

    let a=Math.floor(Math.random()*255);
 let b=Math.floor(Math.random()*255);
 let c=Math.floor(Math.random()*255);

 let color=`rgb(${a}, ${b} ,${c})`;
 
    btn.style.color= color;
    min.style.backgroundColor=color;
    h.style.color=color;
});