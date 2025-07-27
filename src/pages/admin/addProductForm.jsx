export default function AddProductForm(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 py-12 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <h1 className="text-3xl font-extrabold text-amber-700 mb-8 text-center drop-shadow-sm tracking-wide">Add Product Form</h1>
                <form className="space-y-5">
                    <div>
                        <label className="block text-amber-800 font-semibold mb-1">Product ID</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div>
                        <label className="block text-amber-800 font-semibold mb-1">Product Name</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div>
                        <label className="block text-amber-800 font-semibold mb-1">Alternative Names</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div>
                        <label className="block text-amber-800 font-semibold mb-1">Image URLs</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-amber-800 font-semibold mb-1">Price</label>
                            <input type="number" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-amber-800 font-semibold mb-1">Last Price</label>
                            <input type="number" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-amber-800 font-semibold mb-1">Stock</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div>
                        <label className="block text-amber-800 font-semibold mb-1">Description</label>
                        <textarea className="w-full px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none min-h-[80px]" />
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg transition">Add Product</button>
                </form>
            </div>
        </div>
    )
}