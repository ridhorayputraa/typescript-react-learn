import React from "react";

type dataProps = {
  id: number
  userId: number
  title: string
  body: string
  toggle: 'Open' | 'Closed'
}
// karena dia hanya menerima maka begini saja sudah cukup

function Posting({ id, userId, title, body }: dataProps) {
  return (
    <div>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>
    </div>
  );
}

export default Posting;
