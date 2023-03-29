import axios from "@axios";

const getCategoriesList = async () => {
    const response = await axios.get("/categories");
    return response.data;
};

export default {
    getCategoriesList,
};
