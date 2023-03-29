import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShopLayout1 from "components/layouts/ShopLayout1";

const AboutUs = () => {
    return (
        <ShopLayout1>
            <Grid
                container
                spacing={4}
                p={10}
                direction={{ xs: "column", sm: "row", md: "row" }}
            >
                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                >
                    <Stack spacing={5}>
                        <Typography variant="h4" mx="auto">
                            ¿Qué nos caracteriza?
                        </Typography>

                        <Typography mx="auto">
                            Nuestro compromiso y dedicación con cada uno de
                            nuestros clientes, ya sea por asesoramiento,
                            recomendación de productos, presupuestos a medida.
                        </Typography>

                        <Typography mx="auto">
                            Nuestros ensambles reflejan el amor a lo que
                            hacemos.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                >
                    <Stack spacing={5}>
                        <Typography variant="h4" mx="auto">
                            Misisión
                        </Typography>

                        <Typography mx="auto">X</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                    <Stack spacing={5}>
                        <Typography variant="h4" mx="auto">
                            Visión
                        </Typography>

                        <Typography maxWidth="40%" mx="auto">
                            X
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                p={10}
                direction={{ xs: "column", sm: "row", md: "row" }}
                marginX="auto"
                maxWidth="100%"
            >
                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                    direction="column"
                    textAlign="center"
                >
                    <Typography width="max-content" marginX="auto" variant="h6">
                        'Deimon'
                    </Typography>
                    <Typography width="max-content" marginX="auto">
                        CEO/Founder
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                    direction="column"
                    textAlign="center"
                >
                    <Typography width="max-content" marginX="auto" variant="h6">
                        'Kakarotto'
                    </Typography>
                    <Typography width="max-content" marginX="auto">
                        Streamer
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                    direction="column"
                    textAlign="center"
                >
                    <Typography width="max-content" marginX="auto" variant="h6">
                        'Chullz'
                    </Typography>
                    <Typography width="max-content" marginX="auto">
                        Web Master
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                p={10}
                direction={{ xs: "column", sm: "row", md: "row" }}
                justifyContent="space-between"
            >
                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                >
                    <Stack spacing={5}>
                        <Typography variant="h4" mx="auto">
                            Nuestra Historia
                        </Typography>

                        <Typography mx="auto">
                            Deimon Store arranca oficialmente un 18 de abril del
                            2018, un proyecto que comenzó más bien como hobbie
                            en el año 2014, dirigido primeramente a amigos y
                            conocidos, terminó siendo una alternativa exclusiva
                            para todas las personas dentro del mundo gaming en
                            Paraguay.
                        </Typography>

                        <Typography mx="auto">
                            Con el pasar del tiempo, lo que empezó como un
                            pasatiempo, termina afianzándose en el mercado
                            gracias a las constantes recomendaciones como un muy
                            buen lugar para montar tu pc gamer a medida.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    mb={{ xs: "20px", sm: 0, md: 0 }}
                >
                    <Stack spacing={5}>
                        <Typography variant="h4" mx="auto">
                            ¿Qué nos destaca sobre los demás?
                        </Typography>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    Atención Capacitada 24/7
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Contamos con una atención personalizada 24/7
                                    en nuestro Whatsapp, Messenger e Instagram;
                                    ya sea para consultas generales, dudas y/o
                                    solicitud de presupuestos.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Calidad en Productos</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Comerciamos una gran variedad de marcas,
                                    brindamos 1 año de garantía en todos
                                    nuestros productos, no obstante, no
                                    recomendamos lo más caro, recomendamos lo
                                    mejor para cada presupuesto en cuestión,
                                    acorde a las necesidades y/o exigencias de
                                    nuestros clientes.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Garantía de 1 año</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Ofrecemos 1 año de garantía en todos
                                    nuestros productos, ya sea un solo producto
                                    o una computadora que fue ensamblada
                                    completamente desde cero.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Envíos a Todo el País</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Llegamos a todo el país; Asunción y Gran
                                    Asunción vía Delivery, y al interior del
                                    país por medio de encomiendas "puerta a
                                    puerta" acorde a la necesidad, conveniencia
                                    y tiempos de nuestros clientes.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Clientes Satisfechos</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    A lo largo de estos últimos 5 años
                                    cosechamos una gran cantidad de clientes
                                    satisfechos.
                                </Typography>
                                <Typography>
                                    Tanto en nuestro perfil de Google como
                                    Facebook, en donde siempre nos manifiestan
                                    sus agradecimientos y conformidad con
                                    nuestro trabajo, dejándonos saber que vamos
                                    por un buen camino y que volverán a contar
                                    con nosotros nuevamente.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Stack>
                </Grid>
            </Grid>
        </ShopLayout1>
    );
};

export default AboutUs;
