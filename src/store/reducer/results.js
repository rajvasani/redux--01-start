import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      //Change data before saving to store 1
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  // if (action.type === "INCREMENT") {
  //   return {
  //     counter: state.counter + 1,
  //   };
  // }
  // if (action.type === "DECREMENT") {
  //   return {
  //     counter: state.counter - 1,
  //   };
  // }
  // if (action.type === "ADD") {
  //   return {
  //     counter: state.counter + action.value,
  //   };
  // }
  // if (action.type === "SUBTRACT") {
  //   return {
  //     counter: state.counter - action.value,
  //   };
  // }
  return state;
};

export default reducer;
