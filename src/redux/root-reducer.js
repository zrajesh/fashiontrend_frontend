import {combineReducers} from "redux";
// Import Reducers
import directoryReducer from "./directory/directory.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    directory: directoryReducer,
    cart: cartReducer
});
