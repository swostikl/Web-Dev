const express = require("express");
const router = express.Router();
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  // patchCar
} = require("../controllers/carControllers");
 
// GET /Cars
router.get("/", getAllCars);

// POST /Cars
router.post("/", createCar);

// GET /Cars/:CarId
router.get("/:CarId", getCarById);

// PUT /Cars/:CarId
router.put("/:CarId", updateCar);

// DELETE /Cars/:CarId
router.delete("/:CarId", deleteCar);

// Update Car using PATCH 
// router.patch('/:CarId', patchCar)

module.exports = router;
