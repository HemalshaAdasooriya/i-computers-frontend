export default function AdminPage() {
    return (
        <div className="w-full h-screen flex bg-accent">
            <div className="w-[300px] h-full bg-accent" >
                <div className="w-full h-[100px] border border-white text-secondary rounded-xl flex items-center">
                    <img className="h-full" src="/public/i icon.png"/>
                    <h1 className="font-bold ml-[70px]  text-3xl">Admin</h1>
                </div>
                <div className="w-full h-[400px] text-secondary text-3xl mt-10 ml-5 flex flex-col">
                    <a href="admin/">Order</a>
                    <a href="admin/products">Products</a>
                    <a href="admin/users">User</a>
                    <a href="admin/reviews">Review</a>
                </div>

            </div>
            <div className="h-full w-[calc(100%-300px)] max-h-full border-[10px] rounded-3xl border-accent bg-primary overflow-y-scroll text-2xl text-secondary" >
               
            </div>

        </div>
    )
}