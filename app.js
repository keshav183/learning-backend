const express = require('express');
const morgan = require('morgan')
const app = express()
app.use((req,res,next)=>{
    console.log("this is middleware")
    return next();
})
app.use(morgan('dev'));
app.set('view engine' , 'ejs')
app.get('/' ,  (req,res,next)=>{
    const a = 1;
    const b = 2;
    console.log(a+b);
    next();
},
 (req,res)=>{res.render("index")})
app.get('/about' ,(req,res)=>{res.send("welcome about")} )
app.get('/profile' , (req,res)=>{res.send("profile page")}) 


app.listen(3000)