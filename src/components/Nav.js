import './Nav.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        if (isNavOpen) setIsNavOpen(false);
    };

    // Function to determine if we need a hash link or a regular link
    const getNavLink = (path, hash, text) => {
        // If we're on the homepage, use hash links
        if (location.pathname === '/') {
            return (
                <a href={`#${hash}`} onClick={closeNav}>
                    <h5>{text}</h5>
                </a>
            );
        }
        // Otherwise use regular links that will redirect to homepage + hash
        return (
            <Link to={`/${path}#${hash}`} onClick={closeNav}>
                <h5>{text}</h5>
            </Link>
        );
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
                <li><Link to="/" onClick={closeNav}><h5>Home</h5></Link></li>
                <li>{getNavLink('about', 'about', 'About')}</li>
                <li>{getNavLink('menu', 'menu', 'Menu')}</li>
                <li><Link to="/booking" onClick={closeNav}><h5>Reservations</h5></Link></li>
                <li><Link to="/order" onClick={closeNav}><h5>Order Online</h5></Link></li>
                <li><Link to="/login" onClick={closeNav}><h5>Login</h5></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;