import React from "react";
import { useState } from "react";

export default function Post() {
    // menspesifikan type data string dan null
    // null? apabila state nya beum ada datanya
  const [postTitle, setPostTitle] = useState<string | null>("");
 
  const changeTitle = () => {
    setPostTitle('Ridho ganteng')
  }

  return(
      <div>
        <h2>Ray</h2>
        <h1>{postTitle}</h1>
        </div>

  )
}
