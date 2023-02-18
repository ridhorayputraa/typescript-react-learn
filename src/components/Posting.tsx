import React, { useState } from "react";

type dataProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
  toggle: "Open" | "Closed";
};
// karena dia hanya menerima maka begini saja sudah cukup

function Posting({ id, userId, title, body }: dataProps) {
  const [newTitle, setNewTitle] = useState<string>("");

  function buttonClick(e:MouseEvent) {
    setNewTitle("wooo");
    // untuk event listener tambahkan types event di dalam parameter nya
  }

  return (
    <div>
      <h1>{newTitle}</h1>
      <button onClick={buttonClick}>Click me</button>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>
    </div>
  );
}

export default Posting;
