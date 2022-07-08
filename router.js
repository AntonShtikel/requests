import {Router} from "express";
import Post from "./post.js";
import postController from "./postController.js";
import post from "./post.js";
const router = new Router()

router.post('/posts', postController.create)
router.get('/posts', postController.getAll)

router.get('/posts/:id', postController.getOne)

router.put('/posts/',postController.update)

router.delete('/posts/:id', postController.getOne)

export default router;



