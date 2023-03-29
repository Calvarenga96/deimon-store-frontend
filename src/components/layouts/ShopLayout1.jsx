import { Fragment, useCallback, useState } from "react";
import Sticky from "components/Sticky";
import { Footer1 } from "components/footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import { MobileNavigationBar } from "components/mobile-navigation";
import SearchInput from "components/search-box/SearchInput";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/**
 *  Used in:
 *  1. market-1, matket-2, gadget-shop,
 *     fashion-shop, fashion-shop-2, fashion-shop-3, furniture-shop, grocery3, gift-shop
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 *  6. checkoutNavLayout and CustomerDashboadLayout component
 */

// ===================================================

// ===================================================

const ShopLayout1 = ({ children, styles }) => {
    const [isFixed, setIsFixed] = useState(false);
    const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);

    return (
        <Fragment>
            {/* HEADER */}
            <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
                <Header isFixed={isFixed} searchInput={<SearchInput />} />
            </Sticky>

            <div className="section-after-sticky">
                {/* NAVIGATION BAR */}
                <Navbar elevation={0} border={1} />

                {/* BODY CONTENT */}
                {children}
            </div>

            {/* SMALL DEVICE BOTTOM NAVIGATION */}
            <MobileNavigationBar />

            {/* FOOTER */}
            <Footer1 />
        </Fragment>
    );
};
export default ShopLayout1;
