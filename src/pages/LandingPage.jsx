import "./LandingPage.css"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import product1 from "../assets/product1.jpg"
import northface from "../assets/northface.png"
import middlebreaker from "../assets/middlebreaker.jpg"


function landingPage() {
    return (
        <>
            <div className='section flow'>
                <div className="hero container">
                    <div className="heroText">
                        <h1>Var redo för höstens tråkväder</h1>
                        <div className="sectionbuttons">
                            <button className="buttons">Jackor</button>
                            <button className="buttons">Skor</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="offers">
                <article className="big">
                    <h2>North Face Galenheter</h2>
                    <p>Håll dig varm i höst</p>
                    <button className="offerbutton">Upptäck här</button>
                </article>
                <article className="medium"></article>
                <article className="small">
                    <h2>Säsongens nyheter</h2>
                </article>
                <article className="small">
                    <h2>North Face nyheter</h2>
                </article>
            </section>

            <div className="section-header">
                <h2>Bäst Säljare</h2>
            </div>


            <section className="bestsellers">
                
                <article className="product-card">
                    <Link to="/ProductPage">
                        <div className="product-image">
                            <img src={product1} alt="Product Name"/>
                        </div>
                        <div className="product-details">
                            <h2 className="product-title">Produkt namn</h2>
                            <p className="product-description">Produkt beskrivning läggs till här</p>
                            <p className="product-price">$99.99</p>
                            <button className="add-to-cart">Lägg till varukorg</button>
                        </div>
                    </Link>
                </article>

                <article className="product-card">
                    <a href="/ProductPage">
                        <div className="product-image">
                            <img src={product1} alt="Product Name"/>
                        </div>
                        <div className="product-details">
                            <h2 className="product-title">Produkt namn</h2>
                            <p className="product-description">Produkt beskrivning läggs till här</p>
                            <p className="product-price">$99.99</p>
                            <button className="add-to-cart">Lägg till varukorg</button>
                        </div>
                    </a>
                </article>

                <article className="product-card">
                    <a href="productpage.html">
                        <div className="product-image">
                            <img src={product1} alt="Product Name"/>
                        </div>
                        <div className="product-details">
                            <h2 className="product-title">Produkt namn</h2>
                            <p className="product-description">Produkt beskrivning läggs till här</p>
                            <p className="product-price">$99.99</p>
                            <button className="add-to-cart">Lägg till varukorg</button>
                        </div>
                    </a>
                </article>
                <article className="product-card">
                    <a href="productpage.html">
                        <div className="product-image">
                            <img src={product1} alt="Product Name"/>
                        </div>
                        <div className="product-details">
                            <h2 className="product-title">Produkt namn</h2>
                            <p className="product-description">Produkt beskrivning läggs till här</p>
                            <p className="product-price">$99.99</p>
                            <button className="add-to-cart">Lägg till varukorg</button>
                        </div>
                    </a>
                </article>

                <article className="product-card">
                    <a href="productpage.html">
                        <div className="product-image">
                            <img src={product1} alt="Product Name"/>
                        </div>
                        <div className="product-details">
                            <h2 className="product-title">Produkt namn</h2>
                            <p className="product-description">Produkt beskrivning läggs till här</p>
                            <p className="product-price">$99.99</p>
                            <button className="add-to-cart">Lägg till varukorg</button>
                        </div>
                    </a>
                </article>
            </section>

            <div className="image-container">
                <img src={middlebreaker} alt="Image Description"/>
            </div>

            <div className="brands-container">
                <div className="brands-scroll">
                    <div className="brands-inner">
                        <img src={northface} alt="Brand 1" className="brandimg"/>
                        <img src={northface} alt="Brand 2" className="brandimg"/>
                        <img src={northface} alt="Brand 3" className="brandimg"/>
                        <img src={northface} alt="Brand 4" className="brandimg"/>
                        <img src={northface} alt="Brand 5" className="brandimg"/>
                        <img src={northface} alt="Brand 6" className="brandimg"/>
                        <img src={northface} alt="Brand 7" className="brandimg"/>
                        <img src={northface} alt="Brand 8" className="brandimg"/>
                        <img src={northface} alt="Brand 9" className="brandimg"/>
                        <img src={northface} alt="Brand 10" className="brandimg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default landingPage