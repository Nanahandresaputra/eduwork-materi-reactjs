import * as counter from "./constans";

// inisialisasikan terlebih dahulu

let initialState = {
  count: 0,
};

// reducer ini hanya fungsi biasa, jadi parameter nya bebas di kasih nama apa saja
const counterReducer = (state = initialState, action) => {
  // kemudian buat logic nya, biasanya pakai switch
  switch (action.type) {
    // untuk action sendiri itu parameter biasa tapi biasanya dibarengi dengan parameter type
    case counter.INC:
      // yg tadinya hanya 'INC' menjadi counter.INC setelah constanta di import ke reducer
      return {
        ...state,
        // ...state yaitu untuk menyalin state menggunakan rest parameter
        count: state.count + action.value,
      };
    case counter.DEC:
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
  // action.value agar nilai nya lebih dinamis
};

export default counterReducer;
