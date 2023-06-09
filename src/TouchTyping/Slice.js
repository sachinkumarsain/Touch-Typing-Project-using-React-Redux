import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "TouchTyping",
  initialState: {
    inputValue: "",
    keyCount: 0,
    keyCounted: false,
    accuracy: 0,
    randomSentence: "",
    isCorrect: "",
    transform: false
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    getRandomSentence: (state, action) => {
      let sentence = "abcdefghijklmnopqrstuvwxyz";
      let sentenceArray = Array.from(sentence);
      let senLength = sentenceArray.length;
      let randomIndex = "";

      for (let i = 1; i <= 4; i++) {
        let word = sentenceArray[Math.floor(Math.random() * senLength)];
        randomIndex += word;
      }
      state.randomSentence = randomIndex;
    },

    setIsCorrect: (state, action) => {
      state.isCorrect =
        state.inputValue === state.randomSentence.slice(0, state.inputValue.length);
    },

    setKeyCount: (state, action) => {
      if (state.isCorrect && state.inputValue.length === state.randomSentence.length) {
        state.accuracy = Math.floor((state.randomSentence.length / (state.keyCount + 1)) * 100)
        state.keyCounted = true;
        state.transform = true
        console.log(state.keyCounted)
      }
      state.keyCount = state.keyCount + 1;

    },
    setDeleteData: (state, action) => {
        state.keyCount = 0;
        state.keyCounted = false;
        state.inputValue = "";
        state.isCorrect = "";
        state.accuracy = 0;

    }
  },
});

export default slice.reducer;
export const { setInputValue, getRandomSentence, setIsCorrect, setKeyCount, setDeleteData } = slice.actions;
