import React from "react";
import style from "./component.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setInputText } from "../App/Reducers";

export default function InputText() {
  const dispatch = useDispatch();
  const started = useSelector((state) => state.myReducer.started);
  const finished = useSelector((state) => state.myReducer.finished);
  const inputText = useSelector((state) => state.myReducer.input);

  return (
    <div>
      <input
        type="text"
        className={style.textArea}
        onChange={(e) => {
          dispatch(setInputText(e.target.value));
        }}
        value={inputText}
        placeholder={started ? "" : "type above text here..."}
        disabled={finished ? "disabled" : ""}
      ></input>
    </div>
  );
}
