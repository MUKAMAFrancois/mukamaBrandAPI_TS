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

// Create a new blog
router.post('/',createBlog);

// get all blogs
router.get('/', getAllBlogs);

// Get a blog by its ID
router.get('/:id', getBlogById);

// Edit a blog (accessible by admin only)
router.put('/:id', authMiddleWare, editBlog);

// Delete a blog (accessible by the author or admin only)
router.delete('/:id', authMiddleWare, deleteBlog);


// Like a blog
router.post('/:blogId/like', authMiddleWare, postLike);
//dislike a blog
router.post('/:blogId/dislike', authMiddleWare, postDislike);

// count likes
router.get('/:blogId/countLikes', countLikes);

// count dislikes
router.get('/:blogId/countDislikes', countDislikes);

// count comments
router.get('/:blogId/countComments', countComments);


export default router;
