import { createSlice } from "@reduxjs/toolkit";
import generateParagraph from "./helper/GenerateParagraph";
import playErrorSound from "./helper/ErrorSound";
import playClickSound from "./helper/ClickSound";

export const Reducers = createSlice({
  name: "Reducers",
  initialState: {
    timer: 30,
    input: "",
    para: generateParagraph(),
    index: 0,
    started: false,
    wrongIndexes: [],
    finished: false,
  },
  reducers: {
    setParagraph: (state) => {
      state.para = generateParagraph();
      state.input = "";
      state.index = 0;
      state.started = false;
      state.wrongIndexes = [];
      state.timer = 30;
      state.finished = false;
    },

    setInputText: (state, action) => {
      state.input = action.payload;
      state.started = true;
      if (!state.started) {
        state.started = true;
      }
      const arr = state.para[state.index].join("");
      state.wrongIndexes = [];

      let errorFound = false;
      if (state.input[state.input.length - 1] === " ") {
        if (arr + " " === state.input) {
          state.index += 1;
          state.input = "";
          state.wrongIndexes = [];
        } else {
          state.input = state.input.slice(0, -1);
          errorFound = true;
        }
      }

      if (arr.length < state.input.length) {
        state.input = state.input.slice(0, -1);
        errorFound = true;
      }

      for (let i = 0; i < state.input.length; i++) {
        if (arr[i] !== state.input[i]) {
          state.wrongIndexes.push(i);
          errorFound = true;
        }
      }

      if (errorFound) {
        playErrorSound();
      } else {
        playClickSound();
      }
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
      if (state.timer === 0 || state.index === 60) {
        state.started = false;
        state.finished = true;
        state.input = "";
      }
    },
  },
});

export const { setParagraph, setInputText, setTimer } = Reducers.actions;
export default Reducers.reducer;
