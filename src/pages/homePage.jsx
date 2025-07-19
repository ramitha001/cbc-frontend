import { Link } from 'react-router-dom'
import './homePage.css'

export default function HomePage() {
    return (
        <div className="home-container">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-brand">
                    <h2>MyApp</h2>
                </div>
                <div className="nav-links">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <Link to="/login" className="nav-link">login</Link>
                </div>
                <button className="nav-button">Get Started</button>
            </nav>

            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="gradient-text">MyApp</span>
                    </h1>
                    <p className="hero-subtitle">
                        Discover amazing features and create something extraordinary with our powerful platform.
                    </p>
                    <div className="hero-buttons">
                        <button className="primary-button">Explore Now</button>
                        <button className="secondary-button">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="floating-card">
                        <div className="card-icon">🚀</div>
                        <h3>Fast & Reliable</h3>
                        <p>Lightning-fast performance</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section" id="features">
                <div className="section-header">
                    <h2 className="section-title">Amazing Features</h2>
                    <p className="section-subtitle">Everything you need to succeed</p>
                </div>
                
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>Smart Design</h3>
                        <p>Intuitive and user-friendly interface designed for the best experience.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure</h3>
                        <p>Your data is protected with industry-leading security measures.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Fast Performance</h3>
                        <p>Optimized for speed and efficiency across all devices.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Responsive</h3>
                        <p>Works perfectly on desktop, tablet, and mobile devices.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Our Platform</h2>
                        <p>
                            We are passionate about creating innovative solutions that help businesses 
                            and individuals achieve their goals. Our platform combines cutting-edge 
                            technology with user-centered design to deliver exceptional experiences.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <h3>10K+</h3>
                                <p>Happy Users</p>
                            </div>
                            <div className="stat-item">
                                <h3>99.9%</h3>
                                <p>Uptime</p>
                            </div>
                            <div className="stat-item">
                                <h3>24/7</h3>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-placeholder">
                            <span>📊</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contact">
                <div className="contact-content">
                    <h2>Get In Touch</h2>
                    <p>Ready to get started? Contact us today!</p>
                    <div className="contact-form">
                        <input type="text" placeholder="Your Name" className="contact-input" />
                        <input type="email" placeholder="Your Email" className="contact-input" />
                        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
                        <button className="contact-button">Send Message</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>MyApp</h3>
                        <p>Creating amazing experiences for everyone.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="#home">Home</a>
                        <a href="#features">Features</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 MyApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
