
import { useState } from "react";

import UoloardMediaToSupabase from "../utils/mediaUploard";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttdGJscW5reGxpZWVyY2xnemdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTE0NDIsImV4cCI6MjA2OTI4NzQ0Mn0.PqtZx_EHlKXmptRPUj2OftagRSJM5MOJCw-6qqTpTcU`

const url = "https://kmtblqnkxlieerclgzgp.supabase.co"

export default function FileUploardTest() {
    
    const [file,setFile] = useState(null) 

    async function handleUpload() {
      UoloardMediaToSupabase(file).then((url)=>{
        console.log(url)
      }).catch((err)=>{
        console.log(err)
      })
    }



    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Your File</h1>
          <label
            htmlFor="fileInput"
            className="cursor-pointer inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Choose File
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={(e)=>{
                setFile(e.target.files[0])
              }}
          />
          <p className="text-sm text-gray-500 mt-4">Only images are allowed.</p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300" onClick={handleUpload}>
          Upload
        </button>
        </div>
        
      </div>
    );
  }
  