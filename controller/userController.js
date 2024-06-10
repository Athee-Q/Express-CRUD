const userService = require("../service/userService");

/**
 * Retrieves user data from the service and sends it as a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAllDataController = async (req, res) => {
  try {
    const users = await userService.getAllDataFromService();
    res.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch user data" });
  }
};

/**
 * Retrieves user data from the service and sends it as a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getDataController = async (req, res) => {
  try {
    const users = await userService.getDataFromService(req.params.id);
    res.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch user data" });
  }
};

/**
 * Creates a new user based on the request body and sends a response.
 * @param {Object} req - The request object containing user details.
 * @param {Object} res - The response object.
 */
const createDataController = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("User details not provided");
    }

    await userService.createDataFromService(req.body);
    res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, error: "Failed to create user" });
  }
};

/**
 * Creates a new user based on the request body and sends a response.
 * @param {Object} req - The request object containing user details.
 * @param {Object} res - The response object.
 */
const updateDataController = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("User details not provided");
    }

    await userService.updateDataFromService(req.body, req.params.id);
    res.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, error: "Failed to update user" });
  }
};

/**
 * Creates a new user based on the request body and sends a response.
 * @param {Object} req - The request object containing user details.
 * @param {Object} res - The response object.
 */
const editDataController = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("User details not provided");
    }

    await userService.updateDataFromService(req.body, req.params.id);
    res.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, error: "Failed to update user" });
  }
};

/**
 * Creates a new user based on the request body and sends a response.
 * @param {Object} req - The request object containing user details.
 * @param {Object} res - The response object.
 */
const deleteDataController = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("User details not provided");
    }

    await userService.deleteDataFromService(req.params.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, error: "Failed to delete user" });
  }
};

module.exports = {
  getAllDataController,
  getDataController,
  createDataController,
  updateDataController,
  editDataController,
  deleteDataController,
};
