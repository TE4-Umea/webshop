import "./ProductPage.css"

import product1 from "../assets/product1.jpg"

function ProductPage() {
    return (
        <>
            <div className="contentbackground">
            <div className="container2">
                <div className="left-column">
                    <img src={product1} alt=""/>
                </div>

                <div className="right-column">

                    <div className="product-description2">
                        <span>Tröja</span>
                        <h1>Tröja</h1>
                        <p>Episk tröja som är väldigt tröjig</p>
                    </div>

                    <div className="product-configuration">

                        <div className="product-size">
                            <span>Storlek</span>

                            <div className="product-choose">
                                <button>Small</button>
                                <button>Medium</button>
                                <button>Large</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-price2">
                        <span>$99.99</span>
                        <button className="cart-btn">Lägg till</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProductPage