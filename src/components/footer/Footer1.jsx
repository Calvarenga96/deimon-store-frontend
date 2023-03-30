import Link from "next/link";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";

// styled component
const StyledLink = styled("a")(({ theme }) => ({
    display: "block",
    borderRadius: 4,
    cursor: "pointer",
    position: "relative",
    padding: "0.3rem 0rem",
    color: theme.palette.grey[500],
    "&:hover": {
        color: theme.palette.grey[100],
    },
}));

const Footer1 = () => {
    return (
        <footer>
            <Box bgcolor="#222935">
                <Container
                    sx={{
                        p: "1rem",
                        color: "white",
                    }}
                >
                    <Box py={10} overflow="hidden">
                        <Grid container spacing={1} rowGap={3}>
                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box
                                    fontSize="18px"
                                    fontWeight="600"
                                    mb={1.5}
                                    lineHeight="1"
                                    color="white"
                                >
                                    Quienes Somos
                                </Box>

                                <div>
                                    {whoWeAre.map((item, ind) => (
                                        <Link
                                            href={item.link}
                                            key={ind}
                                            passHref
                                        >
                                            <StyledLink>
                                                {item.title}
                                            </StyledLink>
                                        </Link>
                                    ))}
                                </div>
                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box
                                    fontSize="18px"
                                    fontWeight="600"
                                    mb={1.5}
                                    lineHeight="1"
                                    color="white"
                                >
                                    ¿Por qué comprar?
                                </Box>

                                <div>
                                    {whyToBuy.map((item, ind) => (
                                        <Link
                                            href={item.link}
                                            key={ind}
                                            passHref
                                        >
                                            <StyledLink>
                                                {item.title}
                                            </StyledLink>
                                        </Link>
                                    ))}
                                </div>
                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box
                                    fontSize="18px"
                                    fontWeight="600"
                                    mb={1.5}
                                    lineHeight="1"
                                    color="white"
                                >
                                    Servicios
                                </Box>

                                <div>
                                    {services.map((item, ind) => (
                                        <Link
                                            href={item.link}
                                            key={ind}
                                            passHref
                                        >
                                            <StyledLink>
                                                {item.title}
                                            </StyledLink>
                                        </Link>
                                    ))}
                                </div>
                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box
                                    fontSize="18px"
                                    fontWeight="600"
                                    mb={1.5}
                                    lineHeight="1"
                                    color="white"
                                >
                                    Beneficios
                                </Box>

                                <div>
                                    {benefits.map((item, ind) => (
                                        <Link
                                            href={item.link}
                                            key={ind}
                                            passHref
                                        >
                                            <StyledLink>
                                                {item.title}
                                            </StyledLink>
                                        </Link>
                                    ))}
                                </div>
                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box
                                    fontSize="18px"
                                    fontWeight="600"
                                    mb={1.5}
                                    lineHeight="1"
                                    color="white"
                                >
                                    Documentación Legal
                                </Box>

                                <div>
                                    {legal.map((item, ind) => (
                                        <Link
                                            href={item.link}
                                            key={ind}
                                            passHref
                                        >
                                            <StyledLink>
                                                {item.title}
                                            </StyledLink>
                                        </Link>
                                    ))}
                                </div>
                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box
                                    fontSize="18px"
                                    fontWeight="600"
                                    mb={1.5}
                                    lineHeight="1"
                                    color="white"
                                >
                                    Contáctanos
                                </Box>

                                <Box py={0.6} color="grey.500">
                                    Dirección:{" "}
                                    <a
                                        href="https://www.google.com/maps?ll=-25.307529,-57.632966&z=16&t=m&hl=es-419&gl=PY&mapclient=embed&cid=11786571995190275951"
                                        target="_blank"
                                    >
                                        Morazán 2520 casi Sauce, Asunción,
                                        Paraguay
                                    </a>
                                </Box>

                                <Box py={0.6} color="grey.500">
                                    Correo Electrónico:{" "}
                                    <a
                                        href="mailto:info@deimon.com.py"
                                        target="_blank"
                                    >
                                        info@deimon.com.py
                                    </a>
                                </Box>

                                <Box py={0.6} mb={2} color="grey.500">
                                    Teléfono:{" "}
                                    <a
                                        href="https://wa.me/595991881370"
                                        target="_blank"
                                    >
                                        (0991) 881 370
                                    </a>
                                </Box>

                                <FlexBox className="flex" mx={-0.625}>
                                    {iconList.map((item, ind) => (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer noopenner"
                                            key={ind}
                                        >
                                            <IconButton
                                                sx={{
                                                    margin: 0.5,
                                                    fontSize: 12,
                                                    padding: "10px",
                                                    backgroundColor:
                                                        "rgba(0,0,0,0.2)",
                                                }}
                                            >
                                                <item.icon
                                                    fontSize="inherit"
                                                    sx={{
                                                        color: "white",
                                                    }}
                                                />
                                            </IconButton>
                                        </a>
                                    ))}
                                </FlexBox>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

const whoWeAre = [
    { title: "Nosotros", link: "/about-us" },
    { title: "Preguntas Frecuentes", link: "/faq" },
];

const whyToBuy = [{ title: "Cómo comprar", link: "/how-to-buy" }];

const services = [
    { title: "Publicidad", link: "/ads" },
    { title: "Usados", link: "/used" },
    { title: "Servicio Técnico", link: "/services" },
];

const benefits = [
    { title: "Descuentos", link: "/discounts" },
    { title: "Opiniones de Clientes", link: "/clients-opinion" },
    { title: "Puntos con Streamers", link: "/points-streamers" },
];

const legal = [
    { title: "Política de Cookies", link: "/cookies" },
    { title: "Política de Privacidad", link: "/privacy" },
    { title: "Reembolsos y Devoluciones", link: "/refunds-returns" },
    { title: "Términos y Condiciones", link: "/terms-conditions" },
];

const iconList = [
    {
        icon: Facebook,
        url: "https://www.facebook.com/deimonstore",
    },
    {
        icon: Twitter,
        url: "https://twitter.com/uilibofficial",
    },
    {
        icon: Youtube,
        url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
    },
    {
        icon: Google,
        url: "https://www.google.com/search?q=ui-lib.com",
    },
    {
        icon: Instagram,
        url: "https://www.instagram.com/uilibofficial/",
    },
];

export default Footer1;
