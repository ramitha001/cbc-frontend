import axios from "axios"
import { useEffect, useState } from "react"
import { FaTrash, FaPen, FaPlus } from "react-icons/fa";

export default function AdminProductPage (){


    const [product,setProduct] = useState([
       
    ])

    useEffect(()=>{
            axios.get("http://localhost:3000/product").then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
    },[]
)

    
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
            <button className="absolute top-6 right-22 z-20 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center text-2xl" title="Add Product">
                <FaPlus />
            </button>
            <div className="ml-64 pt-12 px-6"> {/* Adjust ml-64 if your sidebar is a different width */}
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center drop-shadow-sm tracking-wide ">Admin Product Page</h1>
                    <br />
                    <br />
                    <br />
                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-xl overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Product ID</th>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Product Name</th>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Last Price</th>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Stock</th>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-4 bg-blue-600 text-white text-left text-base font-bold uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((product, index) => (
                                    <tr key={product._id} className="even:bg-blue-50 hover:bg-blue-100 transition-colors">
                                        <td className="px-6 py-4 border-b border-blue-100 font-medium">{product.productID}</td>
                                        <td className="px-6 py-4 border-b border-blue-100">{product.productName}</td>
                                        <td className="px-6 py-4 border-b border-blue-100">{product.price}</td>
                                        <td className="px-6 py-4 border-b border-blue-100">{product.lastPrice}</td>
                                        <td className="px-6 py-4 border-b border-blue-100">{product.stock || "N/A"}</td>
                                        <td className="px-6 py-4 border-b border-blue-100 max-w-xs truncate" title={product.description}>{product.description}</td>
                                        <td className="px-6 py-4 border-b border-blue-100">
                                            <div className="flex gap-4 justify-center">
                                                <button className="text-blue-600 hover:text-red-600 transition-colors text-xl" title="Delete"><FaTrash /></button>
                                                <button className="text-blue-600 hover:text-green-600 transition-colors text-xl" title="Edit"><FaPen /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}




