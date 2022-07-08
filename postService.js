import postController from "./postController.js";
import Post from "./post.js";

class postService {
    async create(post, photo) {
            const createdPost = await Post.create(post)
            return createdPost;
        }

    async getAll(post){
       const posts = await Post.find()
        return posts;
    }
    async getOne(id){
            if(!id){
                throw new Error('Не указан Id')
            }
            const post = await Post.findById(id)
        return post
    }

    async update(post){
        if(!post._id) {
            throw new Error('id не указан')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new:true})
        return updatedPost
    }
    async delete(id){
        if(!id){
            throw new Error('не указан id')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default new postService()