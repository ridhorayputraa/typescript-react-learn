import React from "react";
import { useState } from "react";

export default function Post() {
    // menspesifikan type data string dan null
    // null? apabila state nya beum ada datanya
  const [postTitle, setPostTitle] = useState<string | null>("");
 
  const changeTitle = () => {
    setPostTitle(null)
  }

  return(
      <div>
        <h1>{postTitle}</h1>
        </div>

  )
}
