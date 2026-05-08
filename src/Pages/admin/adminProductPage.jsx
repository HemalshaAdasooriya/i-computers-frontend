import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const[loaded,setLoaded] = useState(false);

    // useEffect hook
    useEffect(() => {
        if(!loaded){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then(
                (response) => {
                    console.log(response.data);
                    setProducts(response.data);
                    setLoaded(true);
                }
            );
        }
    }, [loaded]);

    return (
        <div className="w-full min-h-screen bg-primary p-6 md:p-10 text-secondary relative overflow-x-auto">

            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-secondary">
                        Product Management
                    </h1>
                    <p className="text-slate-300 mt-2 text-sm">
                        Manage and monitor all products from one place
                    </p>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-x-auto">

                {loaded?<table className="w-full text-left border-collapse">

                    {/* Table Head */}
                    <thead className="bg-accent text-primary">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold">Image</th>
                            <th className="px-6 py-4 text-sm font-semibold">Product ID</th>
                            <th className="px-6 py-4 text-sm font-semibold">Name</th>
                            <th className="px-6 py-4 text-sm font-semibold">Price</th>
                            <th className="px-6 py-4 text-sm font-semibold">Labelled Price</th>
                            <th className="px-6 py-4 text-sm font-semibold">Category</th>
                            <th className="px-6 py-4 text-sm font-semibold">Brand</th>
                            <th className="px-6 py-4 text-sm font-semibold">Stock</th>
                            <th className="px-6 py-4 text-sm font-semibold">Availability</th>
                            <th className="px-6 py-4 text-sm font-semibold">Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {
                            products.map(
                                (item) => {
                                    return (
                                        <tr
                                            key={item.productID}
                                            className="text-[15px] border-b border-white/10 hover:bg-white/5 transition-all duration-300"
                                        >
                                            <td className="px-6 py-4">
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.name}
                                                    className="w-[60px] h-[60px] object-cover rounded-xl border border-white/10 shadow-lg"
                                                />
                                            </td>

                                            <td className="px-6 py-4 font-medium text-accent">
                                                {item.productID}
                                            </td>

                                            <td className="px-6 py-4 font-semibold">
                                                {item.name}
                                            </td>

                                            <td className="px-6 py-4">
                                                ${item.price}
                                            </td>

                                            <td className="px-6 py-4 text-slate-300">
                                                ${item.labelledPrice}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className="bg-tag px-3 py-1 rounded-full text-xs font-medium">
                                                    {item.catogery}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4">
                                                {item.brand}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className="font-semibold">
                                                    {item.stock}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        item.isAvailable
                                                            ? "bg-green-500/20 text-green-400"
                                                            : "bg-red-500/20 text-red-400"
                                                    }`}
                                                >
                                                    {item.isAvailable
                                                        ? "In Stock"
                                                        : "Out of Stock"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={
                                                    () => {
                                                        const token = localStorage.getItem("token");
                                                        console.log("token:" +token);
                                                        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/products/" + item.productID , {
                                                            headers: {
                                                                Authorization: `Bearer ${token}`
                                                            }
                                                        }).then(
                                                            () => {
                                                               toast.success("Product deleted successfully");
                                                                setLoaded(false); 
                                                    })}
                                                }className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition-all duration-300">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </tbody>
                </table>:<div className="w-full h-screen bg-black/20 top-0 left-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                    
                </div>}
            </div>

            {/* Floating Add Button */}
            <Link
                to="/admin/add-product"
                className="w-[65px] h-[65px] bg-accent text-primary text-3xl flex items-center justify-center fixed rounded-full bottom-[30px] right-[30px] shadow-2xl hover:scale-110 hover:rotate-90 transition-all duration-300"
            >
                <BiPlus />
            </Link>
        </div>
    );
}