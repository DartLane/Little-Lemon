import './Specials.css';
import { Link, useLocation } from 'react-router';

function Specials() {
    const location = useLocation();

    // Function to determine if we need a hash link or a regular link
    const getMenuLink = () => {
        // If we're on the homepage, use hash link
        if (location.pathname === '/') {
            return (
                <a href="#menu">
                    <button className="yellow-button specials-button">Online Menu</button>
                </a>
            );
        }
        // Otherwise use regular link that will redirect to homepage + hash
        return (
            <Link to="/#menu">
                <button className="yellow-button specials-button">Online Menu</button>
            </Link>
        );
    };

    return (
        <section className="specials-section">
            <div className="specials-header">
                <h3>This weeks specials!</h3>
                {getMenuLink()}
            </div>
            <section className="specials-cards">
                <div className="specials-dish">
                    <img src="/images/Greek-salad.png" alt="Greek Salad with fresh vegetables" />
                    <div className='dish-title'>
                        <h4>Greek Salad</h4>
                        <span className="price">$ 7.99</span>
                    </div>
                    <p>Culpa est adipisicing in mollit adipisicing incididunt laboris sit labore exercitation dolore ad qui pariatur commodo nulla</p>
                    <div className="delivery">
                        <a href="/order"><h4>Order a delivery</h4></a>
                        <img src="/images/Delivery-van.png" alt="Delivery Truck" />
                    </div>
                </div>
                <div className="specials-dish">
                    <img src="/images/Bruschetta.png" alt="Brucheta with tomatoes and basil" />
                    <div className='dish-title'>
                        <h4>Bruschetta</h4>
                        <span className="price">$ 7.99</span>
                    </div>
                    <p>Culpa est adipisicing in mollit adipisicing incididunt laboris sit labore exercitation dolore ad qui pariatur commodo nulla</p>
                    <div className="delivery">
                        <a href="/order"><h4>Order a delivery</h4></a>
                        <img src="/images/Delivery-van.png" alt="Delivery Truck" />
                    </div>
                </div>
                <div className="specials-dish">
                    <img src="/images/Lemon-dessert.png" alt="Lemon Dessert with fresh lemons" />
                    <div className='dish-title'>
                        <h4>Lemon Dessert</h4>
                        <span className="price">$ 7.99</span>
                    </div>
                    <p>Culpa est adipisicing in mollit adipisicing incididunt laboris sit labore exercitation dolore ad qui pariatur commodo nulla</p>
                    <div className="delivery">
                        <a href="/order"><h4>Order a delivery</h4></a>
                        <img src="/images/Delivery-van.png" alt="Delivery Truck" />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Specials;