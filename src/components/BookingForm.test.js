import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';


describe('BookingForm', () => {
    test('Renders the BookingForm heading', () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} />);
        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    test('BookingForm can be submitted', () => {
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={[]} updateTimes={() => {}} onSubmit={handleSubmit} />);
        const submitButton = screen.getByDisplayValue("Make Your reservation");
        fireEvent.click(submitButton);
        expect(handleSubmit).toHaveBeenCalled();
    });
})