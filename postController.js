import Post from "./post.js";
import postService from "./postService.js";
import PostService from "./postService.js";

class postController {
    async create(req, res) {
        try {
            console.log(req.files)
            const post = await postService.create(req.body)
            console.log(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const post = await postService.getAll()
           return  res.json(post)
        } catch ( e ){
            res.status(500 ).json( e )
        }
    }
    async getOne(req,res){
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post);
        }catch (e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res){
        try {
            const post = await PostService.delete(req.params)
        } catch ( e ) {
            res.status(500).json(e);
        }
    }

}


export default new postController()