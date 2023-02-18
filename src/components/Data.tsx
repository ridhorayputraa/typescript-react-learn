import React, { useEffect } from "react";
import Posting from "./Posting";

// spesikan data 1-1
type PostProps = {
    id:number
    // also have a daya not sure if youhave opr not adding ?
    userId?:number
    title:string
    body:string
}[]

// ketika ada array of object bisa menambahkan [] di akhir bracket 
async function getPosts(): Promise<PostProps> {
    // tambahkan interdace promise
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json()
}

export default async function Data() {
   
  const datas = await getPosts()

  return (
    <div>
        {
            datas.map((dataa) => {
               return(
                    <p>{dataa.title}</p>
               )
            })
        }
      {/* <p>{data.title}</p> */}
    </div>
  );
}
