import React from "react";
import style from "./component.module.css";
import "../App.css";
import { useSelector } from "react-redux";

const ShowResult = () => {
  const result = useSelector((state) => state.myReducer);

  return (
    <div className={style.resultContainer} onClick={(e) => e.stopPropagation()}>
      <div className={style.resultBox}>
        <p>Result</p>
        <div className={style.result}>
          <p>words per minute : {(result.index * 60) / (30 - result.timer)} </p>
          <p>total words : {result.index} </p>
          <p>total time : {30 - result.timer}</p>
        </div>
      </div>
      <p className="tabRestart">
        <span className="tab">tab</span> - restart test
      </p>
    </div>
  );
};

export default ShowResult;
