
import { Link } from "react-router-dom"

import { useState } from 'react'

function RandomProduct (props) {
    let { NAME, DESCRIPTION, PRICE, SIZE, QUANITY, } = props

    const [productId, setProductId] = useState(0)

    function storeData() {
        setProductId(PRODUCT_ID)
    }

    return (
        <li className="main-list-cards flow">
            <div className="products-list-img-background">
                    <div className="products-list-elements">
                        <h3>
                            {NAME}
                        </h3>
                        <p>
                            {DESCRIPTION}
                        </p>
                        <p>
                            {PRICE} SEK
                        </p>
                        <p>
                            {SIZE} 
                        </p>
                        <p>
                            {QUANITY}
                        </p>
                    </div>
                
            </div>
        </li>
    )

}

export default RandomProduct