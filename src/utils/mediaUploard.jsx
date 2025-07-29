import { createClient } from "@supabase/supabase-js"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttdGJscW5reGxpZWVyY2xnemdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTE0NDIsImV4cCI6MjA2OTI4NzQ0Mn0.PqtZx_EHlKXmptRPUj2OftagRSJM5MOJCw-6qqTpTcU`;

const url = "https://kmtblqnkxlieerclgzgp.supabase.co";

export default function UoloardMediaToSupabase(file){
    return new Promise((resolve,reject)=>{
        if(file == null){
            reject("File Not Added");
            return;
        }
        let fileName = file.name;
        const extension = fileName.split(".")[fileName.split(".").length-1];

        const supabase = createClient(url,key);

        const timestamp = new Date().getTime();
        fileName = timestamp +file.name + "." + extension;

        supabase.storage.from("images").upload(fileName,file,{
            cacheControl : "3600",
            upsert : false
        }).then((res)=>{
            if (res.error) {
                // Upload failed
                console.error("Upload error:", res.error);
                reject(res.error.message || "Upload failed");
                return;
            }
            const urlResult = supabase.storage.from("images").getPublicUrl(fileName);
            console.log("getPublicUrl result:", urlResult);
            if (!urlResult.data || !urlResult.data.publicUrl) {
                reject("Could not get public URL");
                return;
            }
            const publicUrl = urlResult.data.publicUrl;
            resolve(publicUrl);
        }).catch((err)=>{
            reject(err);
        });
    });
}