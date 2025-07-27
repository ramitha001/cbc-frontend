import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"


export default function DesignTest(){

    const [email,setEmail] = useState("Your Email")
    const [password,setPassword] = useState("")


    function login(){
        axios.post("http://localhost:3000/users/login",{
            email : email,
            password : password
        }).then(
            (res) =>{
                

                if(res.data.user == null){
                    toast.error(res.data.message)
                    return
                }

                toast.success("Login Sucess")

                localStorage.setItem("token",res.data.token)

                if(res.data.user.type == "admin"){
                    window.location.href = "/admin"
                }else{
                    window.location.href = "/"
                }
            }
        )
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-green-500">

            <div className="w-[450px] h-[450px] bg-yellow-700 border-8 border-amber-200 flex flex-col justify-center items-center">

                <img src="/mainlogo.jpg" className="rounded-full w-[100px]" />

                <span>Email</span>
                <input defaultValue={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} className="bg-white" />

                <span>Password</span>
                <input type="password" defaultValue={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} className="bg-white" />

                <button onClick={login}  className="bg-amber-300 cursor-pointer">Login</button>
            </div>
                
        </div>
    )
}