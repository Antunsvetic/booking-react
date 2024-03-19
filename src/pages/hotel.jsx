import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Bookings from "../components/Bookings";
import NewBookingDialog from "../components/NewBookingDialog";
import HotelInfoCard from "../components/HotelInfoCard";

const Hotel = () => {
    const { hotelId } = useParams();
    const hotel = useSelector(state => state.hotels.find(hotel => hotel.id === Number(hotelId)));

    const [isOpen, setIsOpen] = useState(false)

    if (!hotel) return <p>No hotel by id: {hotelId}</p>

    const closeDialog = () => setIsOpen(false)

    return (
        <div>
            <Link to="/"><button>Go back</button></Link>

            <HotelInfoCard
                name={hotel.name}
                description={hotel.description}
                image={hotel.image}
                setIsOpen={setIsOpen}
            />

            <Bookings bookings={hotel.bookings} hotelId={hotelId} />

            <NewBookingDialog
                isOpen={isOpen}
                closeDialog={closeDialog}
                bookings={hotel.bookings}
                hotelId={hotelId}
            />
        </div>
    )
}

export default Hotel;