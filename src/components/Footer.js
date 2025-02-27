import './Footer.css';
import { Link, useLocation } from 'react-router';

function Footer() {
    const location = useLocation();

    // Similar function as in Nav.js
    const getFooterLink = (path, hash, text) => {
        if (location.pathname === '/') {
            return <a href={`#${hash}`}>{text}</a>;
        }
        return <Link to={`/${path}#${hash}`}>{text}</Link>;
    };

    return (
        <footer className="footer">
            <section className="footer-section logo-section">
                <img src="/images/Little-Lemon-logo-white.png" alt="Little Lemon logo" className='logo'></img>
            </section>
            <section className="footer-section navigation-section">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>{getFooterLink('about', 'about', 'About')}</li>
                    <li>{getFooterLink('menu', 'menu', 'Menu')}</li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </section>
            <section className="footer-section contact-section">
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section className="footer-section socials-section">
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="https://x.com/home" rel="noreferrer" target="_blank">X</a></li>
                    <li><a href="https://instagram.com" rel="noreferrer" target="_blank">Instagram</a></li>
                    <li><a href="https://facebook.com" rel="noreferrer" target="_blank">Facebook</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;