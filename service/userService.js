const userModel = require("../model/userModel");

/**
 * Retrieves all user data from the database.
 * @returns {Promise<Array>} A promise that resolves with an array of user data.
 */
const getAllDataFromService = () => {
  return userModel.find({}).exec();
};

/**
 * Retrieves all user data from the database.
 * @returns {Promise<Array>} A promise that resolves with an array of user data.
 */
const getDataFromService = (id) => {
  return userModel.findById(id).exec();
};

/**
 * Creates a new user data in the database.
 * @param {Object} userDetail - Details of the user to be created.
 * @returns {Promise<Object>} A promise that resolves with the created user data.
 */
const createDataFromService = (userDetail) => {
    const user = new userModel(userDetail);
    return user.save(); // Returns a promise directly
  };
  
/**
 * Creates a new user data in the database.
 * @param {Object} userDetail - Details of the user to be created.
 * @returns {Promise<Object>} A promise that resolves with the created user data.
 */
const updateDataFromService = (updateUser, id) => {
    return userModel.findByIdAndUpdate(id,updateUser); // Returns a promise directly
  };
  
/**
 * Creates a new user data in the database.
 * @param {Object} userDetail - Details of the user to be created.
 * @returns {Promise<Object>} A promise that resolves with the created user data.
 */
const deleteDataFromService = (id) => {
    return userModel.findByIdAndDelete(id); // Returns a promise directly
  };
  

module.exports = {
  getAllDataFromService,
  getDataFromService,
  createDataFromService,
  updateDataFromService,
  deleteDataFromService
};
