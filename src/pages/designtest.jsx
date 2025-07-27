

export default function DesignTest(){
    return (
        <div className="flex justify-center items-center w-full h-screen bg-green-500">

            <div className="w-[450px] h-[450px] bg-yellow-700 border-8 border-amber-200 flex flex-col justify-center items-center">

                <img src="/mainlogo.jpg" className="rounded-full w-[100px]" />
                <span>Email</span>
                <input className="bg-white" />
                <span>Password</span>
                <input type="password" className="bg-white" />

                <button className="bg-amber-300">Login</button>
            </div>
                
        </div>
    )
}