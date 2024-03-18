import { createSlice } from "@reduxjs/toolkit";
import { MOCK_DATA } from "./mockData";

const initialState = MOCK_DATA;

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        createNewBooking(state, action) {
            const { hotelId, dates } = action.payload || {};
            const hotel = state.find(hotel => hotel.id === Number(hotelId));

            if (hotel) {
                const newBookingId = Math.floor(Math.random() * 100000) + 1;
                const newBooking = {
                    id: newBookingId,
                    ...dates
                };
                hotel.bookings.push(newBooking);
            }
        },
        updateBooking(state, action) {
            const { hotelId, bookingId, dates } = action.payload || {};

            const hotel = state.find(hotel => hotel.id === Number(hotelId))
            const bookingIndex = hotel
                ? hotel.bookings.findIndex(booking => booking.id === Number(bookingId))
                : null

            if (bookingIndex !== -1) {
                hotel.bookings[bookingIndex].checkIn = dates.checkIn
                hotel.bookings[bookingIndex].checkOut = dates.checkOut
            }
        },
        deleteBooking(state, action) {
            const { hotelId, bookingId } = action.payload || {};
            const hotel = state.find(hotel => hotel.id === Number(hotelId));
            const bookingIndex = hotel.bookings.findIndex(booking => booking.id === Number(bookingId));
            if(bookingIndex !== -1) hotel.bookings.splice(bookingIndex, 1)
        }
    },
});

export const { createNewBooking, updateBooking, deleteBooking } = hotelsSlice.actions;
export default hotelsSlice.reducer;