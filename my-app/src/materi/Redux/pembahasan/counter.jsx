import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../../app (khusus untuk redux)/features/counter/action";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  // counter sendiri diambil dari store
  let dispatch = useDispatch();
  // useDispatch yaitu suatu fungsi yg digunakan untuk mengirim pilot yg ditangkap di store tadi dan diteruskan ke reducer

  return (
    <div>
      <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
      {/* yg tadinya () => dispatch({ type: "DEC", value: 1 }) menjadi () => dispatch(decrement(1)) karena nilai nya telah di return oleh action */}

      <span>{count}</span>

      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
