const Brand = require("../models/brand");
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");

const addBrand = async (brandName) => {
  try {
    const brand = new Brand({ name: brandName });
    await brand.save();

    return brand;
  } catch (error) {
    throw error;
  }
};

const getBrandById = async (id) => {
  try {
    const brand = await Brand.findById(id);
    if (!brand) throw new ApiError(httpStatus.NOT_FOUND, "Brand not found");
    return brand;
  } catch (error) {
    throw error;
  }
};

const deleteBrandById = async (id) => {
  try {
    const brand = await Brand.findByIdAndRemove(id);

    return brand;
  } catch (error) {
    throw error;
  }
};

const getBrands = async (args) => {
  try {
    let order = args.order || "asc";
    let limit = args.limit || 5;

    const brands = await Brand.find({})
      .sort([["_id", order]])
      .limit(limit);

    if (!brands) {
      throw new ApiError(httpStatus.NOT_FOUND, "Brands not found");
    }

    return brands;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBrand,
  getBrandById,
  deleteBrandById,
  getBrands,
};
