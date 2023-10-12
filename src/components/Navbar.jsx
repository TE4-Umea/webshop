import './App.css';

import logo from "../assets/logo.png"
import home from "../assets/home.jpg"
import favorite from "../assets/favorite.jpg"
import search from "../assets/search.jpg"
import cart from "../assets/cart.jpg"


function Navbar() {
    return (
        <navbar className="navbar">
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
            <a href="#" class="navcontent">Herr</a>
            <a href="#" class="navcontent">Dam</a>
            <a href="#" class="navcontent">Barn</a>
            <a href="#" class="navcontent">Utrustning</a>
            <a href="#" class="navcontent">Fritid</a>
            <a href="#" class="navcontent">Fiske</a>
            <a href="#" class="navcontent">Sport</a>
            <a href="#" class="navcontent">Varumärke</a>
            <a href="#" class="navcontent">Om oss</a>
        </div>

        <div className="ad">
            Stort sortiment, Snabba leveranser, Fria byten, 30 dagars öppet köp | 1.000.000 kvar till fri frakt
        </div>

    </navbar>

    );
}


export default Navbar;
