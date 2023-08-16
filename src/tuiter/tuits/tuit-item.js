import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import { FaRecycle, FaRegDotCircle, FaRegTrashAlt, FontAwesomeIcon } from "react-icons/fa";

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

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`../../${tuit.image}`} />
                </div>
                <div className="col-10">
                    <div className="row">
                        <FaRegTrashAlt className="float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}/>
                        <div className="fw-bolder">
                            {tuit.userName} <span className="fw-normal">{tuit.handle} . {tuit.time}</span>
                        </div>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    );
};
export default TuitItem;