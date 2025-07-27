import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProductPage (){


    const [product,setProduct] = useState([
        {
            "_id": "686f4dec974a7503e3e60ec2",
            "productID": "B1002",
            "productName": "Hydrating Glow Serum",
            "altNames": [
                "Face Serum",
                "Glow Booster",
                "Hydration Elixir"
            ],
            "images": [
                "https://example.com/images/glow-serum-front.jpg",
                "https://example.com/images/glow-serum-back.jpg"
            ],
            "price": 3490,
            "lastPrice": "3990",
            "description": "A lightweight, fast-absorbing serum enriched with hyaluronic acid and vitamin C to give your skin a radiant glow and deep hydration.",
            "__v": 0
        }
    ])

    useEffect(()=>{
            axios.get("http://localhost:3000/product").then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
    },[]
)

    
        



    

    return(
        <div>
                <h1>Admin Product page</h1>
                <br />
                <br />
        
                <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Last Price</th>
                            <th>Stock</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1234</td>
                            <td>Face Cream</td>
                            <td>99.00</td>
                            <td>95.00</td>
                            <td>19</td>
                            <td>Whighting Beauty Cream</td>
                        </tr>
                        <tr>
                            <td>2323</td>
                            <td>Freagance</td>
                            <td>120.00</td>
                            <td>115.00</td>
                            <td>9</td>
                            <td>Rose Freagance</td>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>Face Cream</td>
                            <td>99.00</td>
                            <td>95.00</td>
                            <td>19</td>
                            <td>Whighting Beauty Cream</td>
                        </tr>
                    </tbody>
                </table>
                <br />


                {
                    product.map(
                        (product,index)=>{
                            return(
                                <div key={product._id}>
                                    {index}
                                    {product.productName}
                                </div>

                            )
                        }
                    )
                }
        </div>
    )
}




