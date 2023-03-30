import axios from "@axios";

const getBestSellerCategories = async () => {
    const response = await axios.get("/best-categories");
    return response.data;
};

export default {
    getBestSellerCategories,
};
