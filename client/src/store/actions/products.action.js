import axios from "axios";

export const productsBySort = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`/api/products/all`, {
        limit: 2,
        sortBy: "price",
        order: "asc",
      });

      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
};
