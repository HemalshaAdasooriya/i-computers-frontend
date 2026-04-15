import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddProductPage() {
    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [labelledPrice, setLabelledPrice] = useState(0);
    const [images, setImages] = useState("");
    const [catogery, setCatogery] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [stock, setStock] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate()

    async function addProduct() {
        const token = localStorage.getItem("token");
        if(token === null) {
            toast.error("You must be logged in to add a product.");
            navigate("/login");
            return;
        }

        if(!productID || !name || !description || !price || !catogery || !brand || !model) {
            toast.error("Please fill in all required fields.");
            return;
        }

        try{
            const altNamesArray = altNames.split(",")
            const imagesArray = images.split(",")
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", {
                productID : productID,
                name : name,
                altNames : altNamesArray,
                description : description,
                price : price,
                labelledPrice : labelledPrice,
                images : imagesArray,
                catogery : catogery,
                brand : brand,
                model : model,
                stock : stock,
                isAvailable : isAvailable
            }, {
                headers : {
                    Authorization : "Bearer " + token
                }
            })
            toast.success("Product added successfully!");
            navigate("/admin/products");
        }catch(err) {
            toast.error("Failed to add product. Please try again.");
            console.log(err.response?.data);
        }
    }


    return (
        <div className="w-full h-full bg-primary flex justify-center p-[50px] overflow-y-scroll text-black items-start">
            <div className="w-[800px] bg-accent/25 p-[10px] rounded-2xl p-[40px] overflow-y-visible">
                <h1 className="text-[30px] font-bold text-white mb-[20px] flex items-center gap-[10px]"><AiOutlineProduct />Add New Product</h1>
                <div className="w-full bg-white p-[20px] text-[20px] rounded-2xl flex flex-wrap justify-between">
                    <div className="my-[10px] w-[50%]">
                        <label>Product ID</label>

                        <input type="text" 
                            value={productID} 
                            onChange={(e) => setProductID(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />
                        <p className="text-sm text-gray-500 w-full text-right">Provide a unique ID </p>

                    </div>

                    <div className="my-[10px] w-[40%]">
                        <label>Name</label>

                        <input type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                    <div className="my-[10px] w-full">
                        <label>Alternative Name</label>

                        <input type="text" 
                            value={altNames} 
                            onChange={(e) => setAltNames(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />
                        <p className="text-sm text-gray-500 w-full mt-[5px] text-right">Separate alternative names with commas.</p>

                    </div>

                    <div className="my-[10px] w-full">
                        <label>Description</label>

                        <textarea type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="w-full h-[100px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px] py-[10px]"
                        />
                    </div>

                     <div className="my-[10px] w-[40%]">
                        <label>Price</label>

                        <input type="number" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px] w-[40%]">
                        <label>Labelled Price</label>

                        <input type="number" 
                            value={labelledPrice} 
                            onChange={(e) => setLabelledPrice(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px] w-full">
                        <label>Image</label>

                        <input type="text" 
                            value={images} 
                            onChange={(e) => setImages(e.target.value)} 
                            className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px] w-[30%]">
                        <label>Catogery</label>

                        <select value={catogery} onChange={(e) => setCatogery(e.target.value)} className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]">
                            <option value="CPU">CPU</option>
                            <option value="GPU">GPU</option>
                            <option value="RAM">RAM</option>
                            <option value="Storage">Storage</option>
                            <option value="Motherboard">Motherboard</option>
                            <option value="Power Supply">Power Supply</option>
                            <option value="Case">Case</option>
                            <option value="Cooling">Cooling</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Accessories">Accessories</option>
                        </select>

                    </div>

                     <div className="my-[10px] w-[30%]">
                        <label>Brand</label>

                        <input type="text" 
                        value={brand} 
                        onChange={(e) => setBrand(e.target.value)} 
                        className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>
                    
                     <div className="my-[10px] w-[30%]">
                        <label>Model</label>

                        <input type="text" 
                        value={model} 
                        onChange={(e) => setModel(e.target.value)} 
                        className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px] w-[40%]">
                        <label>Stock</label>

                        <input type="number" 
                        value={stock} 
                        onChange={(e) => setStock(e.target.value)} 
                        className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]"
                        />

                    </div>

                     <div className="my-[10px] flex flex-col items-center w-[40%]">
                        <label>Availability</label>

                        <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)} className="w-full h-[40px] border border-accent shadow-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent px-[20px]">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                    </div>
                    <Link to="/admin/products" className="w-[48%] h-[50px] bg-red-500 text-white rounded-2xl mt-[20px] hover:bg-red-600 hover:text-black font-bold flex items-center justify-center">Close</Link>
                    <button onClick={addProduct} className="w-[48%] h-[50px] bg-accent text-primary rounded-2xl mt-[20px] hover:bg-primary hover:text-accent font-bold">Add Product</button>
                </div>
            </div>
            
        </div>
    )
}