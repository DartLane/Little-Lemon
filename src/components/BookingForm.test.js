import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    test('Renders the BookingForm heading', () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} />);
        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    test('Empty form is not valid', () => {
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={[]} updateTimes={() => {}} onSubmit={handleSubmit} />);
        const submitButton = screen.getByText("Make Your reservation");
        fireEvent.click(submitButton);
        expect(handleSubmit).not.toHaveBeenCalled();
    });

    // Test date input field validation attributes
    test('Date input has required attribute and correct type', () => {
        const availableTimes = ['17:00', '18:00'];
        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} />);

        const dateInput = screen.getByLabelText('Choose date');
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toBeRequired();
    });

    // Test time select field validation attributes
    test('Time select has required attribute', () => {
        const availableTimes = ['17:00', '18:00'];
        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} />);

        const timeSelect = screen.getByLabelText('Choose time');
        expect(timeSelect).toBeRequired();
    });

    // Test number of guests input validation attributes
    test('Number of guests input has correct validation attributes', () => {
        const availableTimes = ['17:00', '18:00'];
        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} />);

        const guestsInput = screen.getByLabelText('Number of guests');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toBeRequired();
    });

    // Test occasion select validation attributes
    test('Occasion select has required attribute', () => {
        const availableTimes = ['17:00', '18:00'];
        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} />);

        const occasionSelect = screen.getByLabelText('Occasion');
        expect(occasionSelect).toBeRequired();
    });

    // New tests for JavaScript validation functions - Valid states

    test('Form is valid with all fields filled correctly', async () => {
        const handleSubmit = jest.fn();
        const availableTimes = ['17:00', '18:00'];
        const updateTimes = jest.fn();

        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onSubmit={handleSubmit} />);

        // Set a future date (tomorrow)
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        // Fill in all fields with valid data
        const dateInput = screen.getByLabelText('Choose date');
        const timeSelect = screen.getByLabelText('Choose time');
        const guestsInput = screen.getByLabelText('Number of guests');
        const occasionSelect = screen.getByLabelText('Occasion');
        const submitButton = screen.getByText('Make Your reservation');

        fireEvent.change(dateInput, { target: { value: formattedDate } });
        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

        // Submit the form
        fireEvent.click(submitButton);

        // Wait for validation to complete
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                date: formattedDate,
                time: '17:00',
                numberGuests: 4,
                occasion: 'Birthday'
            });
        });
    });

    // Tests for JavaScript validation functions - Invalid states

    test('Date validation rejects past dates', async () => {
        const handleSubmit = jest.fn();
        const availableTimes = ['17:00', '18:00'];

        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} onSubmit={handleSubmit} />);

        // Set a past date (yesterday)
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const formattedDate = yesterday.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        // Fill in the date field with an invalid date
        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, { target: { value: formattedDate } });

        // Move focus to trigger validation
        fireEvent.blur(dateInput);

        // Check for error message
        await waitFor(() => {
            expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
        });

        // Fill other fields with valid data
        const timeSelect = screen.getByLabelText('Choose time');
        const guestsInput = screen.getByLabelText('Number of guests');
        const occasionSelect = screen.getByLabelText('Occasion');

        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

        // Try to submit the form
        const submitButton = screen.getByText('Make Your reservation');
        fireEvent.click(submitButton);

        // Form submission should be prevented
        expect(handleSubmit).not.toHaveBeenCalled();
    });

    test('Number of guests validation rejects values outside range', async () => {
        const handleSubmit = jest.fn();
        const availableTimes = ['17:00', '18:00'];

        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} onSubmit={handleSubmit} />);

        // Set a valid future date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = tomorrow.toISOString().split('T')[0];

        // Fill date and other fields with valid data
        const dateInput = screen.getByLabelText('Choose date');
        const timeSelect = screen.getByLabelText('Choose time');
        const occasionSelect = screen.getByLabelText('Occasion');

        fireEvent.change(dateInput, { target: { value: formattedDate } });
        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

        // Test with too many guests (more than max)
        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, { target: { value: '15' } });
        fireEvent.blur(guestsInput);

        // Check for error message
        await waitFor(() => {
            expect(screen.getByText(/maximum 10 guests/i)).toBeInTheDocument();
        });

        // Try to submit the form
        const submitButton = screen.getByText('Make Your reservation');
        fireEvent.click(submitButton);

        // Form submission should be prevented
        expect(handleSubmit).not.toHaveBeenCalled();

        // Test with too few guests (less than min)
        fireEvent.change(guestsInput, { target: { value: '0' } });
        fireEvent.blur(guestsInput);

        // Check for error message
        await waitFor(() => {
            expect(screen.getByText(/minimum 1 guest/i)).toBeInTheDocument();
        });

        // Try to submit the form again
        fireEvent.click(submitButton);

        // Form submission should still be prevented
        expect(handleSubmit).not.toHaveBeenCalled();
    });

    test('Time and occasion validation rejects empty selections', async () => {
        const handleSubmit = jest.fn();
        const availableTimes = ['17:00', '18:00'];

        render(<BookingForm availableTimes={availableTimes} updateTimes={() => {}} onSubmit={handleSubmit} />);

        // Set a valid future date and number of guests
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = tomorrow.toISOString().split('T')[0];

        const dateInput = screen.getByLabelText('Choose date');
        const guestsInput = screen.getByLabelText('Number of guests');

        fireEvent.change(dateInput, { target: { value: formattedDate } });
        fireEvent.change(guestsInput, { target: { value: '4' } });

        // Leave time and occasion empty
        const timeSelect = screen.getByLabelText('Choose time');
        const occasionSelect = screen.getByLabelText('Occasion');

        fireEvent.change(timeSelect, { target: { value: '' } });
        fireEvent.blur(timeSelect);

        fireEvent.change(occasionSelect, { target: { value: '' } });
        fireEvent.blur(occasionSelect);

        // Check for error messages
        await waitFor(() => {
            expect(screen.getByText(/time is required/i)).toBeInTheDocument();
            expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
        });

        // Try to submit the form
        const submitButton = screen.getByText('Make Your reservation');
        fireEvent.click(submitButton);

        // Form submission should be prevented
        expect(handleSubmit).not.toHaveBeenCalled();
    });
})