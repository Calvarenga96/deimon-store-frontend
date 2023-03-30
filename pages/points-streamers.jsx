import { Box, Container, Typography } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Link from "next/link";

export function PointsStreamers() {
    return (
        <ShopLayout1>
            <Container>
                <Typography
                    variant="h4"
                    my="20px"
                    mx="auto"
                    width="max-content"
                >
                    Puntos con Streamers
                </Typography>

                <Box mb="30px">
                    <Typography>
                        Chequeá nuestro apartado de{" "}
                        <Link href="/streamers">
                            <a>
                                <strong>«Streamers»</strong>
                            </a>
                        </Link>{" "}
                        y apoyá a alguno de nuestros partners.
                    </Typography>

                    <Typography>
                        <strong>PD:</strong> seguir y apoyar a nuestros
                        streamers es gratis, aprovechá los beneficios de juntar
                        puntos en cada canal y luego canjeálos en cualquier
                        momento según tu necesidad.
                    </Typography>
                </Box>
            </Container>
        </ShopLayout1>
    );
}

export default PointsStreamers;
