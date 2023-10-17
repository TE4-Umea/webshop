import "../components/Footer.css"


import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="footer-links">
                    <a href="#">Hem</a>
                    <a href="#">Butik</a>
                    <a href="#">Om oss</a>
                    <a href="#">Leverans</a>
                    <a href="#">Kontakta oss</a>
                </div>
                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>


            <div className="footer-info">
                <div className="footer-section">
                    <h3>Om oss</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, ipsum nulla bibendum elit, eu bibendum sapien nulla vel sapien. </p>
                </div>
                <div className="footer-section">
                    <h3>Leverans</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, ipsum nulla bibendum elit, eu bibendum sapien nulla vel sapien. </p>
                </div>
                <div className="footer-section">
                    <h3>Kontakta oss</h3>
                    <p>123 Main Street<br />City, State 12345<br />Phone: (123) 456-7890<br />Email: info@example.com </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
