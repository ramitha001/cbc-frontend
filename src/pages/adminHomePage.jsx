import { Link } from "react-router-dom";

export default function AdminHomePage(){
    return(
        <div className="bg-green-600 w-full h-screen flex">

            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center">
                
                <Link to="/admin/dashboard"> Dashboard  </Link>
                <Link to="/admin/products"> Products  </Link>
                <Link to="/admin/order"> Order  </Link>
                <Link to="/admin/customers"> Customers  </Link>
                
            </div>

            <div className="w-[80%] h-screen bg-red-400">

            </div>
            
        </div>
    )
}