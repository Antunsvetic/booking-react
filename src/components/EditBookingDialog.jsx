import { useCallback, useEffect, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

import moment from 'moment';
import DatePickerInput from './DatePickerInput';
import { formatDateToString } from '../utils/dateFormater';

import { useDispatch } from 'react-redux';
import { updateBooking } from '../state/hotels/hotelsSlice';

const EditBookingDialog = ({ isOpen, bookings, editingBooking, hotelId, closeDialog }) => {
    const dispatch = useDispatch();

    const [checkInDate, setCheckInDate] = useState(editingBooking?.checkIn);
    const [checkOutDate, setCheckOutDate] = useState(editingBooking?.checkOut);
    const [earliestNextDate, setEarliestNextDate] = useState(null)
    
    const isSaveButtonDisabled = !checkInDate || !checkOutDate;

    useEffect(() => {
        if (bookings && checkInDate) {
            const selectedDateMoment = moment(checkInDate, "DD/MM/YYYY");
            const earliestDate = bookings.reduce((earliest, current) => {
                const currentCheckInDate = moment(current.checkIn, "DD/MM/YYYY");
                if (currentCheckInDate.isAfter(selectedDateMoment)
                    && (!earliest || currentCheckInDate.isBefore(moment(earliest.checkIn, "DD/MM/YYYY")))) {
                    return current
                }
                return earliest;
            }, null);

            setEarliestNextDate(earliestDate ? moment(earliestDate.checkIn, "DD/MM/YYYY") : null);
            return;
        }
        setEarliestNextDate(null);
    }, [checkInDate, bookings]);

    const filterDisabledDates = useCallback((date) => {
        const dateMoment = moment(date);
        return bookings.some(booking => {
            if (booking.id === editingBooking.id) return false;
            const checkInDate = moment(booking.checkIn, "DD/MM/YYYY");
            const checkOutDate = moment(booking.checkOut, "DD/MM/YYYY");
            const isWithinRange = dateMoment.isSameOrAfter(checkInDate)
                && dateMoment.isSameOrBefore(checkOutDate);
            return isWithinRange;
        });
    }, [bookings, editingBooking, checkInDate, checkOutDate]);

    const handleUpdateBooking = () => {
        console.log("im here")
        dispatch(updateBooking({
            hotelId,
            bookingId: editingBooking.id,
            dates: {
                checkIn: formatDateToString(checkInDate),
                checkOut: formatDateToString(checkOutDate) 
            }
        }))
        closeDialog()
    }

    const handleDialogClosing = () => {
        closeDialog()
        setCheckInDate(null)
        setCheckOutDate(null)
    }

    const resetState = (type) => {
        if(type === "CHECK_IN") {
            setCheckInDate(null)
            setCheckOutDate(null)
        }
        if(type === "CHECK_OUT") setCheckOutDate(null)
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleDialogClosing}
        >
            <DialogTitle>New booking</DialogTitle>
            <DialogContent>
                <DatePickerInput
                    label="Check IN"
                    value={checkInDate}
                    disablePast={true}
                    shouldDisableDate={filterDisabledDates}
                    onChange={(newDate) => {
                        setCheckInDate(newDate)
                        setCheckOutDate(null)
                    }}
                    resetState={() => resetState("CHECK_IN")}
                />
                <DatePickerInput
                    label="Check OUT"
                    value={checkOutDate}
                    disablePast={true}
                    minDate={moment(checkInDate, "DD/MM/YYYY")}
                    maxDate={earliestNextDate}
                    shouldDisableDate={filterDisabledDates}
                    onChange={(newDate) => setCheckOutDate(newDate)}
                    resetState={() => resetState("CHECK_OUT")}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClosing}>Close</Button>
                <Button
                    onClick={handleUpdateBooking}
                    disabled={isSaveButtonDisabled}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditBookingDialog;