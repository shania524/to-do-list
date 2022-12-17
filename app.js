
const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname +"/date.js" )

const app= express();
const items =["cook food" ,"eat food"];
const works=[];
app.set('view engine', 'ejs');

 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
   // var today=new Date();
   // var day="";
   // var currentDay=today.getDay();
   // switch (currentDay) {
   //    case 0: day="Sunday";
   //     break;
   //    case 1: day="Monday";
   //     break;
   //    case 2: day="tuesday";
   //     break;
   //     case 3: day="wednesday";
   //     break;
   //     case 4: day="thursday";
   //     break;
   //     case 5: day="friday";
   //     break;
   //     case 6: day="saturday";
   //     break;
      
   
    
   // }
  day=date.getDate();

   res.render( "list" ,{listTitle:day, newlistItem:items});


})

app.post("/",function(request,response){
   console.log(request.body.list1);
   const item= request.body.newlist;
   if(request.body.list1==="work"){
      
      works.push(item);
      response.redirect("/work");
   }
    else{ 
       items.push(item);
      response.redirect("/");
    }
})

app.get("/work",function(req,res){
   res.render( "list" ,{listTitle:"work", newlistItem:works});
})
app.get("/about",function(req,res){
   res.render("about");
})
app.listen(3000,function(){
console.log("system running");
})