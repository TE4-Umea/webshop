import "../components/Navbar.css"

import logo from "../assets/logo.png"
import home from "../assets/home.png"
import favorite from "../assets/favorite.jpg"
import search from "../assets/search.png"
import cart from "../assets/cart.png"


function Navbar() {
    return (
        <nav className="navbar">
        <div className="top">
            <div className="logo">
                <img src={logo} alt="logo" className="logo"/>
            </div>

            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Sök..."/>
                    <button type="submit" className="searchButton">
                        <img src={search} alt="search" className="search"/>
                    </button>
                </div>
            </div>

            <div className="storestuff">

                <div className="storePart">
                    <div className="storePartImg">
                        <img src={home} alt="store" className="store"/>
                    </div>
                    <div className="storePartText">
                        <p>Butik</p>
                    </div>
                </div>

                <div className="heartPart">
                    <div className="hartPartImg">
                        <img src={favorite} alt="heart" className="heart"/>
                    </div>
                    <div className="heartPartText">
                        <p>Önskelista</p>
                    </div>
                </div>

                <div className="cartPart">
                    <div className="cartPartImg">
                        <img src={cart} alt="cart" className="cart"/>
                    </div>
                    <div className="cartPartText">
                        <p>Varukorg</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="bottom">
            <a href="#" className="navcontent">Herr</a>
            <a href="#" className="navcontent">Dam</a>
            <a href="#" className="navcontent">Barn</a>
            <a href="#" className="navcontent">Utrustning</a>
            <a href="#" className="navcontent">Fritid</a>
            <a href="#" className="navcontent">Fiske</a>
            <a href="#" className="navcontent">Sport</a>
            <a href="#" className="navcontent">Varumärke</a>
            <a href="#" className="navcontent">Om oss</a>
        </div>

        <div className="ad">
            Stort sortiment, Snabba leveranser, Fria byten, 30 dagars öppet köp | 1.000.000 kvar till fri frakt
        </div>

    </nav>

    );
}


export default Navbar;
