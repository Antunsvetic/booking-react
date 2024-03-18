import { useState } from "react";
import EditBookingDialog from "./EditBookingDialog";

import { useDispatch } from "react-redux";
import { deleteBooking } from "../state/hotels/hotelsSlice";

const Bookings = ({ bookings, hotelId }) => {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false);
    const [editingBooking, setEditingBooking] = useState(null)

    if(bookings.length < 1) return <h2>No bookings...</h2> 

    const handleEditClick = (booking) => {
        setEditingBooking(booking)
        setIsOpen(true)
    }

    const closeDialog = () => {
        setIsOpen(false)
        setEditingBooking(null)
    }

    const handleBookingDelete = (bookingId) => {
        dispatch(deleteBooking({ hotelId, bookingId }))
    }

    return (
        <>
            <h2>Bookings: </h2>
            {bookings?.map(booking => (
                <div key={booking.id}>
                    <p>Check in: {booking.checkIn} - Check out: {booking.checkOut}</p>
                    <button
                        style={{ marginRight: 20 }}
                        onClick={() => handleBookingDelete(booking.id)}
                    >
                        DELETE
                    </button>
                    <button onClick={() => handleEditClick(booking)}>EDIT</button>
                </div>
            ))}

            {editingBooking && (
                <EditBookingDialog
                    isOpen={isOpen}
                    bookings={bookings}
                    editingBooking={editingBooking}
                    hotelId={hotelId}
                    closeDialog={closeDialog}
                />
            )}
        </>
    )
}

export default Bookings;