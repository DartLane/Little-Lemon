import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Gi Adams',
            image: '/images/testimonial-1.png',
            rating: 5,
            review: 'Culpa est adipisicing in mollit adipisicing incididunt'
        },
        {
            id: 2,
            name: 'Ester Stuart',
            image: '/images/testimonial-2.png',
            rating: 4.5,
            review: 'Review'
        },
        {
            id: 3,
            name: 'Kelly K',
            image: '/images/testimonial-3.png',
            rating: 5,
            review: 'Review'
        },
        {
            id: 4,
            name: 'Glen',
            image: '/images/testimonial-4.png',
            rating: 3,
            review: 'Review'
        }
    ];

    // Function to render stars based on rating
    const renderStars = (rating) => {
        return (
            <span className="rating">
                {rating} <FaStar className="star-icon" />
            </span>
        );
    };

    return (
        <section className="testimonials-section">
            <h3>Testimonials</h3>
            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        {renderStars(testimonial.rating)}
                        <div className="testimonial-profile">
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.name}'s profile`}
                                className="testimonial-image"
                            />
                            <span className="testimonial-name">{testimonial.name}</span>
                        </div>
                        <p className="testimonial-text">{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;