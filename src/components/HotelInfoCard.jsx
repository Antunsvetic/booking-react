import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

import Ambasador from "../assets/ambasador.jpeg";
import Adria from '../assets/adria.jpeg';
import Adeo from '../assets/adeo.jpg';
import Diamond from '../assets/diamond.jpeg';
import Hilton from '../assets/hilton.jpeg';

const images = {
    Ambasador,
    Adria,
    Adeo,
    Diamond,
    Hilton
};

const HotelInfoCard = ({
    name,
    description,
    image,
    setIsOpen
}) => {
    return (
        <Card sx={{ maxWidth: 1000, marginTop: 5 }}>
            <CardMedia
                component="img"
                height="300"
                image={images[image]}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="left">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }} >
                <button onClick={() => setIsOpen(true)}>Create booking</button>
            </CardActions>
        </Card>
    );
}

export default HotelInfoCard;