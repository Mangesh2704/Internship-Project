const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/heartapp")

app.post("/signup",(req,res)=>{
      UsersModel.create(req.body)
      .then((users => res.json(users)))
      .catch((err) => res.json(err))
})


app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    UsersModel.findOne({email:email}).then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Wrong Password")
            }
        }else{
            res.json("User not found")
        }
    })
})

const UsersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UsersModel=new mongoose.model("users",UsersSchema)
module.exports=UsersModel

app.listen(3000, ()=>{
    console.log("Server is running")
})