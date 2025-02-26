import './Chicago.css';

function Chicago() {
    return (
        <section className="chicago-section">
            <div className="chicago-content">
                <div className="chicago-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Culpa est adipisicing in mollit adipisicing incididunt laboris sit labore exercitation dolore
                        ad qui pariatur commodo nulla minim cillum laborum in amet elit et anim non dolor
                        exercitation commodo officia tempor elit.
                    </p>
                </div>
                <div className="chicago-images">
                    <img
                        src="/images/chefs-1.jpg"
                        alt="Two chefs discussing food preparation"
                        className="chef-image top-image"
                    />
                    <img
                        src="/images/chefs-2.jpg"
                        alt="Two chefs working together in the kitchen"
                        className="chef-image bottom-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Chicago;