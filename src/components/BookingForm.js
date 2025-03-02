import './BookingForm.css';
import { useState } from 'react';

export default function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberGuests, setNumberGuests] = useState();
    const [occasion, setOccasion] = useState('');

    const onChangeDate = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.updateTimes(selectedDate);
    }

    return (
        <div className='booking-form-container'>
            <form className='booking-form-info'>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={onChangeDate} required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
                    {props.availableTimes.map(time => <option key={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberGuests} onChange={e => setNumberGuests(e.target.value)} required />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" className='booking-form-submit yellow-button'/>
            </form>
        </div>
    );
}