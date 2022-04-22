import { createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/Index'
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";

const middleware =[thunk]

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)) )
export default store
