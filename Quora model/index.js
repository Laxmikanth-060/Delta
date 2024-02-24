const { pseudoRandomBytes } = require("crypto");
const express= require("express");
const app=express();

const {v4 : uuidv4}=require("uuid");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

const port=8080;

 const path=require("path");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
//app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());

app.listen(port,()=>{
    console.log(`port ${port} running well!`);
});


let posts=[
    {
        id:uuidv4(),
        username:"lucky",
        descript:"I love loving love",
    },
    {
        id:uuidv4(),
        username:"sandy",
        descript:"I hate the people who hate the hate",
    },
    {
        id:uuidv4(),
        username:"anil",
        descript:"Being loved is the greatest gift",
    }
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});

app.post("/posts",(req,res)=>{
    let {username, descript} = req.body;
    let id=uuidv4();
    posts.push({id,username,descript});
    //res.send(`${username} and ${descript}`);
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    //console.log(id);
    let post=posts.find((p)=> id===p.id);
     console.log(post);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
  //  console.log(username);
    let post=posts.find((p)=> id===p.id);
   res.render("form2.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let con=req.body.descript;
    let post=posts.find((p)=> id===p.id);
    console.log(con);
    post.descript=con;
    //res.render("form2.ejs",{con})
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{

    let {id}=req.params;
    posts=posts.filter((p)=> id!==p.id);
    console.log("success");
    res.redirect("/posts");
});




