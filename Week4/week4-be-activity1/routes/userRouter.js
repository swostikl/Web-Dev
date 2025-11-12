const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchUser
} = require("../controllers/userControllers");
 
// GET /Users
router.get("/", getAllUsers);

// POST /Users
router.post("/", createUser);

// GET /Users/:userId
router.get("/:userId", getUserById);

// PUT /Users/:UserId
router.put("/:userId", updateUser);

// DELETE /Users/:UserId
router.delete("/:userId", deleteUser);

// Update User using PATCH 
// router.patch('/:UserId', patchUser)

module.exports = router;
