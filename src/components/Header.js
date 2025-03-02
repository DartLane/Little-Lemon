import './Header.css';
import { Link } from 'react-router';

function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img src='/images/Logo.png' alt='Little Lemon logo'></img>
            </Link>
        </header>
    );
}

export default Header;