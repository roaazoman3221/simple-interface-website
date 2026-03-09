import "./Hero.css"

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Stories and interviews</h1>
                    <p className="hero-dis">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
                </div>
                <div className="hero-submit">
                <input type="email" placeholder="Enter your email" className="email"/>

                <button className="subscribe">Subscribe</button>
            </div>
            </div>
            
        </div>
    )
}

export default Hero
