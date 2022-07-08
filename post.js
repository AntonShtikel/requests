import mongoose from "mongoose";
import fileUpload from "express-fileupload";

const Post = new mongoose.Schema({
    name: {type: String, required:true},
    surname: {type: String, required:true},
    gender: {type: String, required:true},
    photo: {type: String},

})

export default mongoose.model('Post', Post)