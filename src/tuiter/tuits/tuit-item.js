import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "nasa.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
         <img width={70} className="float-end rounded-3" src={`../../${tuit.image}`}/>
     </div>
     <div className="col-10">
       <div className="row">
            <div className="fw-bolder">
                {tuit.userName} <span className="fw-normal">{tuit.handle} . {tuit.time}</span> 
            </div>
       </div>
       <div>{tuit.title}</div>
       <TuitStats tuit={tuit}/>
    </div>
   </div>
  </li>
 );
};
export default TuitItem;