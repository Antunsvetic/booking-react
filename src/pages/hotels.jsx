import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HotelCard from "../components/HotelCard";

const Hotels = () => {
    const hotels = useSelector(state => state.hotels)

    if (!hotels) return <p>No hotels...</p>

    return (
        <div>
            <h2>Hotels: </h2>
            
            <div className="hotel-cards">
                {hotels?.map(({ id, name, description, image }) => (
                    <HotelCard
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        image={image}
                    />
                ))}

            </div>

        </div >
    )
}

export default Hotels;