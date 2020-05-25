import * as actionTypes from "../actions/actionTypes";

export const saveResult = (res) => {
  //   Change data before saving to store 1
  //   const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (value) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: value,
  };
};
