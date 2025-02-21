import './Nav.css';
import { useState } from 'react';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navigation">
            <button
                className="burger-menu"
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={isNavOpen ? 'nav-links open' : 'nav-links'}>
                <li><a href="/home"><h5>Home</h5></a></li>
                <li><a href="/about"><h5>About</h5></a></li>
                <li><a href="/menu"><h5>Menu</h5></a></li>
                <li><a href="/reservation"><h5>Reservations</h5></a></li>
                <li><a href="/order"><h5>Order Online</h5></a></li>
                <li><a href="/login"><h5>Login</h5></a></li>
            </ul>
        </nav>
    );
}

export default Nav;