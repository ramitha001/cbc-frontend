import { Link, Route, Routes } from "react-router-dom";
import { TfiBarChartAlt, TfiFolder, TfiLayoutColumn4Alt, TfiCommentsSmiley } from "react-icons/tfi";
import AdminProductPage from "./admin/adminProductPage";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductForm";

export default function AdminHomePage() {
    return (
        <div className="bg-green-50 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-10 shadow-lg">
                <h2 className="text-white text-2xl font-bold mb-10 tracking-wide">Admin Panel</h2>
                <nav className="flex flex-col gap-4 w-full px-4">
                    <Link
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white text-lg font-medium transition-all duration-200 hover:bg-white/20 hover:scale-105 focus:bg-white/30 focus:outline-none"
                        to="/admin/dashboard"
                    >
                        <TfiBarChartAlt className="text-2xl" /> Dashboard
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white text-lg font-medium transition-all duration-200 hover:bg-white/20 hover:scale-105 focus:bg-white/30 focus:outline-none"
                        to="/admin/products"
                    >
                        <TfiFolder className="text-2xl" /> Products
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white text-lg font-medium transition-all duration-200 hover:bg-white/20 hover:scale-105 focus:bg-white/30 focus:outline-none"
                        to="/admin/orders"
                    >
                        <TfiLayoutColumn4Alt className="text-2xl" /> Orders
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white text-lg font-medium transition-all duration-200 hover:bg-white/20 hover:scale-105 focus:bg-white/30 focus:outline-none"
                        to="/admin/customers"
                    >
                        <TfiCommentsSmiley className="text-2xl" /> Customers
                    </Link>
                </nav>
            </div>
            {/* Main Content */}
            <div className="w-[80%] h-screen bg-white p-10 overflow-y-auto">
                <Routes>
                    <Route index element={<h1>Welcome to Admin Panel</h1>} />
                    <Route path="dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="products" element={<AdminProductPage />} />
                    <Route path="/product/addProduct" element={<AddProductForm />} />
                    <Route path="orders" element={<h1>Orders</h1>} />
                    <Route path="customers" element={<h1>Customers</h1>} />
                    <Route path="product/editProduct" element={<EditProductForm />} />
                    <Route path="*" element={<h1>404 not found in Admin Page</h1>} />
                </Routes>
            </div>
        </div>
    );
}