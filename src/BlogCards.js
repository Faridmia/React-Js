import React from "react";
import { dumplogs } from "./utils";

const BlogCards = ( props ) => {
    return(
        <div className='card-data'>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </div>
    )
}

export default BlogCards;