import React from "react";
import { FaComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";

const TuitStats = ({ tuit }) => {
  const { replies, retuits, likes } = tuit;

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
          <FaHeart style={{ fill: "none", stroke: "black", strokeWidth: "15px" }} />
          {likes}
        </span>
        <span>
          <FaShare style={{ fill: "none", stroke: "black", strokeWidth: "15px" }} />
        </span>
      </li>
    </ul>
  );
};

export default TuitStats;
