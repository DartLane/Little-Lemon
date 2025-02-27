import './CallToAction.css'
import { Link } from 'react-router';

export default function CallToAction() {
    return (
        <section className="hero">
            <section className="hero-details">
                <h1 className='hero-title'>Little Lemon</h1>
                <h2 className='hero-subtitle'>Chicago</h2>
                <p className='hero-text'>Culpa est adipisicing in mollit adipisicing incididunt laboris sit labore exercitation dolore ad qui pariatur commodo nulla minim cillum</p>
                <Link to="/booking">
                    <button className="yellow-button hero-button">Reserve a Table</button>
                </Link>
            </section>
            <img src="/images/Hero-image.png" alt="Food tray with bruchetas" className='hero-image' />
        </section>
    );
}