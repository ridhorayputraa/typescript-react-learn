import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Posting from "./Posting";

type dataProps = {
  userId: number
  id: number
  title: string
  body: string
}[];

function getData(): dataProps {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((Response) => {
      console.log(Response.data);
      setData(Response.data);
    });
  }, []);

  return data;
}

export default function DataAxios() {
  const datas = getData();

  return (
    <>
      {datas.map((results) => {
         return <Posting toggle="Open" id={results.id} userId={results.userId} body={results.body} key={results.id} title={results.title}/>
      })}
    </>
  );
}
