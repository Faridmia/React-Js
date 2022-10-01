import React from "react";
import { dumplogs } from "./utils";
// import "./BlogCard.css";

import classes from './BlogCard.module.css';

const BlogCards = ( props ) => {
    return(
        // <div className='card-data'>
        <div className={classes.carddata}>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </div>
    )
}

export default BlogCards;