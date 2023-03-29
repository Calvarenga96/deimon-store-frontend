import { Button, Container, styled } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { NavLink } from "components/nav-link";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";
import Category from "components/icons/Category";
import { Paragraph } from "components/Typography";
import CategoryMenu from "components/categories/CategoryMenu";
import navbarNavigations from "data/navbarNavigations";


// const common css style
const navLinkStyle = {
    cursor: "pointer",
    transition: "color 150ms ease-in-out",
    "&:hover": {
        color: "primary.main",
    },
    "&:last-child": {
        marginRight: 0,
    },
};
// style components
const StyledNavLink = styled(NavLink)({
    ...navLinkStyle,
});
const NavBarWrapper = styled(BazaarCard)(({ theme, border }) => ({
    height: "60px",
    display: "block",
    borderRadius: "0px",
    position: "relative",
    ...(border && {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
    }),
    [theme.breakpoints.down(1150)]: {
        display: "none",
    },
}));
const InnerContainer = styled(Container)({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});
const CategoryMenuButton = styled(Button)(({ theme }) => ({
    width: "278px",
    height: "40px",
    backgroundColor: theme.palette.grey[100],
}));

// ==========================================================

// ==========================================================

const Navbar = ({ navListOpen, elevation, border }) => {
    const renderNestedNav = (list = []) => {
        return list.map((nav) => (
            <StyledNavLink href={nav.url} key={nav.title}>
                {nav.title}
            </StyledNavLink>
        ));
    };

    return (
        <NavBarWrapper
            hoverEffect={false}
            elevation={elevation}
            border={border}
        >
            <InnerContainer>
                {/* Category megamenu */}
                <CategoryMenu open={navListOpen}>
                    <CategoryMenuButton variant="text">
                        <Category fontSize="small" />
                        <Paragraph
                            fontWeight="600"
                            textAlign="left"
                            flex="1 1 0"
                            ml={1.25}
                            color="grey.600"
                        >
                            Categorías
                        </Paragraph>

                        <ChevronRight
                            className="dropdown-icon"
                            fontSize="small"
                        />
                    </CategoryMenuButton>
                </CategoryMenu>

                {/* Horizontal menu */}
                <FlexBox gap={4}>{renderNestedNav(navbarNavigations)}</FlexBox>
            </InnerContainer>
        </NavBarWrapper>
    );
};

//  set default props data
Navbar.defaultProps = {
    elevation: 2,
    navListOpen: false,
    hideCategories: false,
};

export default Navbar;
