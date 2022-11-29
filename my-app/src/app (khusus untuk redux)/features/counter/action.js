// action itu hanya fungsi biasa yang mana fungsi tersebut mengembalikan objek
// dan ini merupakan file pilot nya

import * as counter from "./constans";

export const increment = (value) => {
  return {
    type: counter.INC,
    // yg tadinya hanya 'INC' menjadi counter.INC setelah constanta di import ke reducer dan action
    value: value,
  };
};
export const decrement = (value) => {
  return {
    type: counter.DEC,
    value: value,
  };
};

// ini agar seolah-olah seperti fungsi asyncronus
export const decrementWithCheckingAction = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrement(value));
    }
  };
};
