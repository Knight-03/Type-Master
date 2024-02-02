import React, { useEffect } from "react";
import style from "./component.module.css";
import { RiRefreshLine } from "react-icons/ri";
import { setParagraph, setTimer } from "../App/Reducers";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  let timer = useSelector((state) => state.myReducer.timer);
  const started = useSelector((state) => state.myReducer.started);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      return dispatch(setParagraph());
    }
  });
  window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "Ctrl" && e.key === "Backspace") {
      e.preventDefault();
      return;
    }
  });

  useEffect(() => {
    if (started) {
      const intervalID = setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, 1000);

      return () => clearInterval(intervalID); // Clear interval on component unmount
    } else {
      setTimer(30);
    }
  }, [started, dispatch, timer]);

  return (
    <div className={style.header}>
      <RiRefreshLine
        color="#F17754"
        size={50}
        onClick={() => dispatch(setParagraph())}
      />
      <span className={style.timer}>{timer}</span>
    </div>
  );
}
