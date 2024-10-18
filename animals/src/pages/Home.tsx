import {FC} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import { Link } from 'react-router-dom';

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
                image="https://content.nationalgeographic.com.es/medio/2022/12/12/perro-1_514aad3b_221212161023_1280x720.jpg" // Coloca aquí una URL válida de imagen
                alt="Imagen de un perro" // Texto alternativo descriptivo
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'center'
                }}
            >
                <Button variant={"outlined"} size="large" component={Link} to="/register">Formulario</Button>
            </CardActions>
        </Card>
    </Stack>
  );
}

export default Home;
