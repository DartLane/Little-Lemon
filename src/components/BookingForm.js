import './BookingForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date cannot be in the past'),
  time: Yup.string()
    .required('Time is required')
    .notOneOf([''], 'Please select a valid time'),
  numberGuests: Yup.number()
    .required('Number of guests is required')
    .min(1, 'Minimum 1 guest')
    .max(10, 'Maximum 10 guests'),
  occasion: Yup.string()
    .required('Occasion is required')
    .notOneOf([''], 'Please select an occasion'),
});

export default function BookingForm(props) {
  const initialValues = {
    date: '',
    time: '',
    numberGuests: '',
    occasion: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };

  return (
    <div className='booking-form-container'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isValid, dirty }) => (
          <Form className='booking-form-info'>
            <div className='form-inputs'>
              <div>
                <label htmlFor="res-date">Choose date</label>
                <Field
                  type="date"
                  id="res-date"
                  name="date"
                  onChange={(e) => {
                    setFieldValue('date', e.target.value);
                    props.updateTimes(e.target.value);
                  }}
                  required
                />
                <ErrorMessage name="date" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="res-time">Choose time</label>
                <Field
                  as="select"
                  id="res-time"
                  name="time"
                  required
                >
                  <option value="">Select time</option>
                  {props.availableTimes.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="time" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="guests">Number of guests</label>
                <Field
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  name="numberGuests"
                  required
                />
                <ErrorMessage name="numberGuests" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="occasion">Occasion</label>
                <Field
                  as="select"
                  id="occasion"
                  name="occasion"
                  required
                >
                  <option value="">Select occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                </Field>
                <ErrorMessage name="occasion" component="div" className="error" />
              </div>
            </div>
            <button type="submit" className="yellow-button" aria-label="On Click" disabled={!isValid || !dirty}>
              Make Your reservation
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}