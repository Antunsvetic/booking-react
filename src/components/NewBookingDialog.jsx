import { useCallback, useEffect, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import moment from 'moment';
import DatePickerInput from './DatePickerInput';
import { formatDateToString } from '../utils/dateFormater';

import { useDispatch } from 'react-redux';
import { createNewBooking } from '../state/hotels/hotelsSlice';

const NewBookingDialog = ({ isOpen, closeDialog, bookings, hotelId }) => {
    const dispatch = useDispatch();

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
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

    const shouldDisableDate = useCallback((date) => {
        const dateMoment = moment(date);
        return bookings?.some(booking => {
            const checkInDate = moment(booking.checkIn, "DD/MM/YYYY");
            const checkOutDate = moment(booking.checkOut, "DD/MM/YYYY");
            const isWithinRange = dateMoment.isSameOrAfter(checkInDate)
                && dateMoment.isSameOrBefore(checkOutDate);
            return isWithinRange;
        });
    }, [bookings]);

    const handleCreateBooking = () => {
        dispatch(createNewBooking({
            hotelId,
            dates: {
                checkIn: formatDateToString(checkInDate),
                checkOut: formatDateToString(checkOutDate)
            }
        }))
        closeDialog()
        setCheckInDate(null)
        setCheckOutDate(null)
    }

    const handleCloseDialog = () => {
        closeDialog()
        setCheckInDate(null)
        setCheckOutDate(null)
    }

    const resetState = (type) => {
        switch (type) {
            case "CHECK_IN":
                setCheckInDate(null)
                setCheckOutDate(null)
            case "CHECK_OUT":
                setCheckOutDate(null)
        }
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DialogTitle sx={{ textAlign: "center" }}>New booking</DialogTitle>
            <DialogContent>
                <DatePickerInput
                    label="Check in"
                    value={checkInDate}
                    disablePast={true}
                    shouldDisableDate={shouldDisableDate}
                    onChange={(newDate) => {
                        setCheckInDate(newDate)
                        setCheckOutDate(null)
                    }}
                    resetState={() => resetState("CHECK_IN")}
                />
                <DatePickerInput
                    label="Check out"
                    value={checkOutDate}
                    disablePast={true}
                    minDate={checkInDate}
                    maxDate={earliestNextDate ?? null}
                    shouldDisableDate={shouldDisableDate}
                    disabled={!checkInDate}
                    onChange={(newDate) => setCheckOutDate(newDate)}
                    resetState={() => resetState("CHECK_OUT")}
                />
            </DialogContent>
            <DialogActions sx={{ margin: "0 auto" }}>
                <button onClick={handleCloseDialog}>Close</button>
                <button
                    onClick={handleCreateBooking}
                    disabled={isSaveButtonDisabled}
                >
                    Save
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default NewBookingDialog;