import {FC} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import perritos from '../assets/perritos.png';

const Home: FC = () => {
  return (
    <Stack
        direction={"column"}
        spacing={2}
        justifyContent={"flex-start"}
        alignItems={"stretch"}
        sx={{mt: 10}}
    >
        <Card>
            <CardMedia
                component="img"
                height="740"
            image= {`${perritos}`} // Coloca aquí una URL válida de imagen
                alt="Imagen de un perro" // Texto alternativo descriptivo
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" sx={{color:"#78BDC4"}}>
                ¡Adopta un Amigo Fiel!
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Bienvenidos a nuestra página de adopción de perros.
                    Aquí encontrarás a tu nuevo mejor amigo, listo para llenar tu vida de amor y alegría. Cada uno de nuestros perros ha sido rescatado y está esperando una segunda oportunidad en un hogar lleno de cariño
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'center'
                }}
            >
                <Button variant={"contained"} size="large" component={Link} to="/register">Adoptame</Button>
            </CardActions>
        </Card>
    </Stack>
  );
}

export default Home;
