import React from "react";
import { FaComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { likeTuit } from "../reducers/tuits-reducer";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const { replies, retuits, likes, _id, liked } = tuit;
    const dispatch = useDispatch();

  return (
    <ul className="tuit-stats">
      <li className="stat">
        <span style={{ marginRight: "25px" }}>
          <FaComment style={{ fill: "none", stroke: "black", strokeWidth: "15px" }} />
          {replies}
        </span>
        <span style={{ marginRight: "25px" }}>
          <FaRetweet style={{ fill: "none", stroke: "black", strokeWidth: "15px" }} />
          {retuits}
        </span>
        <span style={{ marginRight: "25px" }}>
          <FaHeart style={{ fill: liked ? "red": "none", stroke: "black", strokeWidth: "15px" }} 
          onClick={ () => 
          dispatch(updateTuitThunk({...tuit, likes: tuit.likes+1}))}/>
          <span className="ms-2">{tuit.likes}</span>
        </span>
        <span>
          <FaShare style={{ fill: "none", stroke: "black", strokeWidth: "15px" }} />
        </span>
      </li>
    </ul>
  );
};

export default TuitStats;
