import { Box, Container, Typography } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Cookies() {
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
                        Política de Cookies
                    </Typography>

                    <Typography>
                        En esta web se utilizan cookies de terceros y propias
                        para conseguir que tengas una mejor experiencia de
                        navegación, puedas compartir contenido en redes sociales
                        y para que podamos obtener estadísticas de los usuarios.
                        Puedes evitar la descarga de cookies a través de la
                        configuración de tu navegador, evitando que las cookies
                        se almacenen en su dispositivo. Como propietario de este
                        sitio web, te comunico que no utilizamos ninguna
                        información personal procedente de cookies, tan sólo
                        realizamos estadísticas generales de visitas que no
                        suponen ninguna información personal. Es muy importante
                        que leas la presente política de cookies y comprendas
                        que, si continúas navegando, consideraremos que aceptas
                        su uso. Según los términos incluidos en el artículo 22.2
                        de la Ley 34/2002 de Servicios de la Sociedad de la
                        Información y Comercio Electrónico, si continúas
                        navegando, estarás prestando tu consentimiento para el
                        empleo de los referidos mecanismos.
                    </Typography>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Entidad Responsable
                        </Typography>

                        <Typography>
                            La entidad responsable de la recogida, procesamiento
                            y utilización de tus datos personales, en el sentido
                            establecido por la Ley de Protección de Datos
                            Personales es la página Deimon Store, propiedad de
                            David Enrique Fleitas Caballero - Morazán 2520 casi
                            Sauce.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            ¿Qué son las cookies?
                        </Typography>

                        <Typography>
                            Las cookies son un conjunto de datos que un servidor
                            deposita en el navegador del usuario para recoger la
                            información de registro estándar de Internet y la
                            información del comportamiento de los visitantes en
                            un sitio web. Es decir, se trata de pequeños
                            archivos de texto que quedan almacenados en el disco
                            duro del ordenador y que sirven para identificar al
                            usuario cuando se conecta nuevamente al sitio web.
                            Su objetivo es registrar la visita del usuario y
                            guardar cierta información. Su uso es común y
                            frecuente en la web ya que permite a las páginas
                            funcionar de manera más eficiente y conseguir una
                            mayor personalización y análisis sobre el
                            comportamiento del usuario.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            ¿Qué tipos de cookies existen?
                        </Typography>

                        <Typography>
                            Las cookies utilizadas en nuestro sitio web, son de
                            sesión y de terceros, y nos permiten almacenar y
                            acceder a información relativa al idioma, el tipo de
                            navegador utilizado, y otras características
                            generales predefinidas por el usuario, así como,
                            seguir y analizar la actividad que lleva a cabo, con
                            el objeto de introducir mejoras y prestar nuestros
                            servicios de una manera más eficiente y
                            personalizada.
                        </Typography>

                        <Typography>
                            Las cookies, en función de su permanencia, pueden
                            dividirse en cookies de sesión o permanentes. Las
                            que expiran cuando el usuario cierra el navegador.
                            Las que expiran en función de cuando se cumpla el
                            objetivo para el que sirven (por ejemplo, para que
                            el usuario se mantenga identificado en los servicios
                            de David Enrique Fleitas Caballero) o bien cuando se
                            borran manualmente.
                        </Typography>

                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Tipo</TableCell>
                                        <TableCell>Caducidad</TableCell>
                                        <TableCell>Finalidad</TableCell>
                                        <TableCell>Clase</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    { border: 0 },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell>{row.expiry}</TableCell>
                                            <TableCell>{row.purpose}</TableCell>
                                            <TableCell>{row.class}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography>
                            Adicionalmente, en función de su objetivo, las
                            cookies pueden clasificarse de la siguiente forma:
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Cookies de rendimiento
                        </Typography>

                        <Typography>
                            Este tipo de Cookie recuerda sus preferencias para
                            las herramientas que se encuentran en los servicios,
                            por lo que no tiene que volver a configurar el
                            servicio cada vez que usted visita. A modo de
                            ejemplo, en esta tipología se incluyen: Ajustes de
                            volumen de reproductores de vídeo o sonido. Las
                            velocidades de transmisión de vídeo que sean
                            compatibles con su navegador. Los objetos guardados
                            en el “carrito de la compra” en los servicios de
                            e-commerce tales como tiendas.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Cookies de geo-localización
                        </Typography>

                        <Typography>
                            Estas cookies son utilizadas para averiguar en qué
                            país se encuentra cuando se solicita un servicio.
                            Esta cookie es totalmente anónima, y sólo se utiliza
                            para ayudar a orientar el contenido a su ubicación.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Cookies de registro
                        </Typography>

                        <Typography>
                            Las cookies de registro se generan una vez que el
                            usuario se ha registrado o posteriormente ha abierto
                            su sesión, y se utilizan para identificarle en los
                            servicios con los siguientes objetivos: Mantener al
                            usuario identificado de forma que, si cierra un
                            servicio, el navegador o el ordenador y en otro
                            momento u otro día vuelve a entrar en dicho
                            servicio, seguirá identificado, facilitando así su
                            navegación sin tener que volver a identificarse.
                            Esta funcionalidad se puede suprimir si el usuario
                            pulsa la funcionalidad [cerrar sesión], de forma que
                            esta cookie se elimina y la próxima vez que entre en
                            el servicio el usuario tendrá que iniciar sesión
                            para estar identificado. Comprobar si el usuario
                            está autorizado para acceder a ciertos servicios,
                            por ejemplo, para participar en un concurso.
                            Adicionalmente, algunos servicios pueden utilizar
                            conectores con redes sociales tales como Facebook o
                            Twitter. Cuando el usuario se registra en un
                            servicio con credenciales de una red social,
                            autoriza a la red social a guardar una Cookie
                            persistente que recuerda su identidad y le garantiza
                            acceso a los servicios hasta que expira. El usuario
                            puede borrar esta Cookie y revocar el acceso a los
                            servicios mediante redes sociales actualizando sus
                            preferencias en la red social que específica.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Cookies de analíticas
                        </Typography>

                        <Typography>
                            Cada vez que un usuario visita un servicio, una
                            herramienta de un proveedor externo genera una
                            cookie analítica en el ordenador del usuario. Esta
                            cookie que sólo se genera en la visita, servirá en
                            próximas visitas a los servicios de David Enrique
                            Fleitas Caballero para identificar de forma anónima
                            al visitante. Los objetivos principales que se
                            persiguen son: Permitir la identificación anónima de
                            los usuarios navegantes a través de la cookie
                            (identifica navegadores y dispositivos, no personas)
                            y por lo tanto la contabilización aproximada del
                            número de visitantes y su tendencia en el tiempo.
                            Identificar de forma anónima los contenidos más
                            visitados y por lo tanto más atractivos para los
                            usuarios Saber si el usuario que está accediendo es
                            nuevo o repite visita. Importante: Salvo que el
                            usuario decida registrarse en un servicio de David
                            Enrique Fleitas Caballero, la cookie nunca irá
                            asociada a ningún dato de carácter personal que
                            pueda identificarle. Dichas cookies sólo serán
                            utilizadas con propósitos estadísticos que ayuden a
                            la optimización de la experiencia de los usuarios en
                            el sitio.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Cookies de publicidad
                        </Typography>

                        <Typography>
                            Este tipo de cookies permiten ampliar la información
                            de los anuncios mostrados a cada usuario anónimo en
                            los servicios de David Enrique Fleitas Caballero.
                            Entre otros, se almacena la duración o frecuencia de
                            visualización de posiciones publicitarias, la
                            interacción con las mismas, o los patrones de
                            navegación y/o comportamientos del usuario ya que
                            ayudan a conformar un perfil de interés
                            publicitario. De este modo, permiten ofrecer
                            publicidad afín a los intereses del usuario.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Cookies publicitarias de terceros
                        </Typography>

                        <Typography>
                            Además de la publicidad gestionada por las webs de
                            David Enrique Fleitas Caballero en sus servicios,
                            las webs de David Enrique Fleitas Caballero ofrecen
                            a sus anunciantes la opción de servir anuncios a
                            través de terceros (“Ad-Servers”). De este modo,
                            estos terceros pueden almacenar cookies enviadas
                            desde los servicios de David Enrique Fleitas
                            Caballero procedentes de los navegadores de los
                            usuarios, así como acceder a los datos que en ellas
                            se guardan.
                            <br />
                            Las empresas que generan estas cookies tienen sus
                            propias políticas de privacidad. En la actualidad,
                            las webs de David Enrique Fleitas Caballero utilizan
                            la plataforma Doubleclick (Google) para gestionar
                            estos servicios. Para más información, acuda a
                            <br />
                            <a href="https://www.google.es/policies/privacy/ads/#toc-doubleclick">
                                https://www.google.es/policies/privacy/ads/#toc-doubleclick
                            </a>
                            y a{" "}
                            <a href="https://www.google.es/policies/privacy/ads/">
                                https://www.google.es/policies/privacy/ads/
                            </a>
                            .
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            ¿Cómo puedo deshabilitar las cookies en mi
                            navegador?
                        </Typography>

                        <Typography>
                            Se pueden configurar los diferentes navegadores para
                            avisar al usuario de la recepción de cookies y, si
                            se desea, impedir su instalación en el equipo.
                            Asimismo, el usuario puede revisar en su navegador
                            qué cookies tiene instaladas y cuál es el plazo de
                            caducidad de las mismas, pudiendo eliminarlas.
                            <br />
                            Para ampliar esta información consulte las
                            instrucciones y manuales de su navegador:
                            <br />
                            Para más información sobre la administración de las
                            cookies en Google Chrome:{" "}
                            <a hre="https://support.google.com/chrome/answer/95647?hl=es">
                                https://support.google.com/chrome/answer/95647?hl=es
                            </a>
                            <br />
                            <br />
                            Para más información sobre la administración de las
                            cookies en Internet Explorer:{" "}
                            <a href="https://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions">
                                https://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions
                            </a>
                            <br />
                            <br />
                            Para más información sobre la administración de las
                            cookies en Mozilla Firefox:{" "}
                            <a href=" https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
                                https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
                            </a>
                            <br />
                            <br />
                            Para más información sobre la administración de las
                            cookies en Safari:{" "}
                            <a href="https://www.apple.com/es/privacy/use-of-cookies/">
                                https://www.apple.com/es/privacy/use-of-cookies/
                            </a>
                            <br />
                            <br />
                            Para más información sobre la administración de las
                            cookies en Opera:{" "}
                            <a href="https://help.opera.com/Windows/11.50/es-ES/cookies.html">
                                https://help.opera.com/Windows/11.50/es-ES/cookies.html
                            </a>
                            <br />
                            <br />
                            Si desea dejar de ser seguido por Google Analytics
                            visite:{" "}
                            <a href="https://tools.google.com/dlpage/gaoptout">
                                https://tools.google.com/dlpage/gaoptout
                            </a>
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Para saber más sobre las cookies{" "}
                        </Typography>

                        <Typography>
                            Puede obtener más información sobre la publicidad
                            online basada en el comportamiento y la privacidad
                            online en el siguiente enlace:{" "}
                            <a href="https://www.youronlinechoices.com/es/">
                                https://www.youronlinechoices.com/es/
                            </a>
                            <br />
                            <br />
                            Protección de datos de Google Analytics:{" "}
                            <a href="https://www.google.com/analytics/learn/privacy.html">
                                https://www.google.com/analytics/learn/privacy.html
                            </a>
                            <br />
                            <br />
                            Cómo usa Google Analytics las cookies:{" "}
                            <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs">
                                https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs
                            </a>
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" my="20px">
                            Actualizaciones y cambios en la política de
                            privacidad/cookies
                        </Typography>

                        <Typography>
                            Las webs de David Enrique Fleitas Caballero pueden
                            modificar esta Política de Cookies en función de
                            exigencias legislativas, reglamentarias, o con la
                            finalidad de adaptar dicha política a las
                            instrucciones dictadas por la Agencia Española de
                            Protección de Datos, por ello se aconseja a los
                            usuarios que la visiten periódicamente.
                            <br />
                            Cuando se produzcan cambios significativos en esta
                            Política de Cookies, estos se comunicarán a los
                            usuarios bien mediante la web o a través de correo
                            electrónico a los usuarios registrados.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ShopLayout1>
    );
}

const rows = [
    {
        name: "__utma",
        type: "De Terceros (Google Analytics)",
        expiry: "2 años",
        purpose: "Se usa para distinguir usuarios y sesiones",
        class: "No Exenta",
    },
    {
        name: "__utmb",
        type: "De Terceros (Google Analytics)",
        expiry: "30 minutos",
        purpose: "Se usa para determinar nuevas sesiones o visitas",
        class: "No Exenta",
    },
    {
        name: "__utmc",
        type: "De Terceros (Google Analytics)",
        expiry: "Al finalizar la sesión",
        purpose: "Se configura para su uso con Urchin",
        class: "No Exenta",
    },
    {
        name: "__utmz",
        type: "De Terceros (Google Analytics)",
        expiry: "6 meses",
        purpose:
            "Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web",
        class: "No Exenta",
    },
];

export default Cookies;
