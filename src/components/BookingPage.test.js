import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';

describe('BookingPage', () => {
    test('Unit test for the initializeTimes function to validate that it returns the correct expected value', () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        render(<BookingPage />);
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(availableTimes);
    });

    test('Test updateTimes function to validate that it returns the correct expected value', () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        render(<BookingPage />);
        const initialTimes = initializeTimes();
        const updatedTimes = updateTimes(initialTimes, '2025-03-02');
        expect(updatedTimes).toEqual(availableTimes);
    });
})
