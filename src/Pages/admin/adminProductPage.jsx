import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
    return (
        <div className="w-full h-screen bg-primary flex justify-center items-center relative">
            <h1 className="text-[30px] font-bold text-white">Admin Product Page</h1>
            <Link to="/admin/add-product" className="w-[50px] h-[50px] text-accent flex items-center justify-center absolute border-[2px] rounded-full bottom-[30px] right-[20px] hover:bg-accent hover:text-primary"><BiPlus /></Link>

        </div>
    )
}