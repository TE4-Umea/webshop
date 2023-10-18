import "./ProductsPage.css"

import { Link } from "react-router-dom"
import RandomProduct from "../components/RandomProduct"

import { useEffect, useState } from 'react'



function ProductsPage() {

    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
        console.log(data)
    }, [])


    return (
        <>
            {data.data ? (
                <>
                    {data.data.map((data, index) =>
                        <RandomProduct
                            key={index}
                            NAME={data.id}
                            DESCRIPTION={data.description}
                            PRICE={data.price}
                            SIZE={data.size}
                            QUANITY={data.quantity}
                        />
                    )}
                </>
            ) : (
                <p>Products is currently loading</p>
            )}

        </>
    )
}

export default ProductsPage