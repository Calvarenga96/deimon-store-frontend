import { Box, Container, Typography } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";

function RefundsReturns() {
    return (
        <ShopLayout1>
            <Container>
                <Box mb="30px">
                    <Typography
                        variant="h4"
                        my="20px"
                        mx="auto"
                        width="max-content"
                    >
                        Reembolso y Devoluciones
                    </Typography>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Política de devoluciones y reembolsos:
                        </Typography>

                        <Typography>
                            Tienes derecho a cancelar tu pedido dentro de los 30
                            días sin dar ninguna razón para hacerlo. El plazo
                            para anular un pedido es de 30 días a partir de la
                            fecha en que recibiste la mercancía o en el que un
                            tercero que hayas designado, que no sea el
                            transportista, tome posesión del producto entregado.
                            Para ejercer tu derecho de cancelación, debes
                            informarnos de tu decisión mediante una declaración
                            clara. Puedes informarnos por el correo electrónico
                            info@deimon.com.py Te reembolsaremos a más tardar en
                            30 días a partir del día en que recibamos los bienes
                            devueltos. Usaremos el mismo medio de pago que
                            utilizaste para el pedido y no incurrirás en ningún
                            cargo por dicho reembolso.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Condiciones para devoluciones:
                        </Typography>

                        <Typography>
                            Para que los bienes sean elegibles para una
                            devolución, asegúrate de que:
                            <br />
                            <br />
                            - Se compraron en los últimos 30 días.
                            <br />
                            - Están en el embalaje original.
                            <br />
                            <br />
                            Los siguientes bienes no se pueden devolver:
                            <br />
                            <br />
                            El suministro de bienes hecho según tus
                            especificaciones o claramente personalizado.
                            <br />
                            El suministro de bienes que por su naturaleza no son
                            aptos para ser devueltos, por ejemplo bienes que se
                            deterioran rápidamente o cuya fecha de caducidad ha
                            terminado.
                            <br />
                            El suministro de bienes que no son aptos para
                            devolución por razones de protección de la salud o
                            higiene y que se abrieron después de la entrega.
                            <br />
                            El suministro de bienes que, después de la entrega,
                            según su naturaleza, se mezclan inseparablemente con
                            otros artículos.
                            <br />
                            <br />
                            Nos reservamos el derecho de rechazar devoluciones
                            de cualquier mercancía que no cumpla con las
                            condiciones de devolución anteriores a nuestro
                            exclusivo criterio.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Devolución de bienes
                        </Typography>

                        <Typography>
                            Eres responsable del costo y riesgo de devolvernos
                            los bienes. Debes enviar los productos a la
                            siguiente dirección: Morazán 2520 casi Sauce No nos
                            hacemos responsables de los bienes dañados o
                            perdidos en el envío de devolución. Por lo tanto,
                            recomendamos un servicio de correo asegurado y
                            rastreable. No podemos emitir un reembolso sin la
                            recepción real de los bienes o la prueba de la
                            devolución recibida.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Regalos:
                        </Typography>

                        <Typography>
                            Si los productos se marcaron como regalo cuando se
                            compraron y luego te los enviaron directamente,
                            recibirás un crédito de regalo por el valor de tu
                            devolución. Una vez que se reciba el producto
                            devuelto, se te enviará por correo un certificado de
                            regalo. Si los productos no se marcaron como regalo
                            cuando se compraron, o si el obsequiador se envió el
                            pedido a sí mismo para entregártelo luego, le
                            enviaremos el reembolso al obsequiador.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Contáctanos
                        </Typography>

                        <Typography>
                            Si tienes alguna pregunta sobre nuestra Política de
                            devoluciones y reembolsos, comunícate con nosotros
                            por el correo electrónico{" "}
                            <a href="mailto:info@deimon.com.py" target="_blank">
                                info@deimon.com.py
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ShopLayout1>
    );
}

export default RefundsReturns;
