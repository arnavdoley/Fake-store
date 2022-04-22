import { combineReducers } from "redux";
import ItemReducer from "./ItemReducer";

const  rootReducer = combineReducers({
    iteam: ItemReducer
})

export default rootReducer;