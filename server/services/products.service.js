const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const Product = require("../models/product");

const addProduct = async (requestBody) => {
  try {
    const product = new Product({
      ...requestBody,
    });
    await product.save();

    return product;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (_id) => {
  try {
    const product = await Product.findById(_id).populate("brand");
    if (!product) {
      throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    }

    return product;
  } catch (error) {
    throw error;
  }
};

const updateProductById = async (_id) => {
  try {
    // CONTINUE HERE
    // return product;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addProduct,
  getProductById,
  updateProductById,
};
