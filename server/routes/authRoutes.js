import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
} from '../controllers/authController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Profile is protected - user must be logged in
router.get('/profile', protect, getUserProfile);

// Example of a role-specific protected route
router.get('/admin-only', protect, authorize('admin'), (req, res) => {
    res.json({ message: 'You have accessed an admin-only route.' });
});

export default router;
