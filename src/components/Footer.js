import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-section logo-section">
                <img src="/images/Little-Lemon-logo-white.png" alt="Little Lemon logo" className='logo'></img>
            </section>
            <section className="footer-section navigation-section">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
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