import { Box, styled } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";

// style components
const Wrapper = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    position: "relative",
    transition: "color 150ms ease-in-out",
    ":hover": {
        color: theme.palette.primary.main,
        "& .menu-list": {
            display: "block",
        },
    },
}));

// ===============================================================

// ===============================================================

const MegaMenu = ({ title }) => {
    return (
        <Wrapper>
            <FlexRowCenter alignItems="flex-end" gap={0.3}>
                {title}
            </FlexRowCenter>
        </Wrapper>
    );
};
export default MegaMenu;
