import { useState } from "react"


export default function DesignTest(){

    const [email,setEmail] = useState("Your Email")
    const [password,setPassword] = useState("")
    return (
        <div className="flex justify-center items-center w-full h-screen bg-green-500">

            <div className="w-[450px] h-[450px] bg-yellow-700 border-8 border-amber-200 flex flex-col justify-center items-center">

                <img src="/mainlogo.jpg" className="rounded-full w-[100px]" />

                <span>Email</span>
                <input defaultValue={email} onChange={(e)=>{
                    console.log("email is changed")
                }} className="bg-white" />

                <span>Password</span>
                <input type="password" defaultValue={password} className="bg-white" />

                <button className="bg-amber-300">Login</button>
            </div>
                
        </div>
    )
}