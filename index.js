
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rohan:rohan@cluster0.dferg.mongodb.net/MongoDB?retryWrites=true&w=majority',(err)=>{console.log("MongoDB Database Connected.......",err)});
const Courses =mongoose.model('courses',new mongoose.Schema({
    name:String,
    author:Array,
    content:Object

}));

async function createCourses(){
    console.log("courses 1");
    const course = new Courses({
        name:"NodeJs",
        author:['Mosh Hamidani'],
        content:{'BasicNodeJs':'Fundamental'}
    
    })
   let result = await course.save();
   console.log("courses ",result);

}
async function update(id){
    const result = await Courses.updateOne({_id:id},{name:'NodeJS'});
    console.log('Updated ',result)
}
update('62b06eea5d2d9db24fa472a2')
createCourses();
var app = express();
app.get("/",(req,res)=>{
    console.log("first");
if(req.url ==="/") return res.send("successfull")
console.log("second");          
})


app.listen(3000,()=>{console.log(`listening 3000...`);console.log(`node_env:  ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);})
