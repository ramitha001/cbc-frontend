import { Link, Route, Routes } from "react-router-dom";
import { TfiBarChartAlt } from "react-icons/tfi";
import { TfiFolder } from "react-icons/tfi";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { TfiCommentsSmiley } from "react-icons/tfi";

export default function AdminHomePage(){
    return(
        <div className="bg-green-600 w-full h-screen flex">

            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center">
                
                <Link className="flex flex-row items-center" to="/admin/dashboard"> <TfiBarChartAlt /> Dashboard  </Link>
                <Link className="flex flex-row items-center" to="/admin/products"> <TfiFolder /> Products  </Link>
                <Link className="flex flex-row items-center" to="/admin/order"> <TfiLayoutColumn4Alt /> Order  </Link>
                <Link className="flex flex-row items-center" to="/admin/customers"> <TfiCommentsSmiley /> Customers  </Link>
                
            </div>

            <div className="w-[80%] h-screen bg-red-400">
                <Routes path="/">

                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="/products" element={<h1>Products</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/customers" element={<h1>Customers</h1>} />
  

                </Routes>
            </div>
            
        </div>
    )
}