import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Bookings from "../components/Bookings";
import NewBookingDialog from "../components/NewBookingDialog";

const Hotel = () => {
    const { hotelId } = useParams();
    const hotel = useSelector(state => state.hotels.find(hotel => hotel.id === Number(hotelId)));

    const [isOpen, setIsOpen] = useState(false)

    if (!hotel) return <p>No hotel by id: {hotelId}</p>

    const closeDialog = () => setIsOpen(false)

    return (
        <div>
            <Link to="/">Go back</Link>
            
            <h1>Name: {hotel.name}</h1>

            <Bookings bookings={hotel.bookings} hotelId={hotelId}/>

            <div style={{ marginTop: 50 }}>
                <button onClick={() => setIsOpen(true)}>NEW BOOKING</button>
            </div>

            <NewBookingDialog
                isOpen={isOpen}
                closeDialog={closeDialog}
                bookings={hotel?.bookings}
                hotelId={hotelId}
            />
        </div>
    )
}

export default Hotel;