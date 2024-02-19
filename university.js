let url="http://universities.hipolabs.com/search?name=";
        

let btn=document.querySelector("button");
let p=document.querySelector("p");
let b=document.querySelector("body");
        //console.log(v);


btn.addEventListener("click",()=>{
    
    let v=document.querySelector("input").value;
    axios.get(url+v)
    .then((res)=>{
        let r=res.data;
          show(r);
       
    })

    .catch((e)=>{
        console.log(e);
    })

});

  
function show(res){

    let u=document.querySelector("ul");
    u.innerText=" ";
    for(i of res){
      let l=document.createElement("li");
      //let temp=i.name;
        l.innerText=i.name;
        u.appendChild(l);
    }
    b.appendChild(u);

}