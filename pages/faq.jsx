import ShopLayout1 from "components/layouts/ShopLayout1";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";

const Faq = () => {
    return (
        <ShopLayout1>
            <Container>
                <Typography
                    variant="h4"
                    my="20px"
                    mx="auto"
                    width="max-content"
                >
                    Preguntas Frecuentes
                </Typography>

                <Box sx={{ mb: "20px" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                ¿Necesito una cuenta para realizar un pedido?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                No, puedes comprar cualquier producto de nuestra
                                web como <strong>«Invitado»</strong> y luego
                                puedes crear una Cuenta de manera Opcional.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>¿Cómo me creo una cuenta?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Registrate en nuestra tienda online.</li>
                                <li>
                                    Verifica tu cuenta por medio de tu mail
                                    registrado.
                                </li>
                                <li>
                                    Disfruta de todos nuestros beneficios
                                    iniciando sesión.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>
                                ¿Cuáles son los métodos de pago disponibles?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Los métodos de pago son:</Typography>

                            <ul>
                                <li>
                                    - <strong>Efectivo contra entrega:</strong>{" "}
                                    se abona con la entrega del producto.
                                </li>
                                <li>
                                    - <strong>POS o QR contra entrega:</strong>{" "}
                                    solicitar previamente el POS a su vendedor.
                                    (las compras con Tarjeta de Débito tienen un
                                    recargo del 5%, y las compras con Tarjeta de
                                    Crédito un recargo del 10%).
                                </li>
                                <li>
                                    - <strong>Transferencia Bancaria:</strong>{" "}
                                    contamos con cuentas Bancarias en Sudamerisk
                                    Bank y Visión Banco.
                                </li>
                                <li>
                                    - <strong>Pago por Billetera:</strong>{" "}
                                    disponemos las billeteras; Mango, Eko,
                                    Wally.
                                </li>
                                <li>
                                    - <strong>Giros Tigo:</strong> al (0985) 376
                                    900.
                                </li>
                                <li>
                                    - <strong>Giros Personal:</strong> al (0971)
                                    881 370
                                </li>
                                <li>
                                    - <strong>Giros Claro:</strong> al (0991)
                                    881 370
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>
                                ¿Qué métodos de envío están disponibles?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <strong>Los métodos de envíos son:</strong>
                            </Typography>
                            <Typography>
                                Delivery propio de nuestra Tienda.{" "}
                                <strong>
                                    (Todos nuestros envíos son transportados en
                                    vehículo para asegurar la calidad-integridad
                                    de nuestros productos)
                                </strong>
                                .
                            </Typography>
                            <Typography>
                                Delivery Vía Transportadora.{" "}
                                <strong>
                                    (El cliente elige la transportadora a ser
                                    utilizada según su conveniencia y bajo su
                                    responsabilidad) Ej.: Alto Logistic, Rysa,
                                    NSA, MC Courrier, Tiemsa, etc.{" "}
                                </strong>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>
                                ¿Cómo hago seguimiento de mi pedido?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Los pedidos pueden ser rastreados y verificados
                                en el apartado de «Rastrear Pedido», en el
                                hipotético caso de tener inconvenientes con
                                esto, siempre contactar con su Vendedor para
                                verificar el estado actual de su
                                pedido-producto.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>
                                ¿Cuánto tiempo tardaré en recibir mi PC
                                ensamblada?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Todos los pedidos serán «procesados» una vez que
                                se ya se haya señado el 50% del valor total y se
                                haya confirmado la recepción del mismo con su
                                Vendedor, todo esto demora entre{" "}
                                <strong>48~72hs</strong> como máximo.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>
                                ¿Cómo debo ponerme en contacto si tengo alguna
                                consulta?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Para ponerte en contacto directo con nuestro
                                Equipo tenemos dos líneas disponibles y un mail
                                para consultas generales:
                            </Typography>
                            <Typography>
                                <strong>Ventas:</strong>{" "}
                                <a
                                    href="https://wa.me/595991881370"
                                    target="_blank"
                                >
                                    (0991) 881 370
                                </a>{" "}
                                -{" "}
                                <a
                                    href="https://wa.me/595971881370"
                                    target="_blank"
                                >
                                    (0971) 881 370
                                </a>
                            </Typography>
                            <Typography>
                                <strong>Atención al Cliente:</strong>{" "}
                                <a
                                    href="mailto:info@deimon.com.py"
                                    target="_blank"
                                >
                                    info@deimon.com.py
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>
                                ¿Los productos cuentan con garantía?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Todos nuestros productos cuentan con garantía
                                real.
                            </Typography>
                            <ol>
                                <li>Componentes en general (1 año)</li>
                                <li>Notebooks e Impresoras (1 año)</li>
                                <li>PC ensambladas por nosotros (1 año)</li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>¿Hacen financiación?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <strong>Financiación vía TC:</strong>{" "}
                                actualmente financiamos únicamente a través de
                                Tarjetas de Crédito aplicando un recargo del
                                10%.
                            </Typography>

                            <Typography>
                                <strong>Financiación propia:</strong> por el
                                momento no contamos con financición propia.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </ShopLayout1>
    );
};

export default Faq;
