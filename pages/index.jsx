import { Box, useTheme } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section3 from "pages-sections/fashion-shop-2/Section3";
import Section4 from "pages-sections/fashion-shop-2/Section4";
import Section5 from "pages-sections/fashion-shop-2/Section5";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section7 from "pages-sections/fashion-shop-2/Section7";
import Section8 from "pages-sections/fashion-shop-2/Section8";
import Section9 from "pages-sections/fashion-shop-2/Section9";
import Section10 from "pages-sections/fashion-shop-2/Section10";
import api from "utils/__api__/fashion-shop-2";
import api2 from "utils/__api__/home";

// =======================================================

// =======================================================

const FashionShop2 = (props) => {
    const theme = useTheme();

    return (
        <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
            <SEO title="Deimon Store" />
            <Box bgcolor="white">
                {/* HERO SECTION CAROUSEL */}
                <Section1 carouselData={props.mainCarouselData} />

                {/* BEST SELLING CATEGORIES */}
                <Section3 categories={props.categories} />

                {/* BEST SELLING PRODUCTS */}
                <Section4 products={props.products} />

                {/* OFFER BANNERS */}
                <Section5 />

                {/* FEATURED PRODUCTS */}
                <Section6 products={props.featureProducts} />

                {/* SUMMER SALE OFFER AREA */}
                <Section7 />

                {/* BLOG LIST AREA */}
                <Section8 blogs={props.blogs} />

                {/* BRAND LIST CAROUSEL AREA */}
                <Section9 brands={props.brands} />

                {/* PRODUCT LIST COLUMN */}
                <Section10
                    saleProducts={props.saleProducts}
                    latestProducts={props.latestProducts}
                    popularProducts={props.popularProducts}
                    bestWeekProducts={props.bestWeekProducts}
                />
            </Box>
        </ShopLayout1>
    );
};

export const getStaticProps = async () => {
    const blogs = await api.getBlogs();
    const brands = await api.getBrands();
    const products = await api.getProducts();
    const categories = await api2.getBestSellerCategories();
    const saleProducts = await api.getSaleProducts();
    const latestProducts = await api.getLatestProducts();
    const popularProducts = await api.getPopularProducts();
    const featureProducts = await api.getFeatureProducts();
    const bestWeekProducts = await api.getBestWeekProducts();
    const mainCarouselData = await api.getMainCarouselData();
    return {
        props: {
            blogs,
            brands,
            products,
            categories,
            saleProducts,
            latestProducts,
            popularProducts,
            featureProducts,
            bestWeekProducts,
            mainCarouselData,
        },
    };
};

export default FashionShop2;
