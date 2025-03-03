import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from '../api';

// Mock the API module
jest.mock('../api', () => ({
    fetchAPI: jest.fn((date) => [
        '17:00',
        '18:00',
        '19:00',
        '20:00'
    ]),
    submitAPI: jest.fn((formData) => true)
}));

describe('BookingPage', () => {
    beforeEach(() => {
        // Clear mock data before each test
        jest.clearAllMocks();
    });

    test('initializeTimes returns the correct times from API', () => {
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00'];

        // Call initializeTimes
        const initialTimes = initializeTimes();

        // Verify that fetchAPI was called
        expect(fetchAPI).toHaveBeenCalled();

        // Verify that a Date object was passed to fetchAPI
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

        // Verify the returned times match expected times
        expect(initialTimes).toEqual(expectedTimes);
    });

    test('updateTimes returns the correct times from API for a given date', () => {
        const testDate = '2024-03-20'; // Use a specific test date
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00'];

        // Call updateTimes with the test date
        const updatedTimes = updateTimes([], testDate);

        // Verify that fetchAPI was called with a Date object created from our test date
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

        // Verify the returned times match expected times
        expect(updatedTimes).toEqual(expectedTimes);
    });

    test('BookingPage component initializes with times from API', () => {
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00'];

        // Render the component
        render(<BookingPage />);

        // Verify that fetchAPI was called during initialization
        expect(fetchAPI).toHaveBeenCalled();

        // Verify that a Date object was passed to fetchAPI
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    });
});
