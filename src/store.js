import { applyMiddleware,createStore } from "redux";
import rootReducer from "./reducers"; // Gets the State from the reducer(s)
import { save, load } from "redux-localstorage-simple"

const createStoreWithMiddleware 
    = applyMiddleware(
        save()
    )(createStore)

let store = createStoreWithMiddleware(rootReducer,load()); // Creates the store from the State received from the reducer(s)

export default store;



