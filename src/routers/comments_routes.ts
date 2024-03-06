// routes/comment_routes.ts

import express from 'express';
import { createComment, getCommentsByBlogId, deleteComment } from '../controllers/comments_controllers';
import { authMiddleWare } from '../controllers/user_controllers';

const router = express.Router();

// Create a comment (accessible by authenticated users)
router.post('/comments/:blogId', authMiddleWare, createComment); // Use blogId from req.params

// Get comments for a specific blog (accessible by anyone)
router.get('/comments/:blogId', getCommentsByBlogId);

// Delete a comment (accessible by authenticated users with authorization)
router.delete('/comments/:id', authMiddleWare, deleteComment);

export default router;
