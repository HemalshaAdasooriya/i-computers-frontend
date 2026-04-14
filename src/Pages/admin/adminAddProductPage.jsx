import { useState } from "react"

export default function AdminAddProductPage() {
    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [labelledPrice, setLabelledPrice] = useState(0);
    const [images, setImages] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [stock, setStock] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);


    return (
        <div className="w-full h-full bg-primary flex justify-center p-[50px] overflow-y-scroll text-black">
            <div className="w-[600px] h-full bg-accent/25 p-[10px] rounded-2xl p-[40px] overflow-y-visible">
                <div className="w-full bg-white p-[20px] text-[20px] rounded-2xl">
                    <div className="my-[10px]">
                        <label>Product ID</label>

                        <input type="text" 
                            value={productID} 
                            onChange={(e) => setProductID(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />
                        <p className="text-sm text-gray-500 w-full text-right">Provide a unique ID </p>

                    </div>

                    <div className="my-[10px]">
                        <label>Name</label>

                        <input type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                    <div className="my-[10px]">
                        <label>Alternative Name</label>

                        <input type="text" 
                            value={altNames} 
                            onChange={(e) => setAltNames(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />
                        <p className="text-sm text-gray-500 w-full mt-[5px] text-right">Separate alternative names with commas.</p>

                    </div>

                    <div className="my-[10px]">
                        <label>Description</label>

                        <textarea type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="w-full h-[100px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px] py-[10px]"
                        />
                    </div>

                     <div className="my-[10px]">
                        <label>Price</label>

                        <input type="number" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px]">
                        <label>Labelled Price</label>

                        <input type="number" 
                            value={labelledPrice} 
                            onChange={(e) => setLabelledPrice(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px]">
                        <label>Image</label>

                        <input type="text" 
                            value={images} 
                            onChange={(e) => setImages(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}