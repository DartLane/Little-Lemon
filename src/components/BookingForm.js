import './BookingForm.css';
import { useState } from 'react';

export default function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberGuests, setNumberGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const onChangeDate = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.updateTimes(selectedDate);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            date,
            time,
            numberGuests,
            occasion
        };
        props.onSubmit(formData);
    }

    return (
        <div className='booking-form-container'>
            <form className='booking-form-info' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={onChangeDate} required />

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
                        <option value="">Select time</option>
                        {props.availableTimes.map(time => <option key={time}>{time}</option>)}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={numberGuests}
                        onChange={e => setNumberGuests(e.target.value)}
                        required
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                        <option value="">Select occasion</option>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <button type="submit" className="yellow-button">Make Your reservation</button>
            </form>
        </div>
    );
}