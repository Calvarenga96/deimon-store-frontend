import api from "utils/__api__/categories";

const navigationsCategories = async () => {
    const response = await api.getCategoriesList();
    console.log(response.data);
};

navigationsCategories();

const navigations = [
    {
        title: "Fashion",
        href: "/product/search/fashion",
    },
    {
        title: "Electronics",
        href: "/product/search/electronics",
    },
    {
        title: "Bikes",
        href: "/product/search/bikes",
    },
    {
        title: "Home & Garden",
        href: "/product/search/home&garden",
    },
    {
        title: "Gifts",
        href: "/product/search/gifts",
    },
    {
        title: "Music",
        href: "/product/search/music",
    },
    {
        title: "Health & Beauty",
        href: "/product/search/health&beauty",
    },
    {
        title: "Pets",
        href: "/product/search/pets",
    },
    {
        title: "Baby Toys",
        href: "/product/search/baby-toys",
    },
    {
        title: "Groceries",
        href: "/product/search/groceries",
    },
    {
        title: "Automotive",
        href: "/product/search/automotive",
    },
];
export default navigations;
