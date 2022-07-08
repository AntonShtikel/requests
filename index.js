
/*
app.post('/',async (req,res) => {
    const {author, title,content,picture} = req.body
    const post = await Post.create({author,title,content,picture})
    res.status(200).json('Server Works')
})

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT'+PORT) )
    }  catch (e){
        console.log(e)
    }
}*/


import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";
const PORT= 3000;
const DbUrl = 'mongodb+srv://admin:admin@cluster0.tfmzo.mongodb.net/?retryWrites=true&w=majority'
import Post from "./post.js";
import fileUpload from "express-fileupload"
const app = express() //создаю сервер
app.use(express.json()) // тип данных
app.use('/api',router)
app.use(fileUpload)
//Get запрос работает
/*app.get('/', (req, res ) =>{
    console.log(req.query)
    res.status(200).json('Server works888')
})*/
//app.listen(PORT, () => console.log('server works on port ' +PORT))



async function startApp(){
    try {
        await mongoose.connect(DbUrl, {useUnifiedTopology:true, useNewUrlParser:true})
        app.listen(PORT, () => console.log('server works on port ' +PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp();
