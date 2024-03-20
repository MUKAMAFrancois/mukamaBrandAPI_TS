// routes/blog_routes.ts

import express from 'express';
import { createBlog, getAllBlogs, getBlogById,
     editBlog, deleteBlog,
     postDislike,
     postLike,
     countLikes,
     countDislikes,
     countComments
     } from '../controllers/blog_controllers';
import { authMiddleWare } from '../controllers/user_controllers';

const router = express.Router();


/**
 * @swagger
 * tags:
 *  name: Blog
 *  description: The blog managing API
 */

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Retrieve all blogs
 *     tags: [Blog]
 *     responses:
 *       '200':
 *         description: A list of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 */
router.get('/blogs', getAllBlogs);


/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Retrieve a single blog by id
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single blog
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
router.get('/blogs/:id', getBlogById);



/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       '200':
 *         description: A new blog
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
router.post('/blogs',authMiddleWare,createBlog);



/**
 * @swagger
 * /blogs/{id}:
 *   patch:
 *     summary: Edit a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       '200':
 *         description: A blog
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */


router.patch('/blogs/:id', authMiddleWare, editBlog);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Delete a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A blog is deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
router.delete('/blogs/:id', authMiddleWare, deleteBlog);



/**
 * @swagger
 * /blogs/{blogId}/like:
 *   post:
 *     summary: Like a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A blog is liked
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
router.post('/blogs/:blogId/like', authMiddleWare, postLike);


/**
 * @swagger
 * /blogs/{blogId}/dislike:
 *   post:
 *     summary: Dislike a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A blog is disliked
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */

router.post('/blogs/:blogId/dislike', authMiddleWare, postDislike);


/**
 * @swagger
 * /blogs/{blogId}/countLikes:
 *   get:
 *     summary: Count likes of a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Number of likes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: number
 */

router.get('/blogs/:blogId/countLikes', countLikes);


/**
 * @swagger
 * /blogs/{blogId}/countDislikes:
 *   get:
 *     summary: Count dislikes of a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Number of dislikes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: number
 */
router.get('/blogs/:blogId/countDislikes', countDislikes);

/**
 * @swagger
 * /blogs/{blogId}/countComments:
 *   get:
 *     summary: Count comments of a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: The blog id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Number of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: number
 */
router.get('/blogs/:blogId/countComments', countComments);


export default router;


