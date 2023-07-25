import React from "react";
import tuitArray from "../tuit.json";
import TuitSummaryItem from "./tuit-summary-item";
const TuitSummaryList = () => {
 return(
   <ul className="list-group">
     {
       tuitArray.map(tuit =>
         <TuitSummaryItem
           key={tuit._id}
           tuit={tuit}/>
       )
     }
   </ul>
 );
};
export default TuitSummaryList;