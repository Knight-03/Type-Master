import React from "react";
import { useSelector } from "react-redux";
import style from "./component.module.css";

export default function TypeText() {
  const para = useSelector((state) => state.myReducer.para);
  const currIndex = useSelector((state) => state.myReducer.index);
  const started = useSelector((state) => state.myReducer.started);
  const wrongIndexes = useSelector((state) => state.myReducer.wrongIndexes);
  const input = useSelector((state) => state.myReducer.input);
  return (
    <div>
      <p className={style.paragraph}>
        {para.map((word, index) => {
          // current word
          if (started && index === currIndex) {
            return (
              <>
                <span key={index} className={style.currWord}>
                  {word.map((char, i) => {
                    if (input.length === i) {
                      return (
                        <span key={i} className={style.currIndexColor}>
                          {char}
                        </span>
                      );
                    }
                    if (wrongIndexes.includes(i)) {
                      return (
                        <span key={i} className={style.currIndexError}>
                          {char}
                        </span>
                      );
                    }
                    return <span key={i}>{char}</span>;
                  })}
                </span>{" "}
              </>
            );
          }

          // visited words
          if (index < currIndex) {
            return (
              <span key={index} className={style.visitedIndexColor}>
                {word.join("")}{" "}
              </span>
            );
          }

          // remaining words
          return <span key={index}>{word.join("")} </span>;
        })}
      </p>
    </div>
  );
}
