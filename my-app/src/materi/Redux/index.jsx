import { Provider } from "react-redux";
import Counter from "./pembahasan/counter";
import store from "../../app (khusus untuk redux)/store";

const Redux = () => {
  return (
    <div>
      {/* element paling luarnya dibungkus dengan provider dari react redux */}
      {/* kemudian ambil store di provider nya */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
