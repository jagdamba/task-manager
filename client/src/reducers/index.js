import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";
import bucketReducer from "./bucketReducer";

const rootReducers = combineReducers({ login: loginReducer, todo: todoReducer, bucket: bucketReducer });

export default rootReducers;
