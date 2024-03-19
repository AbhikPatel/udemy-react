import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Slices/customerReducer";
import accountReducer from "./Slices/accountReducer";

// const root = combineReducers({
//     account: accountReducer,
//     customer : customerReducer
// });

// const store = createStore(root);

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store;