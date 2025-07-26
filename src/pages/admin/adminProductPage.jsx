import axios from "axios"

export default function AdminProductPage (){


    axios.get("http://localhost:3000/product").then((res) =>{
        console.log(res)
    })

    return(
        <div>
                <h1>Admin hello</h1>
        </div>
    )
}