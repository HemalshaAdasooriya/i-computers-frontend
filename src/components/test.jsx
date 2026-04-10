import React, { useState } from "react";
export default function Test(){

    const[count, setCount] = useState(0);
    const[status , setStatus] = useState("🌞");

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-[400px] h-[400px] shadow-2xl flex items-center justify-around">
                <button className="w-[100px] h-[50px] bg-red-500 text-white" 
                onClick={()=>{
                    setCount(count-1);
                }}>
                    Decrement
                </button>
                <h1 className="text-[50px] font-bold text-center">{count}</h1>
                <button className="w-[100px] h-[50px] bg-green-500 text-white" 
                onClick={()=>{
                    setCount(count+1);
                }}>
                    Increment
                </button>
            </div>
            <div className="w-[400px] h-[400px] shadow-2xl flex flex-col items-center justify-center">
                <span className="h-[30px] text-3xl font-bold">
                    {status}
                </span>
                <div className="w-full h-[50px] flex justify-center">
                    <button className="w-[100px] h-full bg-red-500 text-white" 
                    onClick={()=>{
                        setStatus("🌚");
                    }}>
                        Off</button>
                    <button className="w-[100px] h-full bg-green-500 text-white" 
                    onClick={()=>{
                        setStatus("🌞");
                    }}>
                        On</button>
                </div>
            </div>
        </div>
    )
}