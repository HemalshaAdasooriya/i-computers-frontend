import { Link, Route, Routes, } from "react-router-dom";
import { LuBoxes, LuClipboardList, LuUsers } from "react-icons/lu";
import { FaRegCommentAlt } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductPage";
import AdminAddProductPage from "./admin/adminAddProductPage";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex bg-accent">
            <div className="w-[300px] h-full bg-accent" >
                <div className="w-full h-[100px] border border-white text-secondary rounded-xl flex items-center">
                    <img className="h-full" src="/public/i icon.png"/>
                    <h1 className="font-bold ml-[70px]  text-3xl">Admin</h1>
                </div>
                <div className="w-full h-[400px] text-secondary text-3xl mt-10 ml-5 flex flex-col">
                    <Link to="/admin"className="w-full flex items-center h-[50px] gap-[10px]"><LuClipboardList />Order</Link>
                    <Link to="/admin/products"className="w-full flex items-center h-[50px] gap-[10px]"><LuBoxes />Products</Link>
                    <Link to="/admin/users"className="w-full flex items-center h-[50px] gap-[10px]"><LuUsers />User</Link>
                    <Link to="/admin/reviews"className="w-full flex items-center h-[50px] gap-[10px]"><FaRegCommentAlt />Review</Link>
                </div>

            </div>
            <div className="h-full w-[calc(100%-300px)] max-h-full border-[10px] rounded-3xl border-accent bg-primary overflow-y-scroll text-2xl text-secondary" >
               <Routes>
                    <Route path="/" element={<h1>Order</h1>} />
                    <Route path="/products" element={<AdminProductPage />} />
                    <Route path="/add-product" element={<AdminAddProductPage />} />
                    <Route path="/users" element={<h1>User</h1>} />
                    <Route path="/reviews" element={<h1>Review</h1>} />
               </Routes>
            </div>

        </div>
    )
}