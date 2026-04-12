import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        console.log("Login button clicked");
        console.log("Email:", email);
        console.log("Password:", password);
    
    try{
        const res = await axios.post("http://localhost:5000/users/login", {
            email: email,
            password: password
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className="w-full h-screen bg-[url(/bg.jpg)] bg-center bg-cover bg-no-repeat flex">

            <div className="w-[50%] h-full flex flex-col justify-center items-center">

                <img src="/public/i icon.png" alt="Logo" className="w-[200px] h-[160px] object-cover" />

                <h1 className="text-[50px] font-bold text-tag text-shadow-black text-shadow-2xs text-center ml-2">
                    Built for Speed. Designed for You.
                </h1>

                <p className="m-[10px] text-[20px] text-white italic">
                    From gaming rigs to workstations, find your perfect setup online.
                </p>

            </div>

            <div className="w-[50%] h-full flex justify-center items-center">

                <div className="w-[450px] h-[530px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[20px]">
                    
                    <h1 className="text-[40px] font-bold text-accent mb-[10px] text-shadow-white">Login</h1>
                    
                    <input type="Email"
                    onChange={
                        (e)=>
                            {
                                setEmail(e.target.value);
                        }}   
                    placeholder="Your Email" 
                    className="w-full h-[50px] mb-[20px] rounded-lg border-2 border-gray-300 p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" 
                    />

                    <input type="Password" 
                    onChange={
                        (e)=>
                            {
                                setPassword(e.target.value);
                            }}
                    placeholder="Your Password" 
                    className="w-full h-[50px] mb-[20px] rounded-lg border-2 border-gray-300 p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent"
                    />

                    <button onClick={login} className="w-full h-[50px] bg-accent text-[20px] text-white font-bold rounded-lg border border-[2px] hover:bg-transparent hover:text-black transition-colors duration-300">
                        Login
                    </button>

                    <p className="mt-[10px] text-gray italic">
                        <Link to="/forgot-password" className="text-accent font-bold hover:underline italic">
                        Forgot Password?
                        </Link>
                    </p>

                    <p className="mt-[20px] text-gray">
                        Don't have an account? 
                        <Link to="/register" className="text-accent font-bold hover:underline italic">
                        Sign Up
                        </Link>
                    </p>


                </div>
            </div>
        </div>
    )
}