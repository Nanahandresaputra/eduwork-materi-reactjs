import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// combineReducers berasal dari redux bukan react-redux karena bukan komponen
import counterReducer from "./features/counter/reducer";

let rootReducer = combineReducers({
  counter: counterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
