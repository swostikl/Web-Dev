const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  // patchBlog
} = require("../controllers/blogControllers");
 
// GET /Blogs
router.get("/", getAllBlogs);

// POST /Blogs
router.post("/", createBlog);

// GET /Blogs/:blogId
router.get("/:blogId", getBlogById);

// PUT /Blogs/:blogId
router.put("/:blogId", updateBlog);

// DELETE /Blogs/:blogId
router.delete("/:blogId", deleteBlog);

// Update Blog using PATCH 
// router.patch('/:blogId', patchBlog)

module.exports = router;