import BookingForm from './BookingForm';
import BookingInformation from './BookingInformation';
import { useReducer, useState } from 'react';

const updateTimes = (state, action) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export default function BookingPage() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <BookingInformation />
            <BookingForm availableTimes={state} updateTimes={(date) => dispatch(date)} />
        </>
    );
}