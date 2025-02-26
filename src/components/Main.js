import './Main.css';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';

function Main() {
    return (
        <main className="main">
            <CallToAction />
            <Specials />
            <Testimonials />
            <Chicago />
        </main>
    );
}

export default Main;