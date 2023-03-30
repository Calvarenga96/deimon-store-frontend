import { Box, Container, Grid, Typography } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import styles from "css/link.module.css";
import image from "../public/assets/images/Gift Shop/Product 2.png";
import Image from "next/image";

export default function ClientsOpinion() {
    return (
        <ShopLayout1>
            <Container>
                <Typography
                    variant="h4"
                    my="20px"
                    mx="auto"
                    width="max-content"
                >
                    Opiniones de Clientes
                </Typography>

                <Box>
                    <Typography>
                        Las opiniones de nuestros clientes son muy importantes
                        para nosotros, por eso te dejamos aquí algunas de ellas
                        para que veas un poco de nuestros trabajos y servicios
                        realizados a lo largo del tiempo.
                    </Typography>

                    <Typography>
                        Algunas de las tantas opiniones en nuestra página de{" "}
                        <strong>
                            <a
                                href="https://www.facebook.com/deimonstore/reviews"
                                target="_blank"
                                className={styles.link}
                            >
                                Facebook
                            </a>
                        </strong>
                        :
                    </Typography>
                </Box>

                <Box padding="24px">
                    <Grid
                        container
                        columns={{ sm: 2, md: 4, xl: 4 }}
                        gap={5}
                        justifyContent="center"
                    >
                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box sx={{ borderRadius: "10px" }} maxWidth="200px">
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>

                        <Grid item spacing={{ sm: 6, md: 4, xl: 2 }}>
                            <Box
                                sx={{
                                    borderRadius: "10px",
                                }}
                                maxWidth="200px"
                            >
                                <a href="#">
                                    <Image src={image} label="label" />
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ShopLayout1>
    );
}
