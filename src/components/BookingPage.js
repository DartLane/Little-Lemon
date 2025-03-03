import BookingForm from './BookingForm';
import BookingInformation from './BookingInformation';
import { useReducer } from 'react';
import { fetchAPI } from '../api';

// Updated to use the fetchAPI function
const updateTimes = (state, action) => {
    return fetchAPI(new Date(action));  // Convert string date to Date object
}

// Updated to fetch times for today's date
const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
}

export default function BookingPage() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <BookingInformation />
            <BookingForm availableTimes={state} updateTimes={(date) => dispatch(date)} />
        </>
    );
}

export { initializeTimes, updateTimes };