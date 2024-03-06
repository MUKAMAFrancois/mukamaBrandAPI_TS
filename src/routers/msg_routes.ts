// routes/message_routes.ts

import express from 'express';
import { sendMessage, viewMessages, deleteMessage } from '../controllers/messagesCtrl';
import { authMiddleWare } from '../controllers/user_controllers';

const router = express.Router();

// Send a message (accessible by authenticated users)
router.post('/messages', authMiddleWare, sendMessage);

// View all messages (accessible by admin only)
router.get('/messages', authMiddleWare, viewMessages);

// Delete a message (accessible by admin only)
router.delete('/messages/:id', authMiddleWare, deleteMessage);

export default router;
