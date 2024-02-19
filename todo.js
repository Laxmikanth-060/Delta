let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let nli=document.createElement("li");
     let bb=document.createElement("button");
     bb.innerText="Delete";
    nli.innerText=inp.value;
    ul.appendChild(nli);
    nli.append(bb);
});

ul.addEventListener("click",function(event){

    if(event.target.nodeName=='BUTTON'){
        event.target.parentElement.remove();
    } 

});