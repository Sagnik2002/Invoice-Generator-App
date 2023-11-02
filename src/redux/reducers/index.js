import { combineReducers } from "redux";
import invoicesReducer from "./invoicesReducer";

const rootReducer = combineReducers({
   
    manager: invoicesReducer
});

export default rootReducer;
