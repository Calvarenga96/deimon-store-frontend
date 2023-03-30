import { Box, Container, Typography } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Link from "next/link";
import styles from "css/link.module.css";

const HowToBuy = () => {
    return (
        <ShopLayout1>
            <Container>
                <Typography variant="h4" width="max-content" margin="20px auto">
                    ¿Cómo Comprar?
                </Typography>

                <Box width="100%" padding="24px">
                    <Typography variant="subtitle1">
                        <strong>
                            Existen 2 maneras de comprar en nuestra web:
                        </strong>
                    </Typography>
                    <Typography>1- Comprar como invitado</Typography>
                    <Typography>2- Comprar con una cuenta</Typography>
                </Box>

                <Box width="100%" padding="24px">
                    <Typography variant="subtitle1">
                        <strong>Comprar como Invitado</strong>
                    </Typography>
                    <Typography>
                        Puedes comprar cualquier producto como «Invitado».
                    </Typography>
                    <Typography>
                        <strong>PD:</strong> No es obligatorio crearse una
                        cuenta para comprar en nuestra web.
                    </Typography>
                </Box>

                <Box width="100%" padding="24px">
                    <Typography variant="subtitle1">
                        <strong>Comprar con una Cuenta</strong>
                    </Typography>
                    <Typography>
                        Crear una cuenta en nuestra web es muy fácil, solo
                        tienes que seguir estos 3 pasos:
                    </Typography>
                    <Typography>
                        1-{" "}
                        <strong>
                            <Link href="/signup">
                                <a className={styles.ancle}>Registrate</a>
                            </Link>
                        </strong>{" "}
                        en nuestra tienda online.
                    </Typography>
                    <Typography>
                        2- Verifica tu cuenta por medio de tu mail registrado.
                    </Typography>
                    <Typography>
                        3- Disfruta de todos nuestros beneficios iniciando
                        sesión.
                    </Typography>
                </Box>

                <Box width="100%" padding="24px">
                    <Typography variant="subtitle1">
                        <strong>Rastrear Pedido</strong>
                    </Typography>
                    <Typography>
                        Los pedidos pueden ser rastreados y verificados en el
                        apartado Rastrear Pedido, en el hipotético caso de tener
                        inconvenientes con esto, siempre contactar con su
                        Vendedor para verificar el estado actual de su
                        pedido/producto.
                    </Typography>
                </Box>

                <Box width="100%" padding="24px">
                    <Typography variant="subtitle1">
                        <strong>Métodos de Pago</strong>
                    </Typography>
                    <Typography>
                        - <strong>Efectivo contra entrega:</strong> se abona con
                        la entrega del producto.
                    </Typography>
                    <Typography>
                        - <strong>POS o QR contra entrega:</strong> solicitar
                        previamente el POS a su vendedor. (las compras con
                        Tarjeta de Débito tienen un recargo del 5%, y las
                        compras con Tarjeta de Crédito un recargo del 10%.)
                    </Typography>
                    <Typography>
                        - <strong>Transferencia Bancaria:</strong> contamos con
                        cuentas Bancarias en Sudamerisk Bank, Visión Banco y
                        Banco Familiar.
                    </Typography>
                    <Typography>
                        - <strong>Pago por Billetera:</strong> disponemos las
                        billeteras; Mango, EKO, Wally.
                    </Typography>
                    <Typography>
                        - <strong>Giros Tigo:</strong> al (0985) 376 900
                    </Typography>
                    <Typography>
                        - <strong>Giros Personal:</strong> al (0971) 881 370
                    </Typography>
                    <Typography>
                        - <strong>Giros Claro:</strong> al (0991) 881 370
                    </Typography>
                </Box>
            </Container>
        </ShopLayout1>
    );
};

export default HowToBuy;
