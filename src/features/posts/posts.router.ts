import express from "express";
import {inputValidationErrorsMiddleware} from "../../middlewares/inputValidationErrorsMiddleware";
import {postValidationMiddleware} from "../../middlewares/postValidationMiddleware";
import {commentValidationMiddleware} from "../../middlewares/commentValidationMiddleware";
import {authBasicValidationMiddleware} from "../../middlewares/authBasicValidationMiddleware";
import {postController} from "../../compositionRoots/compositionRootPosts";

export const postRouter = () => {
  const router = express.Router()

  router.get('/', postController.getPosts.bind(postController))

  router.get('/:id', postController.getPost.bind(postController))

  router.post(
    '/',
    ...postValidationMiddleware,
    inputValidationErrorsMiddleware,
    postController.createPost.bind(postController)
  )

  router.post(
    '/:id/comments',
    ...commentValidationMiddleware,
    inputValidationErrorsMiddleware,
    postController.createComment.bind(postController)
  )

  router.get('/:id/comments', postController.getComments.bind(postController))

  router.put(
    '/:id',
    ...postValidationMiddleware,
    inputValidationErrorsMiddleware,
    postController.updatePost.bind(postController)
  )

  router.delete(
    '/:id',
    authBasicValidationMiddleware,
    postController.deletePost.bind(postController)
  )

  return router
}