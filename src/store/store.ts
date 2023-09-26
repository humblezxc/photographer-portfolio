import {combineReducers, configureStore} from "@reduxjs/toolkit";
import stateReducer from "./reducers/stateSlice.ts";
const rootReducer = combineReducers({
    stateReducer
})
export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
