import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/userController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/", createUser);  // Create a new user
router.post("/auth", loginUser);  // Log in a user
router.post("/logout", logoutCurrentUser);  // Log out the current user

// Protected Routes (Requires Authentication)
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)  // Get the current user's profile
  .put(authenticate, updateCurrentUserProfile);  // Update the current user's profile

// Admin Routes (Requires Authentication and Admin Authorization)
router
  .route("/")
  .get(authenticate, authorizeAdmin, getAllUsers);  // Get all users

router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteUserById)  // Delete a user by ID
  .get(authenticate, authorizeAdmin, getUserById)  // Get a user by ID
  .put(authenticate, authorizeAdmin, updateUserById);  // Update a user by ID

export default router;
