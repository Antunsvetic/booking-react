import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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

const HotelCard = ({
    id,
    name,
    description,
    image
}) => {
    return (
        <Card className="hotel-card" sx={{ maxWidth: 345 }}>
            <Link to={`hotel/${id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={images[image]}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description.substring(0, 100)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions sx={{ justifyContent: "center" }} >
                <Link to={`hotel/${id}`}>
                    <button>
                        Book
                    </button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default HotelCard;