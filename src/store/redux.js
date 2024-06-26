import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";


const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    const persistor = persistStore(store);
    return { store, persistor };
}

export default reduxConfig;