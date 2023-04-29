import { legacy_createStore } from "redux";
import myreducer from "../reducer/myreducer";

export const store = legacy_createStore(myreducer) ; 
