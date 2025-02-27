import './Main.css';
import { Routes, Route, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import BookingInformation from './BookingInformation';
import Order from './Order';
import Login from './Login';

function HomePage() {
    // Create refs for each section
    const heroRef = useRef(null);
    const menuRef = useRef(null);
    const testimonialsRef = useRef(null);
    const aboutRef = useRef(null);

    // Get the hash from the URL
    const location = useLocation();

    useEffect(() => {
        // Handle scrolling based on the URL hash
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <section id="hero" ref={heroRef}>
                <CallToAction />
            </section>
            <section id="menu" ref={menuRef}>
                <Specials />
            </section>
            <section id="testimonials" ref={testimonialsRef}>
                <Testimonials />
            </section>
            <section id="about" ref={aboutRef}>
                <Chicago />
            </section>
        </>
    );
}

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingInformation />} />
                {/* Redirect routes for section navigation */}
                <Route path="/about" element={<HomePage />} />
                <Route path="/menu" element={<HomePage />} />
                <Route path="/testimonials" element={<HomePage />} />
                <Route path='/reservation' element={<BookingInformation />} />
                <Route path='/order' element={<Order />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;