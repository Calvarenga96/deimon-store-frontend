import { Box, Container, Typography } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";

const Discounts = () => {
    return (
        <ShopLayout1>
            <Container>
                <Typography
                    variant="h4"
                    my="20px"
                    mx="auto"
                    width="max-content"
                >
                    Cupones de Descuento
                </Typography>

                <Box>
                    <Typography>
                        Apoyá a tu vendedor favorito utilizando su #cupón de
                        descuento y accedé a beneficios exclusivos por tiempo
                        limitado.
                    </Typography>

                    <Typography>
                        Para más info contactá a nuestro{" "}
                        <a href="https://wa.me/595991881370" target="_blank">
                            WhatsApp
                        </a>{" "}
                        acerca de los cupones que tenemos disponibles.
                    </Typography>
                </Box>
            </Container>
        </ShopLayout1>
    );
};

export default Discounts;
