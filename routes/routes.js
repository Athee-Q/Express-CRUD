const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

/**
 * Route to get all users.
 * GET /api/user/getAll
 */
router.get("/user/getAll", userController.getAllDataController);

/**
 * Route to get user.
 * GET /api/user/get/:id
 */
router.get("/user/get/:id", userController.getDataController);

/**
 * Route to create a new user.
 * POST /api/user/create
 */
router.post("/user/create", userController.createDataController);

/**
 * Routes to update user
 * PUT /api/user/:id
 */
router.patch("/user/edit/:id",userController.editDataController);

/**
 * Routes to update user
 * PUT /api/user/:id
 */
router.put("/user/update/:id",userController.updateDataController);

/**
 * Routes to update user
 * PUT /api/user/:id
 */
router.delete("/user/delete/:id",userController.deleteDataController);


module.exports = router;
