import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div className="w-full h-[100px] bg-accent flex" >
            <img className="h-full" src="/public/i icon.png" alt="logo" />
            <div className="w-full h-full text-secondary flex items-center justify-center font-bold gap-[50px] text-xl" >
                <Link to="/" >Home</Link>
                <Link to="/products" >Products</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
            </div>
            
        </div>
    )
}