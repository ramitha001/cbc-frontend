import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UoloardMediaToSupabase from "../../utils/mediaUploard";


export default function AddProductForm() {
  const [productID, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [altNames, setAltNames] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload on form submit

    const altName = altNames.split(",")

    const promisesArray = []

    for(let i = 0; i < imageFiles.length; i++){
      promisesArray[i] = UoloardMediaToSupabase(imageFiles[i])
    }

    const imgUrls = await Promise.all(promisesArray);
    console.log(imgUrls); // This prints the array of image URLs

    const product = {
        productID : productID,
        productName : productName,
        altNames : altName,
        images : imgUrls,
        price : price,
        lastPrice : lastPrice,
        stock : stock,
        description : description
    }

    const token = localStorage.getItem("token")

    try{
        await axios.post("http://localhost:3000/product",product,{
            headers : {
                Authorization : "Bearer " + token
            }
        })
        navigate("/admin/products")
        toast.success ("Product Added Successfully.")
    }catch(err){
        console.error("Error adding product:", err)
        toast.error("Failed to add product. Please try again.")
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-amber-700 mb-8 text-center drop-shadow-sm tracking-wide">
          Add Product Form
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-amber-800 font-semibold mb-1">
              Product ID
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={productID}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-amber-800 font-semibold mb-1">
              Product Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-amber-800 font-semibold mb-1">
              Alternative Names
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={altNames}
              onChange={(e) => setAltNames(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-amber-800 font-semibold mb-1">
              Image URLs
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onChange={(e) => {
                setImageFiles(e.target.files)
              }}
              multiple
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-amber-800 font-semibold mb-1">
                Price
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label className="block text-amber-800 font-semibold mb-1">
                Last Price
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={lastPrice}
                onChange={(e) => setLastPrice(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-amber-800 font-semibold mb-1">
              Stock
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-amber-800 font-semibold mb-1">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none min-h-[80px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
